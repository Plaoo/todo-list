from django.db import models

class TodoList(models.Model):
    text = models.CharField(max_length=50)
    done = models.Boolean(default = True)