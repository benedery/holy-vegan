import React, {useState} from 'react';
import {sendForm} from "../../../store/actions/formActions";
import {connect} from "react-redux";

const BusinessDetails = ({profile, auth}) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonLabel, setButtonLabel] = useState('בצע שינויים');


    console.log(profile)

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //
    //     // const data = {
    //     //     userName,
    //     //     email
    //     // }
    //     // sendForm(data)
    // };

    const handleChangesClick = () => {
        console.log(buttonLabel);
        if (buttonLabel === 'בצע שינויים') {
            setButtonLabel('שלח');
        } else if (buttonLabel === 'שלח') {
            setButtonLabel('בצע שינויים');
        }
    };

    return (
        <div className="row">
            <div className="col-12 p-lg-5">
                {/*<form onSubmit={(e) => handleSubmit}>*/}
                <form>
                    <div className="row">
                        {/*right side*/}
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="userNameProfile"><span>שם מלא</span></label>
                                <input type="text" className="form-control" id="userNameProfile"
                                       placeholder={profile.userName} disabled/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userNameProfile"><span>שם העסק\בשלן</span></label>
                                <input type="text" className="form-control" id="userNameProfile"
                                       placeholder={profile.cook.details.nameOfCookPlace} disabled/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userPhoneCooker"><span>טלפון</span></label>
                                <input type="text" className="form-control" id="userPhoneCooker"
                                       placeholder={profile.cook.details.phone} disabled/>
                            </div>
                            <div className="form-checkbox-days">
                                <legend>ימים פעילים</legend>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="day1"
                                           value="day1" checked={profile.cook.details.openingDays.day1} disabled/>
                                    <label className="form-check-label" htmlFor="day1">ראשון</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="day2"
                                           value="day2" checked={profile.cook.details.openingDays.day2} disabled/>
                                    <label className="form-check-label" htmlFor="day2">שני</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="day3"
                                           value="day3" checked={profile.cook.details.openingDays.day3} disabled/>
                                    <label className="form-check-label" htmlFor="day3">שלישי</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="day4"
                                           value="day4" checked={profile.cook.details.openingDays.day4} disabled/>
                                    <label className="form-check-label" htmlFor="day4">רביעי</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="day5"
                                           value="day5" checked={profile.cook.details.openingDays.day5} disabled/>
                                    <label className="form-check-label" htmlFor="day5">חמישי</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="day6"
                                           value="day6" checked={profile.cook.details.openingDays.day6} disabled/>
                                    <label className="form-check-label" htmlFor="day6">שישי</label>
                                </div>
                                <div className="row mt-3 mb-3">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="userNameProfile"
                                                   placeholder={`${profile.cook.details.hours.openingHour}:00`}
                                                   disabled/>
                                        </div>

                                        {/*<select className="custom-select opening-hours" name="opening-hours" value={profile.cook.details.openingHour}>*/}
                                        {/*    <option disabled>שעת פתיחה</option>*/}
                                        {/*<option >שעת פתיחה</option>*/}
                                        {/*<option value="8" disabled>8:00</option>*/}
                                        {/*<option value="9" disabled>9:00</option>*/}
                                        {/*<option value="10" disabled>10:00</option>*/}
                                        {/*<option value="11" disabled>11:00</option>*/}
                                        {/*<option value="12" disabled>12:00</option>*/}
                                        {/*<option value="13">13:00</option>*/}
                                        {/*<option value="14">14:00</option>*/}
                                        {/*<option value="15">15:00</option>*/}
                                        {/*<option value="16">16:00</option>*/}
                                        {/*<option value="17">17:00</option>*/}
                                        {/*<option value="18">18:00</option>*/}
                                        {/*<option value="19">19:00</option>*/}
                                        {/*<option value="20">20:00</option>*/}
                                        {/*</select>*/}
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="userNameProfile"
                                                   placeholder={`${profile.cook.details.hours.closingHour}:00`}
                                                   disabled/>
                                        </div>
                                        {/*<select className="custom-select closing-hours" name="closing-hours">*/}
                                        {/*    <option>שעת סגירה</option>*/}
                                        {/*    <option value="8">8:00</option>*/}
                                        {/*    <option value="9">9:00</option>*/}
                                        {/*    <option value="10">10:00</option>*/}
                                        {/*    <option value="11">11:00</option>*/}
                                        {/*    <option value="12">12:00</option>*/}
                                        {/*    <option value="13">13:00</option>*/}
                                        {/*    <option value="14">14:00</option>*/}
                                        {/*    <option value="15">15:00</option>*/}
                                        {/*    <option value="16">16:00</option>*/}
                                        {/*    <option value="17">17:00</option>*/}
                                        {/*    <option value="18">18:00</option>*/}
                                        {/*    <option value="19">19:00</option>*/}
                                        {/*    <option value="20">20:00</option>*/}
                                        {/*</select>*/}
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
                                       placeholder={profile.cook.details.city} disabled>
                                </input>
                            </div>
                            <label>תמונה</label>
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
                            <div className="form-group mt-4">
                                <label htmlFor="cookerAboutMe-textarea"> על המטבח שלי</label>
                                <textarea className="form-control" id="cookerAboutMe-textarea" rows="4"
                                          placeholder={profile.cook.details.aboutMe} disabled>
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-success btn-block"
                            onClick={() => handleChangesClick()}>{buttonLabel}</button>

                </form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendForm: (auth, data) => dispatch(sendForm(auth, data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessDetails);