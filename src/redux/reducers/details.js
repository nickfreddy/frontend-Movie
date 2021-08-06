import { 
    GET_DETAIL_BEGIN,
    GET_DETAIL_FAIL,
    GET_DETAIL_SUCCESS
} from "../action/types";

const initialState = {
    getDetail:[],
    loading: false,
    error: null,
    
};
    const reducerDetail = (state = initialState, action) => {
        const {
            type,
            payload,
            error
        } = action;
        switch (type) {
            default:
                return {
                    ...state,
                };
            case GET_DETAIL_BEGIN:
                return {
                    ...state,
                    loading: true,
                        error: false
                };
            case GET_DETAIL_SUCCESS:
                return {
                    ...state,
                    getDetail: payload,
                        loading: false,
                        error: null,
                };
            case GET_DETAIL_FAIL:
                return {
                    ...state,
                    detail: [],
                        loading: false,
                        error: error,
                };

        }
    };
    
    export default reducerDetail;   