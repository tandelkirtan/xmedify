import { Box, Stack } from "@mui/material";
import { MyHospitalSearch } from "../components/MyBookings/MyHospitalSearch";
import { MyHospitalHero } from "../components/MyBookings/MyHospitalHero";
import {  useEffect, useState } from "react";

export const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const localBookings = localStorage.getItem("bookings");

    if (!localBookings) {
      localStorage.setItem("bookings", "[]");
      setBookings([]);
      return;
    }

    setBookings(JSON.parse(localBookings));
  }, [])

  return (
    <Stack alignItems="center" bgcolor="#e8f1ff">
      <Box
        sx={{
          bgcolor: "#2aa7ff",
          height: "80px",
          width:"100%",
          borderRadius: "0px 0px 20px 20px",
        }}
      ></Box>
      <MyHospitalSearch/>
      <MyHospitalHero/>
    </Stack>
  );
};

