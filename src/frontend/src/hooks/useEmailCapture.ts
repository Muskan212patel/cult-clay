import { createActor } from "@/backend";
import type { EmailStatus } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useCallback, useState } from "react";

export function useEmailCapture() {
  const { actor } = useActor(createActor);
  const [status, setStatus] = useState<EmailStatus>("idle");
  const [message, setMessage] = useState("");

  const submit = useCallback(
    async (email: string, source: string) => {
      if (!actor) {
        setStatus("error");
        setMessage("Service unavailable. Please try again.");
        return;
      }

      setStatus("loading");
      setMessage("");

      try {
        const result = await actor.addEmail(email, source);
        if (result?.ok) {
          setStatus("success");
          setMessage("You're on the list. Welcome to the quiet.");
        } else {
          setStatus("success"); // treat gracefully
          setMessage("You're on the list. Welcome to the quiet.");
        }
      } catch {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    },
    [actor],
  );

  const reset = useCallback(() => {
    setStatus("idle");
    setMessage("");
  }, []);

  return { submit, status, message, reset };
}
