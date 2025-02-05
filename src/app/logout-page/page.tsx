"use client";
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LogOut, Check } from 'lucide-react';

const LogoutPage = () => {
  useEffect(() => {
    // Simulate redirect after logout
    const timer = setTimeout(() => {
      // Redirect logic would go here
      console.log('Redirecting to login page...');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md text-center">
        <CardContent className="pt-6 space-y-6">
          <div className="mx-auto w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Successfully Logged Out</h2>
            <p className="text-gray-600">
              Thank you for using NetFotress. You have been safely logged out of your account.
            </p>
          </div>

          <div className="py-4">
            <p className="text-sm text-gray-500">Redirecting to login page...</p>
          </div>

          <div className="text-sm text-gray-600">
            <p>For your security, please close your browser window.</p>
            <p className="mt-2">
              Need help? Contact our support team at{' '}
              <span className="text-blue-600">support@NetFotress.com</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LogoutPage;
