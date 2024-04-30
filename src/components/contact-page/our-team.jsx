import { TeamMemberCard } from "..";

function OurTeam() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="max-w-7xl m-auto">
        <h3 className="text-2xl font-semibold py-3 text-center ">
          Quelques mot sur{" "}
        </h3>
        <h2 className="md:text-4xl text-3xl font-bold py-6 text-center ">
          Notre Equipe
        </h2>
        <p className="max-w-3xl text-center m-auto">
          Nous aimons ce que nous faisons et nous sommes passionnés par la
          technologie. Cette passion se reflète dans notre travail et dans la
          qualité de nos solutions.
        </p>

        <div className="flex items-center justify-center gap-6 py-6 flex-wrap">
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
