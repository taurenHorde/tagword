import './../css/Nav.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Nav(): JSX.Element {


    function resetBot() {
        axios.get('/reset').then((res) => {
            console.log('리셋완료')
        })
    }



    const navigate = useNavigate()
    return (
        <div className='navWrap flex row jc-start ai-center'>
            <div className='navHead flex jc-start ai-center'>
                {/* <h6 onClick={() => resetBot()}>TagWord</h6> */}
                <h6>TagWord</h6>
            </div>
            <div className='navBody flex jc-end ai-center'>
                <div
                    className='navMenu flex jc-center ai-center'
                    onClick={() => navigate('/')}
                >
                    <p>
                        이야기 보기
                    </p>
                </div>
                <div
                    className='navMenu flex jc-center ai-center'
                    onClick={() => navigate('/history')}
                >
                    <p>
                        기록 보기
                    </p>
                </div>
            </div>
        </div>
    )
}




export default Nav