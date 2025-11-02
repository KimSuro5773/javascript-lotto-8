import Lotto from '../model/Lotto.js';
import Validator from '../validator/Validator.js';

class WinningLotto {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = new Lotto(winningNumbers);

    const parsedBonusNumber = Number(bonusNumber);
    this.#validateBonusNumber(parsedBonusNumber);
    this.#bonusNumber = parsedBonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    Validator.validateOutOfRange(bonusNumber);

    const numbersArray = this.#winningNumbers.getNumbers();
    Validator.validateBonusNumberDuplicate(bonusNumber, numbersArray);
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLotto;
