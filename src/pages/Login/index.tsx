import { Text } from "../../components/Text";
import { BackButton } from "./styles";
import { ArrowBackIosNew } from "@mui/icons-material";
export function Login() {
     return (
          <>
               <BackButton to="/">
                    <ArrowBackIosNew /> Voltar
               </BackButton>
               <Text tag="h2">Login</Text>
          </>
     );
}
