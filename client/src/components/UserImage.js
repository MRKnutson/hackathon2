import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import axios from 'axios';
import { AuthContext } from "../providers/AuthProvider";
import { Alert } from "react-bootstrap";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const UserImage = () => {
    const auth = useContext(AuthContext);
    const [files, setFiles] = useState([]);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const handleUpdate = (files) => {
        setFiles(files);
    };
    
    const handleUpload = async (e) => {
        e.preventDefault();
        setLoading(true);
        let data = new FormData();
        if (files[0] && files[0].file) {
            data.append("file", files[0].file);
        };
        try {
            let res = await axios.post("/api/users/image", data);
            setSuccess(true);
            auth.setUser(res.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setFailure(true);
            setLoading(false);
        };
    };

    const handleAlert = () => {
        setTimeout(()=>{setSuccess(false)}, 3500);
    };
    const handleFailAlert = () => {
        setTimeout(()=>{setFailure(false)}, 3500);
    };


    return (
        <div style={{width: "60vw"}} >
            <h3 style={{textAlign: "center"}} >Select an image for your avatar</h3>
            {success && 
            <div>
                <Alert variant="success" >Successfully uploaded your image!</Alert>
                {handleAlert()} 
            </div>}
            {failure && 
            <div>
            <Alert variant="danger" >Failed to upload image!</Alert>
            {handleFailAlert()} 
            </div>}
            <FilePond 
                files={files}
                onupdatefiles={handleUpdate}
                allowMultiple={false}
                name="files"
                labelIdle='Drag & Drop your file or <span class="filepond--label-action">Browse</span>'
            />
            <div style={{display: "flex", justifyContent: "flex-end"}} >
                <Button disabled={loading} variant="primary" onClick={handleUpload} >{loading ? "Uploading.." : "Upload"}</Button>
            </div>
        </div>
    );
};

export default UserImage;