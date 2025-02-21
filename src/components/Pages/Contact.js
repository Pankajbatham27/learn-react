import { ColorProvider } from "../Contexts/ColorContaxt";
import { CompanyNameProvider } from "../Contexts/CompanyName";
import { TextColorProvider } from "../Contexts/TextColorContext";
import NavBar from "../UI/NavBar";

const Contact = () => {

  return new Error("Something went wrong!");
  return (
    <ColorProvider>
      <TextColorProvider>
        <CompanyNameProvider>
          <NavBar />
          <h1>Conatct Info</h1> 
        </CompanyNameProvider>
      </TextColorProvider>
    </ColorProvider>
  );
};
export default Contact;
