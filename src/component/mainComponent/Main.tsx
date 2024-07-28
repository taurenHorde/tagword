import './../../css/mainCss/Main.css'
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from './../../app/store';
import { inputConversionData } from './../../app/action1/footnoteConversionStoreSlice';
import { ReduxAllType } from './../../type/Type';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { io, Socket } from 'socket.io-client'
import { serverToCounter } from '../../app/action1/sentenceCounterSlice';
import { serverToSentence } from '../../app/action1/sentenceStoreSlice';
import footnoteExtractFc from './../../function/Conversion';
import InputPage from './Input';
import KeywordPage from './Keyword';
import StoryPage from './Story';
import FootnotePage from './Footnote';
import Nav from './../Nav';

const socket: Socket = io()

function MainPage(): JSX.Element {

    const [tab, setTab] = useState<number>(0)

    const dispatch = useAppDispatch();
    const sentenceStoreSlice = useAppSelector((state: ReduxAllType) => state.sentenceStoreSlice)

    useEffect(() => {
        const conversionReusult = footnoteExtractFc(sentenceStoreSlice)
        dispatch(inputConversionData(conversionReusult))
    }, [sentenceStoreSlice])

    return <div
        className='MainWrap flex column jc-start ai-center'>
        <StoryPage />
        <div className='mainTab flex column jc-start ai-center'>
            <div className='mainTabBox flex column jc-start ai-center'>
                <div className='mainTabHead flex row jc-end ai-center'>
                    {/* <div className='mainTabHeadPrePage'>
                        <h6>
                            이전
                        </h6>
                    </div>
                    <div className='mainTabHeadNextPage'>
                        <h6>
                            현재 1 페이지
                        </h6>
                    </div>
                    <div className='mainTabHeadNextPage'>
                        <h6>
                            다음
                        </h6>
                    </div> */}
                    <div className='mainTabHeadViewFootnote'
                        onClick={() => setTab(2)}
                    >
                        <h6>
                            주석
                        </h6>
                    </div>
                    <div className='mainTabHeadAddSentence'
                        onClick={() => setTab(1)}
                    >
                        <h6>
                            ➕추가
                        </h6>
                    </div>
                    <div className='mainTabHeadTabClose'
                        onClick={() => setTab(0)}
                    >
                        <h6>
                            닫기
                        </h6>
                    </div>
                </div>
                <div className='mainTabBody mainTabBodyInput'
                    style={{ display: tab === 1 ? "block" : "none" }}
                >
                    <KeywordPage />
                    <InputPage />
                </div>
                <div className='mainTabBody mainTabBodyFootnote'
                    style={{ display: tab === 2 ? "block" : "none" }}
                >
                    <FootnotePage />
                </div>
            </div>
        </div>
    </div>
}

function FcSocketIoFisrtGet(): JSX.Element {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const { id } = useParams()

    socket.emit('connectFirst', id)
    socket.on('connectData', (resData) => {
        const { sentenceConnectData, counterConnectData } = resData
        dispatch(serverToCounter(counterConnectData))
        dispatch(serverToSentence(sentenceConnectData))
    })
    socket.on('Err404', (message) => {
        navigate('/')
    })

    return <><Nav id={id} /><Outlet /></>
}



export { MainPage, FcSocketIoFisrtGet }