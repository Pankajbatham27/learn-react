import { Box, Container, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useContext } from "react";
import { ColorContext } from "../Contexts/ColorContaxt";
import { CompanyNameContext } from "../Contexts/CompanyName";
const Footer = () => {
  
  const { color } = useContext(ColorContext);
  const { companyName } = useContext(CompanyNameContext);

  return (
    <Box bgcolor={color} paddingY={2}>
      <Container maxWidth="xl">
        <Typography color="#fff">@CopyRight {companyName}</Typography>
      </Container>
    </Box>
  );
};
export default Footer;
