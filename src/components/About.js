import { Box, Container, Grid2 } from "@mui/material";
import About from "./UI/About";
import MediaCard from "./UI/MediaCard";
import { TextColorProvider } from "./Contexts/TextColorContext";
import { CompanyNameProvider } from "./Contexts/CompanyName";
import { ColorProvider } from "./Contexts/ColorContaxt";
import NavBar from "./UI/NavBar";
import Footer from "./UI/Footer";

const AboutPage = () => {
  return (
    <>
      <ColorProvider>
        <TextColorProvider>
          <CompanyNameProvider>
            <NavBar />
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
    </>
  );
};
export default AboutPage;
