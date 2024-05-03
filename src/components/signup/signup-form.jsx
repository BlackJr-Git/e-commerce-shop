import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useStore } from "@/appStore";
import { Navigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

function SignUpForm() {
  const { currentUser } = useStore();
  const { toast } = useToast();
  const [redirect, setRedirect] = useState(false);
  const methods = useForm({
    defaultValues: {
      name: "",
      firstName: "",
      phone: "",
      email: "",
      country: "Congo-Kinshasa",
      address: "",
      address2: "",
      city: "",
      township: "",
      password: "",
      avatar:
        "https://res.cloudinary.com/devhqdrwl/image/upload/v1713983564/Users_Avatars/mdijirvhladlipqfmcgh.png",
    },
  });
  const { handleSubmit, reset } = methods;
  const [page, setPage] = useState(0);

  const FormTitles = [
    "Inscrivez-vous",
    "Informations personnels",
    "Informations de localisation",
  ];
  const stepsComponents = [LoginInfo, PersonalInfo, LocationInfo];

  const onNext = () => {
    setPage((current) => Math.min(current + 1, stepsComponents.length - 1));
  };

  const onPrev = () => {
    setPage((current) => Math.max(current - 1, 0));
  };

  const onSubmit = async (data) => {
    if (page === FormTitles.length - 1) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URI}/api/users/add`,
          data
        );
        console.log(response);
        toast({
          title: "Votre compte a ete crée avec sucees",
        });
        reset();
        setRedirect(true);
      } catch (error) {
        console.error("Error:", error);
        toast({
          variant: "destructive",
          title: "Erreur lors de la creation du compte",
          description: error.response.data,
        });
      }
    } else {
      onNext();
    }
  };

  if (currentUser.id) {
    return <Navigate to="/" replace />;
  }

  if (redirect) {
    return <Navigate to="/login" replace />;
  }

  const ActiveStep = stepsComponents[page];

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full flex flex-col items-center justify-center gap-6"
      >
        <div className="header">
          <h1 className="text-3xl font-semibold mb-10">{FormTitles[page]}</h1>
        </div>

        <ActiveStep />

        <div className="flex gap-3 justify-between w-96">
          {page > 0 && (
            <Button type="button" className="w-40" onClick={onPrev}>
              Precedent
            </Button>
          )}
          <Button type="submit" className="w-40">
            {page === FormTitles.length - 1 ? "Submit" : "Suivant"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default SignUpForm;

function LoginInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-3">
      <Input
        {...register("email", {
          required: "Ce champ est obligatoire",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Ce champ n'est pas un email valide",
          },
        })}
        type="text"
        placeholder="exemple@mail.com"
        className={`w-96 h-12 bg-slate-100 ${
          errors.email ? "border-red-500" : ""
        }`}
      />
      <div className="w-96 flex items-center justify-end h-1 mb-1">
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <Input
        {...register("password", { required: "Ce champ est obligatoire" })}
        type="password"
        placeholder="your password"
        className={`w-96 h-12 bg-slate-100 ${
          errors.password ? "border-red-500" : ""
        }`}
      />
      <div className="w-96 flex items-center justify-end h-1 mb-1">
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
    </div>
  );
}

function PersonalInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-3">
      <Input
        {...register("name", { required: "Ce champ est obligatoire" })}
        type="text"
        placeholder="Doe"
        className={`w-96 h-12 bg-slate-100 ${
          errors.name ? "border-red-500" : ""
        }`}
      />
      <div className="w-96 flex items-center justify-end h-1 mb-1">
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <Input
        {...register("firstName", { required: "Ce champ est obligatoire" })}
        type="text"
        placeholder="John"
        className={`w-96 h-12 bg-slate-100 ${
          errors.firstName ? "border-red-500" : ""
        }`}
      />
      <div className="w-96 flex items-center justify-end h-1 mb-1">
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}
      </div>
      <Input
        {...register("phone", {
          required: "Ce champ est obligatoire",
          pattern: {
            value: /^[0-9]{10}$/i,
            message: "Ce champ n'est pas un numero de telephone valide",
          },
        })}
        type="text"
        placeholder="085*******"
        className={`w-96 h-12 bg-slate-100 ${
          errors.phone ? "border-red-500" : ""
        }`}
      />
      <div className="w-96 flex items-center justify-end h-1 mb-1">
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>
    </div>
  );
}

function LocationInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-3">
      <select
        {...register("country", { required: "Ce champ est obligatoire" })}
        className="p-1 border w-96 h-12 bg-slate-100 rounded-md text-base"
      >
        <option value="Congo-Kinshasa">Congo-Kinshasa</option>
        <option value="Congo-Brazzaville">Congo-Brazzaville</option>
      </select>

      <Input
        {...register("city", { required: "Ce champ est obligatoire" })}
        type="text"
        placeholder="Kinshasa"
        className={`w-96 h-12 bg-slate-100 ${
          errors.city ? "border-red-500" : ""
        }`}
      />
      <div className="w-96 flex items-center justify-end h-1 mb-1">
        {errors.city && (
          <p className="text-red-500 text-sm">{errors.city.message}</p>
        )}
      </div>
      <Input
        {...register("township", { required: "Ce champ est obligatoire" })}
        type="text"
        placeholder="Ngaliema"
        className={`w-96 h-12 bg-slate-100 ${
          errors.township ? "border-red-500" : ""
        }`}
      />
      <div className="w-96 flex items-center justify-end h-1 mb-1">
        {errors.township && (
          <p className="text-red-500 text-sm">{errors.township.message}</p>
        )}
      </div>
      <Input
        {...register("address", { required: "Ce champ est obligatoire" })}
        type="text"
        placeholder="6, Av Lumumba Q/Jolie vent"
        className={`w-96 h-12 bg-slate-100 ${
          errors.address ? "border-red-500" : ""
        }`}
      />
      <div className="w-96 flex items-center justify-end h-1 mb-1">
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
      </div>
      <Input
        {...register("address2")}
        type="text"
        placeholder="ref : rond point socimat"
        className="w-96 h-12 bg-slate-100"
      />
    </div>
  );
}
