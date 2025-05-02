import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CapybaraTribeHero() {
  return (
    <div className="relative w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588960952097-4ce2f718e9e5?q=80&w=2070')" }}
      ></div>
      
      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-6 font-playfair text-4xl font-bold text-amber-800 md:text-6xl">
            Племя Капибар
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-amber-700">
            Добро пожаловать в удивительный мир племени капибар — самых дружелюбных и величественных грызунов на планете.
            Познакомьтесь с нашими мудрыми предводителями и узнайте о традициях нашего древнего племени.
          </p>
          <div className="flex gap-4">
            <Button 
              variant="default" 
              className="bg-amber-700 hover:bg-amber-800"
              size="lg"
            >
              Узнать больше
            </Button>
            <Button 
              variant="outline" 
              className="border-amber-700 text-amber-700 hover:bg-amber-100 hover:text-amber-800"
              size="lg"
            >
              Галерея
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
