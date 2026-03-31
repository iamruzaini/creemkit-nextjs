interface AlertBannerProps {
  type: "info" | "warning" | "error" | "success";
  title: string;
  message?: string;
}

export function AlertBanner({ type, title, message }: AlertBannerProps) {
  const styles = {
    info: "bg-accent-blue/10 border-accent-blue/30 text-accent-blue",
    warning: "bg-warning/10 border-warning/30 text-warning",
    error: "bg-error/10 border-error/30 text-error",
    success: "bg-success/10 border-success/30 text-success",
  };

  return (
    <div className={`p-4 rounded-xl border-2 mb-6 ${styles[type]}`}>
      <h4 className="font-extrabold text-sm uppercase tracking-wide mb-1">{title}</h4>
      {message && <p className="text-sm opacity-90">{message}</p>}
    </div>
  );
}
