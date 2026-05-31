import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { WelcomePage } from "@/pages/WelcomePage";
import { CREATE_SESSION_ROUTE } from "@/common/routes";
import { CreateSessionPage } from "@/pages/CreateSession/CreateSessionPage";

function App() {
	return (
		<BrowserRouter>
			<AppLayout>
				<Routes>
					<Route path="/" element={<WelcomePage />} />
                    <Route path={CREATE_SESSION_ROUTE} element={<CreateSessionPage />} />
					<Route path="*" element={<WelcomePage />} />
				</Routes>
			</AppLayout>
		</BrowserRouter>
	);
}

export default App;
