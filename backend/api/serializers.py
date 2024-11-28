from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer

#from .models import Note , Addresses


User = get_user_model()


class CreateUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'password']


""" 
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "title", "content", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}


class AddressesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Addresses
        fields = ["id","address_line1","address_line2","city","state","code_postal","phone_number"] """