import React from "react";
import * as S from "./styled";
interface Props {
  multiplier?: number;
  row?: number;
  col?: number;
}
const Cell: React.FC<Props> = ({ col, row, multiplier = 0 }) => {
  const value = `${multiplier}X`;
  const coordenates = `${row}${col}`;
  return (
    <S.Cell>
      {value}
      {coordenates && <div className={"coordenates"}>{coordenates}</div>}
    </S.Cell>
  );
};
export default Cell;
