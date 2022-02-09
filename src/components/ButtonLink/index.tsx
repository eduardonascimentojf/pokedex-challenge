import { Link } from 'react-router-dom';
import { Conteiner } from './styles';
type typeProps = {
  title: string;
  link: string;
};
export function ButtonLink({ title, link }: typeProps) {
  return (
    <Conteiner>
      <Link to={link}>{title}</Link>
    </Conteiner>
  );
}
