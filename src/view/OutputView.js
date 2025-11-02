import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRIZES } from '../constants/constants.js';
import { OUTPUT_MESSAGES } from '../constants/messages.js';

class OutputView {
  static printPurchasedLottos(lottos) {
    Console.print(OUTPUT_MESSAGES.TICKET_COUNT(lottos.length));
    this.#printLottoNumbers(lottos);
  }

  static #printLottoNumbers(lottos) {
    lottos.forEach((lotto) => {
      Console.print(OUTPUT_MESSAGES.TICKET_NUMBER(lotto.getNumbers().join(', ')));
    });
  }

  static printResult(result, purchaseAmount) {
    Console.print(OUTPUT_MESSAGES.DIVIDER);
    this.#printPrizeStats(result);
    this.#printProfit(result, purchaseAmount);
  }

  static #printPrizeStats(result) {
    LOTTO_PRIZES.forEach((prize) => {
      const count = result.getRankCount(prize.rank);
      const message = this.#getPrizeMessage(prize.rank, prize.reward, count);
      Console.print(message);
    });
  }

  static #getPrizeMessage(rank, reward, count) {
    return OUTPUT_MESSAGES.PRIZE[rank](reward, count);
  }

  static #printProfit(result, purchaseAmount) {
    const rate = result.getProfitRate(purchaseAmount);
    Console.print(OUTPUT_MESSAGES.PROFIT_RATE(rate));
  }
}

export default OutputView;
