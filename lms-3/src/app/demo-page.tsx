"use client";
import GridPattern from "@/components/GridPattern";
import Link from "next/link";
import SparklesText from "@/components/magicui/sparkles-text";
import { MagicCard } from "@/components/magicui/magic-card";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  const features = [
    {
      title: "Flexible User Roles",
      description:
        "Distinct student and teacher roles with tailored access and capabilities.",
      icon: "👥",
    },
    {
      title: "Comprehensive Student Features",
      description:
        "Enroll in courses, earn certificates, and showcase achievements with public profiles.",
      icon: "🎓",
    },
    {
      title: "Powerful Course Creation Tools",
      description:
        "Teachers can create, plan, and publish courses with videos, attachments, and pricing options.",
      icon: "🎨",
    },
    {
      title: "Automated Communication",
      description:
        "Automatic welcome, course enrollment, and certificate emails to keep users informed.",
      icon: "📧",
    },
    {
      title: "Flexible Course Pricing",
      description:
        "Offer free courses or set custom prices with integrated Razorpay payment processing.",
      icon: "💰",
    },
    {
      title: "Verifiable Certificates",
      description:
        "Generate and verify course completion certificates with unique URLs.",
      icon: "🏆",
    },
  ];

  const text = `Empower educators and learners with our innovative learning management system. Experience the future of education with YourLMS's cutting-edge platform.`;

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white text-2xl font-bold">
                YourLMS
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="#features"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Features
                </Link>
                <Link
                  href="#demo"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center">
        <GridPattern>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center">
              <p className="font-display text-5xl font-bold tracking-[-0.02em] text-white sm:text-6xl md:text-7xl mb-6 text-center max-w-4xl">
                <SparklesText
                  text="YourLMS"
                  className="inline-block mr-2 text-white"
                />
                <br />
                Redefining Education for the Connected World
              </p>
            </div>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              <TextGenerateEffect words={text} />
            </p>
            <div className="flex justify-center mt-8">
              <div className="z-10 flex h-24 items-center justify-center">
                <div
                  className={cn(
                    "group rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer border-white/5 bg-neutral-900 hover:bg-neutral-800"
                  )}
                >
                  <AnimatedShinyText className="inline-flex items-center justify-center px-6 py-3 transition ease-out hover:duration-300 hover:text-neutral-400">
                    <span>✨ Explore the Platform (Demo Mode)</span>
                    <ArrowRightIcon className="ml-2 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </div>
              </div>
            </div>
          </div>
        </GridPattern>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-xl text-gray-400 mb-12">
              Comprehensive tools for modern learning management
            </p>
          </div>
          <BentoGrid className="max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <BentoGridItem
                key={index}
                title={feature.title}
                description={feature.description}
                header={
                  <div className="text-4xl mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                }
                className="md:col-span-1"
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Built with Modern Technology</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <MagicCard className="p-6">
              <h3 className="text-xl font-semibold mb-2">Next.js 14</h3>
              <p className="text-gray-400">Full-stack React framework</p>
            </MagicCard>
            <MagicCard className="p-6">
              <h3 className="text-xl font-semibold mb-2">TypeScript</h3>
              <p className="text-gray-400">Type-safe development</p>
            </MagicCard>
            <MagicCard className="p-6">
              <h3 className="text-xl font-semibold mb-2">Prisma + PostgreSQL</h3>
              <p className="text-gray-400">Modern database stack</p>
            </MagicCard>
            <MagicCard className="p-6">
              <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
              <p className="text-gray-400">Utility-first styling</p>
            </MagicCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-400">
        <p>&copy; 2025 YourLMS. Built for educational excellence.</p>
      </footer>
    </div>
  );
}