
import './../css/Story.css'
import { SentenceType, VerticalEleFc } from './Type';



const test: SentenceType[] = [
    {
        no: 1,
        content: '어느날 투명드래곤이 울부 짖었다. 오아아아아아왕 화난다!',
        premier: '투명드래곤은 크기가 컸다.',
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
    },
]

function StoryPage(): JSX.Element {
    return (
        <div className="StoryPageWrap">
            <div className='storyBox'>
                <p className='storyParagraph'>

                    {test.map((val, idx) =>
                        <StorySentence
                            key={idx}
                            sentenceData={val}
                        />)}
                </p>
            </div>

        </div>
    )
}


function StorySentence(props: { sentenceData: SentenceType }): JSX.Element {
    const { no, content, premier, expression, nickname, password, sentence } = props.sentenceData;
    const verticalElement: VerticalEleFc = (premier) => premier && (<span className='storyVertical'>[+]</span>)

    return <span className='storySentence'>
        {content}
        {verticalElement(premier)}
    </span>
}


export default StoryPage 