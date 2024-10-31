import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const setRegistration = (email: string, password: string):void => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`Error ${errorCode} : ${errorMessage}`);
        });
}