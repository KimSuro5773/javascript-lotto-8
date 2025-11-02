import LOTTO_CONFIG from '../constants/constants.js';
import { ERROR_MESSAGES } from '../constants/messages.js';

class Validator {
  static validateEmpty(input) {
    if (input === '') {
      throw new Error(ERROR_MESSAGES.COMMON.EMPTY_INPUT);
    }
  }

  static validateNumber(input) {
    if (Number.isNaN(input)) {
      throw new Error(ERROR_MESSAGES.COMMON.NOT_NUMBER);
    }
  }

  static validateInteger(input) {
    if (!Number.isInteger(input)) {
      throw new Error(ERROR_MESSAGES.COMMON.NOT_INTEGER);
    }
  }

  static validateMinimum(input) {
    if (input < LOTTO_CONFIG.LOTTO_PRICE) {
      throw new Error(ERROR_MESSAGES.USER_MONEY.UNDER_MINIMUM);
    }
  }

  static validateThousandUnit(input) {
    if (input % LOTTO_CONFIG.LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGES.USER_MONEY.NOT_THOUSAND_UNIT);
    }
  }

  static validateHasCommas(input) {
    if (!input.includes(LOTTO_CONFIG.SEPARATOR)) {
      throw new Error(ERROR_MESSAGES.LOTTO.INVALID_SEPARATOR);
    }
  }

  static validateLength(input) {
    if (input.length !== LOTTO_CONFIG.NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGES.LOTTO.INVALID_COUNT);
    }
  }

  static validateDuplicate(input) {
    if (new Set(input).size !== input.length) {
      throw new Error(ERROR_MESSAGES.LOTTO.DUPLICATED);
    }
  }

  static validateOutOfRange(input) {
    if (input < LOTTO_CONFIG.MIN_NUMBER || input > LOTTO_CONFIG.MAX_NUMBER) {
      throw new Error(ERROR_MESSAGES.LOTTO.OUT_OF_RANGE);
    }
  }

  static validateBonusNumberDuplicate(input, winningNumbers) {
    if (winningNumbers.includes(input)) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER.DUPLICATED_WITH_WINNING);
    }
  }
}

export default Validator;
