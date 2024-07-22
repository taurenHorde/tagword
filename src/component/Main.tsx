
import { useEffect } from 'react';
import InputPage from './Input';
import KeywordPage from './Keyword';
import StoryPage from './Story';
import FootnotePage from './Footnote';



function MainPage(): JSX.Element {

    return <div
        className='flex column jc-start ai-center flex11'>
        <KeywordPage />
        <InputPage />
        <StoryPage />
        <FootnotePage />
    </div>
}



export default MainPage