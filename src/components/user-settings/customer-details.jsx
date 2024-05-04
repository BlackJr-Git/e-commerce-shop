import { useStore } from "@/appStore";
import { Button } from "../ui/button";
import { UpdateUserLayout } from "..";
import { useState } from "react";
import { AdressForm, PersonalInfoForm } from "..";

function UserDetails() {
  const { currentUser } = useStore();
  const [formLayout, setFormLayout] = useState(false);
  const [form, setForm] = useState(<AdressForm />);

  return (
    <div className="w-1/2 h-full  rounded-xl flex flex-col gap-3">
      {formLayout && <UpdateUserLayout>{form}</UpdateUserLayout>}
      <div className="  border border-slate-200 rounded-xl w-full h-28 flex items-center p-3 gap-6 justify-between ">
        <div className="flex items-center gap-3 ">
          <div>
            <img
              className="rounded-full w-20"
              src={currentUser.avatar}
              alt=""
            />
          </div>

          <div>
            <div className="flex gap-2">
              <p>{currentUser.firstName}</p>
              <p>{currentUser.name}</p>
            </div>
            <p className="font-semibold ">{currentUser.email}</p>
          </div>
        </div>

        {/* <div>
          <Button
            variant="outline"
            onClick={() => {
              setFormLayout(true);
              setForm("Login info");
            }}
          >
            Edit
          </Button>
        </div> */}
      </div>

      <div className="border border-slate-200 rounded-xl w-full  flex flex-col p-3">
        <h2 className="text-xl font-medium mb-6">Personnal Info</h2>

        <div className="flex items-center gap-3 justify-between">
          <div className="flex gap-3 my-3 justify-between flex-col">
            <p>
              First Name:{" "}
              <span className="font-semibold ml-3">
                {currentUser.firstName}
              </span>
            </p>
            <p>
              Last Name:{" "}
              <span className="font-semibold ml-3">{currentUser.name}</span>
            </p>
          </div>
          <div className="flex gap-3 my-3 justify-between flex-col">
            <p>
              Email:{" "}
              <span className="font-semibold ml-3">{currentUser.email}</span>
            </p>
            <p>
              Phone:{" "}
              <span className="font-semibold ml-3">{currentUser.phone}</span>
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              setFormLayout(true);
              setForm(<PersonalInfoForm />);
            }}
          >
            Edit
          </Button>
        </div>
      </div>

      <div className="border border-slate-200 rounded-xl w-full  flex flex-col p-3">
        <h2 className="text-xl font-medium mb-6">Adress</h2>

        <div className="flex items-center gap-3 justify-between">
          <div>
            <div className="flex gap-8">
              <div className="flex gap-3 my-3 flex-col h-full">
                <p>
                  Country:{" "}
                  <span className="font-semibold ml-3">
                    {currentUser.country}
                  </span>
                </p>
                <p>
                  City:{" "}
                  <span className="font-semibold ml-3">{currentUser.city}</span>
                </p>
              </div>
              <div className="flex gap-3 my-3 flex-col h-full">
                <p>
                  Township:{" "}
                  <span className="font-semibold ml-3">
                    {currentUser.township}
                  </span>
                </p>
                <p></p>
              </div>
            </div>
            <div className="flex gap-3 my-3 flex-col h-full justify-end">
              <p className="flex">
                Address :{" "}
                <span className="font-semibold ml-3">
                  {currentUser.address}
                </span>
              </p>
              <p className="">
                <span className="font-semibold">{currentUser.address2}</span>
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              setFormLayout(true);
              setForm(<AdressForm />);
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
