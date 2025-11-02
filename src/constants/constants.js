const LOTTO_CONFIG = Object.freeze({
  LOTTO_PRICE: 1_000,
  NUMBER_COUNT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  SEPERATOR: ',',
});

export const LOTTO_PRIZES = Object.freeze([
  Object.freeze({
    rank: 'FIRST',
    match: 6,
    hasBonus: false,
    reward: 2_000_000_000,
  }),
  Object.freeze({
    rank: 'SECOND',
    match: 5,
    hasBonus: true,
    reward: 30_000_000,
  }),
  Object.freeze({
    rank: 'THIRD',
    match: 5,
    hasBonus: false,
    reward: 1_500_000,
  }),
  Object.freeze({
    rank: 'FOURTH',
    match: 4,
    hasBonus: false,
    reward: 50_000,
  }),
  Object.freeze({
    rank: 'FIFTH',
    match: 3,
    hasBonus: false,
    reward: 5_000,
  }),
]);

export default LOTTO_CONFIG;
