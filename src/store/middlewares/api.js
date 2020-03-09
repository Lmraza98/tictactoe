// import axios from 'axios'
// import { MESSAGE_RECEIVED, SEND_MESSAGE } from '../reducers/entities/types'
// import { getTime } from '../../helper'
// import io from 'socket.io-client';
//
// const dataService = store => next => action => {
// 	const message  = action.message
// 	/*
//     Pass all actions through by default
//     */
// 	console.log(JSON.stringify(action))
// 	switch (action.type) {
// 	case 'move:
// 		next(action)
//
// 		break
//
// 	default:
// 		console.log('default')
// 		next(action)
// 	}
// }
//
// export default dataService