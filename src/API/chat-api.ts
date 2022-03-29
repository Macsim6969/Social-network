let subscribers = [] as SubscriberType[]

let ws: WebSocket


const closeHandler = () => {
    console.log('CLOSE')
    setTimeout(creacteChanel, 3000)
}

const messageHandler = (e) => {
    let newMessages = JSON.parse(e.data)
    subscribers.forEach(s => s(newMessages))
}

const CleanUp = () =>{
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
}

function creacteChanel() {
    CleanUp()
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws?.addEventListener('close', closeHandler)
    ws?.addEventListener('message', messageHandler)
}


export const chatApi = {
    start() {
        creacteChanel()
    },
    stop() {
        subscribers= []
        CleanUp()
        ws?.close();
    },
    subscribe(callback: SubscriberType) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },
    unsubscibe(callback: SubscriberType) {
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}




type SubscriberType = (message: ChartsMessage[]) => void

export type ChartsMessage = {
    url: string
    author: string
    userId: number
    text: string
}
