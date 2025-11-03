import { Console } from '@woowacourse/mission-utils';
import InputView from './view/InputView.js';
import {
  validateBonusNumber,
  validateCommon,
  validateLotto,
  validateWinningNumbers,
} from './utils/validators.js';
import { parseStringToNumber, parseStringToNumberArray } from './utils/inputParser.js';
import LottoMachine from './service/LottoMachine.js';
import OutputView from './view/OutputView.js';
import LottoResult from './service/LottoResult.js';
import WinningLotto from './service/WinningLotto.js';

class App {
  async run() {
    const { money, lottos } = await this.#getPurchaseLottos();
    const winningLotto = await this.#getWinningLotto();
    this.#calculateAndPrintResult(lottos, winningLotto, money);
  }

  async #readUserMoney() {
    while (true) {
      try {
        const input = await InputView.readUserMoney();
        validateCommon(input);

        return parseStringToNumber(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #readWinningNumbers() {
    while (true) {
      try {
        const input = await InputView.readWinningNumbers();
        validateWinningNumbers(input);

        const numbers = parseStringToNumberArray(input);
        validateLotto(numbers);

        return numbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #readBonusNumber(winningNumbers) {
    while (true) {
      try {
        const input = await InputView.readBonusNumber();
        validateCommon(input);

        const bonusNumber = parseStringToNumber(input);
        validateBonusNumber(bonusNumber, winningNumbers);

        return bonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #getPurchaseLottos() {
    while (true) {
      try {
        const money = await this.#readUserMoney();
        const lottoMachine = new LottoMachine(money);
        const lottos = lottoMachine.generateLottos();

        OutputView.printPurchasedLottos(lottos);

        return { money, lottos };
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #getWinningLotto() {
    const winningNumbers = await this.#readWinningNumbers();
    const bonusNumber = await this.#readBonusNumber(winningNumbers);

    return new WinningLotto(winningNumbers, bonusNumber);
  }

  #calculateAndPrintResult(lottos, winningLotto, purchaseAmount) {
    const result = new LottoResult();

    lottos.forEach((lotto) => {
      result.addLotto(lotto, winningLotto);
    });

    OutputView.printResult(result, purchaseAmount);
  }
}

export default App;
