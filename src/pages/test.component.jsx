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
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {

        const unsubscribe = firestore.collection("test").onSnapshot(
            snapshot => { 
                const usersDB = snapshot.docs.map(doc => (
                    {
                        ...doc.data(), 
                        id: doc.id 
                    }
                ))
            setAddedUser(usersDB);
            setIsLoading(false)
            console.log(usersDB)
        });

        return () => {
            unsubscribe()
        }
            
    }, []);

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

    const handleDelete = (docId) => {
    
        firestore.collection("test").doc(docId).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
      };


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
                { isLoading && <div>Loading...</div> }
                <div className="card-preview">
                    {addedUser.map((user, key) => 
                    <div key={key} className="added-user-card">
                        <div>{user.username}</div>
                        <div>{user.color}</div>
                        <div>{}</div>
                        <div onClick={() => handleDelete(user.id)} 
                            className="d-flex justify-content-end"
                            style={{cursor: "pointer"}}    
                        >
                            <i className="bi bi-x-circle"></i>                        
                        </div>
                    </div>
                    )}    
                </div>
                </div>
            </div>
        </div>
    )
}

export default Test;