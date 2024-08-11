from django.shortcuts import render

# Create your views here.
def task_view(request):
    # Sample dynamic data
    tasks = [
        {'id': 1, 'text': 'Buy groceries'},
        {'id': 2, 'text': 'Finish project'},
        {'id': 3, 'text': 'Clean the house'}
    ]
    context = {
        'tasks': tasks
    }
    return render(request, 'task.html', context)
