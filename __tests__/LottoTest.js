import { ERROR_MESSAGES } from '../src/constants/messages.js';
import Lotto from '../src/model/Lotto.js';

describe('로또 클래스 테스트', () => {
  describe('정상 케이스 테스트', () => {
    test('유효한 로또 번호로 객체가 생성된다.', () => {
      expect(() => new Lotto([1, 2, 3, 4, 5, 6])).not.toThrow();
    });

    test('로또 번호는 오름차순으로 정렬된다.', () => {
      const lotto = new Lotto([6, 5, 4, 3, 2, 1]);
      expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('로또 번호를 조회할 수 있다.', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('당첨 번호와 일치하는 번호 개수를 확인할 수 있다.', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const winningLotto = new Lotto([1, 2, 3, 10, 11, 12]);
      expect(lotto.getMatchingNumbersLength(winningLotto)).toBe(3);
    });

    test('보너스 번호 포함 여부를 확인할 수 있다.', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      expect(lotto.hasBonusNumber(6)).toBe(true);
      expect(lotto.hasBonusNumber(7)).toBe(false);
    });
  });

  describe('예외 케이스 테스트', () => {
    test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
      expect(() => new Lotto([1, 2, 3, 4, 5, 6, 7])).toThrow(ERROR_MESSAGES.LOTTO.INVALID_COUNT);
    });

    test('로또 번호의 개수가 6개 미만이면 예외가 발생한다.', () => {
      expect(() => new Lotto([1, 2, 3, 4, 5])).toThrow(ERROR_MESSAGES.LOTTO.INVALID_COUNT);
    });

    test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => new Lotto([1, 2, 3, 4, 5, 5])).toThrow(ERROR_MESSAGES.LOTTO.DUPLICATED);
    });

    test('로또 번호가 1보다 작으면 예외가 발생한다.', () => {
      expect(() => new Lotto([0, 1, 2, 3, 4, 5])).toThrow(ERROR_MESSAGES.LOTTO.OUT_OF_RANGE);
    });

    test('로또 번호가 45보다 크면 예외가 발생한다.', () => {
      expect(() => new Lotto([1, 2, 3, 4, 5, 46])).toThrow(ERROR_MESSAGES.LOTTO.OUT_OF_RANGE);
    });

    test('로또 번호가 정수가 아니면 예외가 발생한다.', () => {
      expect(() => new Lotto([1.5, 2, 3, 4, 5, 6])).toThrow(ERROR_MESSAGES.COMMON.NOT_INTEGER);
    });
  });
});
