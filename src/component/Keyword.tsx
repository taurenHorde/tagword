import './../css/Keyword.css'

function KeywordPage(): JSX.Element {
    return (
        <div className="KeywordPageWrap flex column jc-center ai-start">
            <div className='keywordPageHead'>
                <h6>이전 문장 </h6>
            </div>
            <div className='keywordPageBody'>
                <p>어느날 투명드레곤이 울부 짖었다. 오아아아아왕 화난다!</p>
            </div>
            <div className='keywordPageFooter'>
                <p> s 로 시작되는 문장을 자유롭게 써주세요.</p>
            </div>

        </div>
    )
}


export default KeywordPage