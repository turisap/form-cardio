const validationRules = {
  type: {
    // here you can add validation for different types of inputs
    // omitted in this app due to implementing react-advanced-form middleway
    // view an article here https://medium.com/@kettanaito/advanced-forms-in-react-made-easy-92a6e208f017
    text: {
      isRequired: ({ value }) => value.length > 0
    }
  },

  name: {
    /**
     * Sign Up form
     */
    signup_firstName: {
      isRequired: ({ value }) => value.length > 0,
      minLength: ({ value }) => value.length >= 2
    }
  }
};

export default validationRules;
