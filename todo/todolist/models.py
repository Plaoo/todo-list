from django.db import models

class TodoList(models.Model):
    text = models.CharField(max_length=50)
    done = models.BooleanField(default = False)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.text} - {self.created_at}"