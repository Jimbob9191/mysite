export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-5xl mx-auto px-6 py-8 flex gap-6 text-sm text-muted-foreground">
        <a
          href="mailto:jane@example.com"
          className="hover:text-foreground"
        >
          jane@example.com
        </a>
        <a
          href="https://linkedin.com/in/janedoe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
