import React from "react";

import * as S from "./styled";

interface Props {
  data: (number | string)[];
}
const Column: React.FC<Props> = ({ data }) => {
  return (
    <S.Column>
      {data.map((value, index) => (
        <S.Cell key={index}>{value}</S.Cell>
      ))}
    </S.Column>
  );
};
export default Column;
