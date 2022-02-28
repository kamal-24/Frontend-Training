import { combineReducers } from "redux"

const initstate=[]
export const calorieReducer=(state=initstate,action)=>{
    switch(action.type){
        case("ADD_ENTRY"):{
            return [...state,{...action.entry,id:Math.floor(Math.random()*99)}]
        }
        case("DEL_ENTRY"):{
            return state.filter((item)=>item.id!==action.id)
        }
        case("DEL_ALL"):{
            return state.filter((item)=>item.id==action.id)
        }
        default:
            return state
    }
}

export const rootReducer=combineReducers({calorie:calorieReducer})