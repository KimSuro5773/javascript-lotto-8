import { LOTTO_CONFIG } from '../constants/constants.js';
import { ERROR_MESSAGES } from '../constants/messages.js';

function validateEmpty(input) {
  if (input === '') {
    throw new Error(ERROR_MESSAGES.COMMON.EMPTY_INPUT);
  }
}

function validateNumber(input) {
  if (isNaN(input)) {
    throw new Error(ERROR_MESSAGES.COMMON.NOT_NUMBER);
  }
}

function validateMinimum(input) {
  if (input < LOTTO_CONFIG.LOTTO_PRICE) {
    throw new Error(ERROR_MESSAGES.USER_MONEY.UNDER_MINIMUM);
  }
}

function validateThousandUnit(input) {
  if (input % LOTTO_CONFIG.LOTTO_PRICE !== 0) {
    throw new Error(ERROR_MESSAGES.USER_MONEY.NOT_THOUSAND_UNIT);
  }
}

function validateHasCommas(input) {
  const COMMA_REGEX = /^\d+(?:\s*,\s*\d+)*$/;

  if (!COMMA_REGEX.test(input)) {
    throw new Error(ERROR_MESSAGES.LOTTO.INVALID_SEPARATOR);
  }
}

function validateLength(input) {
  if (input.length !== LOTTO_CONFIG.NUMBER_COUNT) {
    throw new Error(ERROR_MESSAGES.LOTTO.INVALID_COUNT);
  }
}

function validateDuplicate(input) {
  if (new Set(input).size !== input.length) {
    throw new Error(ERROR_MESSAGES.LOTTO.DUPLICATED);
  }
}

function validateOutOfRange(input) {
  if (input < LOTTO_CONFIG.MIN_NUMBER || input > LOTTO_CONFIG.MAX_NUMBER) {
    throw new Error(ERROR_MESSAGES.LOTTO.OUT_OF_RANGE);
  }
}

function validateBonusNumberDuplicate(bonusNumber, winningNumbers) {
  if (winningNumbers.includes(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER.DUPLICATED_WITH_WINNING);
  }
}

export function validateCommon(input) {
  validateEmpty(input);
  validateNumber(input);
}

export function validateUserMoney(money) {
  validateMinimum(money);
  validateThousandUnit(money);
}

export function validateWinningNumbers(numbers) {
  validateEmpty(numbers);
  validateHasCommas(numbers);
}

export function validateBonusNumber(bonusNumber, winningNumbers) {
  validateOutOfRange(bonusNumber);
  validateBonusNumberDuplicate(bonusNumber, winningNumbers);
}

export function validateLotto(numbers) {
  validateLength(numbers);
  validateDuplicate(numbers);
  numbers.forEach((number) => validateOutOfRange(number));
}
