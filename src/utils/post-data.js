// mailjet 

import axios from "axios";

// let postUrl = "https://twitter-api-6zi0.onrender.com/api/tweets/add";

async function postData(product , postUrl) {
  try {
    const response = await axios.put(postUrl, product);
    alert("le produit a été mise a jour");
  } catch (error) {
    console.error("Une erreur s'est produite:", error);
    alert("Une erreur s'est produite lors de l'envoi des données");
  }
}

export default postData;  