import { type } from "@testing-library/user-event/dist/type"
import React, { FC, useEffect, useRef, useState, UIEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ChartsMessage } from "../../API/chat-api"
import { startMessagesList, stopMessagesList, sendMessage } from "../../Redux/Chart-reducer.ts"
import { AppStateType } from "../../Redux/Redux-store.ts"


export const ChartPage: FC = () => {
    return (
        <Chat />
    )
}

const Chat: FC = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startMessagesList())
        return () => {
            dispatch(stopMessagesList())
        }
    }, [])

    return (
        <div>
            <Messages />
            <AddMessageForm />
        </div>
    )
}

const Messages: FC<{}> = () => {
    const messageRef = useRef<HTMLDivElement>(null)
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const [autoScroll, setautoScroll] = useState(false)

    const scrollHand = (e: UIEvent<HTMLDivElement , UIEvent>) =>{
        const element = e.currentTarget;
        if(Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) <300){
           !autoScroll && setautoScroll(true)
        }else {
           autoScroll && setautoScroll(false )
        }
    }

    useEffect(() =>{
        if(autoScroll){
            messageRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    return (
        <div style={{ height: '500px', width: '900px', overflowY: 'scroll' }} onScroll={scrollHand}>
            {messages.map((m, index) => <Message key={index} message={m} />)}
            <div ref={messageRef}></div>
        </div>
    )
}

const AddMessageForm: FC<{}> = () => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    const dispatch = useDispatch()
    const sendMessagehandler = () => {
        if (!message) {
            return;
        }
        dispatch(sendMessage(message))
        setMessage('')
    }


    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>

                <button disabled={false} onClick={sendMessagehandler}>send</button>
            </div>
        </div>
    )
}

const Message: FC<{ message: ChartsMessage }> = React.memo( ({ message }) => {
    return (
        <div>
            <img style={{ width: '50px' }} src={message.photo} alt="" /><b>{message.userName}</b>
            <span>{message.message}</span>
        </div>
    )
})

