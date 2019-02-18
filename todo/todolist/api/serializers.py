from rest_framework import serialisers
from models.todolist import TodoList

class TodoSerializer(serialisers.ModelSerializer):

    class Meta:
        model = TodoList
        fields = "__all__"