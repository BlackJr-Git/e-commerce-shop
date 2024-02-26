import { AnimatedPages } from "@/components";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
  } = useForm();
  const [result, setResult] = useState("");
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); 

  function criptLetters(texte, cle) {
    cle = parseInt(cle)
    let newTab = []
    const texteArray = texte.toUpperCase().split(""); 
    texteArray.forEach((element) => {
      let newIndex = alphabet.indexOf(element)  + cle ; 
      if (newIndex > 25) {
        newIndex = newIndex % 26
      }
      newTab.push(alphabet[newIndex])
    })
    setResult(newTab.join(''))
  }

  const onSubmit = (data) => {
    criptLetters(data.texte, data.cle)
  };

  return (
    <AnimatedPages>
      <div className="max-w-7xl m-auto">
        <h1>Criptage</h1>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("texte", {
              required: "Ce champ est obligatoire",
            })}
            className="border border-slate-700"
            type="text"
            placeholder="texte" name="texte"
          />
          <input
            {...register("cle", {
              required: "Ce champ est obligatoire",
            })}
            className="border border-slate-700"
            type="text"
            placeholder="clé" name="cle"
          />
          <button>Cripter</button>
        </form>
        <p> resultat : {result} </p>
      </div>
    </AnimatedPages>
  );
}

export default Login;
