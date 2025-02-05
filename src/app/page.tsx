import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Building2, Users, Phone } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Welcome to NetFotress</h1>
            <p className="text-xl mb-8">Experience secure, modern banking with cutting-edge facial recognition technology.</p>
            <div className="space-x-4">
              <Button variant="secondary" size="lg">Login</Button>
              <Button variant="outline" size="lg">Open Account</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6">
            <CardContent className="space-y-4 pt-4">
              <Shield className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-semibold">Secure Banking</h3>
              <p className="text-gray-600">Advanced security with facial recognition and encryption.</p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="space-y-4 pt-4">
              <Building2 className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-semibold">24/7 Access</h3>
              <p className="text-gray-600">Bank from anywhere, anytime with our digital services.</p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="space-y-4 pt-4">
              <Users className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-semibold">Easy Transfers</h3>
              <p className="text-gray-600">Send money instantly to friends and family.</p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="space-y-4 pt-4">
              <Phone className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-semibold">Mobile Banking</h3>
              <p className="text-gray-600">Full banking capabilities on your mobile device.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Button variant="link" className="text-lg">About Us</Button>
          <Button variant="link" className="text-lg">Contact Us</Button>
          <Button variant="link" className="text-lg">Help Center</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
