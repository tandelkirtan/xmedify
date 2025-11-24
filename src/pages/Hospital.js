import { Box, Stack } from "@mui/material";
import { HospitalSearch } from "../components/Hospital/HospitalSearch";
import { HospitalHero } from "../components/Hospital/HospitalHero";

export const Hospital = () => {
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
      <HospitalSearch/>
      <HospitalHero/>
    </Stack>
  );
};
