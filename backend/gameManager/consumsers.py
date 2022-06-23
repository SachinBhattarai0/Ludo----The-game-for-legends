import json
import random
from channels.generic.websocket import async_to_sync,WebsocketConsumer

class gameSocketConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.room_group_name = self.scope['url_route']['kwargs']['gameId']
        
        async_to_sync(self.channel_layer.group_add)(self.room_group_name,self.channel_name) 
        self.send(json.dumps({'error':None,'data-type':'game-info-state','data':{'turn':'Red','points': 0,'rolledDice': False,'changedIdentifier': random.uniform(0,1)}}))


    def receive(self, text_data):
        data = json.loads(text_data)
        response = {'type':'broadcast','error':None,'data-type':data['data-type'],'data':''}

        if data["data-type"] == "user-rolled-dice":
            dataToBeSent = {'points':random.randint(1,6),'rolledDice':True,'changedIdentifier':random.uniform(0,1)} 
            response['data'] = dataToBeSent
            async_to_sync(self.channel_layer.group_send)(self.room_group_name,response)


    # def disconnect(self, code):
    #     return super().disconnect(code)

    def broadcast(self,event):
        self.send(json.dumps(event))