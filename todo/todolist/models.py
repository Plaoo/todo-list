from django.db import models

class TodoList(models.Model):
    text = models.CharField(max_length=50)
    done = models.BooleanField(default = True)

    def __str__(self):
        return self.text