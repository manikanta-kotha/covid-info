import React from "react";
import { H1, H4, H5 } from "../../styles/typos";
import {ItemContainer} from './styles';

export default function InfoItem(props) {
  const { title, newCases, totalCases, ...rest } = props;
  return (
    <ItemContainer {...rest}>
      <H5>{title}</H5>
      <H4>+ {newCases.toLocaleString()}</H4>
      <H1>{totalCases.toLocaleString()}</H1>
    </ItemContainer>
  );
}
