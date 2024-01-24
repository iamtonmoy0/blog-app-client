import { SxProps } from "@mui/material";

type Styles = {
  [key: string]: SxProps;
};

export const homepageStyles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  wrapper: {
    padding: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  text: {
    textShadow: "10px",
    fontSize: { lg: 50, md: 40, sm: 35, xs: 20 },
  },
  image: {
    boxShadow: "10px 10px 0px #000",
    borderRadius: 20,
  },

  footerContainer: {
    bgcolor:"#404040",
    display: "flex",
    alignItems: "center",
    height: "20vh",
    justifyContent: "center",
    gap: 20,
  },
  footerButton: {
    borderRadius: 10,
    bgcolor:"blueviolet",
    color:"white",
    textTransform:"capitalize",
    ":hover":{
      bgcolor:"#bd63fa"
    }
    

  },
};
