const validationRules = {
  type: {
    // here you can add validation for different types of inputs
    // omitted in this app due to implementing react-advanced-form middleway
    // view an article here https://medium.com/@kettanaito/advanced-forms-in-react-made-easy-92a6e208f017
    text: {
      isRequired: ({ value }) => value.length > 0
    },
    password: {
      isRequired: ({ value }) => value.length > 0,
      capitalLetter: ({ value }) => /[A-Z]/.test(value),
      minLength: ({ value }) => value.length >= 6,
      containsDigit: ({ value }) => /[0-9]/.test(value)
    },
    email: {
      isValid: ({ value }) =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
    }
  },

  name: {
    /**
     * Sign Up form
     */
    signup_firstName: {
      isRequired: ({ value }) => value.length > 0,
      minLength: ({ value }) => value.length >= 2
    },
    signup_lastName: {
      isRequired: ({ value }) => value.length > 0,
      minLength: ({ value }) => value.length >= 2
    },
    signup_confirm_password: {
      matches: ({ value, get }) => {
        return value === get(['signup_password', 'value']);
      }
    }
  }
};

export default validationRules;
