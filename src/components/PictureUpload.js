import React,{useState} from 'react';

const PictureUpload = ()=> {
    const [picture,setPicture] = useState('')
    const [pictureUrl,setPictureUrl] = useState('')

    const displayPicture = (e) =>{
        let reader = new FileReader();
        let file = e.target.files[0]
    }

    return(
        <div className="input-group">
            <div className="custom-file">
                <input type="file" className="custom-file-input" id="cookerPicFile"></input>
                <label className="custom-file-label" htmlFor="cookerPicFile"
                       aria-describedby="inputGroupFileAddon02"></label>
            </div>
            <div className="input-group-append">
                <span className="input-group-text" id="cookerPicFile">העלאה</span>
            </div>
        </div>
    )
}

export default PictureUpload