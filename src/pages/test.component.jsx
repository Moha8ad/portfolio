import React, {useEffect, useState} from "react";

import { addCollectionAndDocuments, firestore } from "../firebase/firebase.utils";


import './test.styles.scss';

const Test = () => {

    const [userToADD, setUserTOADD] = useState(
        {
            username: '',
            color: ''
        }
    );

    const [addedUser, setAddedUser] = useState([]);
    
    useEffect(() => {

        // firestore.collection("test").get().then((querySnapshot) => {
            
        //     const users = []

        //     querySnapshot.forEach((doc) => {
        //         users.push(doc.data());
        //     });

        //     setAddedUser(users);

        // });
        
    });

    const handleChange = event => {
        const { name, value } = event.target;

        setUserTOADD(
            { 
                ...userToADD,
                [name]: value,
            }
        );
    }

    const handleSubmit = event => {
        event.preventDefault();
        
        addCollectionAndDocuments('test', [userToADD]);
        
        setUserTOADD(
            {
                username: '',
                color: '',
            }
        )
    }

    return(
        <div className="test-container">
            <div className="test-form">
                <form className="test-input">
                    <input 
                    
                        type="text"
                        name="username"
                        value={userToADD.username} 
                        placeholder="Enter Your Task"
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        name="color"
                        value={userToADD.color} 
                        placeholder="Enter Your Task"
                        onChange={handleChange}
                    />
                    <button onClick={handleSubmit}>
                        add user
                    </button>
                </form>
                <div className="test-presentational">
                <div className="card-preview">
                    {addedUser.map((user, key) => 
                    <div key={key} className="added-user-card">
                        <div>{user.username}</div>
                        <div>{user.color}</div>
                    </div>
                    )}    
                </div>
                </div>
            </div>
        </div>
    )
}

export default Test;