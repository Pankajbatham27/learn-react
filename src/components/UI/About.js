import { Box, Container, Typography } from "@mui/material";
import { useContext } from "react";
import { TextColorContext } from "../Contexts/TextColorContext";
import { CompanyNameContext } from "../Contexts/CompanyName";
import style from './about.module.css'

const About = () => {

  const {textColor} = useContext(TextColorContext);
  const { companyName } = useContext(CompanyNameContext);

  return (
    
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      marginY={5}
    >
      <Container maxWidth="xl">
        <Typography variant="h3" marginBottom={2} color={textColor} className={style.mainName}>
          About {companyName}
        </Typography>
        <Typography variant="body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Container>
    </Box>
  );
};
export default About;
