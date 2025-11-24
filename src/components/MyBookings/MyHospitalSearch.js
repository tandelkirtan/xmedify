import { Box, Button, MenuItem, Select } from '@mui/material'
import React from 'react'

export const MyHospitalSearch = () => {
  return (
     <Box width="90%" boxShadow={2} borderRadius={4} mt={-4} bgcolor="white">
        <Box
        sx={{
            display: "flex",
            justifyContent: "center",    
            alignItems:"center",
            gap:"10px",
            flexDirection:{xs: "column", md:"row"}
        }}>
          <Select
            sx={{ width:{xs:"90%", md:"30%"}, margin: "10px"}}
            multiple
            displayEmpty
            value={[]}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>State</em>;
              }
            }}
          >
            <MenuItem disabled value="">
              <em>State</em>
            </MenuItem>
            {/* {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))} */}
          </Select>
          <Select
            sx={{ width:{xs:"90%", md:"30%"}, margin: "10px"}}
            multiple
            displayEmpty
            value={[]}
            // input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>City</em>;
              }
            }}
          >
            <MenuItem disabled value="">
              <em>City</em>
            </MenuItem>
            {/* {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))} */}
          </Select>
          <Button
            sx={{
                width:{xs:"50%", md:"15%"},
                margin:"10px",
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
            Find Centers
          </Button>
        </Box>
      </Box>
  )
}
