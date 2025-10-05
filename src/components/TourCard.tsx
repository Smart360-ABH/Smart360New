
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TourCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tourUrl: string;
}

const TourCard = ({ title, description, imageUrl, tourUrl }: TourCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 overflow-hidden">
        <picture>
          <source type="image/avif" srcSet={imageUrl ? imageUrl.replace(/\.(jpg|png|jpeg)$|$/, '.avif') : undefined} />
          <source type="image/webp" srcSet={imageUrl ? imageUrl.replace(/\.(jpg|png|jpeg)$|$/, '.webp') : undefined} />
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
            decoding="async"
            />
        </picture>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={tourUrl}>Смотреть виртуальный тур</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TourCard;
