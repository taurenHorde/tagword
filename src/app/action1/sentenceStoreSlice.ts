import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SentenceStoreSliceType } from '../../type/Type';

const initialState: SentenceStoreSliceType[] = [
    {
        no: 1,
        content: '우와아아아앙 투명드래곤이 울부 짖었다.',
        footnote: '투명드래곤은 크기가 2000미터가 넘었다!',
        expression: [10, 6, 3, 20],
        nickname: '드래곤아빠',
        password: 'pass',
        comments: 10,
        writeDate: '2024-7-20 14:24:02',
        paragraph: 1
    },
    {
        no: 2,
        content: '짖는 소리는 천공과 대지를 울리기에 충분했다. 온 마을 사람들은 공포에 떨었고 국왕 페이커는',
        footnote: '페멘 페멘 페멘!! 긴급숭배',
        expression: [40, 20, 50, 10],
        nickname: '페이커',
        password: 'pass',
        comments: 22,
        writeDate: '2024-7-22 14:50:02',
        paragraph: 1
    },
    {
        no: 3,
        content: `이름 있는 용사들을 호출 하기 시작하였다. 그렇게 모은 영웅들의 이름은 각각 '루피','나루토','손오공' 그리고 바로 나 '타우렌'`,
        footnote: '좋아요좀 ㅋㅋ',
        expression: [0, 0, 0, 0],
        nickname: '타우렌짱',
        password: 'pass',
        comments: 1818,
        writeDate: '2024-7-23 19:20:02',
        paragraph: 1
    },
    {
        no: 4,
        content: `타우렌, 많이 들어보지 못한 이름일 것이다. 아제로스를 구한 타우렌 그는`,
        footnote: '앞 놈 시작단어 타,우,렌 이걸로 뭐하라고 ㅡㅡ ',
        expression: [0, 0, 0, 0],
        nickname: '타우렌죽어라',
        password: 'pass',
        comments: 12,
        writeDate: '2024-7-24 23:24:02',
        paragraph: 1
    },
    {
        no: 5,
        content: `그울음이 가득한 소고기는 참 맛있습니다!`,
        footnote: '',
        expression: [1000, 0, 1, 0],
        nickname: '아제로스요리사',
        password: 'pass',
        comments: 20,
        writeDate: '2024-7-24 23:24:02',
        paragraph: 1
    },
    {
        no: 6,
        content: `소고기 향을 맡고 나도 모르게 향을 쫒던 용사 '김성식씨', 맛있는 향에 이끌려 나도 모르게 무전취식을 하였고 재수없게 가게 사장에게 딱 잡혔다..`,
        footnote: '그가 먹은 고기 타우렌 엌',
        expression: [10, 0, 1, 1],
        nickname: '타우렌냠냠',
        password: 'pass',
        comments: 0,
        writeDate: '2024-7-24 23:24:02',
        paragraph: 2
    },
];

const sentenceStoreSlice = createSlice({
    name: 'sentenceSlice',
    initialState,
    reducers: {
        addSentence: (state, PayloadAction: PayloadAction<SentenceStoreSliceType>) => {
            state.push(PayloadAction.payload)
        },
        addExpression: (state, PayloadAction: PayloadAction<[number, number]>) => {
            // ['🤣', '🥹', '👍', '❤️'] expressionIdx
            const expressionIdx = PayloadAction.payload[0];
            const sentenceIdx = PayloadAction.payload[1];
            state[sentenceIdx].expression[expressionIdx]++
        },
    },
});

export const { addSentence, addExpression } = sentenceStoreSlice.actions;
export default sentenceStoreSlice.reducer;