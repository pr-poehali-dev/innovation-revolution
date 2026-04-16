import urllib.request
import json
import re


def parse_simple(html: str, base_url: str, keywords: list):
    news = []
    pattern = r'<a[^>]+href="([^"]+)"[^>]*>\s*([^<]{30,250})\s*</a>'
    matches = re.findall(pattern, html)
    seen = set()
    for href, title in matches:
        title = title.strip()
        if title in seen or len(title) < 20:
            continue
        if any(kw in title.lower() for kw in keywords):
            link = href if href.startswith('http') else base_url + href
            news.append({'title': title, 'link': link, 'date': '', 'description': ''})
            seen.add(title)
        if len(news) >= 10:
            break
    return news


def handler(event: dict, context) -> dict:
    """Получает свежие новости из мира налогов и бухучёта с популярных российских ресурсов"""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    keywords = [
        'налог', 'ндс', 'усн', 'ндфл', 'фнс', 'взнос', 'декларац', 'отчёт', 'отчет',
        'штраф', 'уплат', 'бухгалт', 'патент', 'кассов', 'самозанят', 'страхов',
        'минфин', 'коэффициент', 'пени', 'недоимк'
    ]

    sources = [
        ('https://www.glavbukh.ru/news/', 'https://www.glavbukh.ru'),
        ('https://www.buhonline.ru/pub/news/', 'https://www.buhonline.ru'),
        ('https://normativ.kontur.ru/news', 'https://normativ.kontur.ru'),
    ]

    news = []
    for url, base in sources:
        if len(news) >= 12:
            break
        try:
            req = urllib.request.Request(url, headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0'
            })
            with urllib.request.urlopen(req, timeout=12) as resp:
                html = resp.read().decode('utf-8', errors='replace')
            items = parse_simple(html, base, keywords)
            news.extend(items)
        except Exception:
            continue

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        'body': json.dumps({'news': news[:15]}, ensure_ascii=False)
    }
