import { CustomHelpers, number } from "joi";




// ///////////////////////////////////////////
//  Fc Type //////////////////////////////////
// ///////////////////////////////////////////

export type InFormEventReturnVoidFc = (e: React.FormEvent<HTMLFormElement>) => void;
export type ExpressionClickFc = (sentenceData: SentenceStoreSliceType, idx: number) => void; // ClickSentence.tsx
export type HisToryExtractFcType = (setenceData: SentenceStoreSliceType[], optionData: historyOptionSliceType, page: number) => Promise<{ returnData: SentenceStoreSliceType[], conversionedDataConunt: number }>;
export type SentenceClickFcType = (SentenceType: SentenceType) => void
export type MakeBookCheckFcType = () => void
export type MakeSumbitFcType = (e: React.FormEvent<HTMLFormElement>) => void;
export type FootnoteExtractFcType = (setenceData: SentenceStoreSliceType[]) => FootnoteExtractFcReturnType[];
export type SentenceSubmitFcType = (e: React.FormEvent<HTMLFormElement>) => void;
export type CustomValidationType = (value: string, helpers: CustomHelpers) => string | Joi.ValidationError;

// ///////////////////////////////////////////
//  props Type //////////////////////////////////
// ///////////////////////////////////////////

export type HistoryBoxProps = {
    sentenceData: SentenceType,
    expressionClickFc: ExpressionClickFc
}

export type EmptyPageProps = {
    pageNumber: number
}

// ///////////////////////////////////////////
//  Validation(Joi) Return Data Type //////////////////////////////////
// ///////////////////////////////////////////

export interface ValidationInputSentenceFucRetrunType { // validate retrun type
    error: string | undefined,
    value: SentenceUserInputType,
}
export interface ValidationInputBookFucRetrunType { // validate retrun type
    error: string | undefined,
    value: MakeBookUserInputTyp,
}
export interface ValidationInputBookEditFucRetrunType { // validate retrun type
    error: string | undefined,
    value: EditBookUserInputType,
}
export interface ValidationInputBookCloseFucRetrunType { // validate retrun type
    error: string | undefined,
    value: CloseBookUserInputType ,
}

// ///////////////////////////////////////////
//  TypeGuard Type //////////////////////////////////
// ///////////////////////////////////////////

interface IsAddSentenceResult {
    sentenceResData: SentenceStoreSliceType[]
    counterResData: SentenceCounterSliceType
}




// ///////////////////////////////////////////
//  Slice Type //////////////////////////////////
// ///////////////////////////////////////////

export interface SentenceStoreSliceType extends SentenceType {
    _id?: string

}  // SentenceType 이랑 동일 
export interface SentenceCounterSliceType {
    _id?: string
    sentenceCount: number,
    paragraphCount: number,
    pageClose: boolean,
    lastWords: string[],
    newStart: boolean,
    title: string,
    topic: string,
    direction: string,
    books: number
    password1?: string
    password2?: string
    mode: boolean
}
export interface historyOptionSliceType {
    paragraphOn: boolean,
    paragraphNumber: number,
    viewNumber: 10 | 25 | 50,
    searchOn: boolean,
    searchType: number,
    searchText: string,
}
export interface sentenceLoadingSliceType {
    setenceFirstGetLoading: boolean
}
export interface ReduxAllType { // 모든 reducer 타입모음 // 각 component에서 useAppSelector 로 불러올 때 사용
    sentenceStoreSlice: SentenceStoreSliceType[],
    sentenceCounterSlice: SentenceCounterSliceType,
    footnoteConversionStoreSlice: FootnoteExtractFcReturnType[],
    mainControllerSlice: { tabControlNumber: number },
    clickSentenceDataSlice: SentenceStoreSliceType,
    historyOptionSlice: historyOptionSliceType
    sentenceLoadingSlice: sentenceLoadingSliceType
}



// ///////////////////////////////////////////
// 이것저것 Data Type //////////////////////////////////
// ///////////////////////////////////////////
interface CloseBookUserInputType {
    password: string
}
interface MakeBookUserInputType {
    title: string,
    topic: string,
    direction: string,
    password1: string,
    password2: string
    mode: boolean
}
interface EditBookUserInputType {
    editTopic: string,
    editDirection: string,
    editPassword: string
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

