import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID deedb3a78776fab519ce346556949de028e351dca35aeb99886d203aecd6e791"
  }
});
