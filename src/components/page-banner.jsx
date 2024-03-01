import { NawtechService } from "@/assets";


function PageBanner({title,description}) {
  return (
    <section className=" bg-slate-100 py-12 -z-10">
      <div className={`max-w-7xl m-auto  rounded-2xl flex items-center justify-center md:h-[80vh] h-[60vh] bg-[url(${NawtechService})] bg-center bg-cover mx-6 -z-50 page-banner`} >
        <div className="w-full h-full bg-black  rounded-2xl bg-opacity-60 flex items-center justify-center flex-col gap-6 ">
            <h1 className="text-5xl font-bold text-slate-50 z-10 "> {title} </h1>
            <p className="font-medium text-lg px-4 text-slate-50 md:px-60 text-center"> {description} </p>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;
