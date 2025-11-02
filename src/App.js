import { Console } from '@woowacourse/mission-utils';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import LottoMachine from './service/LottoMachine.js';
import WinningLotto from './service/WinningLotto.js';
import LottoResult from './service/LottoResult.js';
import Lotto from './model/Lotto.js';
import Validator from './validator/Validator.js';
import LOTTO_CONFIG from './constants/constants.js';

class App {
  async run() {
    const { money, lottos } = await this.#purchaseLottos();
    const winningLotto = await this.#getWinningLotto();
    this.#calculateAndPrintResult(lottos, winningLotto, money);
  }

  async #purchaseLottos() {
    try {
      const input = await InputView.readUserMoney();
      this.#validateCommonInput(input);

      const money = Number(input);
      const lottoMachine = new LottoMachine(money);
      const lottos = lottoMachine.generateLottos();

      OutputView.printPurchasedLottos(lottos);

      return { money, lottos };
    } catch (error) {
      Console.print(error.message);
      return this.#purchaseLottos();
    }
  }

  async #getWinningLotto() {
    const winningNumbers = await this.#getWinningNumbers();
    return this.#createWinningLotto(winningNumbers);
  }

  async #createWinningLotto(winningNumbers) {
    try {
      const bonusNumber = await this.#getBonusNumber();
      return new WinningLotto(winningNumbers, bonusNumber);
    } catch (error) {
      Console.print(error.message);
      return this.#createWinningLotto(winningNumbers);
    }
  }

  async #getWinningNumbers() {
    try {
      const input = await InputView.readWinningNumbers();
      Validator.validateEmpty(input);
      Validator.validateHasCommas(input);

      const numbers = this.#parseWinningNumbers(input);
      Lotto.validateNumbers(numbers);
      return numbers;
    } catch (error) {
      Console.print(error.message);
      return this.#getWinningNumbers();
    }
  }

  async #getBonusNumber() {
    const input = await InputView.readBonusNumber();
    this.#validateCommonInput(input);
    return Number(input);
  }

  #calculateAndPrintResult(lottos, winningLotto, purchaseAmount) {
    const result = new LottoResult();

    lottos.forEach((lotto) => {
      result.addLotto(lotto, winningLotto);
    });

    OutputView.printResult(result, purchaseAmount);
  }

  #validateCommonInput(input) {
    Validator.validateEmpty(input);

    const number = Number(input);
    Validator.validateNumber(number);
    Validator.validateInteger(number);
  }

  #parseWinningNumbers(input) {
    return input.split(LOTTO_CONFIG.SEPARATOR).map((num) => Number(num.trim()));
  }
}

export default App;
