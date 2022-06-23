import json
import random
from .models import GameInstance
from channels.generic.websocket import async_to_sync,WebsocketConsumer

class gameSocketConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.room_group_name = self.scope['url_route']['kwargs']['gameId']
        
        async_to_sync(self.channel_layer.group_add)(self.room_group_name,self.channel_name) 
        
        game = GameInstance.objects.filter(id=self.room_group_name)[0]
        self.send(json.dumps({'error':None,'data-type':'initialize-game','data':{'turn':'Red','points': 0,'rolledDice': False,'changedIdentifier': game.changeIdentifier}}))
