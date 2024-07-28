import { CustomHelpers } from "joi";

export type FootnoteExtractFcType = (setenceData: SentenceStoreSliceType[]) => FootnoteExtractFcReturnType[];
export type SentenceClickFcType = (idx: number, event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
export type StoryModalEleFcType = () => JSX.IntrinsicElements.div

export type MakeBookCheckFcType = () => void
export type MakeSumbitFcType = (e: React.FormEvent<HTMLFormElement>) => void;
export type SentenceSubmitFcType = (e: React.FormEvent<HTMLFormElement>) => void;
export type CustomValidationType = (value: string, helpers: CustomHelpers) => string | Joi.ValidationError;

// -----------------------------------

interface MakeBookUserInputType {
    title: string,
    topic: string,
    direction: string,
    Password1: string,
    Password2: string
}

interface FootnoteExtractFcReturnType {
    no: number,
    footnote?: string, // 수정 필요
    sentenceNo: number
}
interface SentenceUserInputType { // 사용자 입력 데이터 타입
    content: string,
    footnote?: string,
    nickname: string,
    password: string
}
interface SentenceUserInputCheckBoxType { // 사용자 입력 데이터시 주석 및 문단 변경 체크박스 결과
    footNoteCheckBox: boolean,
    changeParagraph: boolean
}
export interface SentenceUserInputDataTotal extends SentenceUserInputType, SentenceUserInputCheckBoxType {// 사용자 모든 입력데이터 

}
export interface SentenceType extends SentenceUserInputType { // 사용자 입력 데이터 타입 + 날짜등 정보 추가
    no: number,
    expression: [number, number, number, number],
    comments: number,
    writeDate: string,
    paragraph: number
}
export interface ValidationTotalFucRetrunType { // validate retrun type
    error: string | undefined,
    value: SentenceUserInputType,
}




// store.ts  initialState 용 type interface

export interface SentenceStoreSliceType extends SentenceType {
    _id?: string
}  // SentenceType 이랑 동일 
export interface SentenceCounterSliceType {
    _id?: string
    sentenceCount: number,
    paragraphCount: number,
    pageCount: number,
    lastWords: string[],
    newStart: boolean,
    title: string,
    topic: string,
    direction: string,
    books: number
    password1?: string
    password2?: string
}
export interface ReduxAllType { // 모든 reducer 타입모음 // 각 component에서 useAppSelector 로 불러올 때 사용
    sentenceStoreSlice: SentenceStoreSliceType[],
    sentenceCounterSlice: SentenceCounterSliceType,
    footnoteConversionStoreSlice: FootnoteExtractFcReturnType[],
}




