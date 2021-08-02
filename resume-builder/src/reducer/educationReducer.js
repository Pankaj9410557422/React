import * as actionTypes from '../actions/actionTypes'

import initialState from './initialState.json'

export default function educationReducer(state = initialState.educationSection,action){
    switch(action.type){
        case actionTypes.ADD_EDUCATION:
            return {...action.educationSection}
        case actionTypes.UPDATE_EDUCATION:
            return {...action.educationSection}
        default:
             return state
    }
}