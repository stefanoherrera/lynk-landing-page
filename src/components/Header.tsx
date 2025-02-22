import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Changed from darkMode to isDarkMode

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/a716f794-33b0-43ce-8afd-d4f019db039b.png" 
                alt="Startup Launchpad Logo" 
                className="w-8 h-8 rounded-full"
              />
              <span className="text-lg sm:text-xl font-semibold text-foreground">
                Startup Launchpad
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-foreground hover:text-primary transition-colors"
            >
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex space-x-8">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Plans
            </button>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                Pricing
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


