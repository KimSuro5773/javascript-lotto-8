import { ERROR_MESSAGES } from '../src/constants/messages.js';
import WinningLotto from '../src/service/WinningLotto.js';

describe('WinningLotto 클래스 테스트', () => {
  describe('정상 동작 테스트', () => {
    test('유효한 당첨 번호와 보너스 번호로 객체가 생성된다', () => {
      expect(() => new WinningLotto([1, 2, 3, 4, 5, 6], 7)).not.toThrow();
    });

    test('getWinningNumbers() 메소드로 당첨 번호를 가져온다.', () => {
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
      const winningNumbers = winningLotto.getWinningNumbers();

      expect(winningNumbers.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('getBonusNumber() 메소드로 보너스 번호를 가져온다.', () => {
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);

      expect(winningLotto.getBonusNumber()).toBe(7);
    });

    test('당첨 번호가 들어오면 오름차순 정렬된 당첨 로또가 된다.', () => {
      const winningLotto = new WinningLotto([6, 5, 4, 3, 2, 1], 7);
      const winningNumbers = winningLotto.getWinningNumbers();

      expect(winningNumbers.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('예외 케이스 테스트', () => {
    test('보너스 번호가 1보다 작으면 예외가 발생한다.', () => {
      expect(() => new WinningLotto([1, 2, 3, 4, 5, 6], 0)).toThrow(
        ERROR_MESSAGES.LOTTO.OUT_OF_RANGE,
      );
    });

    test('보너스 번호가 45보다 크면 예외가 발생한다.', () => {
      expect(() => new WinningLotto([1, 2, 3, 4, 5, 6], 46)).toThrow(
        ERROR_MESSAGES.LOTTO.OUT_OF_RANGE,
      );
    });

    test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
      expect(() => new WinningLotto([1, 2, 3, 4, 5, 6], 6)).toThrow(
        ERROR_MESSAGES.BONUS_NUMBER.DUPLICATED_WITH_WINNING,
      );
    });

    test('당첨 번호가 6개가 아니면 예외가 발생한다.', () => {
      expect(() => new WinningLotto([1, 2, 3, 4, 5], 7)).toThrow(
        ERROR_MESSAGES.LOTTO.INVALID_COUNT,
      );
    });

    test('당첨 번호에 중복이 있으면 예외가 발생한다.', () => {
      expect(() => new WinningLotto([1, 2, 3, 4, 5, 5], 7)).toThrow(
        ERROR_MESSAGES.LOTTO.DUPLICATED,
      );
    });

    test('당첨 번호가 1보다 작은 값을 포함하면 예외가 발생한다.', () => {
      expect(() => new WinningLotto([0, 1, 2, 3, 4, 5], 7)).toThrow(
        ERROR_MESSAGES.LOTTO.OUT_OF_RANGE,
      );
    });

    test('당첨 번호가 45보다 큰 값을 포함하면 예외가 발생한다.', () => {
      expect(() => new WinningLotto([1, 2, 3, 4, 5, 46], 7)).toThrow(
        ERROR_MESSAGES.LOTTO.OUT_OF_RANGE,
      );
    });
  });
});
