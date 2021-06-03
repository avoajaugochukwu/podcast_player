export const HOME_PODCAST_LIST_REQUEST = 'HOME_PODCAST_LIST_REQUEST'
export const HOME_PODCAST_LIST_SUCCESS = 'HOME_PODCAST_LIST_SUCCESS'
export const HOME_PODCAST_LIST_FAILURE = 'HOME_PODCAST_LIST_FAILURE'


const initialState = {
    loading: false,
    podcasts: [],
    error: false
}


export const homePodcastReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME_PODCAST_LIST_REQUEST:
            return {
                loading: true
            }

        case HOME_PODCAST_LIST_SUCCESS:
            return {
                ...state,
                podcasts: action.payload,
                loading: false,
            }

        case HOME_PODCAST_LIST_FAILURE:
            return {
                loading: false,
                error: true,
                errorMsg: action.payload
            }

        default:
            return state
    }
}