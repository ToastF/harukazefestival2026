type Props = {
  title: string;
  children: React.ReactNode;
};

export default function RulesTemplate({ title, children }: Props) {
  return (
    <main className="container py-5 d-flex justify-content-center">
      <div
        className="w-100 rules-card"
      >
        <h1 className="text-center fw-bold mb-4 rules-title">
          {title}
        </h1>

        <div className="rules-content">
          {children}
        </div>
      </div>
    </main>
  );
}