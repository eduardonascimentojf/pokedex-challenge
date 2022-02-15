import { Conteiner } from "./styles";
type typeProps = {
     title: string;
     link: string;
};
export function ButtonLink({ title, link }: typeProps) {
     return <Conteiner to={link}>{title}</Conteiner>;
}
