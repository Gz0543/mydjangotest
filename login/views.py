# coding:utf-8
from django.shortcuts import render
from django.shortcuts import redirect
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import render, get_object_or_404
from . import models
from . import forms


# Create your views here.

def index(request):
    allca = models.Category.objects.all().order_by('ordernum')
    return render(request, 'login/index.html', context={'allca': allca})


def posts(request, categoryid):
    allar = models.Article.objects.filter(c_id_id=categoryid).order_by('ordernum')
    allca = models.Category.objects.all().order_by('ordernum')
    return render(request, 'login/posts.html', {'allar': allar, 'allca': allca, 'id': categoryid})


def article(request, articleid):
    onear = models.Article.objects.all()
    allca = models.Category.objects.all().order_by('ordernum')
    form = forms.CommentsForm(request.POST)
    post = get_object_or_404(onear, pk=articleid)
    id = post.c_id_id
    allar = models.Article.objects.filter(c_id_id=id)
    allco = models.comments.objects.filter(post=articleid)
    return render(request, 'login/artile.html', {'onear': post, 'form': form, 'allco': allco, 'allca': allca, 'allar': allar, 'id': id})


def login(request):
    if request.session.get('is_login', None):
        return redirect('/index/')
    if request.method == 'POST':
        login_form = forms.userform(request.POST)
        message = '请检查填写的内容！'
        if login_form.is_valid():
            username = login_form.cleaned_data.get('username')
            password = login_form.cleaned_data.get('password')
            try:
                user = models.user.objects.get(name=username)
                if user.password == password:
                    request.session['is_login'] = True
                    request.session['user_id'] = user.id
                    request.session['user_name'] = user.name
                    return redirect('/index/')
                else:
                    message = '密码不正确！'
                    return render(request, 'login/login.html', locals())
            except:
                message = '用户不存在！'
                return render(request, 'login/login.html', locals())
        else:
            username = login_form.cleaned_data.get('username')
            return render(request, 'login/login.html', locals())
    login_form = forms.userform()
    return render(request, 'login/login.html', locals())


def register(request):
    if request.session.get('is_login', None):
        return redirect('/index/')
    if request.method == 'POST':
        register_form = forms.registerform(request.POST)
        message = '请检查填写的内容！'
        if register_form.is_valid():
            username = register_form.cleaned_data.get('username')
            password1 = register_form.cleaned_data.get('password1')
            password2 = register_form.cleaned_data.get('password2')
            sex = register_form.cleaned_data.get('sex')

            if password1 != password2:
                message = '两次输入的密码不同！'
                return render(request, 'login/register.html', locals())
            else:
                same_name_user = models.user.objects.filter(name=username)
                if same_name_user:
                    message = '用户名已存在！'
                    return render(request, 'login/register.html', locals())

                new_user = models.user()
                new_user.name = username
                new_user.password = password1
                new_user.sex = sex
                new_user.save()
                return redirect('/login/')
        else:
            return render(request, 'login/register.html', locals())
    register_form = forms.registerform()
    return render(request, 'login/register.html', locals())

def project1(request):
    return render(request, 'login/jingdong.html')

def project2(request):
    return render(request, 'login/qqmusic.html')

def project3(request):
    return render(request, 'login/360.html')

def project4(request):
    return render(request, 'login/gouwuche.html')

def project5(request):
    return render(request, 'login/wangyi.html')

def project6(request):
    return render(request, 'login/doing.html')

def logout(request):
    if not request.session.get('is_login', None):
        return redirect('/index/')
    request.session.flush()
    return redirect('/index/')

def crawler(request):
    if request.method == 'POST':
        add = request.session.get('add')
        keywords = request.session.get('keywords')

def post_list_page(request, articleid):
    allca = models.Category.objects.all().order_by('ordernum')
    onear = models.Article.objects.all()
    form = forms.CommentsForm(request.POST)
    post = get_object_or_404(onear, pk=articleid)
    if request.method == 'POST':
        form = forms.CommentsForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.name = request.session['user_name']
            if comment.name:
                comment.post = post
                comment.save()
            else:
                return redirect('/login/')
        else:
            return render(request, 'login/artile.html', {'onear': post, 'form': form, 'allca': allca})
        return render(request, 'login/comments.html', {'articleid': articleid, 'allca': allca})
    return redirect('/artile/', {'articleid': articleid, 'allca': allca})
