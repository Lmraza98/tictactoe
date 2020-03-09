// import { SEND_MESSAGE, MESSAGE_RECEIVED, UPDATE_INPUT} from './types'
// import { getTime } from '../../../helper'
// /*
//  * Message reducer
//  */
// function messageReducer (state, action) {
// 	const messages = state.messages
//
// 	switch(action.type) {
// 	case SEND_MESSAGE:
// 		const time = getTime()
// 		console.log(JSON.stringify(state.messages))
// 		const message = {
// 			...action.message,
// 			time
// 		}
// 		console.log('adding user message' + JSON.stringify(message))
// 		return {
// 			messages: messages.concat(message)
// 		}
// 	case MESSAGE_RECEIVED:
// 		console.log(JSON.stringify(action.response))
// 		return {
// 			messages: messages.concat(action.response)
// 		}
// 	case UPDATE_INPUT:
// 		console.log('reducer INPUT_VALUE: ' + action.message)
// 		return{
// 			...state, inputValue: action.message
// 		}
// 	default:
// 		return state
// 	}
// }
//
// export { messageReducer }