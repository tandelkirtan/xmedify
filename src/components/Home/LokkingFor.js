import { Box, Container, Stack, Typography } from "@mui/material";
import sd1 from "../../assets/sd1.png";

export const LokkingFor = () => {
  return (
    <Stack alignItems="center" m={2}>
      <Container maxWidth="xl">
        <Typography fontSize="3rem" fontWeight={700} color="#1b3c74">
         You may be looking for
        </Typography>

        <Stack direction="row" alignItems="center" justifyContent="center" gap={5} flexWrap="wrap">
          <Box boxShadow={10} borderRadius={4} overflow="hidden">
            <img src={sd1} alt="img1" style={{ borderRadius: "10px" }} />
          </Box>
          <Box boxShadow={10} borderRadius={4} overflow="hidden">
            <img src={sd1} alt="img1" style={{ borderRadius: "10px" }} />
          </Box>
          <Box boxShadow={10} borderRadius={4} overflow="hidden">
            <img src={sd1} alt="img1" style={{ borderRadius: "10px" }} />
          </Box>
          <Box boxShadow={10} borderRadius={4} overflow="hidden">
            <img src={sd1} alt="img1" style={{ borderRadius: "10px" }} />
          </Box>
          <Box boxShadow={10} borderRadius={4} overflow="hidden">
            <img src={sd1} alt="img1" style={{ borderRadius: "10px" }} />
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};
