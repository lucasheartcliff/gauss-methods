import _, { isNumber, isUndefined } from "lodash";
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

const isPossible = (matrix: number[][]) => {
  let isPossible = true;
  for (let i in matrix) {
    let rowSum = 0;
    let colSum = 0;
    for (let j in matrix[i]) {
      if (i !== j) {
        rowSum += Math.abs(matrix[i][j]);
        colSum += Math.abs(matrix[j][i]);
      }
    }
    isPossible =
      rowSum <= Math.abs(matrix[i][i]) || colSum <= Math.abs(matrix[i][i]);
    if (!isPossible) return false;
  }
  return isPossible;
};

const sassenfeldCriteria = (matrix: number[][]) => {
  let values: number[] = [];
  for (let i in matrix) {
    let sum = 0;
    for (let j in matrix[i]) {
      if (i !== j && !isNumber(values[j])) {
        sum += matrix[i][j];
      } else if (i !== j) {
        sum += matrix[i][j] * values[j];
      }
    }
    values[i] = sum / (matrix[i][i] || 1);
  }
  return getMaxValueFromArray(values) < 1;
};

export const jacobi = ({
  initialValue: initialValueParameter,
  toleranceValue,
  maxIterations,
  result: resultParameter,
  matrix
}: Parameters) => {
  let index = 0;
  let newValues = [];
  if (isPossible(matrix) || sassenfeldCriteria(matrix)) {
    let oldValue = initialValueParameter || getInitialValue(matrix);

    while (isUndefined(maxIterations) || index <= maxIterations - 1) {
      newValues = [];
      for (let i = 0; i < matrix.length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
          if (i !== j) {
            sum += matrix[i][j] * oldValue[j] * -1;
          }
        }
        newValues[i] = (sum + resultParameter[i]) / matrix[i][i];
      }
      for (let i = 0; i < matrix.length; i++) {
        if (
          Math.abs(newValues[i] - oldValue[i]) /
            getMaxValueFromArray(oldValue) <=
          toleranceValue
        )
          return { result: newValues, index };
      }
      oldValue = _.cloneDeep(newValues);
      index++;
    }
  }
  return { result: newValues.length ? newValues : null, index };
};

export const seidel = ({
  initialValue: initialValueParameter,
  toleranceValue,
  maxIterations,
  result: resultParameter,
  matrix
}: Parameters) => {
  let index = 0;
  let newValues = [];

  if (isPossible(matrix)) {
    let oldValue = initialValueParameter || getInitialValue(matrix);
    while (isUndefined(maxIterations) || index <= maxIterations - 1) {
      newValues = [];
      for (let i = 0; i < matrix.length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
          if (i !== j) {
            if (!isNumber(newValues[j])) {
              sum += matrix[i][j] * oldValue[j] * -1;
            } else {
              sum += matrix[i][j] * newValues[j] * -1;
            }
          }
        }
        newValues[i] = (sum + resultParameter[i]) / matrix[i][i];
      }
      for (let i = 0; i < matrix.length; i++) {
        if (
          Math.abs(newValues[i] - oldValue[i]) /
            getMaxValueFromArray(oldValue) <=
          toleranceValue
        )
          return { result: newValues, index };
      }
      oldValue = _.cloneDeep(newValues);
      index++;
    }
  }
  return { result: newValues.length ? newValues : null, index };
};
