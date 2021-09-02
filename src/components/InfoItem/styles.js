import styled from "styled-components";
import { red, green, grey } from "../../styles/colors";

export const ItemContainer = styled.div`
  width: calc(25%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) =>
    props.isRecovered ? green : props.isConfirmed ? red : grey};
  h4 {
    opacity: 0.6;
  }
`;
