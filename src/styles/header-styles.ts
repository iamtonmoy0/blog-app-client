import { Styles } from "./homepage-styles";

const headerStyles: Styles = {
  appBar: {
    position: "sticky",
    bgcolor: "#404040",
  },
  tabContainer: {
    width: "100%",
    margin: "auto",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },
  authButton: {
    bgcolor: "tomato",
    color: "black",
    ":hover": {
      bgcolor: "crimson",
    },
    marginRight: "6px",
    borderRadius: "5px",
  },
};
export default headerStyles;
