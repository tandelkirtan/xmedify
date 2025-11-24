import {
  Box,
  Button,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useContext } from "react";
import { MedifyContext } from "../../context/Context";

export const Appoinment = ({ setIsBookingOpen, hospital }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const {setIsSnackbarOpen,selectedHospitals,setSelectedHospitals} = useContext(MedifyContext);
  
  const getNext7Days = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const dayName = i === 0 
        ? "Today" 
        : i === 1 
        ? "Tomorrow" 
        : date.toLocaleDateString("en-US", { weekday: "short" });
      
      const dateStr = date.toLocaleDateString("en-US", { 
        day: "numeric", 
        month: "short" 
      });
      
      days.push({
        date: date,
        dayName: dayName,
        dateStr: dateStr,
        fullDate: date.toISOString().split("T")[0],
      });
    }
    
    return days;
  };

  const dates = getNext7Days();

  const handleDateSelect = (dateObj) => {
    setSelectedDate(dateObj.fullDate);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    if (!selectedDate) return;
    setSelectedTime(time);
    setIsConfirmOpen(true);
  };

  const handleCloseConfirm = () => setIsConfirmOpen(false);

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return;

    // console.log("selectedDate:-", selectedDate);
    // console.log("selectedTime:-", selectedTime);
    // console.log("hospitalid:-", hospital);

    const bookingDetails = {
      hospital,
      appointmentDate: selectedDate,
      appointmentTime: selectedTime,
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const updatedBookings = [...existingBookings, bookingDetails];
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    setSelectedHospitals((prev) => [...prev, bookingDetails]);

    setIsBookingOpen(false);
    setIsConfirmOpen(false);
    setIsSnackbarOpen(true);
  };

  const formattedSelectedDate = selectedDate
    ? new Date(selectedDate).toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <Box>
      <Box>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
        >
          {dates.map((dateObj, index) => (
            <SwiperSlide key={index}>
              <Box
                textAlign="center"
                sx={{
                  cursor: "pointer",
                  p: 1,
                  borderBottom: selectedDate === dateObj.fullDate ? "3px solid #1976d2" : "3px solid transparent",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
                onClick={() => handleDateSelect(dateObj)}
              >
                <Box display="flex" justifyContent="center" alignItems="center" gap={2}>   
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: selectedDate === dateObj.fullDate ? 600 : 400,
                    color: selectedDate === dateObj.fullDate ? "#1976d2" : "inherit"
                  }}
                >
                  {dateObj.dayName}
                </Typography>
                <Typography variant="body2" 
                  sx={{ 
                    fontWeight: selectedDate === dateObj.fullDate ? 600 : 400,
                    color: selectedDate === dateObj.fullDate ? "#1976d2" : "inherit"
                  }}>
                  {dateObj.dateStr}
                </Typography>
                </Box>
                <Typography variant="caption" sx={{ display: "block", mt: 0.5, color: "text.secondary" }}>
                  10 slots available
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box >
        <Box m={1} gap={3} display="flex" justifyContent="start" alignItems="center" flexWrap="wrap">
            <Typography width="100px">Morning</Typography>
            <Button 
              variant={selectedTime === "11:30 AM" ? "contained" : "outlined"}
              onClick={() => handleTimeSelect("11:30 AM")}
              disabled={!selectedDate}
            >
              11:30 AM
            </Button>
        </Box>
        <Box m={1} gap={3} display="flex" justifyContent="start" alignItems="center" flexWrap="wrap">
            <Typography width="100px">Afternoon</Typography>
            <Button 
              variant={selectedTime === "12:00 PM" ? "contained" : "outlined"}
              onClick={() => handleTimeSelect("12:00 PM")}
              disabled={!selectedDate}
            >
              12:00 PM
            </Button>
            <Button 
              variant={selectedTime === "12:30 PM" ? "contained" : "outlined"}
              onClick={() => handleTimeSelect("12:30 PM")}
              disabled={!selectedDate}
            >
              12:30 PM
            </Button>
            <Button 
              variant={selectedTime === "01:30 PM" ? "contained" : "outlined"}
              onClick={() => handleTimeSelect("01:30 PM")}
              disabled={!selectedDate}
            >
              01:30 PM
            </Button>
            <Button 
              variant={selectedTime === "02:00 PM" ? "contained" : "outlined"}
              onClick={() => handleTimeSelect("02:00 PM")}
              disabled={!selectedDate}
            >
              02:00 PM
            </Button>
            <Button 
              variant={selectedTime === "02:30 PM" ? "contained" : "outlined"}
              onClick={() => handleTimeSelect("02:30 PM")}
              disabled={!selectedDate}
            >
              02:30 PM
            </Button>
        </Box>
        <Box m={1} gap={3} display="flex" justifyContent="start" alignItems="center" flexWrap="wrap">
            <Typography width="100px">Evening</Typography>
            <Button 
              variant={selectedTime === "06:00 PM" ? "contained" : "outlined"}
              onClick={() => handleTimeSelect("06:00 PM")}
              disabled={!selectedDate}
            >
              06:00 PM
            </Button>
            <Button 
              variant={selectedTime === "06:30 PM" ? "contained" : "outlined"}
              onClick={() => handleTimeSelect("06:30 PM")}
              disabled={!selectedDate}
            >
              06:30 PM
            </Button>
            <Button 
              variant={selectedTime === "07:00 PM" ? "contained" : "outlined"}
              onClick={() => handleTimeSelect("07:00 PM")}
              disabled={!selectedDate}
            >
              07:00 PM
            </Button>
            <Button 
              variant={selectedTime === "07:30 PM" ? "contained" : "outlined"}
              onClick={() => handleTimeSelect("07:30 PM")}
              disabled={!selectedDate}
            >
              07:30 PM
            </Button>
        </Box>
      </Box>
      <Modal open={isConfirmOpen} onClose={handleCloseConfirm}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            width: 320,
          }}
        >
          <Typography variant="h6" mb={1}>
            Confirm appointment
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            {formattedSelectedDate} at {selectedTime}
          </Typography>
          <Box display="flex" gap={2} justifyContent="flex-end">
            <Button onClick={handleCloseConfirm}>Cancel</Button>
            <Button variant="contained" onClick={handleConfirm}>
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
