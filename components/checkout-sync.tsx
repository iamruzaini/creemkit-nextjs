"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function CheckoutSync() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const polling = useRef(false);
  const [status, setStatus] = useState<"idle" | "waiting" | "done">("idle");

  useEffect(() => {
    if (polling.current) return;
    const checkout = searchParams.get("checkout");
    if (checkout !== "success") return;

    polling.current = true;
    setStatus("waiting");

    const subscriptionId = searchParams.get("subscription_id");
    const productId = searchParams.get("product_id");
    const customerId = searchParams.get("customer_id");

    const syncCheckout = async () => {
      try {
        await fetch("/api/checkout/success-sync", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subscriptionId,
            productId,
            customerId,
          }),
        });
      } catch (error) {
        console.error("Failed to sync checkout details:", error);
      } finally {
        router.replace("/dashboard");
        router.refresh();
        setStatus("done");
      }
    };

    if (subscriptionId && productId) {
      syncCheckout();
    } else {
      // In demo mode or if missing params, just redirect
      const timer = setTimeout(() => {
        router.replace("/dashboard");
        router.refresh();
        setStatus("done");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [searchParams, router]);

  if (status === "waiting") {
    return (
      <div className="bg-success/10 border-2 border-success/30 rounded-2xl p-4 mb-6" role="status">
        <p className="text-success font-bold">
          Payment successful! Activating your subscription...
        </p>
      </div>
    );
  }

  return null;
}
