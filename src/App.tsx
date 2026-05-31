import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { WelcomePage } from "@/pages/WelcomePage";

function App() {
	return (
		<BrowserRouter>
			<AppLayout>
				<Routes>
					<Route path="/" element={<WelcomePage />} />
					<Route path="*" element={<WelcomePage />} />
				</Routes>
			</AppLayout>
		</BrowserRouter>
	);
}

export default App;
