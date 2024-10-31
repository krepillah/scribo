import { Navigate } from 'react-router-dom';
export default function WorkspacePage() {
    return (
        <div>
            Страница рабочая
            <Navigate to="/login" />
        </div>
    );
}
