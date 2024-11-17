import { FirebaseError } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { authErrorCodes } from "../constants";

export const useAuthentification = () => {
    const navigate = useNavigate();

    const takeAuthentificationData = (email: string, password: string): Promise<User> => { 
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            return user;
        })
        .catch((error) => { 
            console.log(`Error ${error.code} : ${error.message}`); 
            return Promise.reject(error); 
        }); 
    }

    const handleError = (error: unknown): void => {
        if(error instanceof FirebaseError){
            if(error.code === "auth/user-not-found"){
                console.log(authErrorCodes.USER_NOT_FOUND);
                navigate("/signup");
            } else if(error.code === "auth/wrong-password"){
                console.log(authErrorCodes.WRONG_PASSWORD);
            } else if(error.code === "auth/too-many-requests") {
                console.log(authErrorCodes.TOO_MANY_ARGUMENTS)
            }else {
                console.error(`${authErrorCodes.AUTH_ERROR}: ${error.message}`);
            }
        } else{
            console.error(authErrorCodes.UNKNOWN_ERROR, error);
        }
    }

    const setAuthorised = async (email: string, password: string): Promise<void> => { 
        try {
            const user: User = await takeAuthentificationData(email, password); 
            const token = await user.getIdToken(); 
        
            if (token) { 
                localStorage.setItem("token", token);  
            } 
            
            navigate("/workspace");
        } catch(error: unknown){
            handleError(error);
        }
    }

    return {
        setAuthorised
    }
}
