from rest_framework import mixins
from rest_framework import generics
from rest_framework import permissions
from todolist.models import TodoList
from todolist.api.serializers import TodoSerializer



class TodoListCreateAPIView(generics.ListCreateAPIView):
    queryset = TodoList.objects.all()
    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class TodoListDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TodoList.objects.all()
    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]