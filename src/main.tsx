import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./utils/firebase/firebase";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
