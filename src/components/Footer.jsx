export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">© {new Date().getFullYear()} HexoClone Studio. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-neutral-600">
          <a href="#" className="hover:text-black">Privacy</a>
          <a href="#" className="hover:text-black">Terms</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </div>
      </div>
    </footer>
  );
}
