import styled from "styled-components";
import { devices } from "../../utils/devices";

export const MainContainer = styled.div`
  margin: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row;
  }
`;
