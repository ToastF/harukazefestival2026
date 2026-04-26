type Props = {
  title: string;
  children: React.ReactNode;
};

export default function RulesTemplate({ title, children }: Props) {
  return (
    <main className="rules-page">
      <div className="container d-flex justify-content-center py-5">

        <div className="rules-container-card">

          <h1 className="text-center fw-bold mb-4 rules-title">
            {title}
          </h1>

          <div className="rules-content">
            {children}
          </div>

        </div>

      </div>
    </main>
  );
}