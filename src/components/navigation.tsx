// "use client"
// import { useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Button } from '@/components/ui/button';
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
// } from '@/components/ui/sheet';
// import {
//   Home,
//   User,
//   Camera,
//   ArrowLeftRight,
//   Menu,
//   LogOut,
//   LogIn
// } from 'lucide-react';

// const Navigation = () => {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   // Replace with your actual auth check
//   const isAuthenticated = true;

//   const routes = [
//     {
//       href: '/home-page',
//       label: 'Home',
//       icon: Home,
//       protected: false
//     },
//     {
//       href: '/account-management',
//       label: 'Account',
//       icon: User,
//       protected: true
//     },
//     {
//       href: '/face-verification',
//       label: 'Face ID',
//       icon: Camera,
//       protected: true
//     },
//     {
//       href: '/funds-transfer',
//       label: 'Transfer',
//       icon: ArrowLeftRight,
//       protected: true
//     }
//   ];

//   const handleLogout = () => {
//     // Add your logout logic here
//     console.log('Logging out...');
//   };

//   return (
//     <nav className="border-b bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/home-page" className="text-xl font-bold">
//               BankApp
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex md:items-center md:space-x-4">
//             {routes.map((route) => {
//               if (route.protected && !isAuthenticated) return null;
              
//               const Icon = route.icon;
//               const isActive = pathname === route.href;
              
//               return (
//                 <Link 
//                   key={route.href} 
//                   href={route.href}
//                 >
//                   <Button 
//                     variant={isActive ? "default" : "ghost"}
//                     className="flex items-center gap-2"
//                   >
//                     <Icon className="h-4 w-4" />
//                     {route.label}
//                   </Button>
//                 </Link>
//               );
//             })}

//             {isAuthenticated ? (
//               <Button 
//                 variant="destructive" 
//                 onClick={handleLogout}
//                 className="flex items-center gap-2"
//               >
//                 <LogOut className="h-4 w-4" />
//                 Logout
//               </Button>
//             ) : (
//               <Link href="/login-page">
//                 <Button variant="default" className="flex items-center gap-2">
//                   <LogIn className="h-4 w-4" />
//                   Login
//                 </Button>
//               </Link>
//             )}
//           </div>

//           {/* Mobile Navigation Trigger */}
//           <div className="md:hidden">
//             <Sheet open={isOpen} onOpenChange={setIsOpen}>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-6 w-6" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-64">
//                 <div className="flex flex-col space-y-4 mt-6">
//                   {routes.map((route) => {
//                     if (route.protected && !isAuthenticated) return null;
                    
//                     const Icon = route.icon;
//                     const isActive = pathname === route.href;
                    
//                     return (
//                       <Link 
//                         key={route.href} 
//                         href={route.href}
//                         onClick={() => setIsOpen(false)}
//                       >
//                         <Button 
//                           variant={isActive ? "default" : "ghost"}
//                           className="w-full justify-start"
//                         >
//                           <Icon className="h-4 w-4 mr-2" />
//                           {route.label}
//                         </Button>
//                       </Link>
//                     );
//                   })}

//                   {isAuthenticated ? (
//                     <Button 
//                       variant="destructive" 
//                       onClick={handleLogout}
//                       className="w-full justify-start"
//                     >
//                       <LogOut className="h-4 w-4 mr-2" />
//                       Logout
//                     </Button>
//                   ) : (
//                     <Link 
//                       href="/login-page"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       <Button 
//                         variant="default"
//                         className="w-full justify-start"
//                       >
//                         <LogIn className="h-4 w-4 mr-2" />
//                         Login
//                       </Button>
//                     </Link>
//                   )}
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;



"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Home,
  User,
  Camera,
  ArrowLeftRight,
  Menu,
  LogOut,
  LogIn,
  Bell
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Navigation = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = true;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const routes = [
    {
      href: '/home-page',
      label: 'Home',
      icon: Home,
      protected: false
    },
    {
      href: '/account-management',
      label: 'Account',
      icon: User,
      protected: true
    },
    {
      href: '/face-verification',
      label: 'Face ID',
      icon: Camera,
      protected: true
    },
    {
      href: '/funds-transfer',
      label: 'Transfer',
      icon: ArrowLeftRight,
      protected: true
    }
  ];

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
  };

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/home-page" 
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                BankApp
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {routes.map((route) => {
              if (route.protected && !isAuthenticated) return null;
              
              const Icon = route.icon;
              const isActive = pathname === route.href;
              
              return (
                <Link 
                  key={route.href} 
                  href={route.href}
                >
                  <Button 
                    variant={isActive ? "default" : "ghost"}
                    className={`flex items-center gap-2 transition-all duration-300 ${
                      isActive ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {route.label}
                  </Button>
                </Link>
              );
            })}

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-blue-600">
                        2
                      </Badge>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex flex-col items-start">
                      <span className="font-medium">New login detected</span>
                      <span className="text-sm text-gray-500">2 minutes ago</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-col items-start">
                      <span className="font-medium">Transfer successful</span>
                      <span className="text-sm text-gray-500">1 hour ago</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.jpg" alt="@user" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      className="text-red-600 focus:text-red-600"
                      onClick={handleLogout}
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link href="/login-page">
                <Button 
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  {isAuthenticated && (
                    <div className="flex items-center space-x-4 px-2">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.jpg" alt="@user" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">John Doe</h3>
                        <p className="text-sm text-gray-500">john.doe@example.com</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    {routes.map((route) => {
                      if (route.protected && !isAuthenticated) return null;
                      
                      const Icon = route.icon;
                      const isActive = pathname === route.href;
                      
                      return (
                        <Link 
                          key={route.href} 
                          href={route.href}
                          onClick={() => setIsOpen(false)}
                        >
                          <Button 
                            variant={isActive ? "default" : "ghost"}
                            className={`w-full justify-start ${
                              isActive ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' : ''
                            }`}
                          >
                            <Icon className="h-4 w-4 mr-2" />
                            {route.label}
                          </Button>
                        </Link>
                      );
                    })}
                  </div>

                  {isAuthenticated ? (
                    <Button 
                      variant="destructive" 
                      onClick={handleLogout}
                      className="w-full justify-start mt-4"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  ) : (
                    <Link 
                      href="/login-page"
                      onClick={() => setIsOpen(false)}
                      className="mt-4"
                    >
                      <Button 
                        variant="default"
                        className="w-full justify-start bg-blue-600 hover:bg-blue-700"
                      >
                        <LogIn className="h-4 w-4 mr-2" />
                        Login
                      </Button>
                    </Link>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;