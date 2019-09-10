import React, {useState} from 'react';
import {connect} from "react-redux";
import {sendForm} from '../store/actions/formActions'
import firebase from "../config/fbConfig";

const db = firebase.firestore().collection('users');

const JoinAsCooker = ({profile,auth, sendForm, loading}) => {
    const [userName, setUserName] = useState('');
    const [nameOfCookPlace, setNameOfCookPlace] = useState('')
    const [city, setCity]= useState('');
    const [phone, setPhone] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [openingDays, setOpeningDays] = useState({
        day1:false,
        day2:false,
        day3:false,
        day4:false,
        day5:false,
        day6:false,
    });
    const [openingHour, setOpeningHour] = useState('');
    const [closingHour, setClosingHour] = useState('');
    const days = [{ id: 'day1',name:'ראשון'},{ id: 'day2',name:'שני'},{ id: 'day3',name:'שלישי'},
        { id: 'day4',name:'רביעי'},{ id: 'day5',name:'חמישי'},{ id: 'day6',name:'שישי'}];
    const hours = ['8:00', '9:00','10:00','11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

    let formSent = false;

    if (profile.isLoaded) {
        formSent = profile.cook.cookReq;
    }

    const handleSubmit = (e)=> {
        if (!formSent) {
            e.preventDefault()
            const data = {
                userName,
                nameOfCookPlace,
                city,
                phone,
                email: profile.email,
                aboutMe,
                openingDays,
                hours: {
                    openingHour,
                    closingHour
                }
            }
            console.log(data)
            sendForm(auth, data)
        } else {
            e.preventDefault()
            console.log("allready sent data")
        }
    };

    const handleCheckBox = (e) => {
        console.log(e.target.id)
        let newDay = e.target.id;
        setOpeningDays(updateState => ({
            ...updateState, [newDay]:!updateState[newDay]
        }))
    };

    const daysCheckBox = days.map(day =>
        <div className="form-check form-check-inline" key={day.id}>
            <input className="form-check-input" type="checkbox" id={day.id}
                   defaultChecked={openingDays[day.id]} onChange={e => handleCheckBox(e)}/>
            <label className="form-check-label" htmlFor={day.id}>{day.name}</label>
        </div>
    );

    const hoursDisplayed = hours.map(hour => (
        <option value={hour} key={hour}>{hour}</option>
    ))

    return (
        <div className="row">
            <div className="col-12 p-lg-5">
                <form onSubmit={(e)=> handleSubmit(e)}>
                    <div className="row">
                        {/*right side*/}
                        <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="userNameProfile"><span>שם מלא</span></label>
                        <input type="text" className="form-control" id="userNameProfile"
                               placeholder={userName} onChange={(e)=> setUserName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="userNameProfile"><span>שם העסק\בשלן</span></label>
                        <input type="text" className="form-control" id="userNameProfile"
                               placeholder={nameOfCookPlace} onChange={(e)=> setNameOfCookPlace(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="userPhoneCooker"><span>טלפון</span></label>
                        <input type="text" className="form-control" id="userPhoneCooker"
                               placeholder={phone} onChange={(e)=> setPhone(e.target.value)}/>
                    </div>
                            <div className="form-checkbox-days">
                            <legend>ימים פעילים</legend>
                                {daysCheckBox}
                                <div className="row mt-3 mb-3">
                                    <div className="col-6">
                                    <select className="custom-select opening-hours" name="opening-hours" onChange={(e)=> setOpeningHour(e.target.value)}>
                                        <option>שעת פתיחה</option>
                                        {hoursDisplayed}
                                    </select>
                                    </div>
                                    <div className="col-6">
                                    <select className="custom-select closing-hours" name="closing-hours" onChange={(e)=> setClosingHour(e.target.value)}>
                                        <option>שעת סגירה</option>
                                        {hoursDisplayed}
                                    </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*left side*/}
                        <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="userMailCooker">מייל</label>
                        <input type="text" className="form-control" id="userMailCooker"
                               placeholder={profile.email} disabled/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="userCityCooker">עיר</label>
                        <input type="text" className="form-control" id="userCityCooker"
                               placeholder={city} onChange={(e)=> setCity(e.target.value)}>
                        </input>
                    </div>
                        <label>תמונה</label>
                        {/*<div className="input-group">*/}
                        {/*    <div className="custom-file">*/}
                        {/*        <input type="file" className="custom-file-input" id="cookerPicFile"></input>*/}
                        {/*            <label className="custom-file-label" htmlFor="cookerPicFile"*/}
                        {/*                   aria-describedby="inputGroupFileAddon02"></label>*/}
                        {/*    </div>*/}
                        {/*    <div className="input-group-append">*/}
                        {/*        <span className="input-group-text" id="cookerPicFile">העלאה</span>*/}
                        {/*    </div>*/}
                        {/*    </div>*/}
                            <div className="form-group mt-4">
                                <label htmlFor="cookerAboutMe-textarea"> על המטבח שלי</label>
                                <textarea className="form-control" id="cookerAboutMe-textarea" rows="4"
                                          placeholder={aboutMe} onChange={(e)=> setAboutMe(e.target.value)}></textarea>
                            </div>
                    </div>
                    </div>
                    {!loading && !formSent && <button className="btn btn-success btn-block" type="submit">שלח</button>}
                    {loading && <div className="spinner-border spinner-border-sm" role="status"/>}
                    {formSent &&
                    <div>
                    <button className="btn btn-success btn-block disabled" type="submit">שלח</button>
                    <p className="text-center mt-2">בקשתך להצטרפות כבשלן בטיפול, בקשתך תטופל בהקדם האפשרי </p>
                    </div>
                    }
                    {/*<button className="btn btn-success btn-block" type="submit">שלח</button>*/}
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
        auth: state.firebase.auth,
        loading:state.form.loading,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendForm : (auth,data)=> dispatch(sendForm(auth,data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinAsCooker);


//things to be done

// check if need to use redux and reducer for form sent opreation. if yes, build it. V
//if form sent show message and change button to "עדכן" V

//add image opeartion to data sent.
//show little image if possible after image uploaded.

//later on fetch data to show if allready form sent
// 1. format code, include map and reducing size, code NOT DRY.
//validation of the form
