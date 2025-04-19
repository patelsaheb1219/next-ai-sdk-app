'use client';
import Navbar from '@/components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div className="row justify-content-center">
      <div className="bg-light min-vh-100">
        <Navbar />
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="text-center mb-4">About InfoMate</h1>
              <div className="card">
                <div className="card-body">
                  <p className="lead">
                    InfoMate is an advanced AI-powered chat application designed to make information access intuitive and engaging.
                  </p>
                  <p>
                    Built with cutting-edge technology, InfoMate combines the power of artificial intelligence with a user-friendly interface
                    to deliver a seamless chat experience. Whether you're looking for quick facts, detailed explanations, or just casual
                    conversation, InfoMate is your reliable companion.
                  </p>
                  <p>
                    Our mission is to make knowledge accessible and interactive, transforming the way people engage with information
                    through natural conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}