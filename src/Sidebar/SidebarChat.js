import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import db from '../auth/firebase'
import { Link } from "react-router-dom";

function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState("");

    useEffect(() => {
        if (id) {
            db.collection('groups')
                .doc(id).collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) =>
                        doc.data())));
        }
    }, [id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const createChat = () => {
        const groupName = prompt("Please enter name for chat");
        if (groupName) {
            //do some stuff database
            db.collection('groups').add({
                name: groupName,

            })
        }
    };

    return !addNewChat ? (
        <Link to={`/groups/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h4>{name}</h4>
                    <p>{messages[0]?.message}.</p>
                </div>
            </div>
        </Link>
    ) : (
            <div onClick={createChat} className="sidebarChat">
                <h2>Add New Chat</h2>
            </div>
        )
}

export default SidebarChat
