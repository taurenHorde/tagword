import InputPage from './Input';
import KeywordPage from './Keyword';
import StoryPage from './Story';



function MainPage(): JSX.Element {
    return <>
        <KeywordPage />
        <InputPage />
        <StoryPage />
    </>
}



export default MainPage