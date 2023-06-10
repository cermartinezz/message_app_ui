import Cookies from "js-cookie";
import Api from "./api";

export default function getCookie() {
  let session = Cookies.get("session");

  if (session) {
    return new Promise((resolve) => {
      resolve(session);
    });
  }

  return Api.get("/id");
}
