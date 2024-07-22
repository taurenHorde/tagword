import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/store';
import { inputConversionData } from '../app/action1/footnoteConversionStoreSlice';
import { ReduxAllType, FootnoteExtractFcReturnType } from './../type/Type';
import footnoteExtractFc from '../function/Conversion';
import InputPage from './Input';
import KeywordPage from './Keyword';
import StoryPage from './Story';
import FootnotePage from './Footnote';



function MainPage(): JSX.Element {
    const dispatch = useAppDispatch();
    const sentenceStoreSlice = useAppSelector((state: ReduxAllType) => state.sentenceStoreSlice)
    useEffect(() => {
        const conversionReusult = footnoteExtractFc(sentenceStoreSlice)
        dispatch(inputConversionData(conversionReusult))
    }, [])

    return <div
        className='flex column jc-start ai-center flex11'>
        <KeywordPage />
        <InputPage />
        <StoryPage />
        <FootnotePage />
    </div>
}



export default MainPage