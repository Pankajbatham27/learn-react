import { Button } from "@mui/material";
import Cookies from "js-cookie";

const LeanStorage = () => {
  const setData = () => {
    localStorage.setItem("username", "Pankajbatham27");
  };

  const getData = () => {
    const value = localStorage.getItem("username");
    alert(value);
  };

  const removeData = () => {
    const value = localStorage.removeItem("username");
  };


//   ============

const setCookieData = () => {
  Cookies.set("user_id", "29", {expires: 1, domain: 'localhost', sameSite: "Strict", secure: true })
}

const getCookieData = () => {
  const value = Cookies.get("user_id")
  alert(value)
}

const removeCookieData = () => {
  Cookies.remove("user_id")
}

  return (
    <>
      <div>
        <h1>Local Storage</h1>
        <Button variant="contained" onClick={setData}>
          Set Local Storage
        </Button>
        <Button variant="contained" onClick={getData}>
          Get Local Storage
        </Button>
        <Button variant="contained" onClick={removeData}>
          Remove Local Storage
        </Button>
      </div>
      <div>
        <h1>Cookie Storage</h1>
        <Button variant="contained" onClick={setCookieData}>
          Set Cookie
        </Button>
        <Button variant="contained" onClick={getCookieData}>
          Get Cookie
        </Button>
        <Button variant="contained" onClick={removeCookieData}>
          Remove Local Storage
        </Button>
      </div>
    </>
  );
};
export default LeanStorage;
