import { useState } from "react";
import CapybaraTribeMember from "./CapybaraTribeMember";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CapybaraTribeMembers() {
  const [activeTab, setActiveTab] = useState("all");
  
  const tribeMembers = [
    {
      id: 1,
      name: "Капитан Пухлик",
      role: "Вождь племени",
      description: "Мудрый лидер нашего племени. Его спокойствие и рассудительность помогают племени процветать даже в самые трудные времена.",
      imageUrl: "https://cdn.poehali.dev/files/ea6574f5-5822-4fb9-90be-fdf02daf377b.jpeg",
      category: "leaders",
      achievement: "Основатель"
    },
    {
      id: 2,
      name: "Водяная Мудрость",
      role: "Шаман",
      description: "Знаток целебных трав и хранитель древних традиций. Проводит большую часть времени в воде, медитируя и общаясь с духами.",
      imageUrl: "https://cdn.poehali.dev/files/4c2d1b65-a3fb-4885-a076-4cbe8c03464e.jpeg",
      category: "shamans"
    },
    {
      id: 3,
      name: "Мандариновый Мыслитель",
      role: "Советник",
      description: "Всегда с фруктом на голове — символом плодородия и изобилия. Его стратегическое мышление помогает племени находить лучшие места для поселений.",
      imageUrl: "https://cdn.poehali.dev/files/afa2cfb8-f15f-4a77-a6d4-810bf2b91516.jpg",
      category: "advisors",
      achievement: "Стратег"
    },
    {
      id: 4,
      name: "Солнечный Луч",
      role: "Хранитель традиций",
      description: "Ответственен за сохранение истории племени. Обладает исключительной памятью и знает все легенды и мифы капибар.",
      imageUrl: "https://images.unsplash.com/photo-1577114996865-cb8f6be888a3?q=80&w=2069",
      category: "elders"
    },
    {
      id: 5,
      name: "Речная Звезда",
      role: "Охотница",
      description: "Самая быстрая пловчиха в племени. Может часами находиться под водой и добывать самые сочные водоросли для всего племени.",
      imageUrl: "https://images.unsplash.com/photo-1525434280327-e525e03f17ef?q=80&w=2070",
      category: "hunters"
    },
    {
      id: 6,
      name: "Травяной Шепот",
      role: "Целитель",
      description: "Знает все о лечебных растениях и травах. Его припарки и отвары помогают при любых недугах и болезнях.",
      imageUrl: "https://images.unsplash.com/photo-1591382386627-349b692688ff?q=80&w=2067",
      category: "shamans"
    }
  ];
  
  const filteredMembers = activeTab === "all" 
    ? tribeMembers 
    : tribeMembers.filter(member => member.category === activeTab);

  return (
    <div className="bg-amber-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center font-playfair text-3xl font-bold text-amber-800 md:text-4xl">
          Члены Племени
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-amber-700">
          Познакомьтесь с удивительными представителями нашего племени. Каждый из них вносит важный вклад в жизнь и процветание общины.
        </p>
        
        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList className="bg-amber-100">
              <TabsTrigger value="all" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Все члены
              </TabsTrigger>
              <TabsTrigger value="leaders" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Вожди
              </TabsTrigger>
              <TabsTrigger value="shamans" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Шаманы
              </TabsTrigger>
              <TabsTrigger value="advisors" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                Советники
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMembers.map((member) => (
            <CapybaraTribeMember
              key={member.id}
              name={member.name}
              role={member.role}
              description={member.description}
              imageUrl={member.imageUrl}
              achievement={member.achievement}
              className="animate-fade-in"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
