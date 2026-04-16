type PageStateProps = {
  children: React.ReactNode;
  tone?: "default" | "error";
};

function PageState({ children, tone = "default" }: PageStateProps) {
  const toneClass =
    tone === "error" ? "text-red-600" : "text-gray-600";

  return <div className={`py-16 text-center ${toneClass}`}>{children}</div>;
}

export function LoadingState({ message = "Loading..." }: { message?: string }) {
  return <PageState>{message}</PageState>;
}

export function ErrorState({ message }: { message: string }) {
  return <PageState tone="error">{message}</PageState>;
}

export function EmptyState({
  message,
  children,
}: {
  message: string;
  children?: React.ReactNode;
}) {
  return (
    <PageState>
      {message}
      {children}
    </PageState>
  );
}
