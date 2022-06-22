from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Room

# Create your views here.
@api_view(['POST'])
def CreateOrVerify(request):
    context = {'success':False,'message':''}

    data = request.data
    roomName = data['roomName']
    password = data['password']
    
    if not roomName or not password:
        context['message'] = 'Bad roomName or Password'
        return Response(context)

    room_exists = Room.objects.filter(name=roomName).exists()
    
    if data['mode'] == 'create':
        if room_exists:
            context['message'] = 'Room Already Exists'
            return Response(context)
        new_room = Room.objects.create(name=roomName,password=password)
        new_room.save()
        context['message'] = 'Room Created Successfully'
        context['success'] = True
        return Response(context)

    #When mode is join    
    if not room_exists:
        context['message'] = 'Room doesnot exists'
        return Response(context)

    is_password_correct = Room.objects.filter(name=roomName,password=password).exists()
    if not is_password_correct:
        context['message'] = 'Invalid Password'
        return Response(context)

    context['message'] = 'Credentials verified'
    context['success'] = True
    return Response(context)