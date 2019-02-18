from django.db import models

class TodoList(models.Model):
    text = models.CharField(max_length=50)
    done = models.BooleanField(default = True)
    created_at = models.DateTimeField(auto_now_add=True)
    completed_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.text} - {self.created_at}"