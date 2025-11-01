import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/messages.js';

class InputView {
  async readUserMoney() {
    const userMoney = await Console.readLineAsync(INPUT_MESSAGES.USER_MONEY);
    return userMoney.trim();
  }

  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(INPUT_MESSAGES.WINNING_NUMBERS);
    return winningNumbers.trim();
  }

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(INPUT_MESSAGES.BONUS_NUMBER);
    return bonusNumber.trim();
  }
}

export default InputView;
