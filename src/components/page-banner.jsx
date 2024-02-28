function PageBanner() {
  return (
    <section className=" bg-slate-100 py-12 -z-10">
      <div className=" max-w-7xl m-auto md:h-[80vh] h-[60vh] rounded-2xl flex items-center justify-center bg-[url('src/assets/images/nawtechservices-herojpg.jpg')] bg-center bg-cover mx-6 -z-50">
        <div className="w-full h-full bg-black  rounded-2xl bg-opacity-60 flex items-center justify-center flex-col gap-6 ">
            <h1 className="text-5xl font-bold text-slate-50 z-10 ">Nos Services</h1>
            <p className="font-medium text-lg px-4 text-slate-50 md:px-60 text-center">Notre équipe s’assure que vous recevez la meilleure qualité de service.</p>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;
