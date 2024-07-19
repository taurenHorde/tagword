import './../css/Story.css'
import { SentenceType, VerticalEleFc, SentenceClickFc, StoryModalEleFc } from './Type';
import { useState, useRef, Children } from 'react';




function StoryPage(): JSX.Element {
    const [modal, setModal] = useState<boolean>(false);
    const [modalData, setModalData] = useState<SentenceType>();
    const sentenceClick: SentenceClickFc = function (no, event) {
        setModal(true);
        setModalData(no)
    }

    const storyModalElement: StoryModalEleFc = () => <div
        className='storyModalBox flex column jc-center ai-center'>
        <div className='storyModalExpression flex row ai-center'>
            <div>
                🤣 | {modalData?.expression[0]}
            </div>
            <div>
                🥹 | {modalData?.expression[1]}
            </div>
            <div>
                👍 | {modalData?.expression[2]}
            </div>
            <div>
                ❤️ | {modalData?.expression[3]}
            </div>
            <div>
                💬 | {modalData?.expression[0]}
            </div>
        </div>
        <div className='storyModalInfo flex row ai-center'>
            <div>
                <p>닉네임 : {modalData?.nickname}</p>
            </div>
            <div>
                <p>등록일 : {modalData?.writeDate}</p>
            </div>
        </div>
    </div>

    return (
        <div className="StoryPageWrap">
            <div className='storyBox'>
                <p className='storyParagraph'>
                    {test.map((val, idx) => <StorySentence key={idx} sentenceClick={sentenceClick} sentenceData={val} />)}
                </p>
                {modal && (<div className='storyModalWrap'>{storyModalElement()}</div>)}
            </div>
        </div>
    )
}


function StorySentence(props: { sentenceData: SentenceType, sentenceClick: SentenceClickFc }): JSX.Element {
    const {content, premier } = props.sentenceData;
    const sentenceClick = props.sentenceClick
    const verticalElement: VerticalEleFc = (premier) => premier && (<span className='storyVertical'>[+]</span>)
    return <span
        className='storySentence'
        onClick={(event) => sentenceClick(props.sentenceData, event)}>
        {content}
        {verticalElement(premier)}
    </span>
}





const test: SentenceType[] = [
    {
        no: 1,
        content: '어느날 투명드래곤이 울부 짖었다. 오아아아아아왕 화난다!',
        premier: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint similique neque aut dolorem qui voluptates esse ipsam iste! Magni, repellendus. Perferendis dolore omnis odio ipsam eum atque quo modi necessitatibus.',
        expression: [1, 5, 2, 6],
        nickname: '아이디1',
        password: '비밀번호',
        sentence: 1,
        comments: 1,
        writeDate: '2024-02-03'
    },
]


export default StoryPage 