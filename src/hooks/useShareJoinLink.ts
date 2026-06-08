import { useCallback, useMemo } from "react";
import { notifyError, notifySuccess } from "@/lib/notify";

interface UseShareJoinLinkResult {
  /** Fully-qualified, shareable join URL derived from the raw `join_link`. */
  shareUrl: string;
  /** Copies `shareUrl` to the clipboard and surfaces a success/error toast. */
  copyLink: () => Promise<void>;
  /** Opens the native share sheet when available, falling back to `copyLink`. */
  shareLink: () => Promise<void>;
}

/**
 * Builds a shareable join-session URL from a raw `join_link` (which may be a
 * full path, a bare id, or anything in between) and exposes the copy/share
 * actions used wherever participants or hosts need to (re)send the invite —
 * e.g. `ShareJoinLinkPage` (host, right after creating a session) and
 * `ShareLinkButton` (participants, mid-session).
 */
export function useShareJoinLink(joinLink: string | null | undefined): UseShareJoinLinkResult {
  const shareUrl = useMemo(() => {
    if (!joinLink) return "";
    const linkId = joinLink.split("/").filter(Boolean).pop() ?? joinLink;
    return `${window.location.origin}/join-session/${linkId}`;
  }, [joinLink]);

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      notifySuccess("copied. go drop it in the chat.");
    } catch {
      notifyError("hmm, that didn't copy — you'll have to grab it by hand");
    }
  }, [shareUrl]);

  const shareLink = useCallback(async () => {
    if ("share" in navigator) {
      try {
        await navigator.share({ title: "come make plans with me on lmk", url: shareUrl });
      } catch {
        // user dismissed the share sheet
      }
    } else {
      await copyLink();
    }
  }, [shareUrl, copyLink]);

  return { shareUrl, copyLink, shareLink };
}
