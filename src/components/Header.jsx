import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <Box
        sx={{
          p: 2,
          width: 800,
          height: 25,
          backgroundColor: "#FFE45C",
          display: "flex",
          gap: 5,
          justifyContent: "center",
          alignItems: "center",
          margin: 15,
        }}
      >
        <Link to={"/"}>
          <Button
            sx={{
              height: 30,
              color: "text.primary",
              fontWeight: 600,
            }}
          >
            Inicio
          </Button>
        </Link>

        <Link to={"/route"}>
          <Button
            sx={{
              height: 30,
              color: "text.primary",
              fontWeight: 600,
            }}
          >
            Rotas
          </Button>
        </Link>

        <Link to={"/contact"}>
          <Button
            sx={{
              height: 30,
              color: "text.primary",
              fontWeight: 600,
            }}
          >
            Fale Comigo!
          </Button>
        </Link>
      </Box>
    </div>
  );
}

export default Header;
