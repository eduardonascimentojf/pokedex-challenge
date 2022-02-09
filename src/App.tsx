import { BrowserRouter, Link } from "react-router-dom";
import { ButtonLink } from "./components/ButtonLink";
import { AppRouter } from "./routes";
import { Conteiner } from "./styles/app";

export function App() {
     return (
          <BrowserRouter>
               <Conteiner>
                    <ButtonLink link="dashboard" title="Dashboard" />
                    <ButtonLink link="login" title="Login" />
               </Conteiner>

               <AppRouter />
          </BrowserRouter>
     );
}
