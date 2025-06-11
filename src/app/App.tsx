import AppRouter from "./AppRouter";
import ErrorBoundary from "../entities/errorBoundary/errorBoundary";
import "./global.module.scss";

function App() {
  return (
    <>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </>
  );
}

export default App;
