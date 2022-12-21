const INITAL_STATE = {
  face: 'ఠ_ఠ'
};

const moodReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'MOOD_EXCITED':
      return { ...state, face: action.payload, bgColor: 'red' };
    case 'MOOD_SCARED':
      return { ...state, face: action.payload, bgColor: 'orange' };
    case 'MOOD_KISS':
      return { ...state, face: action.payload, bgColor: 'pink' };
    case 'MOOD_DOG':
      return { ...state, face: action.payload, bgColor: 'brown' };
    default:
      return state;
  }
};
