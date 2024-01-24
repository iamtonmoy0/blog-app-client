import { AppBar, Box, Tab, Tabs, Toolbar, Button } from "@mui/material";
import { ImBlogger } from "react-icons/im";
import headerStyles from "../styles/header-styles";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(0);
  return (
    <AppBar sx={headerStyles.appBar}>
      <Toolbar>
        <ImBlogger
          style={{ borderRadius: "50%", background: "tomato", padding: "10px" }}
        />
        <Box sx={headerStyles.tabContainer}>
          <Tabs
            indicatorColor="secondary"
            textColor="inherit"
            value={active}
            onChange={(e, val) => {
              setActive(val);
            }}
          >
            <Tab label="Home" />
            <Tab label="Blogs" />
            <Button sx={headerStyles.authButton}>Login</Button>
            <Button sx={headerStyles.authButton}>Register</Button>
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
