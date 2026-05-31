import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { WelcomePage } from "@/pages/WelcomePage";
import { CreateSessionPage } from "@/pages/CreateSession/CreateSessionPage";
import { JoinSessionPage } from "@/pages/JoinSession/JoinSessionPage";
import { ShareJoinLinkPage } from "@/pages/ShareLink/ShareJoinLinkPage";
import {
	CREATE_SESSION_ROUTE,
	JOIN_SESSION_ROUTE,
	JOIN_SESSION_WITH_LINK_ROUTE,
	SHARE_JOIN_LINK_ROUTE,
} from "@/common/routes";

function App() {
	return (
		<BrowserRouter>
			<AppLayout>
				<Routes>
					<Route path="/" element={<WelcomePage />} />
					<Route path={CREATE_SESSION_ROUTE} element={<CreateSessionPage />} />
					<Route path={JOIN_SESSION_ROUTE} element={<JoinSessionPage />} />
					<Route path={JOIN_SESSION_WITH_LINK_ROUTE} element={<JoinSessionPage />} />
					<Route path={SHARE_JOIN_LINK_ROUTE} element={<ShareJoinLinkPage />} />
					<Route path="*" element={<WelcomePage />} />
				</Routes>
			</AppLayout>
		</BrowserRouter>
	);
}

export default App;
