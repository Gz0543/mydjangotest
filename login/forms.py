from django import forms
from .models import comments

class userform(forms.Form):
    username = forms.CharField(label='用户名', max_length=128, widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': "Username",'autofocus': ''}))
    password = forms.CharField(label='密码', max_length=256, widget=forms.PasswordInput(attrs={'class': 'form-control','placeholder': "Password"}))

class registerform(forms.Form):
    gender = (
        ('male', '男'),
        ('female', '女'),
    )
    username = forms.CharField(label='用户名', max_length=128, widget=forms.TextInput(attrs={'class': 'form-control'}))
    password1 = forms.CharField(label='密码', max_length=256, widget=forms.PasswordInput(attrs={'class': 'form-control'}))
    password2 = forms.CharField(label='确认密码', max_length=256, widget=forms.PasswordInput(attrs={'class': 'form-control'}))
    sex = forms.ChoiceField(label='性别', choices=gender)



class CommentsForm(forms.ModelForm):
    name = forms.CharField(label='用户名', max_length=128, widget=forms.TextInput())
    text = forms.CharField(label='评论内容', widget=forms.TextInput())

    class Meta:
        model=comments
        fields = ['name', 'text']