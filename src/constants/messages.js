import { LOTTO_CONFIG } from './constants.js';

export const ERROR_MESSAGES = Object.freeze({
  COMMON: Object.freeze({
    EMPTY_INPUT: '[ERROR] 입력값이 비어있습니다.',
    NOT_NUMBER: '[ERROR] 숫자 형식이 아닙니다.',
    NOT_INTEGER: '[ERROR] 양의 정수가 아닙니다.',
  }),

  USER_MONEY: Object.freeze({
    UNDER_MINIMUM: `[ERROR] 구입 금액은 ${LOTTO_CONFIG.LOTTO_PRICE.toLocaleString(
      'ko-KR',
    )}원 이상이어야 합니다.`,
    NOT_THOUSAND_UNIT: `[ERROR] 구입 금액은 ${LOTTO_CONFIG.LOTTO_PRICE.toLocaleString(
      'ko-KR',
    )}원 단위여야 합니다.`,
  }),

  LOTTO: Object.freeze({
    INVALID_SEPARATOR: '[ERROR] 쉼표(,)로 구분된 형식이어야 합니다.',
    INVALID_COUNT: `[ERROR] 로또 번호는 ${LOTTO_CONFIG.NUMBER_COUNT}개여야 합니다.`,
    DUPLICATED: '[ERROR] 로또 번호에 중복된 숫자가 있습니다.',
    OUT_OF_RANGE: `[ERROR] 로또 번호는 ${LOTTO_CONFIG.MIN_NUMBER}부터 ${LOTTO_CONFIG.MAX_NUMBER} 사이의 정수여야 합니다.`,
  }),

  BONUS_NUMBER: Object.freeze({
    DUPLICATED_WITH_WINNING: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  }),
});

export const INPUT_MESSAGES = Object.freeze({
  USER_MONEY: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGES = Object.freeze({
  DIVIDER: '\n당첨 통계\n---',

  TICKET_COUNT: (count) => `\n${count}개를 구매했습니다.`,
  TICKET_NUMBER: (numbers) => `[${numbers}]`,

  PRIZE: Object.freeze({
    FIRST: (reward, count) => `6개 일치 (${reward.toLocaleString('ko-KR')}원) - ${count}개`,
    SECOND: (reward, count) => `5개 일치, 보너스 볼 일치 (${reward.toLocaleString('ko-KR')}원) - ${count}개`,
    THIRD: (reward, count) => `5개 일치 (${reward.toLocaleString('ko-KR')}원) - ${count}개`,
    FOURTH: (reward, count) => `4개 일치 (${reward.toLocaleString('ko-KR')}원) - ${count}개`,
    FIFTH: (reward, count) => `3개 일치 (${reward.toLocaleString('ko-KR')}원) - ${count}개`,
  }),

  PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
});
