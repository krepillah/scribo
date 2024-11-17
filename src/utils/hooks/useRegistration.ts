import { createUserWithEmailAndPassword, User } from "firebase/auth"; 
import { useNavigate } from "react-router-dom"; 
import { auth } from "../firebase/firebase";
import { useStore } from "../../store";
import { registrationErrorCodes } from "../constants"
import { FirebaseError } from "firebase/app";

export const useRegistration = () => {
    const navigate = useNavigate();
    const initialSetUser = useStore((state) => state.initialSetUser); 

    const takeRegistrationData = (email: string, password: string): Promise<User> => { 
        return createUserWithEmailAndPassword(auth, email, password) 
            .then((userCredential) => { 
                const user = userCredential.user; 
                console.log(user); 
                return user;
            }) 
            .catch((error:FirebaseError) => { 
                console.log(`Error ${error.code} : ${error.message}`); 
                return Promise.reject(error); 
            }); 
    }

    const handleError = (error: unknown): void => {
        if(error instanceof FirebaseError){
            if (error.code === "auth/email-already-in-use") {
                console.error(registrationErrorCodes.EMAIL_IN_USE);
                navigate("/login"); 
            } else if (error.code === "auth/weak-password") {
                console.error(registrationErrorCodes.WEAK_PASSWORD);
            } else if (error.code === "auth/invalid-email") {
                console.error(registrationErrorCodes.INVALID_EMAIL);
            } else {
                console.error(`${registrationErrorCodes.REGISTRATION_ERROR}: ${error.message}`);
            }
        } else{
            console.error(registrationErrorCodes.UNKNOWN_ERROR, error);
        }
    }

    const setRegistration = async (email: string, password: string): Promise<void> => { 
        try {
            const user: User = await takeRegistrationData(email, password); 
            const token = await user.getIdToken(); 

            const initialData = {
                id: user.uid, 
                email: user.email || "", 
                token: token
            };

            initialSetUser(initialData);
            navigate("/workspace");

        } catch (error: unknown){
            handleError(error);
        }
    }
    
    return {
        setRegistration 
    }
}