import { TypographyProps } from './props';
import * as S from './styles';

export function Text(props: TypographyProps) {
  return <S.Title variant={props.tag}>{props.children}</S.Title>;
}
