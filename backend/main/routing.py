from django.urls import path
from .consumers import WebsocketConsumer

websocket_urlpatterns = [
    path('ws/consumer/',WebsocketConsumer.as_asgi()),
]