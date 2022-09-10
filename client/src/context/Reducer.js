const Reducer = (state,action)=>{
    switch(action.type){
        case "LOGIN_START":
            return{
                user:null,
                isFecthing:true,
                error:false,
            };
        case "LOGIN_SUCCESS":
            return{
                user:action.payload,
                isFecthing:false,
                error:false,
            };
        case "LOGIN_FAILURE":
            return{
                user:null,
                isFecthing:false,
                error:true,
            };
        default:
            return state;
                 
         
    }
}

export default Reducer;