import { combineReducers }  from 'redux';

import course from './course';


export default combineReducers({
    course,
})



// COMBINE REDUCERS
// combineReducers Organiza  os Reducers em objetos assim:
// { 
//  course: { modules: [], activeLesson: {}, activeModule: {} },
//  outroObjeto: { name: '', avatar: ''}
// }