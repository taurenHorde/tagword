import './../../css/historyCss/Option.css'
import { useAppSelector, useAppDispatch } from '../../app/store'
import { ReduxAllType, InFormEventReturnVoidFc } from '../../type/Type'
import { viewOption, paragraphOption, searchOption, searchText, resetOption } from '../../app/action2/historyOptionSlice';
import { useEffect, useState } from 'react';


function OptionPage() {

    const dispatch = useAppDispatch();
    const { sentenceCounterSlice, historyOptionSlice } = useAppSelector((state: ReduxAllType) => state)
    const paragraphArray = Array(sentenceCounterSlice.paragraphCount).fill(null)

    const [searchOptionType, setSearchOptionType] = useState<number>(0);
    const [searchOptionText, setSearchOptionText] = useState<string>("");

    const searchOptionFc: InFormEventReturnVoidFc = (e) => {
        e.preventDefault();
        if (searchOptionType !== 1 && searchOptionType !== 2 && searchOptionType !== 3) return alert('검색분류를 선택해주세요.')
        if (searchOptionText.length < 1) return alert('최소 두 글자를 입력해주세요.')
        dispatch(searchOption(searchOptionType))
        dispatch(searchText(searchOptionText))
    }

    useEffect(() => {
        dispatch(resetOption())
    }, [])

    return (
        <div className='OptionPageWrap flex column jc-start ai-start'>
            <div className='optionPageBody flex column jc-start ai-start'>
                <div className='optionPageSearch'>
                    <form className='flex row jc-start ai-center' onSubmit={searchOptionFc}>
                        <select
                            onChange={(e) => { setSearchOptionType(Number(e.target.value)) }}
                            value={historyOptionSlice.searchType}
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
                            onChange={(e) => setSearchOptionText(e.target.value)}
                            defaultValue={historyOptionSlice.searchText}
                        />
                    </form>
                </div>
                <div className='optionPageOption flex row ai-center'>
                    <div className='optionView flex row jc-start ai-center'>
                        <p onClick={() => dispatch(resetOption())}>ㆍ검색 초기화</p>
                    </div>
                    <div className='optionNumber'>
                        <select
                            onChange={(e) => dispatch(viewOption(Number(e.target.value)))}
                            value={historyOptionSlice.viewNumber}
                        >
                            {[10, 25, 50].map((val, idx) =>
                                <option
                                    key={idx}
                                    value={val}
                                >{val}개씩 보기</option>
                            )}
                        </select>
                        <select
                            onChange={(e) => dispatch(paragraphOption(Number(e.target.value)))}
                            value={historyOptionSlice.paragraphNumber}
                        >
                            <option value={0}>전체 문단</option>
                            {paragraphArray.map((_, idx) =>
                                <option
                                    key={idx}
                                    value={idx + 1}
                                >{idx + 1}번 문단</option>
                            )}
                        </select>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default OptionPage;