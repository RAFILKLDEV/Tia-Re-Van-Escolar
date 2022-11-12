import { Box } from "@mui/material";
import React from "react";
import Header from "./components/Header";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "radial-gradient(#ffe45cb7, #9198e500);",
            width: "100%",
            height: "100vh",
            boxShadow: "0px 10px 0px 0px rgba(51,101,160,1)",
            gap: 5,
          }}
        >
          <div id="Home-img">
            <img
              src="https://cdn.discordapp.com/attachments/931731406118342676/1040655523151888394/oie_transparent_16.png"
              alt="Tia Re"
              width={300}
              height={300}
              style={{
                paddingBottom: 50,
              }}
            ></img>
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                color: "#00296B",
                fontSize: 50,
              }}
            >
              Tia Re
            </h1>
            <Box
              sx={{
                width: 500,
                color: "#00296B",
              }}
            >
              <p
                style={{
                  color: "#00296B",
                  fontWeight: 600,
                  fontSize: 35,
                }}
              >
                Sou a Tia Rejane, trabalho com van escolar há mais de 15 anos.
                João Rodrigues Guião, Cid de Oliveira, Amelia Junqueira, Barão
                de Maua, Iavec, Vila Lobos
              </p>
              <p
                style={{
                  color: "#00296B",
                  fontWeight: 600,
                }}
              ></p>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "radial-gradient(#ffe45cb7, #9198e500);",
            width: "100%",
            height: "100vh",
            boxShadow: "0px 10px 0px 0px rgba(51,101,160,1)",
            gap: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                color: "#00296B",
                fontSize: 50,
              }}
            >
              Tia Re
            </h1>
            <Box
              sx={{
                width: 500,
                color: "#00296B",
              }}
            >
              <p
                style={{
                  color: "#00296B",
                  fontWeight: 600,
                  fontSize: 35,
                }}
              >
                Trabalho com as escolas:
                <div>* João Rodrigues Guião</div>
                <div>* Cid de Oliveira</div>
                <div>* Amelia Junqueira</div>
                <div>* Barão de Maua</div>
                <div>* Iavec</div>
                <div>* Vila Lobos</div>
                <div>* Entre outras disponiveis na região</div>
              </p>
              <p
                style={{
                  color: "#00296B",
                  fontWeight: 600,
                }}
              ></p>
            </Box>
          </Box>
          <div id="Home-img">
            <img
              src="https://cdn.discordapp.com/attachments/931731406118342676/1040686597198331974/image.png"
              alt="Tia Re"
              width={300}
              height={300}
              style={{
                paddingBottom: 50,
              }}
            ></img>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "radial-gradient(#FFE45C, #9198e500);",
            width: "100%",
            height: "100vh",
            boxShadow: "0px 10px 0px 0px rgba(51,101,160,1)",
          }}
        >
          <img
            src="https://cdn.discordapp.com/attachments/931731406118342676/1040312147713998938/b17b463a-2e56-4f58-a9c9-aa6684975cd8.jpg"
            alt="Tia Re"
            width={200}
          ></img>
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                textAlign: "center",
              }}
            >
              <h1>Tia Re</h1>
              <Box
                sx={{
                  width: 500,
                }}
              >
                <p>
                  Sou a Tia Rejane, trabalho com van escolar há mais de 15 anos.
                </p>
                <p>Faço escolas como Cid, Guião, Amelinha</p>
              </Box>
            </Box>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
