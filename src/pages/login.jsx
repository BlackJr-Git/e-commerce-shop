import { AnimatedPages, LoginForm } from "@/components";
import { loginImage } from "@/assets";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
import { useStore } from "@/appStore";
import { Navigate } from "react-router-dom";

function Login() {
  const { currentUser } = useStore();

  return (
    <AnimatedPages>
      {currentUser.id ? (
        <Navigate to="/" replace /> 
      ) : (
        <section className="bg-slate-100 pt-24">
          <div className="max-w-7xl m-auto p-12">
            <div className="bg-slate-50 h-auto rounded-xl flex flex-col md:flex-row p-3 items-center">
              <div className="md:w-1/2 hidden md:block  w-full h-full bg-primary/50 rounded-xl">
                <img
                  src={loginImage}
                  className="w-full h-full rounded-xl"
                  alt="people shopping"
                />
              </div>
              <LoginForm />
            </div>
          </div>
        </section>
      )}
    </AnimatedPages>
  );
}

export default Login;
