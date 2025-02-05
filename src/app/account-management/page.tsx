"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Camera, Shield, User, Lock, ArrowLeft } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

const AccountManagement = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '123 Main St'
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactor: false,
    loginNotifications: false
  });

  const handleSavePersonalInfo = async () => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically make an API call to update the user's information
      // await updateUserProfile(personalInfo);
      
      toast.success('Personal information updated successfully');
    } catch (error) {
      toast.error('Failed to update personal information');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateSecurity = async (setting: 'twoFactor' | 'loginNotifications') => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setSecuritySettings(prev => ({
        ...prev,
        [setting]: !prev[setting]
      }));
      
      toast.success('Security settings updated');
    } catch (error) {
      toast.error('Failed to update security settings');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFaceIdUpdate = async () => {
    // Redirect to dedicated face verification page
    router.push('/face-verification');
  };

  const handleChangePassword = () => {
    // Add your password change logic here
    // Could open a modal or redirect to a dedicated password change page
    toast.info('Password change functionality coming soon');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push('/dashboard')}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">Account Settings</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Manage Your Account</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="personal">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="personal">
                  <User className="w-4 h-4 mr-2" />
                  Personal Info
                </TabsTrigger>
                <TabsTrigger value="security">
                  <Shield className="w-4 h-4 mr-2" />
                  Security
                </TabsTrigger>
                <TabsTrigger value="face">
                  <Camera className="w-4 h-4 mr-2" />
                  Face ID
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>First Name</Label>
                    <Input
                      value={personalInfo.firstName}
                      onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})}
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Last Name</Label>
                    <Input
                      value={personalInfo.lastName}
                      onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})}
                      disabled={isLoading}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={personalInfo.email}
                    onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                    disabled={isLoading}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input
                    type="tel"
                    value={personalInfo.phone}
                    onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                    disabled={isLoading}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Address</Label>
                  <Input
                    value={personalInfo.address}
                    onChange={(e) => setPersonalInfo({...personalInfo, address: e.target.value})}
                    disabled={isLoading}
                  />
                </div>
                
                <Button 
                  onClick={handleSavePersonalInfo}
                  disabled={isLoading}
                >
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </Button>
              </TabsContent>

              <TabsContent value="security" className="space-y-6 mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">Two-Factor Authentication</h3>
                          <p className="text-sm text-gray-500">Add an extra layer of security</p>
                        </div>
                        <Switch
                          checked={securitySettings.twoFactor}
                          onCheckedChange={() => handleUpdateSecurity('twoFactor')}
                          disabled={isLoading}
                        />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">Login Notifications</h3>
                          <p className="text-sm text-gray-500">Get notified of new logins</p>
                        </div>
                        <Switch
                          checked={securitySettings.loginNotifications}
                          onCheckedChange={() => handleUpdateSecurity('loginNotifications')}
                          disabled={isLoading}
                        />
                      </div>

                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={handleChangePassword}
                        disabled={isLoading}
                      >
                        <Lock className="w-4 h-4 mr-2" />
                        Change Password
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="face" className="space-y-6 mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center space-y-6">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12">
                        <Camera className="w-16 h-16 mx-auto text-gray-400" />
                        <p className="mt-4 text-sm text-gray-600">
                          Update your facial recognition data
                        </p>
                      </div>
                      <Button 
                        className="w-full"
                        onClick={handleFaceIdUpdate}
                        disabled={isLoading}
                      >
                        Update Face ID
                      </Button>
                      <Alert>
                        <AlertDescription>
                          Your facial data is encrypted and stored securely. It's only used for authentication purposes.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AccountManagement;