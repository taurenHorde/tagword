import styled from "styled-components";
import { StorySentenceStyledType, ColorExtractorFcType, FontSizeExtractorFcType } from "../type/TypeStyled";






//  사용위치 Story.tsx 내 StorySentence Component - 
export const StorySentenceStyled = styled.span<StorySentenceStyledType>`
    color : ${props => colorExtractor(props.$expresstion)};
    font-size:${props => FontSizeExtractor(props.$expresstion)};
    margin-right: 5px;
    text-wrap: wrap;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease;
    position: relative; 

    &:hover{
    background: rgb(83, 83, 255);
    color: white !important;
    }
`

const colorExtractor: ColorExtractorFcType = (expresstion) => {
    let returnValue = [0, 0, 0]
    const idxColorArrayRGB = [[225, 223, 0], [70, 130, 180], [220, 20, 60], [50, 205, 50]]
    // idx =>  happiness, sadness, best, positive

    const maxValue = 150; // 최대값 100%
    const minValue = 30; // 최소값 0%  - 30 이하는 그냥 검정색 유지
    const maxExpresstionNumber = Math.max(...expresstion) // 감정 중 가장 높은 표 받은 수, 
    const maxExpresstionIndex = expresstion.indexOf(maxExpresstionNumber); // 그게 어떤 감정인지, 동률일 경우 앞 idx

    if (maxExpresstionNumber > minValue && maxExpresstionNumber < maxValue) {
        const percentageOfMaxValue // 최소값 30 ~ 최대값 150으로 놓고 백분율 변환
            = ((maxExpresstionNumber - minValue) / (maxValue - minValue));
        const conversionStyleRGB = idxColorArrayRGB[maxExpresstionIndex].map((val) => val * percentageOfMaxValue)
        returnValue = conversionStyleRGB
    } else if (maxExpresstionNumber >= maxValue) {
        returnValue = idxColorArrayRGB[maxExpresstionIndex]
    }
    return `rgb(${returnValue[0]},${returnValue[1]},${returnValue[2]})`
}

const FontSizeExtractor: FontSizeExtractorFcType = (expresstion) => {
    let returnValue = 1
    let overMaxValue = false
    const maxValue = 1000; // 최대값 100%
    const minValue = 100; // 최소값 0%  - 100 이하는 그냥 1rem 유지
    const totalExpression = expresstion.reduce((pre, cur) => pre + cur)

    if (totalExpression > minValue && totalExpression < maxValue) {
        const percentageOfMaxValue
            = parseFloat(((totalExpression - minValue) / (maxValue - minValue)).toFixed(2));
        returnValue = returnValue + percentageOfMaxValue
    } else if (totalExpression >= maxValue) {
        returnValue = 2
        overMaxValue = true
        console.log(totalExpression)
    }

    return `${returnValue}rem`
    // return `${returnValue}rem ${overMaxValue ? 'bold' : 'normal'}`
}
