import React, {useState} from "react";

import './test.styles.scss';

const Test = () => {
    const [userProfile, setUserProfile] = useState(
        {
            username: '',
            color: ''
        }
    )
    const [addedUser, setAddedUser] = useState([])
    
    const handleChange = event => {
        const { name, value } = event.target;
        setUserProfile(
            { 
                ...userProfile, 
                [name]: value 
            }
        );
    }

    const handleSubmit = event => {
        event.preventDefault();
        setAddedUser([...addedUser, userProfile])
        setUserProfile({
            username: '',
            color: ''
        })
    }

    console.log(addedUser)



    return(
        <div className="test-container">
            <div className="test-form">
                <form className="test-input">
                    <input 
                    
                        type="text"
                        name="username"
                        value={userProfile.username} 
                        placeholder="Enter Your Task"
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        name="color"
                        value={userProfile.color} 
                        placeholder="Enter Your Task"
                        onChange={handleChange}
                    />
                    <button onClick={handleSubmit}>
                        add user
                    </button>
                </form>
                <div className="test-presentational">
                <div className="card-preview">
                {addedUser.map(user => (
                <div className="added-user-card">
                    <div>name: {user.username}</div>
                    <div>color: {user.color}</div>
                </div>
                ))}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Test;