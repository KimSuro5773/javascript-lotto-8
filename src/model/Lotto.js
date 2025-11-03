import { validateLotto } from '../utils/validators.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    validateLotto(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
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
