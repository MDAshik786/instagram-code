import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import "./SCSS_StyleSheet/index.scss";
import Router from "./Router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PopupModel from "./CommonField/PopupModel";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ReactQueryDevtools initialIsOpen={false} />
      <PopupModel />
    </QueryClientProvider>
  );
}

export default App;
