import { useState } from 'react';
import './../../css/historyCss/Option.css'


function OptionPage() {

    return (
        <div className='OptionPageWrap flex column jc-start ai-start'>
            <div className='optionPageBody flex column jc-start ai-start'>
                <div className='optionPageSearch flex row jc-start ai-center'>
                    <select
                        defaultValue={0}
                    >
                        <option
                            value={0}
                            disabled
                        >종류</option>
                        {['닉네임', '문장내용', '주석내용'].map((val, idx) =>
                            <option key={idx} value={idx + 1}>{val}</option>
                        )}
                    </select>
                    <input
                        type='text'
                        placeholder='검색 내용을 입력해주세요.'
                    />
                </div>
                <div className='optionPageOption flex row ai-center'>
                    <div className='optionView flex row jc-start ai-center'>
                        <p>ㆍ박스 형태로 보기</p>
                    </div>
                    <div className='optionNumber'>
                        <select>
                            <option>10개씩 보기</option>
                            <option>25개씩 보기</option>
                            <option>50개씩 보기</option>
                        </select>
                        <select>
                            <option>전체 문단</option>
                            <option>1번 문단</option>
                        </select>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default OptionPage;