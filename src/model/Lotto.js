import Validator from '../validator/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    const sortedNumbers = numbers.map(Number).sort((a, b) => a - b);

    Lotto.validateNumbers(sortedNumbers);
    this.#numbers = sortedNumbers;
  }

  static validateNumbers(numbers) {
    numbers.forEach((number) => {
      Validator.validateNumber(number);
      Validator.validateInteger(number);
      Validator.validateOutOfRange(number);
    });

    Validator.validateDuplicate(numbers);
    Validator.validateLength(numbers);
  }

  getNumbers() {
    return [...this.#numbers];
  }

  getMatchingNumbersLength(winningLotto) {
    const winningNumbers = winningLotto.getNumbers();
    return this.#numbers.filter((number) => winningNumbers.includes(number)).length;
  }

  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
