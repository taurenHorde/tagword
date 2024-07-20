



export type VerticalEleFc = (premier: string) => JSX.IntrinsicElements.span
export type SentenceClickFc = (no: SentenceType, event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
export type StoryModalEleFc = () => JSX.IntrinsicElements.div

export interface SentenceType {
    no: number,
    content: string,
    footnote: string,
    expression: [number, number, number, number],
    nickname: string,
    password: string,
    sentence: number,
    comments: number,
    writeDate: string,
    paragraph: number
}

export interface SentenceActionSliceType extends SentenceType { }
export interface SentenceStoreSliceType {
    sentenceCount: number,
    paragraphCount: number,
    pageCount: number
}

export interface ReduxAllType {
    sentenceActionSlice: SentenceActionSliceType[],
    sentenceStoreSlice: SentenceStoreSliceType
}


