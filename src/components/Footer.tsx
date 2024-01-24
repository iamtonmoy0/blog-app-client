import { Box, Button } from "@mui/material";
import { homepageStyles } from "../styles/homepage-styles";

export default function Footer() {
  return (
    <Box sx={homepageStyles.footerContainer}>
      <Button sx={homepageStyles.footerButton}>View Articles</Button>
      <Button sx={homepageStyles.footerButton}>Publish Articles</Button>
    </Box>
  );
}
