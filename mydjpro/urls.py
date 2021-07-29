#coding:utf-8
"""mydjpro URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url, include
from login import views
from . import settings
from django.views import static
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib.staticfiles import views as my_view


urlpatterns = [
    url('admin/', admin.site.urls),
    url(r'^index/$', views.index),
    url(r'^$', views.index),
    url(r'^posts/(?P<categoryid>[0-9]+)/$', views.posts),
    url(r'^article/(?P<articleid>[0-9]+)/$', views.article),
    url(r'^article/(?P<articleid>[0-9]+)/comment/$', views.post_list_page),
    url(r'^project1/$', views.project1),
    url(r'^project2/$', views.project2),
    url(r'^project3/$', views.project3),
    url(r'^project4/$', views.project4),
    url(r'^project5/$', views.project5),
    url(r'^project6/$', views.project6),
    url(r'^crawler$', views.crawler),
    url(r'^login/$', views.login),
    url(r'^register/$', views.register),
    url(r'^logout/$', views.logout),
    url(r'^static/(?P<path>.*)$', static.serve,
        {'document_root': settings.STATIC_ROOT}, name='static'),
]
urlpatterns += staticfiles_urlpatterns()