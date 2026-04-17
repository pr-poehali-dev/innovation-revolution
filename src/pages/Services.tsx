import Header from '@/components/Header';

const sections = [
  {
    title: 'Общая система налогообложения (ОСН)',
    groups: [
      {
        label: 'Нулевая отчётность',
        rows: [
          { service: 'ООО / ИП', llc: '6 000 ₽/кв', ip: '4 000 ₽/кв', note: 'Нулевые отчёты в ИФНС, СФР' },
        ],
      },
      {
        label: 'ОСН до 30 документов',
        rows: [
          { service: 'с ФОТ до 3 сотрудников', llc: '15 000 ₽/м', ip: '—', note: '' },
          { service: 'с ФОТ до 5 сотрудников', llc: '20 000 ₽/м', ip: '—', note: 'каждый следующий сотрудник +1 500 р/м' },
        ],
      },
      {
        label: 'ОСН до 60 документов',
        rows: [
          { service: 'с ФОТ до 3 сотрудников', llc: '20 000 ₽/м', ip: '—', note: '' },
          { service: 'с ФОТ до 5 сотрудников', llc: '25 000 ₽/м', ip: '—', note: 'каждый следующий сотрудник +1 500 р/м' },
        ],
      },
      {
        label: 'ОСН до 90 документов',
        rows: [
          { service: 'с ФОТ до 3 сотрудников', llc: '30 000 ₽/м', ip: '—', note: '' },
          { service: 'с ФОТ до 5 сотрудников', llc: '35 000 ₽/м', ip: '—', note: 'каждый следующий сотрудник +1 500 р/м' },
        ],
      },
      {
        label: 'ОСН от 90 документов',
        rows: [
          { service: '', llc: 'по договорённости', ip: '—', note: '' },
        ],
      },
    ],
  },
  {
    title: 'Упрощённая система налогообложения (УСН)',
    groups: [
      {
        label: 'Нулевая отчётность',
        rows: [
          { service: 'ООО / ИП', llc: '6 000 ₽/кв', ip: '4 000 ₽/кв', note: 'Нулевые отчёты в ИФНС, СФР' },
        ],
      },
      {
        label: 'УСН Доходы 6% до 30 документов',
        rows: [
          { service: 'с ФОТ до 3 сотрудников', llc: '8 000 ₽/м', ip: '—', note: '' },
          { service: 'с ФОТ до 5 сотрудников', llc: '10 000 ₽/м', ip: '—', note: 'каждый следующий сотрудник +1 500 р/м' },
        ],
      },
      {
        label: 'УСН Доходы 6% до 60 документов',
        rows: [
          { service: 'с ФОТ до 3 сотрудников', llc: '15 000 ₽/м', ip: '—', note: '' },
          { service: 'с ФОТ до 5 сотрудников', llc: '20 000 ₽/м', ip: '—', note: 'каждый следующий сотрудник +1 500 р/м' },
        ],
      },
      {
        label: 'УСН Доходы 6% до 90 документов',
        rows: [
          { service: 'с ФОТ до 3 сотрудников', llc: '25 000 ₽/м', ip: '—', note: '' },
          { service: 'с ФОТ до 5 сотрудников', llc: '30 000 ₽/м', ip: '—', note: 'каждый следующий сотрудник +1 500 р/м' },
        ],
      },
      {
        label: 'УСН Доходы 6% от 90 документов',
        rows: [
          { service: '', llc: 'по договорённости', ip: '—', note: '' },
        ],
      },
      {
        label: 'УСН Доходы−Расходы 15% до 30 документов',
        rows: [
          { service: 'с ФОТ до 3 сотрудников', llc: '10 000 ₽/м', ip: '—', note: '' },
          { service: 'с ФОТ до 5 сотрудников', llc: '15 000 ₽/м', ip: '—', note: 'каждый следующий сотрудник +1 500 р/м' },
        ],
      },
      {
        label: 'УСН Доходы−Расходы 15% до 60 документов',
        rows: [
          { service: 'с ФОТ до 3 сотрудников', llc: '20 000 ₽/м', ip: '—', note: '' },
          { service: 'с ФОТ до 5 сотрудников', llc: '25 000 ₽/м', ip: '—', note: 'каждый следующий сотрудник +1 500 р/м' },
        ],
      },
      {
        label: 'УСН Доходы−Расходы 15% до 90 документов',
        rows: [
          { service: 'с ФОТ до 3 сотрудников', llc: '30 000 ₽/м', ip: '—', note: '' },
          { service: 'с ФОТ до 5 сотрудников', llc: '35 000 ₽/м', ip: '—', note: 'каждый следующий сотрудник +1 500 р/м' },
        ],
      },
      {
        label: 'УСН Доходы−Расходы 15% от 90 документов',
        rows: [
          { service: '', llc: 'по договорённости', ip: '—', note: '' },
        ],
      },
    ],
  },
  {
    title: 'УСН с НДС',
    groups: [
      {
        label: '',
        rows: [
          { service: '', llc: 'плюс 40% к базовому тарифу', ip: 'плюс 40% к базовому тарифу', note: '' },
        ],
      },
    ],
  },
  {
    title: 'АУСН (Автоматизированная УСН)',
    groups: [
      {
        label: '',
        rows: [
          { service: 'Без сотрудников, до 30 операций', llc: '5 000 ₽/м', ip: '5 000 ₽/м', note: '' },
          { service: 'с ФОТ до 3 сотрудников', llc: '8 000 ₽/м', ip: '8 000 ₽/м', note: 'каждый следующий сотрудник +1 500 р/м' },
          { service: 'Консультация и подключение к АУСН', llc: '3 000 ₽', ip: '3 000 ₽', note: '' },
        ],
      },
    ],
  },
  {
    title: 'Патент',
    groups: [
      {
        label: '',
        rows: [
          { service: 'Без сотрудников', llc: '—', ip: '3 000 ₽/м', note: '' },
          { service: 'с ФОТ 1 сотрудник', llc: '—', ip: '5 000 ₽/м', note: 'каждый следующий сотрудник +1 500 р/м' },
        ],
      },
    ],
  },
  {
    title: 'Комбинации режимов',
    groups: [
      {
        label: '',
        rows: [
          { service: 'ОСН + ПАТЕНТ', llc: 'цены суммируются', ip: 'цены суммируются', note: '' },
          { service: 'ОСН + УСН', llc: 'цены суммируются', ip: 'цены суммируются', note: '' },
          { service: 'ПАТЕНТ + УСН', llc: 'цены суммируются', ip: 'цены суммируются', note: '' },
        ],
      },
    ],
  },
];

