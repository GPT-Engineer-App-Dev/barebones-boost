import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">My Application</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow p-4">
        <h2 className="text-xl font-semibold mb-4">Welcome to My Application</h2>
        <p className="mb-4">This is a bare-bones application that you can modify and build upon.</p>
        <Button>Get Started</Button>
      </main>

      <footer className="bg-secondary text-secondary-foreground p-4 text-center">
        <p>&copy; 2024 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
