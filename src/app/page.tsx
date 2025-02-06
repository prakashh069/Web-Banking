"use client"

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Webcam from "react-webcam";
import {
  Shield, 
  Building2, 
  Users, 
  Phone, 
  ChevronRight, 
  ArrowRight,
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  PhoneCall, 
  MapPin,
  Camera, 
  Key, 
  ChevronDown, 
  Award, 
  ArrowUpRight,
  CreditCard, 
  PiggyBank, 
  BarChart
} from 'lucide-react';
import CameraComponent from '@/components/camera';
import { useRouter } from 'next/navigation';

const LoginModal = ({ onClose }: { onClose: () => void }) =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  
  const handleSubmit = (e:any) => {
    e.preventDefault();
    // console.log("the username is ", username, "the password is ", password);
    if(username && password){
      router.push("/dashboard");
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md relative">
        <Button
          variant="ghost"
          className="absolute right-2 top-2"
          onClick={onClose}
        >
          ×
        </Button>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="traditional" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="traditional" className="space-x-2">
                <Key className="w-4 h-4" />
                <span>Traditional</span>
              </TabsTrigger>
              <TabsTrigger value="facial" className="space-x-2">
                <Camera className="w-4 h-4" />
                <span>Face Login</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="traditional">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  type="text"
                  placeholder="Username or Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-12"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12"
                />
                <div className="flex justify-between items-center">
                  <Button variant="link" className="text-sm">Forgot password?</Button>
                  <Button variant="link" className="text-sm">Register</Button>
                </div>
                <Button className="w-full h-12">Login</Button>
              </form>
            </TabsContent>

            <TabsContent value="facial">
              <div className="text-center space-y-6">
                <div className="border-2 border-dashed rounded-xl p-8 bg-gray-50">
<CameraComponent/>
                  <p className="mt-4 text-sm text-gray-600">
                    Click below to start facial recognition
                  </p>
                </div>
                <Button className="w-full h-12">Start Face Recognition</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

const BankingApp = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [activeFeature, setActiveFeature] =  useState<number | null>(null);
  const router = useRouter();
  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "State-of-the-art encryption and facial recognition technology",
      color: "bg-blue-500"
    },
    {
      icon: CreditCard,
      title: "Smart Cards",
      description: "Contactless payments and real-time transaction alerts",
      color: "bg-purple-500"
    },
    {
      icon: PiggyBank,
      title: "Smart Savings",
      description: "AI-powered savings goals and automatic investments",
      color: "bg-pink-500"
    },
    {
      icon: BarChart,
      title: "Wealth Management",
      description: "Professional portfolio management and insights",
      color: "bg-indigo-500"
    }
  ];

  const stats = [
    { value: "2M+", label: "Active Users" },
    { value: "$50B+", label: "Assets Managed" },
    { value: "99.99%", label: "Uptime" },
    { value: "24/7", label: "Support" }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-40 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-blue-600">NetFotress</h1>
              <div className="hidden md:flex space-x-6">
                <Button variant="ghost">Personal</Button>
                <Button variant="ghost">Business</Button>
                <Button variant="ghost">About</Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline"
                className="hidden md:flex"
                onClick={() => setShowLogin(true)}
              >
                Login
              </Button>
              <Button 
                className="hidden md:flex"
                onClick={() => router.push("/registration-page")}
              >
                Open Account
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <ChevronDown className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Banking for the
                  <span className="text-blue-600"> Digital Age</span>
                </h2>
                <p className="mt-6 text-xl text-gray-600">
                  Experience the future of banking with AI-powered insights, 
                  facial recognition security, and seamless digital transactions.
                </p>
              </div>
              <div className="flex space-x-4">
                <Button size="lg" className="h-14 px-8" onClick={() => setShowLogin(true)}>
                  Get Started <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8">
                  Learn More
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="/api/placeholder/600/600" 
                alt="Banking Interface" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <Award className="h-8 w-8 text-blue-600 mb-2" />
                <div className="font-semibold">Most Secure Bank</div>
                <div className="text-sm text-gray-600">2025 Award Winner</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Why Choose NetFotress?</h2>
            <p className="text-gray-600 mt-4">Experience banking excellence with our cutting-edge features</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="relative overflow-hidden transition-all duration-300 hover:shadow-xl"
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <CardContent className="p-6">
                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-full ${feature.color} opacity-10 transform translate-x-16 -translate-y-16`} />
                    <div className="relative">
                      <div className="rounded-full bg-gray-100 w-16 h-16 flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                      <Button 
                        variant="ghost" 
                        className="mt-4 p-0 text-blue-600 hover:text-blue-700"
                      >
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">NetFotress</h3>
              <p className="text-gray-400">
                Leading the future of digital banking with innovation and security.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <Button key={index} variant="ghost" size="icon" className="hover:text-blue-400">
                    <Icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Links</h4>
              <ul className="space-y-4">
                {['About Us', 'Careers', 'Support', 'Security'].map((item, index) => (
                  <li key={index}>
                    <Button variant="link" className="text-gray-400 hover:text-white p-0">
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-4">
                {['Personal Banking', 'Business Banking', 'Mobile Banking', 'Investments'].map((item, index) => (
                  <li key={index}>
                    <Button variant="link" className="text-gray-400 hover:text-white p-0">
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <PhoneCall className="h-5 w-5 mr-2" />
                  <span>1-800-NetFotress-BANK</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>support@NetFotress.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>123 Banking St, NY 10001</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400">© 2025 NetFotress. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Button variant="link" className="text-sm text-gray-400 hover:text-white">Privacy</Button>
                <Button variant="link" className="text-sm text-gray-400 hover:text-white">Terms</Button>
                <Button variant="link" className="text-sm text-gray-400 hover:text-white">Cookies</Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BankingApp;
