import { ServiceCard } from "../";

function Services() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="max-w-7xl m-auto  flex justify-center gap-8 px-4 flex-wrap">
        <ServiceCard
          icon={"cart-outline"}
          serviceTitle={"Boutique"}
          description={
            "Vos achat de smartphone, ordinateurs et des différents outils informatique."
          }
        />
        <ServiceCard
          icon={"code-slash-outline"}
          serviceTitle={"Services"}
          description={
            "Nous offrons les meilleurs services informatiques avec des experts en la matière."
          }
        />
        <ServiceCard
          icon={"hardware-chip-outline"}
          serviceTitle={"Produits"}
          description={
            "Nous développons des produits sur les nouvelles technologie pour vous faciliter la vie."
          }
        />
      </div>
    </section>
  );
}

export default Services;

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-6xl m-auto"
    >
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <ServiceCard
                    icon={"cart-outline"}
                    serviceTitle={"Boutique"}
                    description={
                      "Vos achat de smartphone, ordinateurs et des différents outils informatique."
                    }
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