const extraServices = [
  { service: 'Обработка первичной документации до 30 документов', price: '10 000 ₽/м' },
  { service: 'Обработка первичной документации до 60 документов', price: '15 000 ₽/м' },
  { service: 'Обработка первичной документации до 90 документов', price: '25 000 ₽/м' },
  { service: 'Обработка первичной документации свыше 90 документов', price: 'по договорённости' },
  { service: '3-НДФЛ (ИП, ФЛ)', price: 'от 2 000 ₽/шт' },
  { service: 'Консультация', price: '5 000 ₽/час' },
  { service: 'Подготовка документов для кредитования', price: 'от 20 000 ₽' },
  { service: 'Проведение сверки с ИФНС', price: 'по договорённости' },
  { service: 'Ведение учёта обособленного подразделения', price: 'плюс 20% к основному тарифу за каждое ОП' },
  { service: 'Отчётность через интернет — ОСН', price: '4 000 ₽/год' },
  { service: 'Отчётность через интернет — УСН', price: '3 000 ₽/год (ООО) / 2 000 ₽/год (ИП)' },
  { service: 'Отчётность через интернет — ОСН+УСН', price: '4 000 ₽/год' },
  { service: 'Отчётность через интернет — РУТОКЕН', price: '3 500 ₽/шт' },
  { service: 'Аудит бухгалтерского и налогового учёта', price: 'по договорённости' },
  { service: 'Восстановление бухгалтерского и налогового учёта', price: 'по договорённости' },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">

          <div className="mb-10 text-center">
            <h1 className="text-3xl font-semibold text-gray-900 mb-3">Услуги и цены</h1>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Работаю с ИП и ООО напрямую, без посредников. Цены фиксированы — никаких скрытых платежей.
            </p>
            <p className="text-xs text-gray-400 mt-2">
              * Учёт сотрудников включает: начисление ЗП, налогов, выплату ЗП два раза в месяц, уплату налогов, сдачу отчётности в ИФНС, СФР
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-[#1e2d4a] px-6 py-4">
                  <h2 className="text-white font-semibold text-base">{section.title}</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="text-left px-6 py-3 text-gray-500 font-medium w-1/2">Услуга</th>
                        <th className="text-center px-4 py-3 text-gray-500 font-medium whitespace-nowrap">для ООО</th>
                        <th className="text-center px-4 py-3 text-gray-500 font-medium whitespace-nowrap">для ИП</th>
                        <th className="text-left px-4 py-3 text-gray-500 font-medium">Примечание</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.groups.map((group, gi) => (
                        <>
                          {group.label && (
                            <tr key={`label-${gi}`} className="bg-[#f0f4fa]">
                              <td colSpan={4} className="px-6 py-2 text-[#1e2d4a] font-semibold text-xs uppercase tracking-wide">
                                {group.label}
                              </td>
                            </tr>
                          )}
                          {group.rows.map((row, ri) => (
                            <tr
                              key={`row-${gi}-${ri}`}
                              className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                            >
                              <td className="px-6 py-3 text-gray-700">{row.service}</td>
                              <td className="px-4 py-3 text-center font-medium text-[#1e2d4a] whitespace-nowrap">{row.llc}</td>
                              <td className="px-4 py-3 text-center font-medium text-[#c0392b] whitespace-nowrap">{row.ip}</td>
                              <td className="px-4 py-3 text-gray-400 text-xs">{row.note}</td>
                            </tr>
                          ))}
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-[#1e2d4a] px-6 py-4">
                <h2 className="text-white font-semibold text-base">Дополнительные услуги</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="text-left px-6 py-3 text-gray-500 font-medium">Услуга</th>
                      <th className="text-right px-6 py-3 text-gray-500 font-medium">Стоимость</th>
                    </tr>
                  </thead>
                  <tbody>
                    {extraServices.map((item, i) => (
                      <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-3 text-gray-700">{item.service}</td>
                        <td className="px-6 py-3 text-right font-medium text-[#1e2d4a] whitespace-nowrap">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 mb-4 text-sm">Не нашли нужное? Свяжитесь напрямую — подберём тариф.</p>
            <a
              href="https://max.ru/+79029904880"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1e2d4a] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#162338] transition-colors"
            >
              Написать в Max
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
