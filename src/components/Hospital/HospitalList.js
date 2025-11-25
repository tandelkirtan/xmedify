import { Box, Button, Typography, Snackbar, Alert } from "@mui/material";
import hl from "../../assets/hospitallogo.png";
import { Appoinment } from "./Appoinment";
import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useContext } from "react";
import { MedifyContext } from "../../context/Context";

export const HospitalList = ({ hospital }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const {isSnackbarOpen, setIsSnackbarOpen} = useContext(MedifyContext)
  

  const toggleBooking = () => {
    setIsBookingOpen(!isBookingOpen);
  };

  
  const handleSnackbarClose = (_, reason) => {
    if (reason === "clickaway") return;
    setIsSnackbarOpen(false);
  };

  return (
    <Box
    mt={2}
      border={1 }
      p={2}
      borderRadius={2}
      bgcolor="white"
      sx={{
        display: "flex",
        gap: "10px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          width: { xs: "100%", md: "65%" },
        }}
      >
        <Box
          component="img"
          src={hl}
          alt="logo"
          sx={{ width: { xs: "5rem", md: "10rem" } }}
        ></Box>
        <Box ml={2}>
          <Typography component="h3" color="#2aa7ff" fontWeight={700} fontSize={20}>{hospital["Hospital Name"]}</Typography>
          <Typography fontWeight={700}>{hospital["Address"]}</Typography>
          <Typography>{hospital["Hospital Type"]}</Typography>
          <Box display="flex" gap={1} alignItems="center" bgcolor="green" width="40px" padding="1px 15px" color="white" borderRadius={1}>
            <ThumbUpIcon/>n
            <Typography>{hospital["Hospital overall rating"] === "Not Available" ? "5" : hospital["Hospital overall rating"]}</Typography>
          </Box>
        </Box>
      </Box>
      
      <Box sx={{ width: { xs: "100%", md: "30%", textAlign: "center" } }}>
        <Typography color="green" fontWeight={700}>
          Available Today
        </Typography>
        <Button
        onClick={toggleBooking}
            variant="contained"
            sx={{
              textTransform: 'none',
              fontSize: 16,
              backgroundColor: '#2aa7ff',
              color: 'white',
              '&:hover': { backgroundColor: '#1f93e6' },
            }}
          >
            Book FREE Center Visit
          </Button>
      </Box>
      
      {isBookingOpen && (
        <Box sx={{ width: "100%", mt: 2 }}>
          <Appoinment
            setIsBookingOpen={setIsBookingOpen}
            isBookingOpen={isBookingOpen}
            hospital={hospital}
          />
        </Box>
      )}
      <Snackbar
              open={isSnackbarOpen}
              autoHideDuration={3000}
              onClose={handleSnackbarClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: "100%" }}>
                Appointment booked successfully!
              </Alert>
            </Snackbar>
    </Box>
  );
};