type ScreenPlaceholderProps = {
  title: string;
  description?: string;
};

export function ScreenPlaceholder({ title, description }: ScreenPlaceholderProps) {
  return (
    <main className="screen-placeholder">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </main>
  );
}
