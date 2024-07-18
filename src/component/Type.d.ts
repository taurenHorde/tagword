

export interface SentenceType {
    no: number,
    content: string,
    premier: string,
    expression: [number, number, number, number],
    nickname: string,
    password: string,
    sentence: number
}

export type VerticalEleFc = (premier: string) => JSX.IntrinsicElements.span
export type SentenceClickFc = (no: number, event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void


