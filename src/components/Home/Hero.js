import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import DoctorHero from "../../assets/doctor_img.png";
import { Button, Typography } from "@mui/material";

export const Hero = () => {
  return (
    <Box zIndex={-10} sx={{ bgcolor: "#e8f1ff", position:"relative" }}>
      <Stack direction={{sx:"column", md:"row"}} alignItems="center" spacing={6} justifyContent="center">
        <Box p={6} display="flex" flexDirection="column" alignItems="start" justifyContent="end">
          <Typography sx={{fontSize:{xs:"20px",sm:"40px", md:"30px", lg: "50px", xl: "60px"}}} color="#1b3c74">Skip the travel! Find Online</Typography>
          <Typography sx={{fontSize:{xs:"35px",sm:"60px", md:"40px", lg: "70px", xl: "80px"}}} fontWeight={700} color="#1b3c74">Medical <span style={{ color: '#1f93e6' }}>Centers</span></Typography>
          <Typography my={1} sx={{fontSize:{xs:"12px",sm:"20px", md:"25px", lg: "30px", xl: "30px"}}} color="gray">Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</Typography>
          <Button 
          sx={{
            mb: {xs: "0px", md: "100px"},
            marginBottom:"100px",
            backgroundColor:"#2aa7ff", color:"white", 
            '&:hover': {
                backgroundColor: '#1f93e6',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',  
          }}>Search</Button>
        </Box>
          <Box
            component={"img"}
            src={DoctorHero}
            width={{ xs:"80%",md:"40%", lg: "35%" }}
            p={4}
          />
      </Stack>
    </Box>
  );
};
