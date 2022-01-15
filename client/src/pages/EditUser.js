import React, { useContext, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserImage from "../components/UserImage";
import { AuthContext } from "../providers/AuthProvider";

const EditUser = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState(auth.name ? auth.name : "");
    const [nickname, setNickname] = useState(auth.nickname ? auth.nickname : "");
    const [email, setEmail] = useState(auth.email ? auth.email : "");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        let user = {name, nickname, email}
        auth.handleUpdate(user, navigate);
        setTimeout(()=>{setLoading(false)}, 3500);
    };

    return (
        <div>
            <h1 style={{textAlign: "center"}} >Edit your profile</h1>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
                <UserImage />
            </div>
            <hr/>
            {auth.image && 
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
                <div style={{width: "200px", height: "200px"}} >
                    <Image src={auth.image} fluid roundedCircle />
                </div>
            </div>}
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
                <div style={{width: "70vw"}} >
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" controlId="formName" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNickname" >
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" value={nickname} onChange={(e)=>setNickname(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </Form.Group>
                        <Button type="submit" disabled={loading} >Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
};

export default EditUser;