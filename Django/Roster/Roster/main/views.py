from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
  return HttpResponse('<h1>Hello world</h1>')
    # context = {
    #     'posts': Post.objects.all()
    # }
    # return render(request, 'main/home.html', context)
def about(request):
  return HttpResponse('<h1>Hello world</h1>')
