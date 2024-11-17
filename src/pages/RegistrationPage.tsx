import { useState } from "react";
import { useRegistration } from "../utils/hooks/useRegistration";

export default function RegistrationPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setRegistration } = useRegistration();

	return (
		<div>
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={() => setRegistration(email, password)}>
				Зарегистрироваться
			</button>
		</div>
	);
}
