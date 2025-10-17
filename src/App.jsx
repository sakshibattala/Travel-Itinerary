import TripPlanner from "./components/TripPlanner";
import { TripProvider } from "./context/TripContext";
import { Buffer } from "buffer";
window.Buffer = Buffer;

function App() {
  return (
    <TripProvider>
      <TripPlanner />
    </TripProvider>
  );
}

export default App;
