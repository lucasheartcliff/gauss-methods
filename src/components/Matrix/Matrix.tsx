import React from "react";
import Cell from "./Cell";
import Column from "./Column";

import * as S from "./styled";

interface Props {
  data: number[][];
  result: number[];
}
const Matrix: React.FC<Props> = ({ data, result }) => {
  return (
    <S.Container>
      <S.Matrix>
        {data.map((row, rowIndex) => (
          <S.Row key={rowIndex}>
            {row.map((value, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                row={rowIndex}
                col={colIndex}
                value={`${value}*X${colIndex}`}
              />
            ))}
          </S.Row>
        ))}
      </S.Matrix>
      <Column data={result.map((v) => `= ${v}`)} />
    </S.Container>
  );
};
export default Matrix;
