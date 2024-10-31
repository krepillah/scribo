import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return(
            <div>
                <h1>{error.status}</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <i>{error.statusText || error.data.message}</i>
            </div>
        )
    }
}