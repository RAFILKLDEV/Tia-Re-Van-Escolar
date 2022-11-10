import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        scrollSnapType: "y mandatory",
        overflowY: "auto",
        height: "100%",
      }}
    >
      <Box
        sx={{
          p: 2,
          width: "100%",
          height: 25,
          backgroundColor: "#FDC500",
          display: "flex",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0px",
          boxShadow: "0px -10px 0px 0px rgba(51,101,160,1) inset",
        }}
      >
        <Link to={"/"}>
          <Button
            sx={{
              height: 30,
              color: "#00296B",
              fontWeight: 600,
              fontSize: 20,
            }}
          >
            Inicio
          </Button>
        </Link>

        <Link to={"/route"}>
          <Button
            sx={{
              height: 30,
              color: "#00296B",
              fontWeight: 600,
              fontSize: 20,
            }}
          >
            Rotas
          </Button>
        </Link>

        <Link to={"/contact"}>
          <Button
            sx={{
              height: 30,
              color: "#00296B",
              fontWeight: 600,
              fontSize: 20,
            }}
          >
            Fale Comigo!
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
