import { Button } from "@mui/material";
import { Box } from "@mui/system";

const Header = () => {
  const my_element = document.getElementById("re");
  const my_element2 = document.getElementById("re2");

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          p: 2,
          width: "100%",
          height: "5vh",
          backgroundColor: "#ffca00",
          display: "flex",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0px",
          boxShadow: "0px -10px 0px 0px #1f1f1f inset",
        }}
      >
        <Button
          sx={{
            height: 30,
            color: "black",
            fontWeight: 600,
            fontSize: 20,
          }}
          onClick={() =>
            my_element.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            })
          }
        >
          Inicio
        </Button>

        <Button
          sx={{
            height: 30,
            color: "black",
            fontWeight: 600,
            fontSize: 20,
          }}
          onClick={() =>
            my_element2.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            })
          }
        >
          Escolas
        </Button>
        <Button
          sx={{
            height: 30,
            color: "black",
            fontWeight: 600,
            fontSize: 20,
          }}
        >
          Contato!
        </Button>
        <img
          src="https://cdn.discordapp.com/attachments/931731406118342676/1040269082831896646/Van.png"
          alt="Van Escolar"
          width={100}
          style={{
            paddingBottom: 10,
            paddingLeft: 15,
          }}
        ></img>
      </Box>
    </Box>
  );
};

export default Header;
