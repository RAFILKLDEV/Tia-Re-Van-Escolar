import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../components/Header";

const Routes = () => {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  const Map: React.FC<{}> = () => {
    return <div ref={ref} />;
  };

  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Rotas</h2>
        <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
          <Map/>
        </Wrapper>
      </Box>
    </>
  );
};

export default Routes;
