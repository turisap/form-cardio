export default {
  generic: {
    missing: 'Please provide the required field',
    invalid: 'The value you have provided is invalid'
  },

  type: {
    email: {
      missing: 'Please provide the e-mail',
      rule: {
        isValid: ({ value }) => `The e-mail "${value}" has invalid format`
      }
    },
    password: {
      missing: pleaseProvideField('password'),
      rule: {
        capitalLetter: 'Include at least one capital letter',
        minLength: 'Password must be at least 6 characters long',
        containsDigit: 'Password must contain a digit'
      }
    }
  },

  name: {
    /**
     * Signup form
     */
    signup_firstName: {
      missing: pleaseProvideField('your first name'),
      rule: {
        isRequired: 'You need to provide your first name to proceed',
        minLength: 'First name should be at least two characters long'
      }
    },
    signup_lastName: {
      missing: pleaseProvideField('your last name'),
      rule: {
        isRequired: 'You need to provide your last name',
        minLength: 'Last name should be at least two characters long'
      }
    },
    signup_confirm_password: {
      missing: pleaseProvideField('password confirmation'),
      rule: {
        matches: 'Passwords should match'
      }
    }
  }
};

function pleaseProvideField(fieldName) {
  return `Please provide ${fieldName}`;
}
