import { ButtonLink } from "../../components/ButtonLink";
import { Text } from "../../components/Text";
import { Conteiner } from "./styles";

export function Home() {
     return (
          <Conteiner>
               <Text tag="h2">Home</Text>
               <div className="buttons">
                    <ButtonLink link="dashboard" title="Dashboard" />
                    <ButtonLink link="login" title="Login" />
               </div>
          </Conteiner>
     );
}
