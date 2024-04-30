import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useStore } from "@/appStore";

function LoginForm() {
  const { updateUser } = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  async function onSubmit(data) {
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        data
      );
      console.log(response.data);
      updateUser(response.data.user);
      sessionStorage.setItem("currentUser", JSON.stringify(response.data.user));
      sessionStorage.setItem("token", response.data.token);
      alert("vous etes connecté avec succes");
    } catch (error) {
      console.error("Une erreur s'est produite:", error);
      alert("Une erreur s'est produite lors de la connexion");
    }
  }

  return (
    <div className="md:w-1/2 w-full h-full flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col gap-6 h-full">
        <h1 className="text-4xl font-bold text-left w-72">Connexion</h1>
        <div>
          <p>Connectez vous</p>
          <p>et continuer a faire vos achats</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className=" w-80 flex flex-col gap-1">
            <Input
              {...register("email", {
                required: "Ce champ est obligatoire",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Ce champ n'est pas un email valide",
                },
              })}
              placeholder="mail@exemple.com"
              className={`w-80 h-12 bg-slate-100 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            <div className="flex items-center justify-end h-1 m-1 w-80">
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1 w-80 items-end ">
            <Input
              {...register("password", {
                required: "Ce champ est obligatoire",
                minLength: {
                  value: 4,
                  message:
                    "Le mot de passe doit contenir au moins 8 caractères",
                },
              })}
              placeholder="mot de passe"
              type="password"
              className={`w-full h-12 bg-slate-100 ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            <div className="w-80 flex items-center justify-end h-1 m-1">
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>
            <Link to={"/"} className="text-blue-500 font-semibold mt-2">
              Mot de passe oublie ?
            </Link>
          </div>
          <Button className="w-80" type="submit">
            Se connecter
          </Button>
        </form>

        <p className="">
          Pas encore de compte ?{" "}
          <Link to={"/signup"} className="text-blue-500 font-semibold">
            S'enregistrer
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
