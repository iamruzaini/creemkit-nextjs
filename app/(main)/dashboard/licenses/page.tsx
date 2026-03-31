import { LicenseCard } from "@/components/license-card";
import { createSupabaseServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function LicensesPage() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: licenses } = await supabase
    .from("licenses")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
      <h1 className="text-3xl font-extrabold text-text-primary mb-8 tracking-tight">Your Licenses</h1>
      <LicenseCard licenses={licenses || []} />
    </div>
  );
}
