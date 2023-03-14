const questionsReducer=(state={data:null},action)=>{
    switch(action.value){
        case "POST_QUESTION":
            return { ...state}
            case 'FETCH_ALL_QUESTIONS':
                return { ...state,data:action.payload}
            default:
                return state
    }
}
export default questionsReducer