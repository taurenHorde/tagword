
import { FootnoteExtractFcType, FootnoteExtractFcReturnType, HisToryExtractFcType, SentenceStoreSliceType } from "../type/Type"

const footnoteExtractFc: FootnoteExtractFcType = (sentenceData) => {
    // 현재 페이지 내 사용되는 sentence 데이터에서 footnote(각주) 를 추출하여 사용하기 좋은 데이터로 변경 예정
    // 기본 데이터 내에 저장해도 각주가 있는게 있고 없는게 있고, 페이지마다 데이터 순번이 달라지기 때문에 
    // 따로 데이터를 변환 추출하는게 좋다고 생각 <- 이거 포폴에 쓰자;
    // 메인페이지 마운드시 현재 창에 띄울 데이터 내에서 footnote 정보 추줄 및 변환 그리곤 다시 store 보관 후 , 두 컨포넌트에서 사용

    const extract = sentenceData.filter(val => val.footnote && typeof (val.footnote) === 'string' && val)
    const retrunData: FootnoteExtractFcReturnType[] = []
    for (var i = 0; i < extract.length; i++) {
        retrunData.push({
            no: i + 1,
            footnote: extract[i].footnote, // 이거 타입 나중에 수정해야함. 타입가드
            sentenceNo: extract[i].no
        })
    }
    return retrunData;
}


const historyExtractFc: HisToryExtractFcType = async (sentenceData, optionData) => {
    const { paragraphNumber, paragraphOn, searchOn, searchText, searchType, viewNumber, page } = await optionData
    var filterData = await sentenceData;
    if (searchOn) console.log('')
    if (paragraphOn) filterData = await filterData.filter((val) => val.paragraph === paragraphNumber)
    const conversionedDataConunt = await filterData.length
    const startIdx = (page - 1) * viewNumber
    const endIdx = startIdx + viewNumber
    const returnData = await filterData?.slice(startIdx, endIdx)
    return { returnData, conversionedDataConunt };
}





export { footnoteExtractFc, historyExtractFc }