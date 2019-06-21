export default (state,action) => {
	if(state == undefined) {
		return {"v" : 0, ...state};
	}

	switch(action.type){
		case "PLUS":
		 	return {...state, "v" : state.v+1};
		 	break;
		case "MINUS":
		 	return {...state, "v" : state.v-1};
		 	break;
		 case "PLUSN":
		 	return {...state, "v" : state.v+action.number};
		 	break;
	}

	return state;

}