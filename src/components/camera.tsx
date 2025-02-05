"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Upload, ArrowLeft, Shield } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Webcam from "react-webcam";

const CameraComponent = () => {
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
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                
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
              </form>
            </CardContent>
          </Card>
        </div>
  );
};

export default CameraComponent;