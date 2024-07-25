

import { useState } from 'react'
import './../css/Title.css'

function TitlePage(): JSX.Element {

    return <div className='TitlePageWrap'>
        <div className='titlePageBox flex column jc-start ai-center'>
            <TitlePageInfo />

            <TitlePageMakeBook />
        </div>
    </div>
}





function TitlePageInfo(): JSX.Element {

    const [open, setOpen] = useState<boolean>(true)

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
            <h6>-룰 설명-</h6>
            <p>1.소설 책을 만들어주세요! 좋은 작품은 정확한 주제와 방향을 제시해줘야해요!</p>
            <p>2.앞 내용들을 잘 읽어보고 내용이 잘 이어지도록 좋은 문장을 입력해주세요!</p>
            <p>3.앞 문장 끝에서 세 글자 중 하나를 골라서 문장을 적을 수 있어요!</p>
            <p>4.문단을 나누고 싶을 때에는 문단 나누기 버튼을 클릭!</p>
            <p>5.새로운 문단에 시작은 끝말잇기 상관없이 자유롭게 적을 수 있어요!</p>
            <p>6.주석달기 기능을 통해서 설명을 할 수 있어요!</p>
            <p>7.너무 좋은 문장이 있을 경우, 그 문장을 클릭하면 감정표현을 할 수 있어요!</p>
            <p>8.그 문장에 대해서 댓글도 남길 수 있답니다!</p>
            <h6>-입력 설명-</h6>
            <p>✏️ 문장 첫 글자는 완성형 한글, 문장 내 완성형 글자가 최소 5글자 이상 들어가야합니다.</p>
            <p>✏️ 문장 최대 글씨 수는 정해져 있지 않습니다.</p>
            <p>✏️ 주석 최대 글씨 수는 40글자 까지 가능합니다.</p>
            <p>✏️ 많은 주석이 필요한 경우 문장을 끊어서 각각 주석 입력을 권장드립니다.</p>
            <p>✏️ 아이디는 2 ~ 8글자 입력가능합니다. (특수문자불가)</p>
            <p>✏️ 비밀번호는 4 ~ 8글자 입력가능합니다.</p>
            <h6>-주의 사항-</h6>
            <p>🚨 작성하는 도중 다른 이용자가 먼저 작성하는 경우, 시작글자가 달라질 수 있습니다.</p>
            <p>🚨 끝말잇기 수정이 안됩니다.</p>
            <p>🚨 삭제는 가능하나 소설에 흐름이 끊길 수 있으니 지양해주시길 바랍니다.</p>
            <p>🚨 음란, 욕설등 옳지 않은 문장에 경우 관리자의 권한으로 삭제처리 할 수 있습니다.</p>
        </div>
    </div>
}


function TitlePageMakeBook(): JSX.Element {
    return <div className='TitlePageMakeBookWrap'>

        <div className='titlePageMakeBookDiv1 flex jc-center ai-center'>
            <div className='titlePageMakeBookBut flex jc-center ai-center'>
                <h6>+</h6>
            </div>
        </div>


        <div className='titlePageMakeBookDiv2'></div>

    </div>
}


export default TitlePage
