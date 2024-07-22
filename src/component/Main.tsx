
import { useEffect } from 'react';
import InputPage from './Input';
import KeywordPage from './Keyword';
import StoryPage from './Story';



function MainPage(): JSX.Element {

    useEffect(() => {
        // test space
    })

    return <>
        <KeywordPage />
        <InputPage />
        <StoryPage />
    </>
}



export default MainPage