import React,{useState} from 'react';

const PictureUpload = ({displayPicture, picture, pictureUrl})=> {
    return(
        <div className="input-group">
            <div className="custom-file">
                <input type="file" className="custom-file-input" id="cookerPicFile" onChange={(e)=>displayPicture(e)}></input>
                <label className="custom-file-label" htmlFor="cookerPicFile"
                       aria-describedby="inputGroupFileAddon02">{picture.name}</label>
            </div>
            <img className="img-fluid mt-3" src={pictureUrl}/>
        </div>
    )
}

export default PictureUpload