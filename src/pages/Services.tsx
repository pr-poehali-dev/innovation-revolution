import Header from '@/components/Header';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'BookOpen',
    title: 'Бухгалтерский учёт',
    desc: 'Веду полный учёт хозяйственных операций — первичка, проводки, учётная политика. Работаю с ИП и ООО на любой системе налогообложения.',
    price: 'от 5 000 ₽/мес',
  },
  {
    icon: 'FileText',
    title: 'Налоговая отчётность',
    desc: 'Составляю и сдаю декларации по УСН, НДС, налогу на прибыль, 6-НДФЛ. Слежу за сроками, чтобы не было штрафов.',
    price: 'от 2 000 ₽/отчёт',
  },
  {
    icon: 'Users',
    title: 'Зарплата и кадры',
    desc: 'Расчёт зарплаты, больничных, отпускных. Сдача отчётности в СФР и ФНС по сотрудникам. Оформление трудовых договоров.',
    price: 'от 500 ₽/чел',
  },
  {
    icon: 'Search',
    title: 'Восстановление учёта',
    desc: 'Разберу запущенную бухгалтерию, восстановлю документы, приведу всё в порядок. Без паники — бывало и хуже.',
    price: 'по договорённости',
  },
  {
    icon: 'Shield',
    title: 'Сопровождение проверок',
    desc: 'Помогу подготовиться к налоговой проверке, составлю ответы на требования ФНС, разберу акты и решения.',
    price: 'от 3 000 ₽',
  },
  {
    icon: 'Calculator',
    title: 'Консультации',
    desc: 'Отвечу на конкретный вопрос: как сэкономить на налогах законно, как оформить сделку, что грозит за нарушение.',
    price: 'от 1 000 ₽/час',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-semibold text-gray-900 mb-3">Услуги</h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              Работаю с малым бизнесом — ИП и небольшими ООО. Без посредников, напрямую.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Icon name={s.icon} size={20} className="text-gray-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900 mb-1">{s.title}</h2>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-auto pt-2 border-t border-gray-100 text-sm font-medium text-gray-700">
                  {s.price}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Не нашли нужное? Спросите напрямую — разберёмся.</p>
            <a
              href="https://max.ru/+79029904880"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Написать в Max
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}