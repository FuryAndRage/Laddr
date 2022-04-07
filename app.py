import requests 
from bs4 import BeautifulSoup as bs
import json
from flask import Flask, render_template, request, redirect, url_for, jsonify
from fake_useragent import UserAgent


app = Flask(__name__)

def request_page(url):
    ua = UserAgent()
    req = requests.get(url, headers={'User-Agent': ua.random})
    soup = bs(req.content, 'html.parser')
    return soup

@app.route('/api/<path:search>')
def nzherald_news(search):
    soup = request_page(search)
    img = ""
    img_header = ""
    body_section = soup.find_all('section', class_='article__body')
    heading = ""
    # article-bigread__heading
    try:
        if soup.find('h1', class_='article__heading'):
            heading = soup.find('h1', class_='article__heading').text
            print(heading.attrs)
        else:
            heading = soup.find('h1', class_='article-bigread__heading').a.text
    except:
       
        print('aqui')

    
    p = body_section[0].find_all('p')
    
    figure = body_section[0].find('figure')
    try:
        img = figure.find('img').get('data-srcset').split(',')[-1].split(' ')[0]
    except:
        pass

    context = {
        'heading': heading,
        'article': [item.text for item in p],
        'img': img
    }
    return jsonify(json.dumps(context))
    

@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template('index.html')



if __name__ == '__main__':
    app.run(debug=True)

