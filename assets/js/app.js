
import "../css/app.css"

//     import {Socket} from "phoenix"
import socket from "./socket"
//
import "phoenix_html"

let channel = socket.channel("room:lobby", {})
let chatInputBox = document.querySelector("#chat-input")
let messageContainer = document.querySelector("#messages")

chatInputBox.addEventListener("keypress", event => {
    if (event.keyCode == 13) {
        channel.push("new_msg", {body: chatInputBox.value})
        chatInputBox.value = ''
    }
})

channel.on('new_msg', payload => {
    let message = document.createElement("li")
    message.innerText = `[${Date()}]${payload.body}`
    messageContainer.appendChild(message)
})

channel.join()

export default socket