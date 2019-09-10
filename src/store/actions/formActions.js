export const sendForm = (auth,data) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        dispatch({type:'FORM_START_LOADING'});
        const firestore = getFirestore();
        const db = firestore.collection('users')
        db.doc(auth.uid).update({
            "cook.cookReq":true,
            "cook.details":data
        }).then(()=> console.log('document updated'),
        dispatch({type:'FORM_SENT_SUCCESS'})
        )
            .catch((err)=> {
                console.log(err)
                dispatch({type:'FORM_SENT_ERROR'})
            });
        dispatch({type:'FORM_STOP_LOADING'});
    }};





//         ).then((res) => {
//             return firestore.collection('users').doc(res.user.uid).set({
//                 userName: newUser.userName,
//                 email: newUser.email
//             });
//         }).catch((err) => {
//             dispatch({type: 'SIGNUP_ERROR', err});
//             dispatch({type: 'STOP_LOADING'});
//         });
//     };
// };