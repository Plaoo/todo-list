from django.test import TestCase

from .models import TodoList

class TodoListModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        TodoList.objects.create(text="text test")
        TodoList.objects.create(done=False)

    def test_text_content(self):
        todo = TodoList.objects.get(id=1)
        correct_text = f'{todo.text}'
        self.assertEquals(correct_text, 'text test')
    
    def test_text_content(self):
        todo = TodoList.objects.get(id=1)
        correct_status = False
        self.assertEquals(correct_status, False)

