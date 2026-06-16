import type { Portfolio } from "../../lib/types";

export function Footer({ data }: { data: Portfolio }) {
  return (
    <footer className="footer">
      <span>&copy; 2026 Chan Nimol</span>
      <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
    </footer>
  );
}
