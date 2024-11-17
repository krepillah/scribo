import { useState } from "react";
import { useAuthentification } from "../utils/hooks/useAuthentification";

export default function LogInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setAuthorised} = useAuthentification();

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
            <button onClick={() => setAuthorised(email, password)}>
                Войти
            </button>
        </div>
    );
}