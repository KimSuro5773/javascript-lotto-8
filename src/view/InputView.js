import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/messages.js';

class InputView {
  static async readUserMoney() {
    const userMoney = await Console.readLineAsync(INPUT_MESSAGES.USER_MONEY);
    return userMoney.trim();
  }

  static async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(INPUT_MESSAGES.WINNING_NUMBERS);
    return winningNumbers.trim();
  }

  static async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(INPUT_MESSAGES.BONUS_NUMBER);
    return bonusNumber.trim();
  }
}

export default InputView;
