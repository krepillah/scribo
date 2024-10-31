import { useState } from "react";
import { setRegistration } from "../utils/requests";

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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