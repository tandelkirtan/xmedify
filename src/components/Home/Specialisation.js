import { Box, Button, Container, Grid, Typography } from "@mui/material";
import h1 from "../../assets/h1.png";
import h2 from "../../assets/h2.png";
import h3 from "../../assets/h3.png";
import h4 from "../../assets/h4.png";
import h5 from "../../assets/h5.png";
import h6 from "../../assets/h6.png";

export const Specialisation = () => {
  return (
    <Box>
      <Container sx={{textAlign:"center"}}>
        <Typography color="#1b3c74" variant="h3" mb={4}>
          Find by Specialisation
        </Typography>
        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          mb={5}
          justifyContent={"center"}
        >
          <Box component="img" src={h1} alt="img"></Box>
          <Box component="img" src={h2} alt="img"></Box>
          <Box component="img" src={h3} alt="img"></Box>
          <Box component="img" src={h4} alt="img"></Box>
          <Box component="img" src={h5} alt="img"></Box>
          <Box component="img" src={h6} alt="img"></Box>
        </Grid>
        <Button
          sx={{
            backgroundColor: "#2aa7ff",
            color: "white",
          }}
        >
          Search
        </Button>
      </Container>
    </Box>
  );
};
