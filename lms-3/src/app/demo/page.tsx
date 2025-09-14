"use client";
import Link from "next/link";
import { ArrowLeft, BookOpen, Users, Award, Settings, BarChart3, Video, FileText } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { motion } from "framer-motion";

export default function DemoPage() {
  const demoFeatures = [
    {
      title: "Course Management",
      description: "Create and manage courses with rich content, videos, and attachments",
      icon: <BookOpen className="w-8 h-8" />,
      status: "Available in full version",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "User Management",
      description: "Handle student and teacher accounts with role-based permissions",
      icon: <Users className="w-8 h-8" />,
      status: "Available in full version",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Certificates",
      description: "Generate and verify completion certificates with unique URLs",
      icon: <Award className="w-8 h-8" />,
      status: "Available in full version",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Analytics & Progress",
      description: "Track student progress and course analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      status: "Available in full version",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Video Integration",
      description: "Mux video streaming with progress tracking",
      icon: <Video className="w-8 h-8" />,
      status: "Available in full version",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Content Editor",
      description: "Rich text editing with CKEditor for course content",
      icon: <FileText className="w-8 h-8" />,
      status: "Available in full version",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-gray-300">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="text-xl font-bold">YourLMS Demo</div>
          </div>
        </div>
      </nav>

      {/* Demo Content */}
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Demo Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Platform Demo
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore the key features of YourLMS. This demo showcases the platform's capabilities
              without requiring authentication or database connectivity.
            </p>
          </motion.div>

          {/* Demo Notice */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-lg p-6 mb-12"
          >
            <div className="flex items-center space-x-3">
              <Settings className="w-6 h-6 text-yellow-400" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-400">Demo Mode Active</h3>
                <p className="text-gray-300">
                  This is a demonstration version with authentication disabled. 
                  The full version includes Clerk authentication, PostgreSQL database, 
                  and all integrated services.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <MagicCard className="p-6 h-full">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <div className="text-sm text-green-400 font-medium">
                    ✓ {feature.status}
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </div>

          {/* Technology Stack Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Next.js 14", desc: "React Framework" },
                { name: "TypeScript", desc: "Type Safety" },
                { name: "Prisma", desc: "Database ORM" },
                { name: "Tailwind CSS", desc: "Styling" },
                { name: "Clerk", desc: "Authentication" },
                { name: "Mux", desc: "Video Streaming" },
                { name: "Razorpay", desc: "Payments" },
                { name: "React Email", desc: "Email Templates" }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + (0.1 * index) }}
                >
                  <MagicCard className="p-4 text-center">
                    <h4 className="font-semibold text-blue-400">{tech.name}</h4>
                    <p className="text-sm text-gray-400">{tech.desc}</p>
                  </MagicCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Contact us to set up the full version with your requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                Back to Home
              </Link>
              <a 
                href="mailto:contact@yourlms.com"
                className="px-8 py-3 border border-gray-600 rounded-lg font-medium hover:bg-gray-800 transition-all"
              >
                Contact for Full Setup
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}