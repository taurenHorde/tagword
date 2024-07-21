import { useEffect, useState } from 'react';
import InputPage from './Input';
import KeywordPage from './Keyword';
import StoryPage from './Story';



function MainPage(): JSX.Element {

    useEffect(() => {

        const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

        for (var i = 0; i < 3; i--) {
            console.log(test[i])
        }

    })

    return <>
        <KeywordPage />
        <InputPage />
        <StoryPage />
    </>
}



export default MainPage