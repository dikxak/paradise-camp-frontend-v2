import userReducer from "@/features/auth/authSlice";
import locationReducer from "@/features/location/locationSlice";

const rootReducer = {
  user: userReducer,
  location: locationReducer,
};

export default rootReducer;
