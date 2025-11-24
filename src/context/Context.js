import React, { createContext, useState } from "react";

export const MedifyContext = createContext();

export const MedifyProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [selectedHospitals, setSelectedHospitals] = useState([]);

  const value = {
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
    isSnackbarOpen,
    setIsSnackbarOpen,
    selectedHospitals,
    setSelectedHospitals
  };

  return (
    <MedifyContext.Provider value={value}>{children}</MedifyContext.Provider>
  );
};
