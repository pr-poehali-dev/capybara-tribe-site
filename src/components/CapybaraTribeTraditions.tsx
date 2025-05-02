import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function CapybaraTribeTraditions() {
  const traditions = [
    {
      title: "Водное очищение",
      description: "Ежедневный ритуал погружения в воду на рассвете. Вода смывает негативную энергию и заряжает племя силой на весь день.",
      icon: "Droplets"
    },
    {
      title: "Собрание полнолуния",
      description: "Раз в месяц все племя собирается у воды под полной луной. В этот момент шаманы передают знания и проводят церемонии.",
      icon: "Moon"
    },
    {
      title: "Травяной сбор",
      description: "Сезонный сбор целебных трав, которыми племя лечится весь год. Каждый участвует в сборе, выполняя свою роль.",
      icon: "Leaf"
    }
  ];

  const sacredPlaces = [
    {
      name: "Кристальная заводь",
      description: "Место, где проводятся важные ритуалы и церемонии посвящения."
    },
    {
      name: "Холм предков",
      description: "Место медитации и общения с духами предков племени."
    },
    {
      name: "Поляна изобилия",
      description: "Здесь растут самые редкие целебные травы, доступ сюда имеют только шаманы и их ученики."
    }
  ];

  return (
    <div className="bg-amber-50 py-16" id="traditions">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center font-playfair text-3xl font-bold text-amber-800 md:text-4xl">
          Традиции Племени
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-amber-700">
          Наше племя капибар следует древним традициям, передаваемым из поколения в поколение. 
          Эти обычаи позволяют нам жить в гармонии с природой и друг с другом.
        </p>
        
        <div className="mb-16 grid gap-10 md:grid-cols-3">
          {traditions.map((tradition, index) => (
            <div 
              key={index}
              className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-600 text-white">
                <Icon name={tradition.icon} size={32} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-amber-800">{tradition.title}</h3>
              <p className="text-amber-700">{tradition.description}</p>
            </div>
          ))}
        </div>
        
        <Separator className="mb-12 bg-amber-200" />
        
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-amber-800">Священные места</h3>
            <div className="space-y-6">
              {sacredPlaces.map((place, index) => (
                <div key={index} className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-2 text-lg font-semibold text-amber-800">{place.name}</h4>
                  <p className="text-amber-700">{place.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="mb-6 text-2xl font-bold text-amber-800">Сезонный календарь</h3>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                    <Icon name="Sun" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800">Время Цветения</h4>
                    <p className="text-amber-700">Сбор первых трав и обучение молодых капибар плаванию</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-600 text-white">
                    <Icon name="Flame" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800">Время Тепла</h4>
                    <p className="text-amber-700">Длительные погружения в воду и праздник плодородия</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-white">
                    <Icon name="Wind" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800">Время Сбора</h4>
                    <p className="text-amber-700">Заготовка корней и трав на холодный период</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Icon name="Snowflake" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800">Время Покоя</h4>
                    <p className="text-amber-700">Медитации, передача знаний и подготовка к новому циклу</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
