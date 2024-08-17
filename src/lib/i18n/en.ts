// NOTE: Please maintain the alphabetical order while adding the items; it will be easier to search and look through the file in that way.

const en = {
  translation: {
    auth: {
      signup: {
        heading: "Create your account",
        validation: {
          password: {
            minLength:
              "Password must be at least {{minLength}} characters long",
            upperCase: "Password must contain at least one uppercase letter",
            lowerCase: "Password must contain at least one lowercase letter",
            number: "Password must contain at least one number",
            specialCharacter:
              "Password must contain at least one special character",
          },
        },
        successMessage: "Registered successfully {{emoji}}",
      },
      login: {
        heading: "Log in to your account",
        successMessage: "Logged in successfully {{emoji}}",
      },
    },
    common: {
      validation: {
        required: "{{key}} is required",
        valid: "{{key}} must be a valid {{type}}",
      },
    },
    fetchError: {},
    heading: {},
    modal: {},
    toasterMessage: {},
    welcome: {
      message: "Welcome to ParadiseCamp",
    },
  },
};

export default en;
