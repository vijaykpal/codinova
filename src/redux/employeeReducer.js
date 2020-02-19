const initialState = {
    employeeList: 0,
    favCount: 0
}

export const employeeReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_EMPLOYEE' :
            return {
                ...state,
                employeeList : action.employeeList
            }
        case 'FAV_EMPLOYEE' :
            return {
                ...state,
                favCount : action.favCount
            }
        
        default:
            return state;
    }
}