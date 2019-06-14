const INITIAL_STATE = {
  counter: 0,
  questionId: 1,
  question: '',
  answerOptions: [],
  allQuestions : [],
  answer: '',
  selectedAnswers : {},
  result: ''
  };
  
  export default function course(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_LESSON') {
      return { ...state, 
        activeLesson: action.lesson, 
        activeModule: action.module,
      }
    }
  
    return state;
  }