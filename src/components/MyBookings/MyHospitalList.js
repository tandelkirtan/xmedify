import { Box, Button, Collapse, Typography } from "@mui/material";
import hl from "../../assets/hospitallogo.png";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export const MyHospitalList = ({item}) => {

const time = item.appointmentTime
const date = item.appointmentDate
const namee = item.hospital["Hospital Name"];
const address = item.hospital["Address"];
const speciality = item.hospital["Hospital Type"];
const rating = item.hospital["Hospital overall rating"];
  

  return (
    <Box mt={2} p={2} borderRadius={2} bgcolor="white" sx={{ display: "flex",gap:"10px", justifyContent: "space-between", alignItems: "center", flexWrap:"wrap"}} >
      <Box sx={{display: "flex", justifyContent: "start", alignItems: "center", width:{xs: "100%", md:"65%"}}}>
        <Box component="img" src={hl} alt="logo"sx={{ width: { xs: "5rem", md: "10rem" }, }}></Box>
        <Box ml={2}>
          <Typography sx={{
            color:"#2aa7ff",
            fontWeight:"700",
            fontSize: "20px"
          }}>{namee}</Typography>
          <Typography fontWeight={600}>{address}</Typography>
          <Typography>{speciality}</Typography>
          <Box
          color="white" mt={1} bgcolor="green" sx={{padding:"2px 10px", borderRadius: "5px", width:"50px", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>
            <ThumbUpIcon/>{rating === "Not Available" ? "5" : rating}</Box>
        </Box>
      </Box>
      <Box sx={{width:{xs: "100%", md:"30%", textAlign:"center"}}}>
        <Button sx={{margin:"10px", color:"#2aa7ff"}} variant="outlined">{time}</Button>
        <Button sx={{
            margin: "10px",
            fontWeight: "bold",
            borderWidth: "2px",
          }} variant="outlined" color="success">{date}</Button>
      </Box>
    </Box>
  );
};
