import { Typography } from "@mui/material";
import styled from "styled-components";
import { TypographyProps } from "./props";

export const Title = styled(Typography)<TypographyProps>`
     color: ${(props) => props.theme.colorTitle};
     font-family: "Roboto", "Helvetica", "Arial", sans-serif !important;
     font-weight: bold !important;
     margin: 10px 0px;
`;
