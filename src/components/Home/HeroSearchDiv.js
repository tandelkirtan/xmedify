import { Box, Button, MenuItem, Select } from "@mui/material";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MedifyContext } from "../../context/Context";

const HeroSearchDiv = () => {
  const {
    state,
    setState,
    city,
    setCity,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
  } = useContext(MedifyContext)
  const navigate = useNavigate();

  const stateApi = "https://meddata-backend.onrender.com/states";

  const fetchState = async () => {
    try {
      const response = await fetch(stateApi);
      const data = await response.json();
      // console.log(data);
      setState(data);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchCities = async (state) => {
    try {
      const response = await fetch(`https://meddata-backend.onrender.com/cities/${state}`);
      const data = await response.json();
      setCity(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleHomeSearch = () => {
    
    // console.log("Home Search Clicked");
    navigate("/hospitals");
  }

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    if (state) {
      fetchCities(state);
    }
  }

  useEffect(() => {
    fetchState();
  }, []);

  return (
    <Box width="90%">
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" }
      }}>
        <Select
        id="state"
          sx={{ width: { xs: "90%", md: "30%" }, margin: "10px" }}
          value={selectedState}
          onChange={handleStateChange}
          displayEmpty
        >
          <MenuItem disabled value="">
            <em>State</em>
          </MenuItem>
          {state.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
        
        <Select
        id="city"
          sx={{ width: { xs: "90%", md: "30%" }, margin: "10px" }}
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          displayEmpty
          disabled={!selectedState}
        >
          <MenuItem disabled value="">
            <em>City</em>
          </MenuItem>
          {city.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
        
        <Button
        id='searchBtn'
          onClick={handleHomeSearch}
          sx={{
            width: { xs: "50%", md: "15%" },
            margin: "10px",
            padding: "15px",
            backgroundColor: "#2aa7ff",
            color: "white",
            "&:hover": {
              backgroundColor: "#1f93e6",
              transform: "translateY(-2px)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  )
}

export { HeroSearchDiv };