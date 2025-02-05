"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Camera, Smartphone, Building } from 'lucide-react';

const FundsTransfer = () => {
  const [transferType, setTransferType] = useState('account');
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleTransfer = (e:any) => {
    e.preventDefault();
    // Handle transfer logic
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Transfer Money</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="account" onValueChange={setTransferType}>
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="account">
                  <Building className="w-4 h-4 mr-2" />
                  Account
                </TabsTrigger>
                <TabsTrigger value="upi">
                  <Smartphone className="w-4 h-4 mr-2" />
                  UPI
                </TabsTrigger>
                <TabsTrigger value="phone">
                  <Camera className="w-4 h-4 mr-2" />
                  Phone
                </TabsTrigger>
              </TabsList>

              <form onSubmit={handleTransfer} className="space-y-6">
                <TabsContent value="account">
                  <Input 
                    placeholder="Recipient Account Number"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                  />
                </TabsContent>

                <TabsContent value="upi">
                  <Input 
                    placeholder="UPI ID"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                  />
                </TabsContent>

                <TabsContent value="phone">
                  <Input 
                    placeholder="Phone Number"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                  />
                </TabsContent>

                <Input
                  type="number"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />

                <Input
                  placeholder="Description (Optional)"
                />

                <Alert>
                  <AlertDescription>
                    Verify recipient details carefully. Transactions cannot be reversed once completed.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <Button type="submit" className="w-full">
                    Continue to Verify
                  </Button>
                  <Button type="button" variant="outline" className="w-full">
                    Save as Beneficiary
                  </Button>
                </div>
              </form>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FundsTransfer;
