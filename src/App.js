import BerkRoutes from "Routes";
import { setProgramsVisible } from "utils/functions";

function App() {
  return (
    <div
      className="bg-white min-h-screen"
      onClick={() => setProgramsVisible(false)}
      role="presentation"
    >
      <BerkRoutes />
    </div>
  );
}

export default App;
