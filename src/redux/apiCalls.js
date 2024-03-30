import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const login = async (dispatch) => {
  dispatch(loginStart());
  try {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    dispatch(loginSuccess(user));
  } catch (error) {
    console.error("Google login error:", error);
    dispatch(loginFailure());
  }
};
