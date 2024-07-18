import './../css/Nav.css'

function Nav(): JSX.Element {
    return (
        <div className='navWrap flex row jc-start ai-center'>
            <div className='navHead flex jc-start ai-center'>
                <h6>TagWord</h6>
            </div>
            <div className='navBody flex jc-end ai-center'>
                <div className='navMenu flex jc-center ai-center'>
                    <p>
                        이야기 보기
                    </p>
                </div>
                <div className='navMenu flex jc-center ai-center'>
                    <p>
                        기록 보기
                    </p>
                </div>
            </div>
        </div>
    )
}




export default Nav