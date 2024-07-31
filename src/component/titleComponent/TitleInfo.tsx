import './../../css/titleCss/Title.css'
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

    </div>
</div>
}

export default TitlePageInfo