

export interface a {
    a: string;
}


export interface StorySentenceStyledType {
    $expresstion: [number, number, number, number]
}

export interface TitlePageBooKBoxWrapStyledType {
    $pageClose: boolean
}

export type ColorExtractorFcType = (expresstion: [number, number, number, number]) => string
export type FontSizeExtractorFcType = (expresstion: [number, number, number, number]) => string