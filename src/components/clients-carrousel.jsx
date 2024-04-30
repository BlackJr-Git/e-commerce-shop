import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Products } from ".";




export function ClientCarousel() {
  return (
    <div className="py-24 flex items-center justify-center max-w-7xl m-auto">
        <Carousel
      opts={{
        align: "center",
        loop : true 
      }}
      className="w-full max-w-6xl m-auto"
    >
      <CarouselContent>
      <CarouselItem>Junior </CarouselItem >
      <CarouselItem>DAVID </CarouselItem >
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  );
}

export default ClientCarousel ; 