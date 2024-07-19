


/////  Story.tsx ---------------------------------

export type VerticalEleFc = (premier: string) => JSX.IntrinsicElements.span
export type SentenceClickFc = (no: SentenceType, event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
export type StoryModalEleFc = () => JSX.IntrinsicElements.div
export interface SentenceType {
    no: number,
    content: string,
    premier: string,
    expression: [number, number, number, number],
    nickname: string,
    password: string,
    sentence: number,
    comments : number,
    writeDate : string
}



