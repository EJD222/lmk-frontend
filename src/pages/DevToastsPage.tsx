import { notifyError, notifyInfo, notifySuccess } from "@/lib/notify";

const BUTTON_STYLE = {
  background: "#111",
  color: "white",
  padding: "8px 16px",
  borderRadius: 8,
  fontSize: 13,
  fontFamily: "monospace",
  cursor: "pointer",
} as const;

export function DevToastsPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
      <button style={{ ...BUTTON_STYLE, background: "#1529d6" }} onClick={() => notifySuccess("Answers submitted!")}>
        ✓ trigger success
      </button>
      <button style={BUTTON_STYLE} onClick={() => notifyError("Failed to load results. Please try again.")}>
        ⚠ trigger error
      </button>
      <button style={{ ...BUTTON_STYLE, background: "#6B7FF5" }} onClick={() => notifyInfo("Heads up — your session will expire in 5 minutes.")}>
        i trigger info
      </button>
    </div>
  );
}
