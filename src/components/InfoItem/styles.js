import styled from "styled-components";
import { red, green, grey } from "../../styles/colors";
import { devices } from "../../utils/devices";

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.recovered ? green : props.confirmed ? red : grey)};
  h4 {
    opacity: 0.6;
  }
  @media ${devices.tablet} {
    width: calc(25%);
  }
`;
