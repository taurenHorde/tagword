import './../css/Story.css'
import { SentenceType, VerticalEleFc, SentenceClickFc, StoryModalEleFc } from './Type';
import { useState, useRef, Children } from 'react';




function StoryPage(): JSX.Element {
    const [modal, setModal] = useState<boolean>(false);
    const [modalData, setModalData] = useState<SentenceType>();
    const sentenceClick: SentenceClickFc = function (no, event) {
        const childEle: HTMLSpanElement = event.currentTarget // 클릭한 문장 
        const parentEle: HTMLSpanElement | null = event.currentTarget.parentElement // 부모인 문단
        const grandParentEld: HTMLElement | null | undefined = parentEle?.parentElement // 조부모인 storyBox
        if (parentEle && grandParentEld) {
            setModal(true)
            setModalData(no)
            const childPostion: DOMRect = childEle.getBoundingClientRect();
            const parentPostion: DOMRect = parentEle.getBoundingClientRect();
            const grandParentPostion: DOMRect = grandParentEld.getBoundingClientRect();
            const spanXFromTheParentLeft: number = parentPostion.x - childPostion.x // 부모로 부터의 left 부터의 값
            const spanYFromTheGrandParentTop: number = grandParentPostion.y - childPostion.y // 조부모로 부터의 Top 값
            const spanYFromTheWindowTop: number = event.clientY // window 으로부터 top 값

            // Modal ->  child : 클릭한 문장(span)  /  parent : 부모인 문단(p)  / grandParent  :  조부모인 StoryBox(div)
            // Modal의 위치  -> 조부모 relative를 주어 Modal의 위치를 클릭한 문장 위에 뜨게 할 예정(기본)
            // Modal의 크기  -> height 는 고정   /  width는 주석에 따라 변경 예정

            console.log(`부모로부터 left : ${spanXFromTheParentLeft}`)
            console.log(`조부모로부터 높이 : ${spanYFromTheGrandParentTop}`)
            console.log(`윈도우로부터 높이 : ${spanYFromTheWindowTop}`)
        }
    }

    const storyModalElement: StoryModalEleFc = () => <div
        className='storyModal flex column jc-center ai-center'
        style={{}}
    >
        <div className='storyModalPremier'>
            <p>{modalData?.premier}</p>
        </div>
        <div className='storyModalSentence flex row ai-center'>
            <div>
                🤣 | 0
            </div>
            <div>
                🥹 | 0
            </div>
            <div>
                👍 | 0
            </div>
            <div>
                ❤️ | 0
            </div>
            <div>
                💬 | 0
            </div>
        </div>
    </div>

    return (
        <div className="StoryPageWrap">
            <div className='storyBox'>
                <p className='storyParagraph'>
                    {test.map((val, idx) => <StorySentence key={idx} sentenceClick={sentenceClick} sentenceData={val} />)}
                </p>
                {modal && (storyModalElement())}
            </div>
        </div>
    )
}


function StorySentence(props: { sentenceData: SentenceType, sentenceClick: SentenceClickFc }): JSX.Element {
    const { no, content, premier } = props.sentenceData;
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
        expression: [0, 0, 0, 0],
        nickname: '아이디1',
        password: '비밀번호',
        sentence: 1
    },
    {
        no: 2,
        content: '다들 궁금해 왔다. 왜 투명 드래곤이 화난건지... 하지만 물어보기 무서웠다. 왜냐면',
        premier: '',
        expression: [0, 0, 0, 0],
        nickname: '아이디2',
        password: '비밀번호',
        sentence: 1
    },
    {
        no: 2,
        content: '면상이 되게 무서운 드래곤였기 때문이다. 그래서 말 걸수가 없었다.',
        premier: '',
        expression: [0, 0, 0, 0],
        nickname: '아이디3',
        password: '비밀번호',
        sentence: 1
    },
    {
        no: 3,
        content: '다들 투명드래곤에게 집중되어 있는 그 시간, 옆 왕국에서는 비상이 걸렸다.',
        premier: '',
        expression: [0, 0, 0, 0],
        nickname: '아이디4',
        password: '비밀번호',
        sentence: 2
    },
    {
        no: 4,
        content: '다시.. 왕국이 공격 당할 까봐 공포에 떠는 나날들이 올까봐 두려워 하는 시민들',
        premier: '슬픈 음악이 들리는 것 같다..',
        expression: [0, 0, 0, 0],
        nickname: '아이디5',
        password: '비밀번호',
        sentence: 2
    },
    {
        no: 5,
        content: '들판 쪽을 공포에 찬 눈으로 바라보며 대비를 하는 왕국에 용사단들..',
        premier: '',
        expression: [0, 0, 0, 0],
        nickname: '아이디1',
        password: '비밀번호',
        sentence: 2
    },
    {
        no: 6,
        content: '들판 건너 그 투명드래곤은 어느새 진정된 상태로 친구들과 이야기 중이였다. 친구들이',
        premier: '',
        expression: [0, 0, 0, 0],
        nickname: '아이디3',
        password: '비밀번호',
        sentence: 3
    }
]


export default StoryPage 