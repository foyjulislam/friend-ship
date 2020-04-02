import React, { useState } from 'react';
import './AddFriend.css';

const AddFriend = (props) => {
    const {name, username, avatar, email, income, phone} = props.data
    const [btnInfo, setBtnInfo] = useState({btnText: "Add Friend", disable: false, btnClass: "add-friend-btn"})
    
    

    function btnHandler(){
        props.friendHandler(props.data) ;
        btnInfo.btnText = "Friend" 
        btnInfo.disable = true 
        btnInfo.btnClass = "friend-btn"
        
    } 
    
    return (
        <div className="user">
            
            <div className="user-container">
                
                <div className="user-info">
                    <div>
                        <span className="user-img"><img  src={avatar} alt=""/></span>
                        <h2>{name}</h2>
                        <button className={btnInfo.btnClass} disabled={btnInfo.disable} onClick={btnHandler}> {btnInfo.btnText}</button>
                    </div>
                    <div>
                        <p>Salary: <strong>${income}</strong></p>
                        <p><strong>{username}</strong></p>
                        <p><strong>{phone}</strong></p>
                        <p><strong>{email}</strong></p>                     
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddFriend;