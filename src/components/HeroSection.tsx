import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80',
  'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1920&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-12">
            {/* Portrait */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-2xl md:h-64 md:w-64">
                <img
                  src="https://cdn.poehali.dev/projects/2ad0905d-ded1-46df-bd0d-58304ba6c2fe/files/5626f0f3-8bee-423f-a983-81c78510865e.jpg"
                  alt="Главный бухгалтер"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-4">
                <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                  Ваш Главный Бухгалтер
                </p>
                <p className="text-xl font-light text-white/80 md:text-2xl">
                  Бухгалтерский учёт · Налоги · Отчётность
                </p>
                <p className="max-w-md text-base text-white/60 leading-relaxed">
                  Более 10 лет опыта. Беру на себя всю финансовую документацию,
                  чтобы вы занимались бизнесом, а не бумагами.
                </p>
                <div className="flex gap-4 pt-4">
                  <a
                    href="https://max.ru/+79029904880"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 hover:shadow-lg"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 7.5h-2.25V8.25a.75.75 0 0 0-1.5 0V9.5H10.5a.75.75 0 0 0 0 1.5h2.25v1.25H10.5a.75.75 0 0 0 0 1.5h1.647l-2.024 2.024a.75.75 0 1 0 1.06 1.06L13.25 14.78v1.47a.75.75 0 0 0 1.5 0v-1.47l2.067 2.054a.75.75 0 1 0 1.06-1.06L15.854 13.75H16.5a.75.75 0 0 0 0-1.5h-2.25V11h2.25a.75.75 0 0 0 0-1.5z"/>
                    </svg>
                    Написать в Max
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}