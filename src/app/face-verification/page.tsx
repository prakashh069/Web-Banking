"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, RefreshCw, Check } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const FaceVerification = () => {
  const [verificationStep, setVerificationStep] = useState('initial'); // initial, scanning, complete
  const [progress, setProgress] = useState(0);

  const startVerification = () => {
    setVerificationStep('scanning');
    // Simulate progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setVerificationStep('complete');
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Face Verification</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Camera View / Status */}
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
              {verificationStep === 'initial' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-gray-400" />
                </div>
              )}
              
              {verificationStep === 'scanning' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <RefreshCw className="w-16 h-16 text-blue-600 animate-spin" />
                  <Progress value={progress} className="w-2/3 mt-4" />
                  <p className="text-sm text-gray-600 mt-2">Please keep your face centered</p>
                </div>
              )}
              
              {verificationStep === 'complete' && (
                <div className="absolute inset-0 flex items-center justify-center bg-green-50">
                  <Check className="w-16 h-16 text-green-600" />
                </div>
              )}
            </div>

            {/* Instructions */}
            <div className="text-center space-y-4">
              <h3 className="font-medium">
                {verificationStep === 'initial' && "Ready to Verify"}
                {verificationStep === 'scanning' && "Verifying..."}
                {verificationStep === 'complete' && "Verification Complete"}
              </h3>
              <p className="text-sm text-gray-600">
                {verificationStep === 'initial' && "Position your face within the frame and ensure good lighting"}
                {verificationStep === 'scanning' && "Please maintain a neutral expression"}
                {verificationStep === 'complete' && "You will be redirected to your dashboard"}
              </p>
            </div>

            {/* Action Buttons */}
            {verificationStep === 'initial' && (
              <Button onClick={startVerification} className="w-full">
                Start Verification
              </Button>
            )}
            
            {verificationStep === 'complete' && (
              <Button className="w-full">
                Continue to Dashboard
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FaceVerification;
