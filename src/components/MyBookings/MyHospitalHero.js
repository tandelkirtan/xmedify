import { Box, Typography } from "@mui/material";
import free from "../../assets/free.png";
import { MyHospitalList } from "./MyHospitalList";
import { useEffect } from "react";
import { useState } from "react";

export const MyHospitalHero = () => {
    const[localData, setLocalData] = useState([])

  useEffect(() => {
  const localBookings = localStorage.getItem("bookings");
  if (localBookings) {
    const parsedBookings = JSON.parse(localBookings);
    setLocalData(parsedBookings)
    // console.log("All bookings:", parsedBookings);
    // console.log(parsedBookings.length);
    // console.log(parsedBookings[0].appointmentDate);
    // console.log(parsedBookings[0].appointmentDate);
    // console.log(parsedBookings[0].hospital);
  }
}, [])

  return (
    <Box width="90%" sx={{
        display:"flex",
        alignItems:"start",
        justifyContent:"center",
        flexDirection:{xs: "column", md:"row"}
    }}>
        <Box sx={{
            width:{xs: "100%", md:"70%"},
            margin:"10px"
        }}>
            {localData.length > 0 ?
            localData.map((item, index) => (
                <MyHospitalList key={item.id || index} item={item}/>
            ))
            :
            <Typography bgcolor="white" border={1} borderRadius={1} fontWeight={600} fontSize={30} p={5}>No Booking Yet !!!</Typography>}
        </Box>
        <Box component="img" src={free} alt="free" sx={{
            width:{xs: "100%", md:"30%"},
            margin:"10px"
        }}></Box>
    </Box>
  );
};
