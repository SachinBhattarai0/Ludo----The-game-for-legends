import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from .serializers import RoomSerializer
from .models import Room
from .utils import changeUserInDatabase,setDisconnectingUserToNoneInDatabase

class room_consumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.room_group_name = self.scope['url_route']['kwargs']['roomName']
        self.user_name = self.scope['url_route']['kwargs']['userName']

        async_to_sync(self.channel_layer.group_add)(self.room_group_name,self.channel_name) 

        room = Room.objects.get(name=self.room_group_name)
        if not room.nameExists(self.user_name):
            room,userColor = changeUserInDatabase(self.room_group_name,self.user_name)
            self.color = userColor

            user_list = RoomSerializer(room).data
            async_to_sync(self.channel_layer.group_send)(self.room_group_name,{'type':'broadcast','data-type':'user-joined','user-list':user_list}) 


    def receive(self, text_data=None, bytes_data=None):
        self.send(text_data="Hello world!")


    def disconnect(self, close_code):

        room = setDisconnectingUserToNoneInDatabase(self.room_group_name,self.color)

        user_list = RoomSerializer(room).data
        async_to_sync(self.channel_layer.group_send)(self.room_group_name,{'type':'broadcast','data-type':'user-joined','user-list':user_list}) 

        if room.noOfUserInRoom() == 0:
            room.delete()
            async_to_sync(self.channel_layer.group_discard)(self.room_group_name, self.channel_name)

    def broadcast(self,event):
        self.send(json.dumps({
            'data-type':event['data-type'],
            'user-list':event['user-list'],
        }))