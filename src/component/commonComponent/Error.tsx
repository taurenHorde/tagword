
import './../../css/commonCss/Error.css'

function ErrorPage(): JSX.Element {

    return (
        <div className="ErrorPageWrap flex jc-center ai-center">
            <div className='errorPageBox flex column jc-center ai-center'>
                <h6>Erorr Code : 404</h6>
                <p>나중에 다시 시도해주세요.</p>
            </div>
        </div>
    )
}


export default ErrorPage;