import './../../css/mainCss/Main.css'
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './../../app/store';
import { inputConversionData } from './../../app/action1/footnoteConversionStoreSlice';
import { mainTabControl } from '../../app/action2/mainControllerSlice';
import { socketGetLoadingFalse, socketGetLoadingTrue } from '../../app/action1/sentenceLoadingSlice';
import { ReduxAllType } from './../../type/Type';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { io, Socket } from 'socket.io-client'
import { serverToCounter } from '../../app/action1/sentenceCounterSlice';
import { serverToSentence } from '../../app/action1/sentenceStoreSlice';
import { footnoteExtractFc } from './../../function/Conversion';
import InputPage from './Input';
import KeywordPage from './Keyword';
import StoryPage from './Story';
import FootnotePage from './Footnote';
import ClickSenctencePage from './ClickSentence'
import Nav from './Nav';
import LoadingPage from '../commonComponent/Loading';

const socket: Socket = io()

function FcSocketIoFisrtGet(): JSX.Element {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const { id } = useParams()

    useEffect(() => {
        dispatch(socketGetLoadingFalse())
    }, [])

    const navigateFc = (location: number): void => {
        if (location === 1) navigate(`/${id}/main`)
        if (location === 2) navigate(`/${id}/history`)
    }

    socket.emit('connectFirst', id)
    socket.on('connectData', (resData) => {
        const { sentenceConnectData, counterConnectData } = resData
        dispatch(serverToCounter(counterConnectData))
        dispatch(serverToSentence(sentenceConnectData))
        dispatch(socketGetLoadingTrue())
    })
    socket.on('Err404', (message) => {
        navigate('/')
    })



    
    return <>
        <Nav navigateFc={navigateFc} />
        <Outlet />
    </>
}

function MainPage(): JSX.Element {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { sentenceStoreSlice, mainControllerSlice, sentenceLoadingSlice, sentenceCounterSlice } = useAppSelector((state: ReduxAllType) => state)

    useEffect(() => {
        const conversionReusult = footnoteExtractFc(sentenceStoreSlice)
        dispatch(inputConversionData(conversionReusult))
    }, [sentenceStoreSlice])

    useEffect(() => {
        dispatch(mainTabControl(0))
    }, [])

    const mainTabFc = (n: number): void => {
        dispatch(mainTabControl(n))
    }

    return <div
        className='MainWrap flex column jc-start ai-center'>
        {sentenceLoadingSlice.setenceFirstGetLoading ? <>
            <StoryPage />
            <div className='mainTab flex column jc-start ai-center'>
                <div className='mainTabBox flex column jc-start ai-center'>
                    <div className='mainTabHead flex row jc-space ai-center'>
                        <div className='flex row jc-start ai-center'>
                            <div className='mainTabHeadNavi'
                                onClick={() => {
                                    navigate('/')
                                    socket.close();
                                }}
                            >
                                <h6>
                                    메인으로
                                </h6>
                            </div>
                        </div>
                        <div className='flex row jc-end ai-center'>
                            <div className='mainTabHeadViewFootnote'
                                onClick={() => mainTabFc(2)}
                            >
                                <h6>
                                    메모
                                </h6>
                            </div>
                            {!sentenceCounterSlice.pageClose && (
                                <div className='mainTabHeadAddSentence'
                                    onClick={() => mainTabFc(1)}
                                >
                                    <h6>
                                        ➕추가
                                    </h6>
                                </div>
                            )}
                            <div className='mainTabHeadTabClose'
                                onClick={() => mainTabFc(0)}
                            >
                                <h6>
                                    닫기
                                </h6>
                            </div>
                        </div>
                    </div>
                    {!sentenceCounterSlice.pageClose && (
                        <div className='mainTabBody mainTabBodyInput'
                            style={{ display: mainControllerSlice.tabControlNumber === 1 ? "block" : "none" }}
                        >
                            <KeywordPage />
                            <InputPage />
                        </div>
                    )}
                    <div className='mainTabBody mainTabBodyFootnote'
                        style={{ display: mainControllerSlice.tabControlNumber === 2 ? "block" : "none" }}
                    >
                        <FootnotePage />
                    </div>

                    <div className='mainTabBody mainTabBodyClickSentence'
                        style={{ display: mainControllerSlice.tabControlNumber === 3 ? "block" : "none" }}
                    >
                        <ClickSenctencePage />
                    </div>
                </div>
            </div>
        </> :
            <LoadingPage />
        }
    </div>
}







export { MainPage, FcSocketIoFisrtGet }

