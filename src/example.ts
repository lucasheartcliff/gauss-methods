import { Parameters } from "./types";

export const jacobiExample: Parameters = {
  matrix: [
    [8, -4, -3],
    [2, -5, 3],
    [-3, 1, 9]
  ],
  result: [14, -1, 9],

  // matrix: [[10, 2, 1], [1, 5, 1], [2, 3, 10]],
  // result: [7, -8, 6],
  // initialValue: [0.7, -1.6, 0.6],
  maxIterations: 6,
  toleranceValue: 0.05
};
