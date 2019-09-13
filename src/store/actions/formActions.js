import {storage} from "../../config/fbConfig";

export const sendForm = (auth,data,picture) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        dispatch({type:'FORM_START_LOADING'});
        const firestore = getFirestore();
        const db = firestore.collection('users')
        storage.child(`cooker/cookerBusinessImages/${new Date().getTime()}`).put(picture).then(snapshot => {
            snapshot.ref.getDownloadURL().then((url)=>{
            db.doc(auth.uid).update({
                "cook.cookReq":true,
                "cook.details": {
                    ...data,
                    "picture":url
                }})
            }).then(()=> console.log('document updated'),
                dispatch({type:'FORM_SENT_SUCCESS'})
            )
                .catch((err)=> {
                    console.log(err)
                    dispatch({type:'FORM_SENT_ERROR'})
                })
            dispatch({type:'FORM_STOP_LOADING'});
        })
    }};
