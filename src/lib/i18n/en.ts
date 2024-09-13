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
    dropzone: {
      description:
        "Drag 'n' drop some files here, or click to select files for upload",
    },
    fetchError: {},
    geolocation: {
      error: "Error while getting the location information",
      notAvailable:
        "Sorry, it seems like your browser doesn't support geolocation ☹️",
    },
    heading: {},
    imageUpload: {
      validation: {
        fileSizeTooLarge: "Maximum file upload size is 5MB",
        fileFormat: "Only image formats JPG, JPEG and PNG are supported",
      },
    },
    location: {
      button: {
        getCurrentLocation: "Get current location",
      },
      create: {
        heading: "Add location details",
      },
      label: {
        name: "Name",
        address: "Address",
        availableSpotNo: "Available Spot",
        type: "Select Location Type",
        latitude: "Latitude",
        longitude: "Longitude",
        phoneNo: "Phone No",
        email: "Email Address",
        price: "Price Per Visit",
        description: "Description",
        uploadLocationImg: "Upload Location Image",
      },
    },
    modal: {},
    pageNotFound: {
      title: "Uh-oh! you've wandered off the trail... 🌲",
      message:
        "It looks like you've ventured into uncharted territory. Unfortunately, we could not find the page you're looking for in the map 🗺️",
    },
    toasterMessage: {},
    welcome: {
      message: "Welcome to ParadiseCamp",
    },
  },
};

export default en;
