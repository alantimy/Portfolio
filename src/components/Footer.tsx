export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold tracking-tighter uppercase">
            Alan<span className="text-white/40">Timy</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium tracking-widest uppercase text-white/60">
            <a href="https://github.com/alantimy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/alan-timy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.credly.com/users/alan-timy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Credly</a>
            <a href="https://drive.google.com/file/d/1yJaBMmONaCgRYgttrrRQKZW_pEVfhZ5L/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">CV</a>
          </div>
          
          <div className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Alan Timy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
