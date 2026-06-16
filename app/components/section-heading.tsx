export function SectionHeading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 className="section-label" id={id}>
      {children}
    </h2>
  );
}
