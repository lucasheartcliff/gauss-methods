import _ from "lodash";
import { Parameters } from "./types";

const getInitialValue = (matrix: number[][]) => {
  let result = [];
  if (matrix.length) {
    for (let i = 0; i < matrix[0].length; i++) {
      result.push(0);
    }
  }
  return result;
};

const getMaxValueFromArray = (arr: number[]) => {
  return arr.reduce((acc, cur) => {
    const value = Math.abs(cur);
    if (value > acc) acc = value;
    return acc;
  }, -1);
};

export const jacobi = ({
  initialValue: initialValueParameter,
  toleranceValue,
  maxIterations,
  result: resultParameter,
  matrix
}: Parameters) => {
  let oldValue = initialValueParameter || getInitialValue(matrix);

  let index = 0;
  let newValues = [];
  while (index < maxIterations) {
    newValues = [];
    for (let i = 0; i < matrix.length; i++) {
      let sum = 0;
      for (let j = 0; j < matrix[i].length; j++) {
        if (i !== j) {
            sum += matrix[i][j] * oldValue[j] * -1;
        }
      }
      newValues[i] = (sum + resultParameter[i]) / matrix[i][i] || 1;
    }
    for (let i = 0; i < matrix.length; i++) {
      if (
        Math.abs(newValues[i] - oldValue[i]) / getMaxValueFromArray(oldValue) <=
        toleranceValue
      )
        return { result: newValues, index };
    }
    oldValue = _.cloneDeep(newValues);
    index++;
  }
  return { result: newValues, index };
};
