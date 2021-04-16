import { Parameters } from "./types";

export const jacobiExample: Parameters = {
  matrix: [
    [8, -4, -3],
    [2, -5, 3],
    [-3, 1, 9]
  ],
  result: [14, -1, 9],
  maxIterations: 2,
  toleranceValue: 0.0
};

export const seidelExample: Parameters = {
  matrix: [
    [7, 1, -1],
    [1, 8, 1],
    [2, -1, 5]
  ],
  result: [13, 30, 21],
  toleranceValue: 0.001
};
