'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/chat');
  };

  return (
    <main className="bg-light min-vh-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-5">
        <div className="container">
          <div className="row min-vh-75 align-items-center text-center">
            <div className="col-lg-8 mx-auto">
              <h1 className="display-3 fw-bold mb-4 text-gradient">
                Chat Smarter with InfoMate
              </h1>
              <p className="lead mb-5 text-dark fs-4">
                Experience the next generation of AI conversation. Get accurate information, creative ideas, and helpful assistance instantly.
              </p>
              <button 
                onClick={handleGetStarted}
                className="btn btn-primary btn-lg px-5 py-3 fw-semibold"
              >
                Try InfoMate for free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 border rounded-3 h-100 shadow-sm">
                <h3 className="h5 mb-3 text-primary">Knowledge Access</h3>
                <p className="text-dark mb-0">Get instant, accurate information on any topic with our advanced AI system.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded-3 h-100 shadow-sm">
                <h3 className="h5 mb-3 text-primary">Interactive Components</h3>
                <p className="text-dark mb-0">Get clear and detailed weather updates with a user-friendly interactive interface and special UI components.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded-3 h-100 shadow-sm">
                <h3 className="h5 mb-3 text-primary">Natural Conversations</h3>
                <p className="text-dark mb-0">Engage in fluid, context-aware discussions that feel natural and intuitive.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Examples of What InfoMate Can Do</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">Answer Questions</h5>
                  <p className="card-text text-dark">"Explain quantum computing in simple terms"</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">Write Content</h5>
                  <p className="card-text text-dark">"Write a creative story about space exploration"</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">Analyze Data</h5>
                  <p className="card-text text-dark">"Help me understand these weather patterns"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}