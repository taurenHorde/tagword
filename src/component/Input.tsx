import './../css/Input.css'


function InputPage(): JSX.Element {
    return (
        <div className='InputPageWrap flex column '>
            <div className='inputBox flex jc-center ai-center'>
                <input
                    type="text"
                    placeholder='이야기 입력창'
                />
            </div>
            <div className='inputOption flex row jc-end ai-center'>
                <div className='inputCheckbox flex column ai-center'>
                    <label><input type='checkbox' />주석 달기</label>
                    <label><input type='checkbox' />문단 변경</label>
                </div>
                <div className='inputInfo flex row ai-center'>
                    <input
                        type='text'
                        placeholder='닉네임'
                    />
                    <input
                        type='password'
                        placeholder='비밀번호'
                    />
                </div>
                <button>등록</button>
            </div>
        </div>
    )
}




export default InputPage;