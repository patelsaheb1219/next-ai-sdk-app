'use client';
import Navbar from '@/components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

export default function Features() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div className="row justify-content-center">
      <div className="bg-light min-vh-100">
        <Navbar />
        <div className="container py-5">

          <h1 className="text-center mb-5">Features</h1>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Smart Conversations</h5>
                  <p className="card-text">Engage in intelligent conversations on any topic with our advanced AI model.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Interactive Components</h5>
                  <p className="card-text">Experience rich, interactive components for weather updates and Wikipedia-style information.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">24/7 Availability</h5>
                  <p className="card-text">Access InfoMate anytime, anywhere for instant information and assistance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}