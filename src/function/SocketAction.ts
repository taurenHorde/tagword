import { serverToCounter } from './../app/action1/sentenceCounterSlice';
import { serverToSentence } from './../app/action1/sentenceStoreSlice';
import { socketGetLoadingFalse, socketGetLoadingTrue } from './../app/action1/sentenceLoadingSlice';
import type { AppDispatch } from '../app/store'
import { io, Socket } from 'socket.io-client'
import { addSentencePostSocketInputType } from '../type/Type';
import { NavigateFunction } from 'react-router-dom';


const socket: Socket = io(process.env.REACT_APP_SOCKET_ADDRESS!)
console.log(process.env.REACT_APP_SOCKET_ADDRESS!) // 7070 port 
// const socket = io()
// 0806 18h   io 주소 삭제 / socket 이름들 앞 슬래쉬 장착


socket.on('connect', () => console.log('연결선공'))
socket.on('disconnect', () => console.log('연결해제'))
socket.on('reconnect_attempt', (attemptNumber) => console.log(`연결 재시도(${attemptNumber}번째)`))
socket.on('reconnect_failed', (attemptNumber) => console.log(`연결 재시도 실패`)) // 일단 막으로 내보내야함.



export const joinRoomSocket = (dispatch: AppDispatch, id: string, navigate: NavigateFunction) => {
    dispatch(socketGetLoadingFalse())
    //  데이터 전송
    socket.emit('joinRoom', id)
    // 응답처리
    // 성공
    socket.on('joinRoomResultData', (resData) => {
        const { sentenceConnectData, counterConnectData } = resData
        dispatch(serverToCounter(counterConnectData))
        dispatch(serverToSentence(sentenceConnectData))
        dispatch(socketGetLoadingTrue())
    })
    //실패 
    socket.on('joinRoomErrorData', (message: string) => {
        console.log(`${message}`) // 접속 막아야함~
        alert('잘못 된 접근입니다. 메인페이지로 이동됩니다.)')
        navigate('/')
    })
}

export const addSentenceSocket = (dispatch: AppDispatch, sentenceData: addSentencePostSocketInputType) => {
    //  데이터 전송
    socket.emit('addSentence', {
    ...sentenceData
    })
    // 응답처리
    // 성공
    socket.on('addSentenceResult', (resData) => {
        const { sentenceResData, counterResData } = resData
        dispatch(serverToCounter(counterResData))
        dispatch(serverToSentence(sentenceResData))
    })
    // 실패
    socket.on('addSentenceError', (message) => {
        console.log(message)
    })
    socket.on('addSentenceServerErorr', (message) => {
        console.log(message)
    })
}

export const leaveRoomSocket = (dispatch: AppDispatch, id: string) => {
    socket.emit('leaveRoom', id)
}



export const outOfSocket = () => {
    socket.close()
}