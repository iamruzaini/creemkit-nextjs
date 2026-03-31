import { createSupabaseServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    redirect("/dashboard");
  }

  // Example admin functionality: View system stats, manage users, etc.
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
      <h1 className="text-3xl font-extrabold text-text-primary mb-8 tracking-tight">Admin Area</h1>
      <div 
        className="bg-bg-secondary rounded-2xl border-2 border-border p-8"
        style={{ boxShadow: "4px 4px 0px rgba(255, 255, 255, 0.06)" }}
      >
        <p className="text-text-muted mb-4">Welcome to the admin panel, {user.email}.</p>
        <p className="text-text-secondary text-sm">
          This area is protected. Only the email defined in <code>ADMIN_EMAIL</code> can access it.
        </p>
        {/* Further admin components would go here */}
      </div>
    </div>
  );
}
