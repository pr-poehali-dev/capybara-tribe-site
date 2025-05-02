import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function CapybaraTribeFooter() {
  return (
    <footer className="bg-amber-900 pb-8 pt-12 text-amber-100">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Племя Капибар</h3>
            <p className="mb-4">
              Живем в гармонии с природой и друг с другом. Наше племя — это семья, объединенная древними традициями.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-xl font-semibold">Связь с нами</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Река Амазонка, Южная Америка</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>contact@capybaratribe.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+123-456-7890</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-xl font-semibold">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Главная</a></li>
              <li><a href="#" className="hover:text-white">О племени</a></li>
              <li><a href="#" className="hover:text-white">Члены племени</a></li>
              <li><a href="#" className="hover:text-white">Традиции</a></li>
              <li><a href="#" className="hover:text-white">Контакты</a></li>
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
