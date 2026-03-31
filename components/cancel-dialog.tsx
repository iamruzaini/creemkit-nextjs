"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface CancelDialogProps {
  subscriptionId: string;
  currentPeriodEnd?: string;
}

export function CancelDialog({ subscriptionId, currentPeriodEnd }: CancelDialogProps) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"scheduled" | "immediate">("scheduled");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  async function handleCancel() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/subscriptions/cancel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subscriptionId, mode }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Cancel failed");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setLoading(false);
      
      // Refresh after showing success message
      setTimeout(() => {
        router.refresh();
        setOpen(false);
        setSuccess(false);
      }, 2000);
    } catch (err) {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-sm text-text-muted hover:text-error transition-colors font-medium"
      >
        Cancel Subscription
      </button>
    );
  }

  if (success) {
    return (
      <div className="rounded-xl border-2 border-green-500/30 bg-green-500/10 p-4">
        <p className="text-sm font-bold text-green-600">
          ✓ Subscription {mode === "scheduled" ? "scheduled for cancellation" : "cancelled successfully"}
        </p>
        <p className="text-xs text-text-muted mt-1">
          {mode === "scheduled" 
            ? `Your subscription will end on ${new Date(currentPeriodEnd || "").toLocaleDateString()}`
            : "Your subscription has been cancelled immediately"}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border-2 border-error/30 bg-error/5 p-4 space-y-4">
      <p className="text-base font-bold text-text-primary">Cancel your subscription?</p>

      <div className="space-y-3">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="radio"
            name="cancel-mode"
            checked={mode === "scheduled"}
            onChange={() => setMode("scheduled")}
            className="mt-0.5 w-4 h-4 accent-accent-orange cursor-pointer"
          />
          <div className="flex-1">
            <span className="text-sm font-medium text-text-primary group-hover:text-text-primary">
              At end of billing period
            </span>
            {currentPeriodEnd && (
              <span className="text-sm text-text-muted block">
                ({new Date(currentPeriodEnd).toLocaleDateString()})
              </span>
            )}
          </div>
        </label>
        
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="radio"
            name="cancel-mode"
            checked={mode === "immediate"}
            onChange={() => setMode("immediate")}
            className="mt-0.5 w-4 h-4 accent-accent-orange cursor-pointer"
          />
          <div className="flex-1">
            <span className="text-sm font-medium text-text-primary group-hover:text-text-primary">
              Immediately
            </span>
            <span className="text-sm text-text-muted block">
              (No refund for remaining time)
            </span>
          </div>
        </label>
      </div>

      {error && (
        <div className="rounded-lg bg-error/10 border border-error/30 p-3">
          <p className="text-error text-sm font-medium">{error}</p>
        </div>
      )}

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={handleCancel}
          disabled={loading}
          className="flex-1 px-4 py-2.5 text-sm bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {loading ? "Processing..." : "Confirm Cancellation"}
        </button>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            setError(null);
          }}
          disabled={loading}
          className="flex-1 px-4 py-2.5 text-sm bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 border-2 border-gray-300 disabled:opacity-50 transition-all"
        >
          Keep Subscription
        </button>
      </div>
    </div>
  );
}
