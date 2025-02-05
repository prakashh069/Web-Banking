"use client";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Camera, Key } from "lucide-react";

const LoginModal = ({ onClose }: { onClose: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showCamera, setShowCamera] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setShowCamera(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Could not access camera. Please check permissions.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject instanceof MediaStream) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      setShowCamera(false);
    }
  };

  const handleCapture = () => {
    stopCamera();
    alert("Face captured! Proceeding with facial recognition login.");
  };

  const handleRegistration = () => {
    window.location.href = "/register";
    onClose();
  };

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
              <form className="space-y-4">
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
                  <Button variant="link" className="text-sm">
                    Forgot password?
                  </Button>
                  <Button
                    variant="link"
                    className="text-sm"
                    onClick={handleRegistration}
                  >
                    Register
                  </Button>
                </div>
                <Button className="w-full h-12">Login</Button>
              </form>
            </TabsContent>

            <TabsContent value="facial">
              <div className="text-center space-y-6">
                {showCamera ? (
                  <div className="space-y-4">
                    <video
                      ref={videoRef}
                      autoPlay
                      className="w-full rounded-xl border-2 border-dashed border-gray-200 bg-gray-50"
                    />
                    <div className="flex gap-2">
                      <Button onClick={handleCapture} className="w-full h-12">
                        Capture and Login
                      </Button>
                      <Button
                        onClick={stopCamera}
                        variant="outline"
                        className="w-full h-12"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="border-2 border-dashed rounded-xl p-8 bg-gray-50">
                      <Camera className="w-16 h-16 mx-auto text-gray-400" />
                      <p className="mt-4 text-sm text-gray-600">
                        Click below to start facial recognition
                      </p>
                    </div>
                    <Button onClick={startCamera} className="w-full h-12">
                      Start Face Recognition
                    </Button>
                  </>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginModal;
a