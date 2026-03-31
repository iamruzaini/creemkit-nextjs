import { TransactionList } from "@/components/transaction-list";
import { createSupabaseServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function TransactionsPage() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
      <h1 className="text-3xl font-extrabold text-text-primary mb-8 tracking-tight">Transactions</h1>
      <div 
        className="bg-bg-secondary rounded-2xl border-2 border-border p-6"
        style={{ boxShadow: "4px 4px 0px rgba(255, 255, 255, 0.06)" }}
      >
        <TransactionList />
      </div>
    </div>
  );
}
