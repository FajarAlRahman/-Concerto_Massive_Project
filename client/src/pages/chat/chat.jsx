import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft, BsThreeDotsVertical, BsEmojiSmile, BsSend } from "react-icons/bs";
import "./chat.css";
import profileImg from "../../assets/img/profile.jpeg";

export const Chat = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const chatAreaRef = useRef(null);

    const handleSend = () => {
        if (inputValue.trim() !== "") {
            const newMessage = {
                id: messages.length + 1,
                text: inputValue,
                sender: "user",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages([...messages, newMessage]);
            setInputValue("");

            // Simulate receiving a reply from the other user
            setTimeout(() => {
                const replyMessage = {
                    id: messages.length + 2,
                    text: "This is a reply from the other user.",
                    sender: "anotherUser",
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                };
                setMessages(prevMessages => [...prevMessages, replyMessage]);
            }, 1000);
        }
    };

    useEffect(() => {
        if (chatAreaRef.current) {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="teman">
            <header className="header">
                <div className="left-header">
                    <button className="btn-header" onClick={() => navigate('../teman')}>
                        <BsArrowLeft className="icon-header" />
                    </button>
                    <div className="detail-user">
                        <img src={profileImg} alt="" className="profile-user" />
                        <div className="status-user">
                            <h3>Aya Dahlia</h3>
                            <h5>• Online</h5>
                        </div>
                    </div>
                </div>
                <button className="btn-header">
                    <BsThreeDotsVertical className="icon-header" />
                </button>
            </header>

            <div className="content">
                <div className="container-fluid mx-5">
                    <div className="chat-area" ref={chatAreaRef}>
                        {messages.map(message => (
                            <div key={message.id} className={message.sender === "user" ? "user-area" : "anotherUser-area"}>
                                <div className={message.sender === "user" ? "box-user" : "box-anotherUser"}>
                                    {message.sender === "anotherUser" && <img src={profileImg} alt="" className="profile-user" />}
                                    <div className={message.sender === "user" ? "bubble-chat-user" : "bubble-chat-anotherUser"}>
                                        <p>{message.text}</p>
                                        <div className="waktu-chat">{message.time}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="input-group">
                        <button className="btn-chat-bar" type="button">
                            <BsEmojiSmile className="btn-chat-icon" />
                        </button>
                        <input
                            type="text"
                            className="form-control text-chat"
                            placeholder="Message..."
                            aria-label="Example text with two button addons"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleSend()}
                        />
                        <button className="btn-chat-bar" type="button" onClick={handleSend}>
                            <BsSend className="btn-chat-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
