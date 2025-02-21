import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { ColorContext } from "../Contexts/ColorContaxt";
import { ColorLens } from "@mui/icons-material";
import { TextColorContext } from "../Contexts/TextColorContext";
import { CompanyNameContext } from "../Contexts/CompanyName";
import { Link } from "react-router-dom";

const pages = ["about", "contact", "product"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = () => {
  const { color, setColor } = useContext(ColorContext);
  const { textColor, setTextColor } = useContext(TextColorContext);
  const { companyName } = useContext(CompanyNameContext);
  
  const changeColor = (colorName) => {
    if (colorName == "Green & Cyan") {
      setColor("green");
      setTextColor("#00bcd4");
    } else {
      setColor("#009688");
      setTextColor("#795548");
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: color }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/"><Typography variant="h6" className="mainName">{companyName}</Typography></Link>
            <Box>
              <Stack direction="row" spacing={2}>
                {pages.map((page) => (
                  <MenuItem key={page}>
                    <Link to={`/${page}`}><Typography sx={{ textAlign: "center" }}>{page}</Typography></Link>
                  </MenuItem>
                ))}
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          icon={<ColorLens />}
          onClick={() => changeColor("Green & Cyan")}
          tooltipTitle={"Green & Cyan"}
        />
        <SpeedDialAction
          icon={<ColorLens />}
          onClick={() => changeColor("Dark Green & Brown")}
          tooltipTitle={"Dark Green & Brown"}
        />
      </SpeedDial>
    </>
  );
};
export default NavBar;
