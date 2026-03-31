import { SignOutButton } from "@/components/sign-out-button";
import { createSupabaseServer } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();

  return (
    <div className="flex-1 overflow-auto">
      <header className="bg-bg-secondary border-b-2 border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <h1 className="font-extrabold text-text-primary text-xl tracking-tight">
            Dashboard
          </h1>
          <div className="flex items-center gap-6">
            <span className="text-sm font-bold text-text-secondary hidden md:inline">
              {profile?.full_name || user.email}
            </span>
            <SignOutButton />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="bg-bg-secondary rounded-2xl border-2 border-border p-8">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Welcome to your Dashboard</h2>
          <p className="text-text-secondary">
            Use the sidebar to navigate to different sections.
          </p>
        </div>
      </main>
    </div>
  );
}
