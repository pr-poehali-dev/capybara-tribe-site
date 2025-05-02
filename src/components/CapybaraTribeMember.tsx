import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CapybaraTribeMemberProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  className?: string;
  achievement?: string;
}

export default function CapybaraTribeMember({
  name,
  role,
  description,
  imageUrl,
  className,
  achievement
}: CapybaraTribeMemberProps) {
  return (
    <Card className={cn("overflow-hidden transition-all duration-300 hover:shadow-lg", className)}>
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
        />
        {achievement && (
          <div className="absolute right-3 top-3">
            <Badge className="bg-amber-600">{achievement}</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="mb-1 text-xl font-bold text-amber-800">{name}</h3>
        <p className="mb-3 text-sm font-medium text-amber-600">{role}</p>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
