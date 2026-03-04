import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/common";
import { ROUTES } from "./constants";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.RESUME} element={<Resume />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
