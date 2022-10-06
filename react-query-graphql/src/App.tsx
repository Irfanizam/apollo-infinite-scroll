import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import routes from "./app.routing";

const location = new ReactLocation();

function App() {

  return (
    <ChakraProvider theme={theme} cssVarsRoot={undefined}>
        <Router location={location} routes={routes}>
          <Outlet />
        </Router>
    </ChakraProvider>
  )
}

export default App;