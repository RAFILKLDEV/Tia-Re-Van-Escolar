import React from "react";
import Header from "./components/Header";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-Content">
        <div className="Home-Content-Page">
          <Header />
          <div className="img">
            <div id="img-square">
              <div id="circle"></div>
              <img
                src="https://cdn.discordapp.com/attachments/931731406118342676/1041092677204197408/8140f2c2-3ca9-44bc-b7f8-0fe4ef72cbeb.png"
                alt=""
                width={300}
                height={100}
                id="re"
              />
            </div>
            <p
              style={{
                color: "black",
                fontWeight: 600,
                fontSize: 35,
                width: 700,
              }}
            >
              Sou a Tia Rejane, trabalho com transporte escolar há mais de 15
              anos.
              <p>
                Trabalho sempre com segurança, carinho e amor pelas crianças
              </p>
              Atuo principalmente nos bairros do Jardim Paulista, Campos Elisios
            </p>
            <p
              style={{
                color: "#00296B",
                fontWeight: 600,
              }}
            ></p>
          </div>
        </div>
        <div
          className="Home-Content-Page"
          style={{
            backgroundColor: "#bde0fe",
          }}
        >
          <div className="img">
            <p
              style={{
                color: "black",
                fontWeight: 600,
                fontSize: 35,
                width: "auto",
                textAlign: "justify",
                paddingBottom: 50,
              }}
            >
              <h4>Trabalho com as escolas:</h4>
              <div>* João Rodrigues Guião</div>
              <div>* Cid de Oliveira</div>
              <div>* Amelia Junqueira</div>
              <div>* Barão de Maua</div>
              <div>* Iavec</div>
              <div>* Vila Lobos</div>
              <div>* Entre outras disponiveis na região</div>
            </p>
            <div id="img-square">
              <div id="circle2"></div>
              <img
                src="https://cdn.discordapp.com/attachments/931731406118342676/1041087020468019230/53c33634-89bb-42b2-957d-50b1b7905f2e.png"
                alt=""
                width={300}
                height={100}
                id="re2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
