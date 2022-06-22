import json
from channels.generic.websocket import WebsocketConsumer

class room_consumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.send(json.dumps({'message':'Connected Successfully'}))
        


    def receive(self, text_data=None, bytes_data=None):
        self.send(text_data="Hello world!")
        

    # def disconnect(self, close_code):
        # Called when the socket closes