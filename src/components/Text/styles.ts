import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { TypographyProps } from "./props";

export const Title = styled(Typography)<TypographyProps>`
     color: ${(props) => props.theme.colorTitle};
`;
