import { Outlet, Link } from "react-router-dom";

export default function WelcomePage() {
    return (
        <div>
            Первая страница
            <Link to="/signup">Зарегистрироваться</Link>
            <Outlet/>
        </div>
    );
}
