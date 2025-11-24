import { Box } from "@mui/material";
import { HeroSearchDiv } from "./HeroSearchDiv";
import { LokkingFor } from "./LokkingFor";

export const HeroSearch = () => {
  return (
    <Box
    zIndex={10}
      mt={-10}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center" boxShadow={10} borderRadius="16px" width="90%" bgcolor="white">
        <HeroSearchDiv />
        <LokkingFor />
      </Box>
    </Box>
  );
};
