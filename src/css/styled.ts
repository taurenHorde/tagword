import styled from "styled-components";
import { StorySentenceStyledType, ColorExtractorFcType, FontSizeExtractorFcType, TitlePageBooKBoxWrapStyledType } from "../type/TypeStyled";






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
    }

    return `${returnValue}rem`
    // return `${returnValue}rem ${overMaxValue ? 'bold' : 'normal'}`
}

export const TitlePageBooKBoxWrapStyled = styled.div<TitlePageBooKBoxWrapStyledType>`
    width: 100%;
    background: ;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1), -5px -5px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    background : ${props => props.$pageClose ? 'rgb(225, 216, 216)' : 'rgba(219, 219, 219, 0.075)'};


    >div {
        width: 100%;
    }
    
    .bookTitle {
        padding: 5px 0px;
        border-bottom: 1px solid rgba(128, 128, 128, 0.247);
    }
    
    .bookTopic,
    .bookDirection,
    .bookInfo,
    .bookButton {
        margin: 5px 0px;
    }
    
    .bookTopic p,
    .bookDirection p {
        font-size: 0.9rem;
    }
    
    .bookTopic input,
    .bookDirection input {
        width: 100%;
        padding: 2px 5px;
        box-sizing: border-box;
        font-size: 0.9rem;
        border: none;
    }
    
    .bookInfo {
    div{
        padding: 5px 8px;
        box-sizing: border-box;
        border: none;
        font-size: 0.8rem;
        font-weight: bold;
        color: rgb(0, 0, 0);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.288);
        cursor: pointer;
        user-select: none;
        margin-left: 5px;
        background: rgb(200, 235, 135);
      }
    }
    
    .bookInfo>div p {
        font-size: 0.8rem;
    }
    
    .bookButton button {
        padding: 5px 8px;
        box-sizing: border-box;
        border: none;
        font-size: 0.8rem;
        font-weight: bold;
        color: rgb(0, 0, 0);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.288);
        cursor: pointer;
        user-select: none;
        margin-left: 5px;
    }
    
    .bookButton button:nth-of-type(1) {
        background: skyblue;
    }
    
    .bookButton button:nth-of-type(2) {
        background: rgb(255, 111, 111);
    }
    
    
    .bookAdmin {
        margin-top: 10px;
        padding: 10px 5px;
        box-sizing: border-box;
        background: rgb(238, 238, 238);
        display: none;
    }
    
    .bookAdminPassword input{
        padding: 2px 5px;
        box-sizing: border-box;
        font-size: 0.9rem;
        border: none;
    }
    
    .bookAdminSelect button {
        padding: 5px 8px;
        box-sizing: border-box;
        border: none;
        font-size: 0.8rem;
        font-weight: bold;
        color: rgb(0, 0, 0);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.288);
        cursor: pointer;
        user-select: none;
        margin-left: 5px;
    }
    

`