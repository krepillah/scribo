import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { authErrorCodes } from "../utils/constants";

export default function WorkspacePage() {
	const [authorised, setAuthorised] = useState(false);
	const navigate = useNavigate();

	const userSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/login");
				setAuthorised(false);
			})
			.catch((error) => {
				console.log(`${authErrorCodes.SIGN_OUT_ERROR} : ${error}`);
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setAuthorised(true);
				//хапрос на получение данных о пользователе
			} else {
				navigate("/login");
			}
		});

		return () => unsubscribe();
	}, []);

	return authorised ? (
		<>
			<div>Страница рабочая</div>
			<button onClick={() => userSignOut()}>Выйти</button>
		</>
	) : (
		""
	);
}
