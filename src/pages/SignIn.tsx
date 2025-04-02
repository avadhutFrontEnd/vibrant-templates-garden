
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SignInForm from '../components/SignInForm';

const SignIn: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <SignInForm />
          
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-inpods-blue hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
