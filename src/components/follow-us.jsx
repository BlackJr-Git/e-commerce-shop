import { NawtechService } from "@/assets";

function FollowUs() {
  return (
    <section
      className="bg-cover bg-fixed bg-center bg-no-repeat shadow-lg py-3 md:py-0"
      style={{
        backgroundImage: `url(${NawtechService})`,
      }}
    >
      <div className="bg-slate-50 w-60 h-40 md:w-96 md:h-96 m-auto flex flex-col gap-6 justify-center items-center">
        <h3 className="md:text-4xl text-2xl font-bold py-6 text-center">
          Suivez Nous
        </h3>
        <div className="flex justify-center items-center gap-6 text-2xl">
          <ion-icon name="logo-linkedin"></ion-icon>
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
        </div>
      </div>
    </section>
  );
}

export default FollowUs;
