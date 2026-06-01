import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { WelcomePage } from "@/pages/WelcomePage";
import { CreateSessionPage } from "@/pages/CreateSession/CreateSessionPage";
import { JoinSessionPage } from "@/pages/JoinSession/JoinSessionPage";
import { ShareJoinLinkPage } from "@/pages/ShareLink/ShareJoinLinkPage";
import { SessionPage } from "@/pages/Session/SessionPage";
import {
	CREATE_SESSION_ROUTE,
	JOIN_SESSION_ROUTE,
	JOIN_SESSION_WITH_LINK_ROUTE,
	SHARE_JOIN_LINK_ROUTE,
	SESSION_ROUTE,
    RESULTS_ROUTE,
    NON_CONSENSUS_RESULT_ROUTE,
    BY_THE_NUMBERS_RESULT_ROUTE,
} from "@/common/routes";
import ResultsPage from "./pages/Results/ResultsPage";
import NonConsensusPage from "./pages/Results/NonConsensusPage";
import ByTheNumbersPage from "./pages/Results/ByTheNumbersPage";

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
					<Route path={SESSION_ROUTE} element={<SessionPage />} />
                    <Route path={RESULTS_ROUTE} element={<ResultsPage />} />
                    <Route path={NON_CONSENSUS_RESULT_ROUTE} element={<NonConsensusPage />} />
                    <Route path={BY_THE_NUMBERS_RESULT_ROUTE} element={<ByTheNumbersPage />} />
                    <Route path="*" element={<WelcomePage />} />
				</Routes>
			</AppLayout>
		</BrowserRouter>
	);
}

export default App;
