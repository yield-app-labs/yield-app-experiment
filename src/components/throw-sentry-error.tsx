"use client";

import * as Sentry from "@sentry/nextjs";

export default function ThrowSentryError() {
  return (
    <button
      type="button"
      style={{
        padding: "12px",
        cursor: "pointer",
        backgroundColor: "#AD6CAA",
        borderRadius: "4px",
        border: "none",
        color: "white",
        fontSize: "14px",
        margin: "18px",
      }}
      onClick={async () => {
        const transaction = Sentry.startTransaction({
          name: "Example Frontend Transaction",
        });

        Sentry.configureScope((scope) => {
          scope.setSpan(transaction);
        });

        try {
          const res = await fetch("/api/sentry-example-api?id=1");
          if (!res.ok) {
            throw new Error("Sentry Example Frontend Error");
          }
        } finally {
          transaction.finish();
        }
      }}
    >
      Throw error!
    </button>
  );
}
