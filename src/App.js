import { MantineProvider } from "@mantine/core";
import Flavanoids from "./Component/Flavanoids";
import Gamma from "./Component/Gamma";

function App() {
  return (
    <MantineProvider>
      <Flavanoids/>
      <Gamma/>
    </MantineProvider>
  );
}

export default App;
