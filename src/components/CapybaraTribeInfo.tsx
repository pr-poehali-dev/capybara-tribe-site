import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function CapybaraTribeInfo() {
  const tribeFeatures = [
    {
      icon: "Leaf",
      title: "Близость к природе",
      description: "Капибары живут в гармонии с природой, обитая возле водоемов и в густых лесах."
    },
    {
      icon: "Users",
      title: "Сильная община",
      description: "Племя капибар славится своей сплоченностью. Они всегда поддерживают друг друга."
    },
    {
      icon: "Heart",
      title: "Мирный нрав",
      description: "Капибары известны своим дружелюбием и умением находить общий язык с другими животными."
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-playfair text-3xl font-bold text-amber-800">О нашем племени</h2>
            <p className="mb-4 text-lg text-amber-700">
              Племя капибар ведет свою историю с древних времен. Наши предки всегда жили вблизи рек и озер, создавая процветающие сообщества.
            </p>
            <p className="mb-6 text-lg text-amber-700">
              Мы ценим спокойствие, гармонию и единение с природой. Каждый член племени играет важную роль в нашей общине, от мудрых вождей до молодых охотников.
            </p>
            <Separator className="mb-6 bg-amber-200" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-amber-800">Местообитание</h3>
                <p className="text-amber-700">Реки, озера и заболоченные местности Южной Америки</p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-amber-800">Численность</h3>
                <p className="text-amber-700">Более 500 членов племени</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg bg-amber-100 p-8">
            <h3 className="mb-6 text-center text-2xl font-bold text-amber-800">Особенности племени</h3>
            <div className="space-y-8">
              {tribeFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-white">
                    <Icon name={feature.icon} size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-xl font-semibold text-amber-800">{feature.title}</h4>
                    <p className="text-amber-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
