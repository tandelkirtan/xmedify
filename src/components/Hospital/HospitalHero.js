import { Box, Typography } from "@mui/material";
import free from "../../assets/free.png";
import { HospitalList } from "./HospitalList";
import { useContext } from "react";
import { MedifyContext } from "../../context/Context";
import { useEffect } from "react";

export const HospitalHero = () => {
  const {
    state,
    setState,
    city,
    setCity,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    hospitals,
    setHospitals,
  } = useContext(MedifyContext);

  const fetchHospital = async () => {
    try {
      const response = await fetch(
        `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
      );
      const data = await response.json();
      // console.log(data);
      setHospitals(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedState && selectedCity) {
      fetchHospital();
    }
  }, [selectedState, selectedCity]); // Added dependencies

  // Dynamic count of medical centers
  const hospitalCount = hospitals ? hospitals.length : 0;

  return (
    <Box
      width="90%"
      sx={{
        display: "flex",
        alignItems: "start",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "70%" },
          margin: "10px",
        }}
      >
        {hospitals && hospitals.length > 0 ? (
          <Box pl={4}>
            <Typography
              fontWeight={700}
              variant="h1"
              fontSize={25}
              gutterBottom
            >
              {hospitalCount} medical center{hospitalCount !== 1 ? "s" : ""}{" "}
              available
              {selectedCity ? ` in ${selectedCity.toLowerCase()}` : ""}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Book appointments with minimum wait-time & verified doctor details
            </Typography>
          </Box>
        ) : null}

        {hospitals && hospitals.length > 0 ? (
          hospitals.map((hospital, index) => (
            <HospitalList
              key={hospital.hospital_id || index}
              hospital={hospital}
            />
          ))
        ) : (
          <Box
            p={4}
            sx={{
              width: { xs: "100%", md: "90%" },
              margin: "10px",
              bgcolor: "white",
              borderRadius: "8px",
            }}
          >
            <Typography
              m={5}
              textAlign="center"
              fontWeight={600}
              fontSize={30}
              color="#2aa7ff"
            >
              Please Select State and City
            </Typography>
          </Box>
        )}
      </Box>
      <Box
        mt={2}
        component="img"
        src={free}
        alt="free"
        sx={{
          width: { xs: "100%", md: "30%" },
        }}
      ></Box>
    </Box>
  );
};
