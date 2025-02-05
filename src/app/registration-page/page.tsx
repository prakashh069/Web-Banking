"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Upload, ArrowLeft, Shield } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Webcam from "react-webcam";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [showCamera, setShowCamera] = useState(false);
  const webcamRef = useRef(null);

  const handleCapture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log("Captured Image: ", imageSrc);
      setShowCamera(false);
      alert("Photo captured successfully!");
    }
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registration data:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-6 py-12">
        <Button
          variant="ghost"
          onClick={() => (window.location.href = "/")}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Button>

        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center space-y-4">
              <Shield className="w-12 h-12 mx-auto text-blue-600" />
              <CardTitle className="text-3xl">Create Your Account</CardTitle>
              <p className="text-gray-600">Join NetFotress and experience the future of banking</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="h-12" />
                  <Input placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="h-12" />
                </div>
                <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="h-12" />
                <Input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="h-12" />
                <Input placeholder="Address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="h-12" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="h-12" />
                  <Input type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} className="h-12" />
                </div>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 bg-gray-50 text-center">
                  {showCamera ? (
                    <div className="space-y-4">
                      <Webcam ref={webcamRef} screenshotFormat="image/jpeg" className="w-full h-[300px] rounded-lg" />
                      <div className="flex gap-2">
                        <Button onClick={handleCapture} className="w-full">Capture Photo</Button>
                        <Button onClick={() => setShowCamera(false)} variant="outline" className="w-full">Cancel</Button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Camera className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                      <p className="text-sm text-gray-600 mb-4">Take a photo for facial recognition login</p>
                      <Button onClick={() => setShowCamera(true)} variant="outline" className="mx-auto">
                        <Camera className="w-4 h-4 mr-2" /> Start Camera
                      </Button>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm text-gray-600">I agree to the Terms and Conditions and Privacy Policy</label>
                </div>
                <Button type="submit" className="w-full h-12">Create Account</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;