import { Button } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";

function App() {
  return (
    <div className="App">
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
        <Button
          sx={{
            height: 30,
          }}
        >
          Inicio
        </Button>
        <Button>Rotas</Button>
        <Button>Fale Comigo!</Button>
      </Box>
      <div className="App-Content">Content Atualizado</div>
    </div>
  );
}

export default App;
