import json
import random
from channels.generic.websocket import async_to_sync,WebsocketConsumer

class gameSocketConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.room_group_name = self.scope['url_route']['kwargs']['gameId']
        
        async_to_sync(self.channel_layer.group_add)(self.room_group_name,self.channel_name) 
        
        self.send(json.dumps({'error':None,'data-type':'initialize-game','data':{'turn':'Red','points': 0,'rolledDice': False,'changedIdentifier': random.uniform(0,1)}}))


    # def receive(self, text_data=None, bytes_data=None):
    #     return super().receive(text_data, bytes_data)


    # def disconnect(self, code):
    #     return super().disconnect(code)