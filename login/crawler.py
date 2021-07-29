#coding:utf-8
from bs4 import BeautifulSoup
import requests

def crawler(address, keywords):
    header = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
        'cookie': 'eol_avd_set=1598842376126529; lastvisit=1598842376126; UM_distinctid=174426e8fc7133-092bf738ea26b1-f7d1d38-1fa400-174426e8fc9455; CNZZDATA4696180=cnzz_eid%3D506557820-1598841890-https%253A%252F%252Fwww.baidu.com%252F%26ntime%3D1598841890; Hm_lvt_0a962de82782bad64c32994d6c9b06d3=1598842376; Hm_lpvt_0a962de82782bad64c32994d6c9b06d3=1598842376',
    }

def get_resp(url, header):
    try:
        resp =requests.get(url, headers=header)
        return resp.content.decode('utf-8') if 200 == resp.status_code else None
    except requests.exceptions.ConnectionError:
        return None

def netease(url, header):
    resp = get_resp(url, header)
    soup =BeautifulSoup(resp, 'lxml')

def qqmusic(url, header):
    resp = get_resp(url, header)
    soup = BeautifulSoup(resp, 'lxml')

def xiami(url, header):
    resp = get_resp(url, header)
    soup = BeautifulSoup(resp, 'lxml')
    print(soup)
    # div = soup.find(name='div', attrs={'id': 'app'}).find_all(name='div', attrs={'class': 'page-container'})[0]
    # div1 = div.find_all(name='div', attrs={'class': 'content-wrapper'})[0].find_all(name='div', attrs={'class': 'list-view view-without-leftbar'})[0]
    # div2 = div1.find_all(name='div', attrs={'class': 'table idle song-table list-song'})[0].find_all(name='div', attrs={'class': 'table-container'})[0]
    table = soup.find(name='table').find(name='tbody')
    print(table)


crawler('xiami', '周杰伦')