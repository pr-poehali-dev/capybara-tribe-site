import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function CapybaraTribeApprentices() {
  const [activeTab, setActiveTab] = useState("all");

  const apprentices = [
    {
      id: 1,
      name: "Росинка",
      role: "Ученик шамана",
      description: "Юная капибара с необычайным даром чувствовать энергию воды. Водяная Мудрость лично выбрал её своим преемником.",
      imageUrl: "https://cdn.poehali.dev/files/64633452-43dc-4405-a51c-8e288dc0cebe.jpeg",
      category: "shaman"
    },
    {
      id: 2,
      name: "Корешок",
      role: "Ученик целителя",
      description: "Самый внимательный из учеников. Запоминает свойства каждой травы с первого раза и уже умеет готовить простые отвары от простуды.",
      imageUrl: "https://cdn.poehali.dev/files/fa453c65-3747-4a0c-8875-dce2ce53588d.jpg",
      category: "healer"
    },
    {
      id: 3,
      name: "Пушистик",
      role: "Ученик знахаря",
      description: "Медитативный и спокойный детёныш. Несмотря на юный возраст, уже может часами сидеть у воды, прислушиваясь к голосам природы.",
      imageUrl: "https://cdn.poehali.dev/files/b6dde822-13af-4ac1-8359-589c090a6fec.jpg",
      category: "healer"
    },
    {
      id: 4,
      name: "Ягодка",
      role: "Ученик травника",
      description: "Маленькая капибара с особым чутьем на целебные ягоды и фрукты. Может найти самые редкие растения даже в густых зарослях.",
      imageUrl: "https://images.unsplash.com/photo-1600366060302-9fb7682b062b?q=80&w=1974",
      category: "healer"
    },
    {
      id: 5,
      name: "Речной Прыгун",
      role: "Ученик прорицателя",
      description: "Уникальная способность видеть образы в воде выделяет этого юного ученика. Старейшины видят в нем большой потенциал.",
      imageUrl: "https://images.unsplash.com/photo-1598382694281-94ae52df051e?q=80&w=1984",
      category: "shaman"
    }
  ];
  
  const filteredApprentices = activeTab === "all" 
    ? apprentices 
    : apprentices.filter(apprentice => apprentice.category === activeTab);

  return (
    <div className="bg-amber-100 py-16" id="apprentices">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center font-playfair text-3xl font-bold text-amber-800 md:text-4xl">
          Ученики Племени
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-amber-700">
          Познакомьтесь с нашими юными капибарами, которые проходят обучение у старейшин племени. 
          Эти маленькие целители и шаманы будущего сохранят древние традиции нашего племени.
        </p>
        
        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList className="bg-amber-200">
              <TabsTrigger value="all" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Все ученики
              </TabsTrigger>
              <TabsTrigger value="shaman" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Шаманы
              </TabsTrigger>
              <TabsTrigger value="healer" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Целители
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredApprentices.map((apprentice) => (
            <Card key={apprentice.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative aspect-square overflow-hidden bg-amber-50">
                <img 
                  src={apprentice.imageUrl} 
                  alt={apprentice.name} 
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
                />
                <Badge className="absolute left-3 top-3 bg-amber-500">Ученик</Badge>
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="mb-1 text-xl font-bold text-amber-800">{apprentice.name}</h3>
                <p className="mb-3 text-sm font-medium text-amber-600">{apprentice.role}</p>
                <p className="text-muted-foreground">{apprentice.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
