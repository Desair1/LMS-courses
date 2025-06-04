import ErrorBoundary from "../entities/errorBoundary/errorBoundary";
import AppRouter from "./AppRouter";
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
