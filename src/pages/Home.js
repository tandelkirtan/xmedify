import Box from "@mui/material/Box";
import { Hero } from "../components/Home/Hero";
import { HeroSearch } from "../components/Home/HeroSearch";
import { OfferCourosel } from "../components/Home/OfferCourosel";
import { Specialisation } from "../components/Home/Specialisation";

export const Home = () => {
  return (
    <Box>
        <Hero/>
        <HeroSearch/>
        <OfferCourosel/>
        <Specialisation/>
    </Box>
  );
};
