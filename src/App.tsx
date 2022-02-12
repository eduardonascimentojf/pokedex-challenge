import { BrowserRouter, Link } from "react-router-dom";
import { AppRouter } from "./routes";

export function App() {
     return (
          <BrowserRouter>
               <AppRouter />
          </BrowserRouter>
     );
}
