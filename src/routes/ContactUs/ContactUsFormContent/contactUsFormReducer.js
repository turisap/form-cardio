const contactUsFormReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_ACTIVE_STEP':
      return {
        ...state,
        activeStep: state.activeStep + 1
      };
    case 'DECREMENT_ACTIVE_STEP':
      return {
        ...state,
        activeStep: state.activeStep - 1
      };
    default:
      return state;
  }
};

export default contactUsFormReducer;
