import './../../css/commonCss/Loading.css'


function LoadingPage(): JSX.Element {

    return (
        <div className="LoadingPageWrap flex jc-center ai-center">
            <div className='loadingAnimationBox flex column jc-center ai-center'>
                <p>로딩중</p>
                <div className='loadingBar'>
                    <div />
                </div>
            </div>
        </div>
    )
}


export default LoadingPage