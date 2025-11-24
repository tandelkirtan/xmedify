// import { Box, Button, MenuItem, Select } from '@mui/material'
// import React from 'react'
// import { useContext } from 'react'
// import { MedifyContext } from '../../context/Context'
// import { useEffect } from 'react'

// export const HospitalSearch = () => {

//   const {
//     state,
//     setState,
//     city,
//     setCity,
//     selectedState,
//     setSelectedState,
//     selectedCity,
//     setSelectedCity,
//     hospitals,
//     setHospitals
//   } = useContext(MedifyContext)

//     const stateApi = "https://meddata-backend.onrender.com/states";

//   const fetchState = async () => {
//     try {
//       const response = await fetch(stateApi);
//       const data = await response.json();
//       // console.log(data);
//       setState(data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   const fetchCities = async (state) => {
//     try {
//       const response = await fetch(`https://meddata-backend.onrender.com/cities/${state}`);
//       const data = await response.json();
//       setCity(data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   const handleStateChangeinHospital = (event) => 
//   {
//     const state = event.target.value;
//     setSelectedState(state);
//     if (state) {
//       fetchCities(state);
//     }
//   }

//     useEffect(() => {
//       fetchState();
//     }, []);



//   return (
//      <Box width="90%" boxShadow={2} borderRadius={4} mt={-4} bgcolor="white">
//         <Box
//         sx={{
//             display: "flex",
//             justifyContent: "center",    
//             alignItems:"center",
//             gap:"10px",
//             flexDirection:{xs: "column", md:"row"}
//         }}>
//           <Select
//             sx={{ width:{xs:"90%", md:"30%"}, margin: "10px"}}
//             multiple
//             displayEmpty
//             value={selectedState}
//             onChange={handleStateChangeinHospital}
//             renderValue={(selected) => {
//               if (selected.length === 0) {
//                 return <em>State</em>;
//               }
//             }}
//           >
//             <MenuItem disabled value="">
//               <em>State</em>
//             </MenuItem>
//             {names.map((name) => (
//             <MenuItem
//               key={name}
//               value={name}
//               style={getStyles(name, personName, theme)}
//             >
//               {name}
//             </MenuItem>
//           ))}
//           </Select>
//           <Select
//             sx={{ width:{xs:"90%", md:"30%"}, margin: "10px"}}
//             multiple
//             displayEmpty
//             value={selectedCity}
//             onChange={(e) => setSelectedCity(e.target.value)}
//             // input={<OutlinedInput />}
//             renderValue={(selected) => {
//               if (selected.length === 0) {
//                 return <em>City</em>;
//               }
//             }}
//           >
//             <MenuItem disabled value="">
//               <em>City</em>
//             </MenuItem>
//             {/* {names.map((name) => (
//             <MenuItem
//               key={name}
//               value={name}
//               style={getStyles(name, personName, theme)}
//             >
//               {name}
//             </MenuItem>
//           ))} */}
//           </Select>
//           <Button
//             sx={{
//                 width:{xs:"50%", md:"15%"},
//                 margin:"10px",
//                 padding: "15px",
//               backgroundColor: "#2aa7ff",
//               color: "white",
//               "&:hover": {
//                 backgroundColor: "#1f93e6",
//                 transform: "translateY(-2px)",
//               },
//               transition: "all 0.3s ease",
//             }}
//           >
//             Find Centers
//           </Button>
//         </Box>
//       </Box>
//   )
// }


// -----------------------------------------
// -----------------------------------------
// -----------------------------------------


import { Box, Button, MenuItem, Select } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { MedifyContext } from '../../context/Context'

export const HospitalSearch = () => {
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
    setHospitals
  } = useContext(MedifyContext)

  const stateApi = "https://meddata-backend.onrender.com/states";

  const fetchState = async () => {
    try {
      const response = await fetch(stateApi);
      const data = await response.json();
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

  const handleStateChangeinHospital = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setSelectedCity('');
    if (state) {
      fetchCities(state);
    }
  }

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  }

  const handleFindCenters = () => {
    console.log('Finding centers for:', selectedState, selectedCity);
  }

  useEffect(() => {
    fetchState();
  }, []);

  return (
    <Box width="90%" boxShadow={2} borderRadius={4} mt={-4} bgcolor="white">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",    
          alignItems: "center",
          gap: "10px",
          flexDirection: { xs: "column", md: "row" }
        }}
      >
        <Select
        id="state"
          sx={{ width: { xs: "90%", md: "30%" }, margin: "10px" }}
          displayEmpty
          value={selectedState}
          onChange={handleStateChangeinHospital}
          renderValue={(selected) => {
            if (!selected) {
              return <em>State</em>;
            }
            return selected;
          }}
        >
          <MenuItem disabled value="">
            <em>State</em>
          </MenuItem>
          {state && state.map((stateName) => (
            <MenuItem key={stateName} value={stateName}>
              {stateName}
            </MenuItem>
          ))}
        </Select>

        <Select
        id="city"
          sx={{ width: { xs: "90%", md: "30%" }, margin: "10px" }}
          displayEmpty
          value={selectedCity}
          onChange={handleCityChange}
          disabled={!selectedState} 
          renderValue={(selected) => {
            if (!selected) {
              return <em>City</em>;
            }
            return selected;
          }}
        >
          <MenuItem disabled value="">
            <em>City</em>
          </MenuItem>
          {city && city.map((cityName) => (
            <MenuItem key={cityName} value={cityName}>
              {cityName}
            </MenuItem>
          ))}
        </Select>

        <Button
        id='searchBtn'
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
          onClick={handleFindCenters}
          disabled={!selectedState || !selectedCity} // Disable button until both are selected
        >
          Search
        </Button>
      </Box>
    </Box>
  )
}