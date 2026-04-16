import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Icon from '@/components/ui/icon';

interface NewsItem {
  title: string;
  link: string;
  date: string;
  description: string;
}

const TAX_NEWS_URL = 'https://functions.poehali.dev/b100de6a-16f0-4302-b76a-acb2cb79b3f4';

export default function TaxNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(TAX_NEWS_URL)
      .then((r) => r.json())
      .then((data) => {
        setNews(data.news || []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-medium text-red-500 uppercase tracking-wide">Актуально</span>
            </div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Налоговые новости</h1>
            <p className="text-gray-500">Слежу за изменениями в налоговом законодательстве — здесь самое важное.</p>
          </div>

          {loading && (
            <div className="flex flex-col gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
                  <div className="h-3 bg-gray-100 rounded w-1/3" />
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="bg-white rounded-xl p-8 text-center border border-gray-100 shadow-sm">
              <Icon name="WifiOff" size={32} className="text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">Не удалось загрузить новости. Попробуйте позже.</p>
            </div>
          )}

          {!loading && !error && news.length === 0 && (
            <div className="bg-white rounded-xl p-8 text-center border border-gray-100 shadow-sm">
              <Icon name="Newspaper" size={32} className="text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">Новостей пока нет.</p>
            </div>
          )}

          {!loading && !error && news.length > 0 && (
            <div className="flex flex-col gap-3">
              {news.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all flex items-start gap-4"
                >
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-gray-100 flex-shrink-0 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <Icon name="FileText" size={15} className="text-gray-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 leading-snug group-hover:text-black line-clamp-2">
                      {item.title}
                    </p>
                    {item.date && (
                      <p className="mt-1 text-xs text-gray-400">{item.date}</p>
                    )}
                  </div>
                  <Icon name="ExternalLink" size={14} className="text-gray-300 group-hover:text-gray-500 flex-shrink-0 mt-1 transition-colors" />
                </a>
              ))}
            </div>
          )}

          <div className="mt-10 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-600">
              Есть вопросы по конкретной новости? Разберём вместе — как это влияет на ваш бизнес.
            </p>
            <a
              href="https://max.ru/+79029904880"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Спросить в Max
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
