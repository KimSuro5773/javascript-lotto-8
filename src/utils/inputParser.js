import { LOTTO_CONFIG } from '../constants/constants.js';

export function parseStringToNumber(input) {
  const number = Number(input);
  return number;
}

export function parseStringToNumberArray(input) {
  const numbers = input.split(LOTTO_CONFIG.SEPARATOR).map(Number);
  return numbers;
}
