import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { WelcomePage } from "@/pages/WelcomePage";
import { CreateSessionPage } from "@/pages/CreateSession/CreateSessionPage";
import { JoinSessionPage } from "@/pages/JoinSession/JoinSessionPage";
import { ShareJoinLinkPage } from "@/pages/ShareLink/ShareJoinLinkPage";
import { SessionPage } from "@/pages/Session/SessionPage";
import { ResultsPage } from "@/pages/Results/ResultsPage";
import {
  CREATE_SESSION_ROUTE,
  JOIN_SESSION_ROUTE,
  JOIN_SESSION_WITH_LINK_ROUTE,
  SHARE_JOIN_LINK_ROUTE,
  SESSION_ROUTE,
  RESULTS_ROUTE,
} from "@/common/routes";

const TEXTURES = [
  "/textures/paper.jpg",
  "/textures/paper2.jpg",
  "/textures/paper3.jpg",
];

function App() {
  useEffect(() => {
    const pick = TEXTURES[Math.floor(Math.random() * TEXTURES.length)];
    document.documentElement.style.setProperty("--paper-texture", `url("${pick}")`);
  }, []);

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
          <Route path="*" element={<WelcomePage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;