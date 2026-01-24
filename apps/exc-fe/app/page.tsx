import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pencil, Share2, Users2, Sparkles, Github, Twitter, Zap, Shield, Layers, ArrowRight, Play, MousePointer2, Palette, Cloud, Lock } from "lucide-react";
import Link from "next/link";

function App() {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "2s" }} />
      
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
        <div className="relative">
          {/* Navbar glow effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 rounded-2xl blur-sm" />
          
          <div className="relative glass-strong rounded-2xl border border-white/10 px-4 lg:px-6">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300" />
                  <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 via-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
                    <Pencil className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">CanvasSync</span>
                  <span className="text-[10px] text-zinc-500 font-medium tracking-wider uppercase hidden sm:block">Where Ideas Flow</span>
                </div>
              </div>

              {/* Center Navigation */}
              <div className="hidden md:flex items-center">
                <div className="flex items-center bg-zinc-900/50 rounded-full p-1 border border-white/5">
                  <a href="#features" className="px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200">
                    Features
                  </a>
                  <a href="#how-it-works" className="px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200">
                    How it works
                  </a>
                  <a href="#pricing" className="px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200">
                    Pricing
                  </a>
                  <a href="#templates" className="px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200">
                    Templates
                  </a>
                </div>
              </div>

              {/* Right side actions */}
              <div className="flex items-center gap-2">
                <Link href="/signin" className="hidden sm:block">
                  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
                    Sign in
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button variant="primary" size="sm" className="relative group overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-36 pb-20 min-h-screen flex items-center">
        {/* Orbital decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none hidden lg:block">
          <div className="absolute inset-0 rounded-full border border-zinc-800/50" />
          <div className="absolute inset-8 rounded-full border border-zinc-800/30" />
          <div className="absolute inset-16 rounded-full border border-zinc-800/20" />
          <div className="animate-orbit">
            <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-sm font-medium mb-8 animate-reveal">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-zinc-300">Now with AI-powered drawing assistance</span>
              <ArrowRight className="h-4 w-4 text-purple-400" />
            </div>
            
            {/* Main heading */}
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight animate-reveal" style={{ animationDelay: "0.1s" }}>
              <span className="text-white">Where ideas</span>
              <span className="gradient-text block mt-2">come alive</span>
            </h1>
            
            <p className="mx-auto mt-8 max-w-2xl text-xl text-zinc-400 animate-reveal" style={{ animationDelay: "0.2s" }}>
              The infinite canvas for teams. Sketch, diagram, and collaborate in real-time with the most intuitive whiteboard ever built.
            </p>
            
            {/* CTA buttons */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal" style={{ animationDelay: "0.3s" }}>
              <Link href="/signup">
                <Button variant="primary" size="xl" className="group">
                  Start Creating Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="outline" size="xl" className="group">
                <Play className="mr-2 h-5 w-5 text-purple-400" />
                Watch Demo
              </Button>
            </div>

            <p className="mt-6 text-sm text-zinc-500 animate-reveal" style={{ animationDelay: "0.4s" }}>
              No credit card required • Free forever for individuals
            </p>
          </div>

          {/* Hero visual */}
          <div className="mt-24 relative mx-auto max-w-6xl animate-reveal" style={{ animationDelay: "0.5s" }}>
            <div className="border-glow p-1">
              <div className="aspect-video rounded-[1.4rem] bg-zinc-900 overflow-hidden relative">
                {/* Grid background */}
                <div className="absolute inset-0 bg-grid opacity-50" />
                
                {/* Mock canvas content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Central icon */}
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center">
                      <Pencil className="h-12 w-12 text-purple-400" />
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-8 -right-12 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center animate-float">
                      <MousePointer2 className="h-8 w-8 text-cyan-400" />
                    </div>
                    <div className="absolute -bottom-6 -left-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center animate-float-delayed">
                      <Palette className="h-7 w-7 text-pink-400" />
                    </div>
                  </div>
                </div>

                {/* Cursor indicators */}
                <div className="absolute top-1/4 left-1/4 flex items-center gap-2 animate-float">
                  <div className="w-4 h-4 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded">Sarah</span>
                </div>
                <div className="absolute bottom-1/3 right-1/3 flex items-center gap-2 animate-float-delayed">
                  <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded">Alex</span>
                </div>
              </div>
            </div>

            {/* Floating feature cards */}
            <div className="absolute -left-4 top-1/4 glass rounded-xl p-4 animate-float hidden lg:flex items-center gap-3 border border-zinc-700/50">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Shield className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">End-to-end encrypted</p>
                <p className="text-xs text-zinc-500">Your data stays private</p>
              </div>
            </div>
            
            <div className="absolute -right-4 top-1/3 glass rounded-xl p-4 animate-float-delayed hidden lg:flex items-center gap-3 border border-zinc-700/50">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Users2 className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">50k+ creators</p>
                <p className="text-xs text-zinc-500">Join the community</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trusted by section */}
      <section className="py-20 border-y border-zinc-800/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-zinc-500 mb-10">Trusted by innovative teams worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {["Google", "Microsoft", "Stripe", "Vercel", "Netflix", "Spotify"].map((company, i) => (
              <span 
                key={company} 
                className="text-2xl font-bold text-zinc-700 hover:text-zinc-500 transition-colors cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">Features</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4">
              <span className="text-white">Everything you need to</span>
              <span className="gradient-text block mt-2">create and collaborate</span>
            </h2>
            <p className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto">
              Powerful features designed for modern teams who need to think visually
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Share2,
                title: "Real-time Collaboration",
                description: "Work together with your team in real-time. See cursors, changes, and comments instantly.",
                color: "from-blue-500 to-cyan-500",
                iconColor: "text-cyan-400"
              },
              {
                icon: Users2,
                title: "Multiplayer Editing",
                description: "Multiple users can edit the same canvas simultaneously. Perfect for remote teams.",
                color: "from-purple-500 to-pink-500",
                iconColor: "text-purple-400"
              },
              {
                icon: Sparkles,
                title: "AI-Powered Drawing",
                description: "Smart shape recognition and AI assistance helps you create perfect diagrams.",
                color: "from-pink-500 to-orange-500",
                iconColor: "text-pink-400"
              },
              {
                icon: Layers,
                title: "Infinite Canvas",
                description: "Never run out of space. Zoom, pan, and organize your ideas without limits.",
                color: "from-orange-500 to-yellow-500",
                iconColor: "text-orange-400"
              },
              {
                icon: Lock,
                title: "Private & Secure",
                description: "End-to-end encryption ensures your drawings remain completely private.",
                color: "from-green-500 to-emerald-500",
                iconColor: "text-green-400"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for performance. Smooth experience even with thousands of elements.",
                color: "from-yellow-500 to-orange-500",
                iconColor: "text-yellow-400"
              }
            ].map((feature, i) => (
              <Card 
                key={feature.title} 
                variant="glow"
                className="group p-8 card-3d hover:scale-[1.02] transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-[1px] mb-6`}>
                  <div className="w-full h-full rounded-2xl bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                    <feature.icon className={`h-7 w-7 ${feature.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section id="how-it-works" className="py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">How it works</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 text-white">
              Simple as 1, 2, 3
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Create a board", description: "Start with a blank canvas or choose from hundreds of templates" },
              { step: "02", title: "Invite your team", description: "Share a link and collaborate in real-time with anyone" },
              { step: "03", title: "Bring ideas to life", description: "Sketch, diagram, and present your ideas visually" }
            ].map((item, i) => (
              <div key={item.step} className="text-center relative">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
                  <span className="text-3xl font-bold gradient-text">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-purple-500/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-fuchsia-600 to-cyan-600 animate-gradient bg-[length:200%_200%]" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            
            {/* Glow effects */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/20 rounded-full blur-[100px]" />
            
            <div className="relative px-8 py-24 sm:px-16 sm:py-32">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white glow-text">
                  Ready to bring your ideas to life?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
                  Join thousands of creators, designers, and teams who use our platform every day.
                </p>
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/signup">
                    <Button size="xl" className="bg-white text-purple-600 hover:bg-zinc-100 shadow-xl">
                      Start Creating Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 relative">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                  <Pencil className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">CanvasSync</span>
              </div>
              <p className="text-sm text-zinc-500 max-w-xs">
                The simplest way to create beautiful diagrams and collaborate with your team in real-time.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <a href="https://github.com" className="text-zinc-500 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" className="text-zinc-500 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-800/50">
            <p className="text-sm text-zinc-600">
              © 2026 CanvasSync. All rights reserved.
            </p>
            <p className="text-sm text-zinc-600">
              Made with 💜 for creators everywhere
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;