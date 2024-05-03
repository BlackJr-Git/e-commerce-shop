/* eslint-disable react/prop-types */
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function UploadImage({ setImageUrl }) {
  const [file, setFile] = useState(null);

  const upload = async () => {
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      `${import.meta.env.CLOUDINARY_UPLOAD_PRESET}`
    );
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/devhqdrwl/image/upload",
        formData
      );

      setImageUrl(response.data.secure_url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex gap-3">
      <Input
        className="bg-slate-100"
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <Button type="button" onClick={upload}>
        Upload
      </Button>
    </div>
  );
}

export default UploadImage;
