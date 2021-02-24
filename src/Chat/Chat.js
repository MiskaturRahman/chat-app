import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import React, { useState, useEffect } from 'react'
import './Chat.css'
function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const sendMessage = (event) => {
        event.preventDefault();
        console.log("You typed ", input);
        setInput('');
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>CHat Name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reciever"}`}>
                    <span className="chat__name">Miskatur Rahman</span>
                    Hey guys
                    <span className="chat__time">
                        3.52PM
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form >
                    <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
