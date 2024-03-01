import { ServiceCard } from "..";

function Services() {
  return (
    <section className="bg-slate-50 py-24">
      <h2 className="text-4xl font-bold pb-24 text-center">
        Ce que nous vous offrons
      </h2>
      <div className="max-w-7xl m-auto  flex flex-wrap justify-center items-center gap-6 px-4">
        <ServiceCard
        link={'/boutique'}
          icon={"cart-outline"}
          serviceTitle={"Boutique"}
          description={
            "Vos achat de smartphone, ordinateurs et des différents outils informatique."
          }
        />
        <ServiceCard
        link={'/services'}
          icon={"code-slash-outline"}
          serviceTitle={"Services"}
          description={
            "Nous offrons les meilleurs services informatiques avec des experts en la matière."
          }
        />
        <ServiceCard
          link={'/'}
          icon={"hardware-chip-outline"}
          serviceTitle={"Outils"}
          description={
            "Nous développons des outils sur les nouvelles technologie pour vous faciliter la vie."
          }
        />
      </div>
    </section>
  );
}

export default Services;
