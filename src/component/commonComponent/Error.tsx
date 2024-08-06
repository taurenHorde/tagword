
import { useNavigate } from 'react-router-dom';
import './../../css/commonCss/Error.css'



function ErrorPage(): JSX.Element {
    const navigate = useNavigate()
    return (
        <div className="ErrorPageWrap flex jc-center ai-center">
            <div className='errorPageBox flex column jc-center ai-center'>
                <h6>페이지를 찾을 수 없습니다.</h6>
                <h6>페이지를 찾을 수 없습니다.</h6>
                <h6>페이지를 찾을 수 없습니다.</h6>
                <p onClick={()=>{navigate('/')}}>메인으로</p>
            </div>
        </div>
    )
}


export default ErrorPage;