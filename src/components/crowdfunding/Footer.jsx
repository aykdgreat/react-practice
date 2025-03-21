export function Footer() {
  return (
    <footer className="font-semibold text-xl">
      (c) {new Date(Date.now()).getFullYear()} CrowdFunding. All rights
      reserved.
    </footer>
  );
}
