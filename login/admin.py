from django.contrib import admin

# Register your models here.

from . import models

class Categoryadmin(admin.ModelAdmin):
    list_display = ('name', 'ordernum')
    fields = ('name', 'ordernum')

class Articleadmin(admin.ModelAdmin):
    list_display = ('name', 'c_id')

class CommentAdmin(admin.ModelAdmin):
    list_display = ('name','email','post','created','active')
    list_filter = ('active','created','updated')
    search_fields = ('name','email','body')

admin.site.register(models.Category, Categoryadmin)
admin.site.register(models.Article, Articleadmin)
admin.site.register(models.user)
admin.site.register(models.comments)
