import React from "react";
import UserImage from "../components/UserImage";

const EditUser = () => {

    return (
        <div>
            <h1>Edit your profile</h1>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
                <UserImage />
            </div>
            <hr/>
            <form>

            </form>
        </div>
    )
};

export default EditUser;