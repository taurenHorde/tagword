import './../../css/titleCss/TitleInfo.css'
import { useState } from 'react'



function TitlePageInfo(): JSX.Element {

    const [open, setOpen] = useState<boolean>(false)
    return <div className='TitlePageInfoWrap flex column jc-start ai-center'>
        <div className='titlePageInfoHead flex column jc-start ai-center'>
            <div>
                <h5>📒</h5>
            </div>
            <div>
                <h6>끝말잇기로 쓰는 소설</h6>
            </div>
            <div>
                <p onClick={() => setOpen(pre => !pre)}>{open ? "▲접기▲" : "▼펼치기▼"}</p>
            </div>
        </div>
        <div className='titlePageInfoBody flex column jc-start ai-center'
            style={{ height: open ? "auto" : "0px" }}>
            <p>모드는 자유모드와 끝말잇기 모드가 있습니다.</p>
            <p>자유모드 - 자유롭게 글을 게시하시면 됩니다.</p>
            <p>끝말잇기 - 앞 문장 중 끝에서 3글자 중 원하는 글자로 문장을 시작하셔야합니다.</p>
            <p>이 페이지는 포트폴리오 용도로 만들어졌습니다.</p>
            <p>감사합니다.</p>
        </div>
    </div>
}

export default TitlePageInfo