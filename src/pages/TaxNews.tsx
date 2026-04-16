import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

interface NewsItem {
  title: string;
  link: string;
  date: string;
  description: string;
}

const TAX_NEWS_URL = 'https://functions.poehali.dev/b100de6a-16f0-4302-b76a-acb2cb79b3f4';

const tabs = [
  { id: 'usn',          label: 'УСН',           color: 'bg-green-500',   light: 'bg-green-50',   border: 'border-green-200',  text: 'text-green-700',  keywords: ['усн', 'упрощён', 'упрощенн', 'упрощ'] },
  { id: 'ndfl',         label: 'НДФЛ',          color: 'bg-blue-500',    light: 'bg-blue-50',    border: 'border-blue-200',   text: 'text-blue-700',   keywords: ['ндфл', 'подоходн', 'физических лиц'] },
  { id: 'nds',          label: 'НДС',           color: 'bg-purple-500',  light: 'bg-purple-50',  border: 'border-purple-200', text: 'text-purple-700', keywords: ['ндс', 'добавленн', 'вычет ндс', 'счёт-фактур'] },
  { id: 'profit',       label: 'Прибыль',       color: 'bg-orange-500',  light: 'bg-orange-50',  border: 'border-orange-200', text: 'text-orange-700', keywords: ['прибыль', 'налог на прибыл'] },
  { id: 'retail',       label: 'Розница',       color: 'bg-pink-500',    light: 'bg-pink-50',    border: 'border-pink-200',   text: 'text-pink-700',   keywords: ['розниц', 'торговл', 'магазин', 'розничн'] },
  { id: 'kkt',          label: 'ККТ',           color: 'bg-yellow-500',  light: 'bg-yellow-50',  border: 'border-yellow-200', text: 'text-yellow-700', keywords: ['ккт', 'касс', 'онлайн-касс', 'фискальн', 'чек'] },
  { id: 'marketplace',  label: 'Маркетплейсы',  color: 'bg-red-500',     light: 'bg-red-50',     border: 'border-red-200',    text: 'text-red-700',    keywords: ['маркетплейс', 'wildberries', 'ozon', 'wb ', 'озон', 'яндекс маркет', 'мегамаркет'] },
];

function filterNews(news: NewsItem[], keywords: string[]) {
  return news.filter((item) =>
    keywords.some((kw) => item.title.toLowerCase().includes(kw))
  );
}

export default function TaxNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState('usn');

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

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];
  const filtered = filterNews(news, currentTab.keywords);

  return (
    <div className="min-h-screen bg-amber-50/40">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">

          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Налоговые новости</h1>
            <p className="text-sm text-gray-500">Слежу за изменениями — открывайте нужный раздел</p>
          </div>

          {/* Папка */}
          <div className="relative">
            {/* Закладки */}
            <div className="flex flex-wrap gap-0 mb-0 relative z-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'relative px-4 py-2 text-xs font-semibold rounded-t-lg transition-all mr-1 mb-0 border border-b-0',
                    activeTab === tab.id
                      ? cn('text-white border-transparent -mb-px pb-3 pt-2', tab.color)
                      : 'bg-white/70 text-gray-500 border-gray-200 hover:bg-white hover:text-gray-700'
                  )}
                  style={activeTab === tab.id ? { zIndex: 20 } : { zIndex: 10 }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Тело папки */}
            <div className="bg-white rounded-b-xl rounded-tr-xl border border-gray-200 shadow-md overflow-hidden relative z-10">
              {/* Полоска цвета активной закладки */}
              <div className={cn('h-1 w-full', currentTab.color)} />

              <div className="p-5">
                {loading && (
                  <div className="flex flex-col gap-3">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="animate-pulse flex gap-3 items-start py-3 border-b border-gray-50">
                        <div className="w-1.5 h-4 rounded bg-gray-200 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="h-3.5 bg-gray-200 rounded w-4/5 mb-2" />
                          <div className="h-2.5 bg-gray-100 rounded w-1/3" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {error && (
                  <div className="py-12 text-center">
                    <Icon name="WifiOff" size={28} className="text-gray-300 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">Не удалось загрузить. Попробуйте позже.</p>
                  </div>
                )}

                {!loading && !error && filtered.length === 0 && (
                  <div className="py-12 text-center">
                    <Icon name="FolderOpen" size={28} className="text-gray-300 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">По этой теме новостей пока нет.</p>
                    <p className="text-xs text-gray-300 mt-1">Загляните позже или выберите другой раздел.</p>
                  </div>
                )}

                {!loading && !error && filtered.length > 0 && (
                  <div className="flex flex-col divide-y divide-gray-50">
                    {filtered.map((item, i) => (
                      <a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3 py-3 hover:bg-gray-50 -mx-5 px-5 transition-colors"
                      >
                        <div className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5', currentTab.color)} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-800 leading-snug group-hover:text-black line-clamp-2">
                            {item.title}
                          </p>
                          {item.date && (
                            <p className="mt-0.5 text-xs text-gray-400">{item.date}</p>
                          )}
                        </div>
                        <Icon name="ExternalLink" size={12} className="text-gray-300 group-hover:text-gray-400 flex-shrink-0 mt-1.5 transition-colors" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Подвал папки */}
              <div className={cn('px-5 py-3 border-t border-gray-100 flex items-center justify-between', currentTab.light)}>
                <p className={cn('text-xs', currentTab.text)}>
                  Есть вопросы по этой теме?
                </p>
                <a
                  href="https://max.ru/+79029904880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn('text-xs font-medium underline underline-offset-2 transition-opacity hover:opacity-70', currentTab.text)}
                >
                  Написать в Max
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
