import React from "react";
import { jacobi, seidel } from "./methods";
import { jacobiExample, seidelExample } from "./example";
import Matrix from "./components/Matrix/Matrix";
import { Parameters } from "./types";

import * as G from "./styled";
import Column from "./components/Matrix/Column";

interface Data {
  title: string;
  method: "seidel" | "jacobi";
  parameter: Parameters;
}
const initialState: Data[] = [
  {
    title: "1° Questão - Gauss-Jacobi",
    method: "jacobi",
    parameter: jacobiExample
  },
  {
    title: "2° Questão - Gauss-Seidel",
    method: "seidel",
    parameter: seidelExample
  }
];

export default function App() {
  const [state] = React.useState<Data[]>(initialState);
  return (
    <div>
      {state.map(({ title, method, parameter }, mI) => {
        const { result, index } =
          method === "jacobi" ? jacobi(parameter) : seidel(parameter);
        return (
          <G.Container key={mI}>
            <G.Title>{title}</G.Title>
            <G.MatrixRow>
              <Matrix data={parameter.matrix} result={parameter.result} />
              {result ? (
                <Column
                  data={result?.map((v, i) => `X${i} = ${v.toFixed(4)}`)}
                />
              ) : (
                "Não converge"
              )}
            </G.MatrixRow>
            <G.Summary>
              <G.SummaryItem>
                <span>{"Máximo de Iterações: "}</span>
                {parameter.maxIterations || "---"}
              </G.SummaryItem>
              <G.SummaryItem>
                <span>{"Tolerância de Erro: "}</span>
                {parameter.toleranceValue}
              </G.SummaryItem>
              <G.SummaryItem>
                <span>{"Iterações: "}</span>
                {index}
              </G.SummaryItem>
            </G.Summary>
          </G.Container>
        );
      })}
    </div>
  );
}
