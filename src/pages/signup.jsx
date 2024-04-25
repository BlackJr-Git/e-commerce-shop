import { SignUpForm } from "@/components";

function SignUp() {
  return (
    <div className="h-[75vh] pt-32 px-12 pb-12 bg-slate-100">
      <div className="w-full h-full bg-slate-50 rounded-xl p-3 flex  justify-center">
        <div className=" bg-[url('src/assets/images/hand-trust-nawtech.jpg')]  w-1/2 h-full rounded-2xl">

        </div>
        <div className="w-1/2 h-full rounded-2xl ">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
