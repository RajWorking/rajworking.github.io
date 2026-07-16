export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
          <p>
            © {currentYear} Raj Maheshwari. All rights reserved.
          </p>
          <p>
            Last updated: July 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
