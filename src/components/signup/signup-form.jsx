import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";

function SignUpForm() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
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
  });

  const FormTitles = ["Sign Up Info", "Personal Info", "Location Info"];

  const stepDisplay = () => {
    if (page === 0) {
      return <LoginInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <LocationInfo formData={formData} setFormData={setFormData} />;
    }
  };

  async function onSubmit() {
    {
      if (page === FormTitles.length - 1) {
        try {
          const response = await axios.post(
            "http://localhost:3000/api/users/add",
            formData
          );
          console.log(response);
          alert("User Sign Up Successful");
        } catch (error) {
          console.error("Une erreur s'est produite:", error);
          alert("Une erreur s'est produite lors de l'envoi des données");
        }
      } else {
        setPage((currPage) => currPage + 1);
      }
    }
  }
  return (
    <div className="w-1/2 flex flex-col items-center justify-center gap-6">
      <div className="header">
        <h1>{FormTitles[page]}</h1>
      </div>
      <div>{stepDisplay()}</div>
      <div className="flex gap-3 justify-between w-80">
        <Button className="w-36" onClick={() => page > 0 && setPage(page - 1)}>
          Prev
        </Button>
        <Button className="w-36" onClick={onSubmit}>
          {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
}

export default SignUpForm;

function LoginInfo({ formData, setFormData }) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <Input
          type="text"
          placeholder="exemple@mail.com"
          className="w-96 h-12 bg-slate-100"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <Input
          type="password"
          placeholder="your password"
          className="w-96 h-12 bg-slate-100"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>
    </div>
  );
}

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <Input
          type="text"
          placeholder="Doe"
          className="w-96 h-12 bg-slate-100"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="John"
          className="w-96 h-12 bg-slate-100"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="085*******"
          className="w-96 h-12 bg-slate-100"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
    </div>
  );
}

function LocationInfo({ formData, setFormData }) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <select
          name="country"
          id=""
          className="p-1 border w-96 h-12 bg-slate-100 rounded-md text-base"
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
        >
          <option value="Congo-Kinshasa">Congo-Kinshasa</option>
          <option value="Congo-Brazzaville">Congo-Brazzaville</option>
        </select>
      </div>
      <div>
        <Input
          type="text"
          placeholder="Kinshasa"
          className="w-96 h-12 bg-slate-100"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Ngaliema"
          className="w-96 h-12 bg-slate-100"
          value={formData.township}
          onChange={(e) =>
            setFormData({ ...formData, township: e.target.value })
          }
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="6, Av Lumumba Q/Jolie vent"
          className="w-96 h-12 bg-slate-100"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="ref : rond point socimat"
          className="w-96 h-12 bg-slate-100"
          value={formData.address2}
          onChange={(e) =>
            setFormData({ ...formData, address2: e.target.value })
          }
        />
      </div>
    </div>
  );
}
