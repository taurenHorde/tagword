
import './../../css/commonCss/Empty.css'
import { EmptyPageProps } from '../../type/Type';

function EmptyPage(props: EmptyPageProps): JSX.Element {
    const page = props.pageNumber
    const text = [
        ['현재 생성 된 소설 책이 없습니다.', '소설 책을 생성하여 글을 작성해 보세요.'],
        ['현재 소설 책 내 생성 된 문장이 없습니다.', '하단 추가 버튼을 눌러 소설 책의 첫 문장을 작성해 보세요.'],
        ['현재 소설 책 내 생성 된 문장이 없습니다.', '이야기 페이지를 통해 첫 문장을 작성해 보세요.'],
    ]
    const currentText = text[page]

    return (
        <div className="EmptyPageWrap flex jc-center ai-center">
            <div className='emptyPageBox flex column jc-center ai-center'>
                <h6>{currentText[0]}</h6>
                <p>{currentText[1]}</p>
            </div>
        </div>
    )
}


export default EmptyPage;