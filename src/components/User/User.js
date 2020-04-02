import React, { useState } from 'react';
import FakeData from '../../FakeData/Data';
import AddFriend from '../../components/AddFriend/AddFriend';
import Friends from '../../components/Friends/Friends';
import './User.css'



const User = () => {

    const data = []
    const [userData, setUserData] = useState(data)
    const [friends, setFriend] = useState([]);
    const friendHandler= (Data) =>{
        const totalFriend = [...friends, Data]
        setFriend(totalFriend)
    }

    formattedData(FakeData)
    function formattedData(userArray){
        for (let i = 0; i < userArray.length; i++) {
            const Data = userArray[i];
            const formatUser={
                name : Data.name,
                email : Data.email,
                avatar : Data.avatar ,
                username : Data.userName,
                phone : Data.Phone,
                income : Data.income,
            }
    
            data.push(formatUser)
    
        }
    }
    

    return (
        <div className="main-body">
            <div className="all-user">
                {
                    userData.map(Data => <AddFriend data={Data} friendHandler={friendHandler}></AddFriend>)
                }
            </div>
            <div className="friends-status">
                <Friends friends={friends}></Friends>
            </div>
        </div>
    );
};

export default User;