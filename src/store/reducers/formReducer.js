const initState = {
    isFormSent:false,
    formSentError:null,
    loading: false,
};

const formReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FORM_START_LOADING':
            return {
                ...state,
                loading: true
            };
        case 'FORM_STOP_LOADING':
            return {
                ...state,
                loading: false
            };
        case 'FORM_SENT_SUCCESS':
            return {
                ...state,
                isFormSent:true,
                formSentError:null,
            }
        case 'FORM_SENT_ERROR':
            return {
                ...state,
                formSentError:action.payload
            }
        default:
            return state;
    }
};

export default formReducer;