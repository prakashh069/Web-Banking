import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ArrowUpRight, ArrowDownRight, CreditCard, 
  Receipt, Bell, Settings, ChevronRight,
  Wallet, PieChart, TrendingUp, Clock,
  DollarSign, Sparkles, ShieldCheck, Globe,
  CircleUserRound, Search, Menu, X,
  Briefcase, Gift, Smartphone, Lock
} from 'lucide-react';

const Dashboard = () => {
  const recentTransactions = [
    { id: 1, type: 'credit', amount: 5500, description: 'Investment Return', date: '2025-01-10', category: 'Investment', status: 'Completed', icon: Briefcase },
    { id: 2, type: 'debit', amount: 850, description: 'Apple Premium Store', date: '2025-01-09', category: 'Shopping', status: 'Processing', icon: Gift },
    { id: 3, type: 'debit', amount: 120, description: 'Netflix Subscription', date: '2025-01-08', category: 'Entertainment', status: 'Completed', icon: Receipt }
  ];

  const stats = [
    { 
      title: 'Investment Portfolio', 
      value: '$142,560', 
      icon: Briefcase, 
      trend: '+15.2%',
      positive: true,
      color: 'bg-blue-500'
    },
    { 
      title: 'Savings Growth', 
      value: '$58,800', 
      icon: TrendingUp, 
      trend: '+8.2%',
      positive: true,
      color: 'bg-purple-500'
    },
    { 
      title: 'Credit Utilization', 
      value: '22%', 
      icon: CreditCard, 
      trend: '-3.1%',
      positive: true,
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      {/* Navigation */}
      <div className="border-b bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gradient-to-tr from-blue-500 via-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Lock className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  NetFotress
                </span>
              </div>
              <div className="hidden lg:flex space-x-1">
                {['Overview', 'Investments', 'Planning', 'Markets', 'Insights'].map((item) => (
                  <Button key={item} variant="ghost" className="text-gray-600 hover:bg-blue-50 rounded-full">
                    {item}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="hidden sm:flex items-center bg-gray-50 rounded-full px-4 py-1.5">
                <Search className="h-4 w-4 text-gray-400 mr-2" />
                <input 
                  className="bg-transparent border-none focus:outline-none text-sm text-gray-600 w-40" 
                  placeholder="Search transactions..."
                />
              </div>
              <div className="flex items-center space-x-1">
                {[Bell, Smartphone, CircleUserRound].map((Icon, i) => (
                  <Button key={i} variant="ghost" size="icon" className="rounded-full hover:bg-blue-50">
                    <Icon className="h-5 w-5 text-gray-600" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Main Card */}
        <Card className="border-none shadow-lg bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white overflow-hidden">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-sm font-medium tracking-wider">ELITE MEMBERSHIP</span>
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Total Portfolio Value</p>
                  <h3 className="text-5xl font-bold mt-2">$242,560.00</h3>
                  <p className="text-green-400 text-sm mt-2 flex items-center">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    +18.2% from last month
                  </p>
                </div>
              </div>
              
              <div className="mt-6 md:mt-0 flex items-center space-x-4">
                <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-0">
                  <ArrowUpRight className="h-4 w-4 mr-2" /> Send Money
                </Button>
                <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-0">
                  <ArrowDownRight className="h-4 w-4 mr-2" /> Request
                </Button>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between pt-6 border-t border-white/10">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-sm text-blue-100">Monthly Growth</p>
                  <p className="text-2xl font-bold mt-1">+12.5%</p>
                </div>
                <div>
                  <p className="text-sm text-blue-100">Active Investments</p>
                  <p className="text-2xl font-bold mt-1">8</p>
                </div>
                <div>
                  <p className="text-sm text-blue-100">Portfolio Score</p>
                  <p className="text-2xl font-bold mt-1">A+</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 rounded-lg ${stat.color} bg-opacity-10`}>
                        <stat.icon className={`h-5 w-5 ${stat.color} text-white`} />
                      </div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    </div>
                    <p className="text-2xl font-bold mt-2 text-gray-900">{stat.value}</p>
                    <p className="text-sm mt-1 text-green-500">
                      {stat.trend} from last month
                    </p>
                  </div>
                  <div className={`h-12 w-12 rounded-full ${stat.color} bg-opacity-10 flex items-center justify-center`}>
                    <TrendingUp className={`h-6 w-6 ${stat.color} text-white`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: ArrowUpRight, label: 'Send Money', color: 'bg-blue-500' },
            { icon: ArrowDownRight, label: 'Request', color: 'bg-purple-500' },
            { icon: Receipt, label: 'Pay Bills', color: 'bg-indigo-500' },
            { icon: Gift, label: 'Rewards', color: 'bg-blue-500' }
          ].map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 border-2 hover:border-blue-200 flex flex-col items-center space-y-2"
            >
              <div className={`p-3 rounded-xl ${action.color} bg-opacity-10`}>
                <action.icon className={`h-6 w-6 ${action.color} text-white`} />
              </div>
              <span className="font-medium">{action.label}</span>
            </Button>
          ))}
        </div>

        {/* Recent Transactions */}
        <Card className="border-none shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between p-6 border-b">
            <CardTitle className="text-xl font-bold text-gray-900">Recent Transactions</CardTitle>
            <Button variant="outline" className="border-blue-200 hover:border-purple-200">
              View All <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {recentTransactions.map((transaction, index) => (
                <div 
                  key={transaction.id} 
                  className="flex items-center justify-between p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:via-purple-50 hover:to-indigo-50 rounded-xl transition-all duration-200"
                >
                  <div className="flex items-center">
                    <div className={`p-3 rounded-xl mr-4 ${
                      index % 3 === 0 ? 'bg-blue-500' : 
                      index % 3 === 1 ? 'bg-purple-500' : 
                      'bg-indigo-500'
                    } bg-opacity-10`}>
                      <transaction.icon className={`h-6 w-6 ${
                        index % 3 === 0 ? 'text-blue-500' : 
                        index % 3 === 1 ? 'text-purple-500' : 
                        'text-indigo-500'
                      }`} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{transaction.description}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-sm text-gray-500">{transaction.category}</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-500">{transaction.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      transaction.type === 'credit' ? 'text-blue-500' : 'text-purple-500'
                    }`}>
                      {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toLocaleString()}
                    </p>
                    <p className={`text-sm ${
                      transaction.status === 'Completed' ? 'text-indigo-500' : 'text-blue-500'
                    }`}>
                      {transaction.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;