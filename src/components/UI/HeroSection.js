import { Box, Input, Typography } from "@mui/material";
import { useContext } from "react";
import { TextColorContext } from "../Contexts/TextColorContext";
import { CompanyNameContext } from "../Contexts/CompanyName";


const HeroSection = () => {

    const {textColor} = useContext(TextColorContext);
    const { companyName, setCompanyName } = useContext(CompanyNameContext);



    const changeHandler = (e) => {
        setCompanyName(e.target.value);
    }
    

    return (
        <Box sx={{background: '#000', backgroundSize: 'cover'}} height={'400px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Input onChange={changeHandler} value={companyName} sx={{color: textColor, fontSize: '6rem', "& input": {textAlign: 'center'} }} />
            {/* <Typography variant="h1" color={textColor}>{companyName}</Typography> */}
        </Box>
    )
}
export default HeroSection;