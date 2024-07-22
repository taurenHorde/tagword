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
        content: '다.. 제작 한 것이 아닌 제작중인 프로젝트입니다 주.',
        footnote: '',
        expression: [100, 60, 30, 200],
        nickname: '타우렌',
        password: 'pass',
        comments: 120,
        writeDate: '2024-7-22 14:50:02',
        paragraph: 1
    },
    {
        no: 3,
        content: '주석이 보이는 작업과 문단끝내기시 문단이 나뉘는 작업을 하고 있습니다 입력 날짜 또한 아직 적용이 안되어 있습니데..',
        footnote: '',
        expression: [120, 6120, 300, 24000],
        nickname: '타우렌짱',
        password: 'pass',
        comments: 1200,
        writeDate: '2024-7-23 19:20:02',
        paragraph: 1
    },
    {
        no: 4,
        content: '데이터가 저장되지 않으니 자유롭게 글을 한번 남겨보시고 문장들을 클릭해 보세요  가,어,야.',
        footnote: '',
        expression: [120022, 621230, 3010, 2400],
        nickname: '타우렌짱',
        password: 'pass',
        comments: 12002,
        writeDate: '2024-7-24 23:24:02',
        paragraph: 1
    }
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