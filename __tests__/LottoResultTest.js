import Lotto from '../src/model/Lotto.js';
import LottoResult from '../src/service/LottoResult.js';
import WinningLotto from '../src/service/WinningLotto.js';

describe('LottoResult 클래스 테스트', () => {
  describe('당첨 확인 테스트 - 1등', () => {
    test('당첨번호와 로또 번호가 6개가 일치하면 1등으로 카운트 된다.', () => {
      const lottoResult = new LottoResult();
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

      lottoResult.addLotto(lotto, winningLotto);

      expect(lottoResult.getRankCount('FIRST')).toBe(1);
    });

    test('1등 당첨 시 총 상금은 2,000,000,000원이다.', () => {
      const lottoResult = new LottoResult();
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

      lottoResult.addLotto(lotto, winningLotto);

      expect(lottoResult.getTotalPrize()).toBe(2_000_000_000);
    });
  });

  describe('당첨 확인 테스트 - 2등', () => {
    test('5개 일치하고 보너스 번호가 일치하면 2등으로 카운트된다.', () => {
      const lottoResult = new LottoResult();
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 4, 5, 7]);

      lottoResult.addLotto(lotto, winningLotto);

      expect(lottoResult.getRankCount('SECOND')).toBe(1);
    });

    test('2등 당첨 시 총 상금은 30,000,000원이다.', () => {
      const lottoResult = new LottoResult();
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 4, 5, 7]);

      lottoResult.addLotto(lotto, winningLotto);

      expect(lottoResult.getTotalPrize()).toBe(30_000_000);
    });
  });

  describe('당첨 확인 테스트 - 3등', () => {
    test('5개 일치하고 보너스 번호가 일치하지 않으면 3등으로 카운트된다.', () => {
      const lottoResult = new LottoResult();
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 4, 5, 8]);

      lottoResult.addLotto(lotto, winningLotto);

      expect(lottoResult.getRankCount('THIRD')).toBe(1);
    });

    test('3등 당첨 시 총 상금은 1,500,000원이다.', () => {
      const lottoResult = new LottoResult();
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 4, 5, 8]);

      lottoResult.addLotto(lotto, winningLotto);

      expect(lottoResult.getTotalPrize()).toBe(1_500_000);
    });
  });

  describe('당첨 확인 테스트 - 4등', () => {
    test('4개 일치하면 4등으로 카운트된다.', () => {
      const lottoResult = new LottoResult();
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 4, 8, 9]);

      lottoResult.addLotto(lotto, winningLotto);

      expect(lottoResult.getRankCount('FOURTH')).toBe(1);
    });

    test('4등 당첨 시 총 상금은 50,000원이다.', () => {
      const lottoResult = new LottoResult();
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 4, 8, 9]);

      lottoResult.addLotto(lotto, winningLotto);

      expect(lottoResult.getTotalPrize()).toBe(50_000);
    });
  });

  describe('당첨 확인 테스트 - 5등', () => {
    test('3개 일치하면 5등으로 카운트된다.', () => {
      const lottoResult = new LottoResult();
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 8, 9, 10]);

      lottoResult.addLotto(lotto, winningLotto);

      expect(lottoResult.getRankCount('FIFTH')).toBe(1);
    });

    test('5등 당첨 시 총 상금은 5,000원이다.', () => {
      const lottoResult = new LottoResult();
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 8, 9, 10]);

      lottoResult.addLotto(lotto, winningLotto);

      expect(lottoResult.getTotalPrize()).toBe(5_000);
    });
  });

  describe('당첨 확인 테스트 - 낙첨', () => {
    test('2개 이하 일치하면 당첨되지 않는다.', () => {
      const lottoResult = new LottoResult();
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 8, 9, 10, 11]);

      lottoResult.addLotto(lotto, winningLotto);

      expect(lottoResult.getRankCount('FIRST')).toBe(0);
      expect(lottoResult.getRankCount('SECOND')).toBe(0);
      expect(lottoResult.getRankCount('THIRD')).toBe(0);
      expect(lottoResult.getRankCount('FOURTH')).toBe(0);
      expect(lottoResult.getRankCount('FIFTH')).toBe(0);
    });

    test('낙첨 시 총 상금은 0원이다.', () => {
      const lottoResult = new LottoResult();
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([8, 9, 10, 11, 12, 13]);

      lottoResult.addLotto(lotto, winningLotto);

      expect(lottoResult.getTotalPrize()).toBe(0);
    });
  });

  describe('수익률 계산 테스트', () => {
    test('1,000원 구매하고 5등 1개 당첨시 수익률은 500.0%이다.', () => {
      const lottoResult = new LottoResult();
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 8, 9, 10]);

      lottoResult.addLotto(lotto, winningLotto);

      expect(lottoResult.getProfitRate(1000)).toBe('500.0');
    });

    test('1등 당첨 시 수익률은 200000000.0%이다.', () => {
      const lottoResult = new LottoResult();
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

      lottoResult.addLotto(lotto, winningLotto);

      expect(lottoResult.getProfitRate(1000)).toBe('200000000.0');
    });
  });

  describe('복수 로또 처리 테스트', () => {
    test('여러 로또가 당첨되면 당첨된 랭크가 각 카운트 된다.', () => {
      const lottoResult = new LottoResult();
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
      const lotto1 = new Lotto([1, 2, 3, 8, 9, 10]); // 5등
      const lotto2 = new Lotto([1, 2, 3, 4, 8, 9]); // 4등
      const lotto3 = new Lotto([8, 9, 10, 11, 12, 13]); // 낙첨

      lottoResult.addLotto(lotto1, winningLotto);
      lottoResult.addLotto(lotto2, winningLotto);
      lottoResult.addLotto(lotto3, winningLotto);

      expect(lottoResult.getRankCount('FIFTH')).toBe(1);
      expect(lottoResult.getRankCount('FOURTH')).toBe(1);
    });

    test('같은 등수가 여러 개 있을 수 있다.', () => {
      const lottoResult = new LottoResult();
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
      const lotto1 = new Lotto([1, 2, 3, 8, 9, 10]); // 5등
      const lotto2 = new Lotto([1, 2, 3, 11, 12, 13]); // 5등

      lottoResult.addLotto(lotto1, winningLotto);
      lottoResult.addLotto(lotto2, winningLotto);

      expect(lottoResult.getRankCount('FIFTH')).toBe(2);
    });

    test('복수 당첨 시 총 상금이 합산된다.', () => {
      const lottoResult = new LottoResult();
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
      const lotto1 = new Lotto([1, 2, 3, 8, 9, 10]); // 5등 (5,000원)
      const lotto2 = new Lotto([1, 2, 3, 4, 8, 9]); // 4등 (50,000원)

      lottoResult.addLotto(lotto1, winningLotto);
      lottoResult.addLotto(lotto2, winningLotto);

      expect(lottoResult.getTotalPrize()).toBe(55_000);
    });
  });
});
