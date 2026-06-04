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
  CONSENSUS_RESULT_ROUTE,
  SPLIT_RESULT_ROUTE,
  BY_THE_NUMBERS_RESULT_ROUTE,
  AI_RECOMMENDATION_RESULT_ROUTE,
  ALSO_ON_TABLE_RESULT_ROUTE,
  SHARE_RESULTS_ROUTE,
  NO_CONSENSUS_RESULT_ROUTE,
  NO_CONSENSUS_DIVERGED_ROUTE,
  NO_CONSENSUS_WHAT_NOW_ROUTE,
} from "@/common/routes";
import { ResultsPage } from "./pages/Results/ResultsPage";
import { ConsensusPage } from "./pages/Results/ConsensusPage";
import { SplitRevealPage } from "./pages/Results/SplitRevealPage";
import { ByTheNumbersPage } from "./pages/Results/ByTheNumbersPage";
import { AIRecommendationPage } from "./pages/Results/AIRecommendationPage";
import { AlsoOnTheTablePage } from "./pages/Results/AlsoOnTheTablePage";
import { ShareResultsPage } from "./pages/Results/ShareResultsPage";
import { NoConsensusIntroPage } from "./pages/Results/NoConsensusIntroPage";
import { NoConsensusDivergedPage } from "./pages/Results/NoConsensusDivergedPage";
import { NoConsensusWhatNowPage } from "./pages/Results/NoConsensusWhatNowPage";

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
          <Route path={CONSENSUS_RESULT_ROUTE} element={<ConsensusPage />} />
          <Route path={SPLIT_RESULT_ROUTE} element={<SplitRevealPage />} />
          <Route path={BY_THE_NUMBERS_RESULT_ROUTE} element={<ByTheNumbersPage />} />
          <Route path={AI_RECOMMENDATION_RESULT_ROUTE} element={<AIRecommendationPage />} />
          <Route path={ALSO_ON_TABLE_RESULT_ROUTE} element={<AlsoOnTheTablePage />} />
          <Route path={SHARE_RESULTS_ROUTE} element={<ShareResultsPage />} />
          <Route path={NO_CONSENSUS_RESULT_ROUTE} element={<NoConsensusIntroPage />} />
          <Route path={NO_CONSENSUS_DIVERGED_ROUTE} element={<NoConsensusDivergedPage />} />
          <Route path={NO_CONSENSUS_WHAT_NOW_ROUTE} element={<NoConsensusWhatNowPage />} />
          <Route path="*" element={<WelcomePage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
