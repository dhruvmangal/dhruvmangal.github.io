const intialState = {
    dataToDisplay : [],
    data : [],
    title : '',
    isFiltered : false
}

export function contentReducer(state = intialState, action){
    switch(action.type){
        case 'setContentList' : 
            return {
                ...state,
                dataToDisplay : [...state.dataToDisplay, ...action.value],
                data : [...state.dataToDisplay, ...action.value]
            }
        case 'setFilteredContentList' : 
            return {
                ...state,
                dataToDisplay : action.value,
            }
        case 'isFiltered' : 
        return {
            ...state,
            isFiltered : action.value,
        }
        case 'setTitle' : 
            return {
                ...state,
                title : action.value
            }
        default :
            return state
    }
}