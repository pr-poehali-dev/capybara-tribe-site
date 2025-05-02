import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function CapybaraTribeGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{url: string, title: string, description: string} | null>(null);
  
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1526154001126-3be098c9fe25?q=80&w=2070",
      title: "Речные прогулки",
      description: "Капибары нашего племени проводят много времени в воде, где они медитируют и укрепляют свою связь с природой"
    },
    {
      url: "https://images.unsplash.com/photo-1600366060302-9fb7682b062b?q=80&w=1974",
      title: "Отдых на берегу",
      description: "Моменты отдыха и умиротворения важны для каждого члена племени"
    },
    {
      url: "https://images.unsplash.com/photo-1598382694281-94ae52df051e?q=80&w=1984",
      title: "Общение с природой",
      description: "Наше племя чтит все живые существа и живет с ними в гармонии"
    },
    {
      url: "https://images.unsplash.com/photo-1588960952097-4ce2f718e9e5?q=80&w=2070",
      title: "Священные водоемы",
      description: "Места, где мы проводим ритуалы и важные церемонии"
    },
    {
      url: "https://images.unsplash.com/photo-1579832112257-63c9e5fcfc88?q=80&w=1976",
      title: "В кругу семьи",
      description: "Семейные узы очень крепки в нашем племени, мы всегда заботимся друг о друге"
    },
    {
      url: "https://images.unsplash.com/photo-1509429399582-54d55c54e893?q=80&w=1170",
      title: "Травяные луга",
      description: "Места, где мы собираем целебные травы и обучаем этому искусству молодое поколение"
    }
  ];
  
  const openLightbox = (image: {url: string, title: string, description: string}) => {
    setSelectedImage(image);
    setIsOpen(true);
  };
  
  return (
    <div className="bg-white py-16" id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center font-playfair text-3xl font-bold text-amber-800 md:text-4xl">
          Галерея Племени
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-amber-700">
          Редкие моменты из жизни нашего племени, запечатленные на изображениях. 
          Эти фотографии показывают нашу гармоничную связь с природой.
        </p>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(image)}
            >
              <AspectRatio ratio={4/3} className="bg-muted">
                <img 
                  src={image.url}
                  alt={image.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-lg font-bold">{image.title}</h3>
                  </div>
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-amber-800">{selectedImage?.title}</DialogTitle>
            <DialogDescription>{selectedImage?.description}</DialogDescription>
          </DialogHeader>
          <div className="overflow-hidden rounded-lg">
            <img 
              src={selectedImage?.url} 
              alt={selectedImage?.title} 
              className="h-full w-full object-contain" 
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
