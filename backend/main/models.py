from unicodedata import name
from xml.dom.minidom import NamedNodeMap
from django.db import models

# Create your models here.
class Room(models.Model):
    name = models.CharField(max_length=255,unique=True,null=False,blank=False)
    password = models.CharField(max_length=255,null=False,blank=False)
    channel_name = models.CharField(max_length=1000,null=False,blank=False)
    red = models.CharField(max_length=255)
    green = models.CharField(max_length=255)
    yellow = models.CharField(max_length=255)
    blue = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    def roomFull(self):
        if self.red and self.green and self.yellow and self.blue:
            return True
        return False
