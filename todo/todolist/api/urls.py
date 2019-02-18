from django.urls import path
from todolist.api.views import TodoListCreateAPIView, TodoListDetailAPIView

urlpatterns = [
    path("todo/", TodoListCreateAPIView.as_view(), name="todo_list"),
    path("todo/<int:pk>/", TodoListDetailAPIView.as_view(), name="todo_list")
]