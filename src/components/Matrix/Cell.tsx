import React from "react";
import * as S from "./styled";
interface Props {
  row?: number;
  col?: number;
  value: string;
}
const Cell: React.FC<Props> = ({ value, col, row }) => {
  const coordenates = `${row}${col}`;
  return (
    <S.Cell>
      {value}
      {coordenates && <div className={"coordenates"}>{coordenates}</div>}
    </S.Cell>
  );
};
export default Cell;
