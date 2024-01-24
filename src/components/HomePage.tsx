import { Box, Typography } from "@mui/material";
import { homepageStyles } from "../styles/homepage-styles";

export default function HomePage() {
  return (
    <Box sx={homepageStyles.container}>
      {/* box 1 */}
      <Box sx={homepageStyles.wrapper}>
        <Typography sx={homepageStyles.text}>
          Write and Share Your Blog with everyone!
        </Typography>
        <img
        // @ts-ignore
          style={homepageStyles.image}
          width="50%"
          height="50%"
        src="https://plus.unsplash.com/premium_photo-1661475877403-ce2e772fea2e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Box>
      {/* box 2 */}
      <Box sx={homepageStyles.wrapper}>
        <img
        // @ts-ignore
          style={homepageStyles.image}
          width="50%"
          height="50%"
          src="https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Typography sx={homepageStyles.text}>
          Write and Share Your Blog with everyone!
        </Typography>
      </Box>
      {/* box 3 */}
      <Box sx={homepageStyles.wrapper}>
        <Typography sx={homepageStyles.text}>
          Write and Share Your Blog with everyone!
        </Typography>
        <img
        // @ts-ignore
          style={homepageStyles.image}
          width="50%"
          height="50%"
          src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Box>
    </Box>
  );
}
