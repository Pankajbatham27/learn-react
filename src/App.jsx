import { useContext, useEffect, useState } from "react";
import Button from "./components/Button";
import ChildUn from "./components/childUn";
import ProfileCard from "./components/ProfileCard";
import Status from "./components/status";
import "./index.css";
import "./App.css";
import SearchWithDebounce from "./components/SearchWithDebounce";
import Timer from "./components/Timer";
import ManageArrayUsingState from "./components/ManageArrayUsingState";
import Counter from "./components/Counter";
import BasicComponent from "./components/BasicComponent";
import SimpleComponent from "./components/SimpleComponent";
import Controlled from "./components/Controlled";
import UncontrolledComponent from "./components/UncontrolledComponent";
import { MessageProvider } from "./components/MessageContext";
import DisplayMessage from "./components/DisplayMessage";
import UpdateContextValue from "./components/UpdateContextValue";
import { ColorProvider } from "./components/Contexts/ColorContaxt";
import NavBar from "./components/UI/NavBar";
import HeroSection from "./components/UI/HeroSection";
import About from "./components/UI/About";
import MediaCard from "./components/UI/MediaCard";
import {
  Box,
  Container,
  Grid2,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Typography,
} from "@mui/material";
import Footer from "./components/UI/Footer";
import { TextColorProvider } from "./components/Contexts/TextColorContext";
import { CompanyNameProvider } from "./components/Contexts/CompanyName";
import { Dashboard } from "@mui/icons-material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/About";
import Contact from "./components/Pages/Contact";
import ProductList from "./components/Pages/ProductList";
import SingleProduct from "./components/Pages/SingleProduct";
import AxiosDemo from "./components/Pages/AxiosDemo";
import LearnCustomHook from "./components/Pages/LearnCustomHook";
import CalculationPractice from "./components/CalculationPractice";
import UnderstandUseCallback from "./components/UnderstandUseCallback";
import Debouncing from "./components/Debouncing";
import HOCComponent from "./components/HOCComponent";
import HOCChild from "./components/HOCChild";
import Accessibility from "./components/Accessibility";
import ReduxCounter from "./components/ReduxCounter";
import ThrottledResize from "./components/ResizeExample";
import LeanStorage from "./components/LeanStorage";
import Animation from "./components/Animation";

const status = "active";

const listArr = ["Name 1", "Name 2", "Name 3"];

const profile = [
  {
    name: "Pankaj",
    image: "user1.jpg",
    age: 28,
    hobbies: ["Coding", "Games"],
    status: 1,
  },
  {
    name: "Shakil",
    image: "user2.jpg",
    age: 32,
    hobbies: ["Coding", "Games"],
    status: 0,
  },
  {
    name: "Aamir",
    image: "user3.webp",
    age: 30,
    hobbies: [],
    status: 1,
  },
];

// const restUnderstanding = () => {
//   const arr = [1,2,3,4,5]

//   const [first, ...newArr] = arr;

//   console.log(first)
//   console.log(newArr)
// }

const App = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    // console.log("ASd")
  }, [state]);

  const perantFunc = () => {
    // console.log("test run")

    setState(20);
  };

  const AfterAuth = HOCComponent(HOCChild)

  const DebouncingWithBorder = HOCComponent(Debouncing)

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ColorProvider>
                <TextColorProvider>
                  <CompanyNameProvider>
                    <NavBar />
                    <HeroSection />
                    <About />
                    <Box marginBottom={5}>
                      <Container>
                        <Grid2 container spacing={2}>
                          <Grid2 item size={4}>
                            <MediaCard />
                          </Grid2>
                          <Grid2 item size={4}>
                            <MediaCard />
                          </Grid2>
                          <Grid2 item size={4}>
                            <MediaCard />
                          </Grid2>
                        </Grid2>
                      </Container>
                    </Box>
                    <Footer />
                  </CompanyNameProvider>
                </TextColorProvider>
              </ColorProvider>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/redux-counter" element={<ReduxCounter />} />

          <Route path="/learn-axios" element={<AxiosDemo />} />

          <Route path="/learn-custom-hook" element={<LearnCustomHook />} />

          <Route path="/learn-memo" element={<CalculationPractice />} />
          <Route path="/learn-use-callback" element={<UnderstandUseCallback />} />
          
          <Route path="/debouncing" element={<DebouncingWithBorder />} />

          <Route path="/hoc" element={<AfterAuth name="Aamir" />} />
          <Route path="/accessibility" element={<Accessibility />} />


          <Route path="/resize-example" element={<ThrottledResize />} />
          <Route path="/learn-storage" element={<LeanStorage />} />

          <Route path="/learn-animation" element={<Animation />} />
          

          <Route path="/product" element={<ProductList />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>

      {/*  */}

      {/* <Timer /> */}
      {/* <ManageArrayUsingState /> */}
      {/* <Counter /> */}

      {/* <SimpleComponent name={'Test'} /> */}
      {/* <Controlled /> */}
      {/* <UncontrolledComponent /> */}

      {/* <h1>{state}</h1> */}

      {/* <Button label={"Click Me"} perantFunc11={perantFunc} /> */}

      {/* <Button /> */}

      {/* <ChildUn>
        <h1>Test</h1>
        <p>test and checking</p>
      </ChildUn> */}

      {/* {profile.map((value, key) => (
        <ProfileCard key={key} profile={value} />
      ))} */}

      {/* <h1 className={status === "active" ? "colorGreen" : "colorRed"} style={{fontSize: '50px'}}>
        {status === "active" ? <Status status={"Active"} /> : <Status status={"Deactive"} />}
      </h1>
      <h2>Hello Aamir</h2>
      <ul>
        {listArr.map((value, key) => (
          <li key={key}>{value}</li>
        ))}
      </ul> */}
    </>
  );
};

export default App;
