import { Outlet } from "react-router-dom";

export default function WelcomePage() {
    return (
        <div>
            Первая страница
            <Outlet/>
        </div>
    );
}
