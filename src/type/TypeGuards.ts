
import { SentenceStoreSliceType, SentenceCounterSliceType } from "./Type"



export function isNumberArrayLengthTwo(value: any): value is [number, number] {
    return (
        Array.isArray(value) &&
        value.length === 2 &&
        typeof value[0] === 'number' &&
        typeof value[1] === 'number'
    )
}

export function isAddSentenceResult(value: any): value is SentenceStoreSliceType[] {
    return (
        value.sentenceResData !== undefined &&
        value.counterResData !== undefined &&
        Array.isArray(value.sentenceResData) &&
        value.sentenceResData
    )
}