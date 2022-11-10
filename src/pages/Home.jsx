import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
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
            background: "radial-gradient(#FFE45C, #9198e500);",
            width: "100%",
            height: "100vh",
            boxShadow: "0px 10px 0px 0px rgba(51,101,160,1)",
          }}
        >
          <img
            src="https://cdn.discordapp.com/attachments/931731406118342676/1040270405052674099/7020f1f7-9f83-44f2-8305-705d04cf4949.jpg"
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
              <h1
                style={{
                  color: "#00296B",
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
                  }}
                >
                  Sou a Tia Rejane, trabalho com van escolar há mais de 15 anos.
                </p>
                <p
                  style={{
                    color: "#00296B",
                    fontWeight: 600,
                  }}
                >
                  Sou a Tia Rejane, trabalho com van escolar há mais de 15 anos.
                </p>
              </Box>
            </Box>
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
          <img
            src="https://cdn.discordapp.com/attachments/931731406118342676/1040270404834558014/3b078209-1425-4eee-9b73-9d1e063313f3.jpg"
            alt="Tia Re"
            width={200}
          ></img>
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
    </>
  );
};

export default Home;
