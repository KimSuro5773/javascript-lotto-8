import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../src/constants/messages.js';
import LottoMachine from '../src/service/LottoMachine.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe('LottoMachine 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe('정상 동작 테스트', () => {
    test('1000원으로 1개의 로또가 생성된다.', () => {
      mockRandoms([[1, 2, 3, 4, 5, 6]]);

      const lottoMachine = new LottoMachine(1000);
      const lottos = lottoMachine.generateLottos();

      expect(lottos).toHaveLength(1);
    });

    test('5000원으로 5개의 로또가 생성된다.', () => {
      mockRandoms([
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30],
      ]);

      const lottoMachine = new LottoMachine(5000);
      const lottos = lottoMachine.generateLottos();

      expect(lottos).toHaveLength(5);
    });
  });

  describe('예외 케이스 테스트', () => {
    test('구입 금액이 1,000원 미만이면 예외가 발생한다.', () => {
      expect(() => new LottoMachine(500)).toThrow(ERROR_MESSAGES.USER_MONEY.UNDER_MINIMUM);
    });

    test('구입 금액이 1,000원 단위가 아니면 예외가 발생한다.', () => {
      expect(() => new LottoMachine(1500).toThrow(ERROR_MESSAGES.USER_MONEY.NOT_THOUSAND_UNIT));
    });
  });
});
