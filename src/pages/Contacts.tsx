import Header from '@/components/Header';
import Icon from '@/components/ui/icon';

const contacts = [
  {
    icon: 'MessageCircle',
    label: 'Max',
    value: '+7 902 990-48-80',
    href: 'https://max.ru/+79029904880',
    desc: 'Пишите — отвечаю быстро',
  },
  {
    icon: 'Phone',
    label: 'Телефон',
    value: '+7 902 990-48-80',
    href: 'tel:+79029904880',
    desc: 'Звонки в рабочее время',
  },
];

const schedule = [
  { day: 'Пн — Пт', time: '9:00 — 18:00' },
  { day: 'Суббота', time: '10:00 — 14:00' },
  { day: 'Воскресенье', time: 'выходной' },
];

export default function Contacts() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="mb-10">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Контакты</h1>
            <p className="text-gray-500">Работаю удалённо — принимаю документы в электронном виде или по почте.</p>
          </div>

          <div className="flex flex-col gap-4 mb-8">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors flex-shrink-0">
                  <Icon name={c.icon} size={20} className="text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">{c.label}</p>
                  <p className="font-medium text-gray-900">{c.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{c.desc}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Clock" size={16} className="text-gray-400" />
              <span className="text-sm font-medium text-gray-700">График работы</span>
            </div>
            <div className="flex flex-col gap-3">
              {schedule.map((s) => (
                <div key={s.day} className="flex justify-between text-sm">
                  <span className="text-gray-500">{s.day}</span>
                  <span className={s.time === 'выходной' ? 'text-gray-400' : 'text-gray-900 font-medium'}>
                    {s.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-100 rounded-xl p-5">
            <p className="text-sm text-amber-800">
              Срочные вопросы — пишите в Max в любое время, отвечу как смогу.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
