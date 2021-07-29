# coding:utf-8
from django.db import models


# Create your models here.

class user(models.Model):
    gender = (
        ('male', '男'),
        ('female', '女'),
    )

    name = models.CharField(max_length=128, unique=True)
    password = models.CharField(max_length=256)
    sex = models.CharField(max_length=8, choices=gender, default='男')
    c_time = models.DateTimeField(auto_now_add=True)
    has_confirmed = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-c_time']
        verbose_name = '用户'
        verbose_name_plural = '用户'


class Category(models.Model):
    name = models.CharField(max_length=20, verbose_name='教程')
    ordernum = models.IntegerField()

    def __unicode__(self):
        return '%s, %s' % (self.name, self.ordernum)

    class Meta:
        verbose_name = '教程'
        verbose_name_plural = '教程'


class Article(models.Model):
    name = models.CharField(max_length=20, verbose_name='章节')
    text = models.TextField()
    ordernum = models.IntegerField()
    c_id = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name='所属教程')

    class Meta:
        verbose_name = '章节'
        verbose_name_plural = '章节'


class comments(models.Model):
    name = models.CharField(max_length=100)
    text = models.TextField()
    created_time = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(Article, on_delete=models.CASCADE)

    def __str__(self):
        return self.text[:20]
