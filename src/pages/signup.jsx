import { SignUpForm } from "@/components";

function SignUp() {
  return (
    <div className="md:h-[75vh] pt-32 md:px-12 pb-12 bg-slate-100">
      <div className="w-full h-full bg-slate-50 rounded-xl p-3 flex  justify-center">
        <div className="signup-image bg-[url('src/assets/images/hand-trust-nawtech.jpg')]  md:w-1/2 h-full rounded-2xl hidden md:block">

        </div>
        <div className="md:w-1/2 w-full h-full rounded-2xl">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
