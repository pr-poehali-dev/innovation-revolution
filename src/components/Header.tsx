import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const nav = [
  { label: 'Главная', path: '/' },
  { label: 'Услуги', path: '/services' },
  { label: 'Новости', path: '/news' },
  { label: 'Контакты', path: '/contacts' },
];

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold text-gray-900">
          Бухгалтер — ваш счёт в порядке
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-sm transition-colors',
                pathname === item.path
                  ? 'text-gray-900 font-medium'
                  : 'text-gray-500 hover:text-gray-900'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <Icon name={open ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={cn(
                'text-sm py-1',
                pathname === item.path
                  ? 'text-gray-900 font-medium'
                  : 'text-gray-500'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
