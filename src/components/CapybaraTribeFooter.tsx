import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function CapybaraTribeFooter() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <footer className="bg-amber-900 pb-8 pt-12 text-amber-100">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Племя Капибар</h3>
            <p className="mb-4">
              Живем в гармонии с природой и друг с другом. Наше племя — это семья, объединенная древними традициями.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-xl font-semibold">О нас</h3>
            <p className="mb-4">
              Мы — бесконтактное племя капибар, которое общается только между собой. Наше местоположение известно лишь нам.
            </p>
            <div className="flex items-center gap-2">
              <Icon name="ShieldAlert" size={16} />
              <span>Мы не принимаем посетителей</span>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-xl font-semibold">Навигация</h3>
            <ul className="space-y-2">
              <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-white">Главная</button></li>
              <li><button onClick={() => scrollToSection('traditions')} className="hover:text-white">Традиции</button></li>
              <li><button onClick={() => scrollToSection('gallery')} className="hover:text-white">Галерея</button></li>
              <li><button onClick={() => scrollToSection('apprentices')} className="hover:text-white">Ученики</button></li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-6 bg-amber-800" />
        
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Племя Капибар. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
