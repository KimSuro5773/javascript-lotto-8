import { LOTTO_PRIZES } from '../constants/constants.js';

class LottoResult {
  #rankCounts = {
    FIRST: 0,
    SECOND: 0,
    THIRD: 0,
    FOURTH: 0,
    FIFTH: 0,
  };

  addLotto(lotto, winningLotto) {
    const matchCount = lotto.getMatchingNumbersLength(winningLotto.getWinningNumbers());
    const hasBonus = matchCount === 5 && lotto.hasBonusNumber(winningLotto.getBonusNumber());

    const prize = LOTTO_PRIZES.find((p) => p.match === matchCount && p.hasBonus === hasBonus);

    if (prize) this.#rankCounts[prize.rank] += 1;
  }

  getRankCount(rank) {
    return this.#rankCounts[rank];
  }

  getTotalPrize() {
    return LOTTO_PRIZES.reduce(
      (total, prize) => total + this.#rankCounts[prize.rank] * prize.reward,
      0,
    );
  }

  getProfitRate(purchaseAmount) {
    const totalPrize = this.getTotalPrize();
    return ((totalPrize / purchaseAmount) * 100).toFixed(1);
  }
}

export default LottoResult;
