import { Random } from '@woowacourse/mission-utils';
import { LOTTO_CONFIG } from '../constants/constants.js';
import { validateUserMoney } from '../utils/validators.js';
import Lotto from '../model/Lotto.js';

class LottoMachine {
  #money;

  constructor(money) {
    validateUserMoney(money);
    this.#money = money;
  }

  generateLottos() {
    const lottoCount = this.#money / LOTTO_CONFIG.LOTTO_PRICE;
    return Array.from({ length: lottoCount }, () => this.#generateLotto());
  }

  #generateLotto() {
    const numbers = Random.pickUniqueNumbersInRange(
      LOTTO_CONFIG.MIN_NUMBER,
      LOTTO_CONFIG.MAX_NUMBER,
      LOTTO_CONFIG.NUMBER_COUNT,
    );

    return new Lotto(numbers);
  }
}

export default LottoMachine;
