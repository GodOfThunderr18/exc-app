import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pencil, Share2, Users2, Sparkles, Github, Twitter, Zap, Shield, Layers, ArrowRight, Play } from "lucide-react";
import Link from "next/link";

function App() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <Pencil className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold">Excalidraw</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/signin">
                <Button variant="ghost" size="sm">Sign in</Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 hero-gradient">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-[pulse-slow_4s_ease-in-out_infinite]" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-[pulse-slow_4s_ease-in-out_infinite_1s]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-[fade-in_0.5s_ease-out]">
              <Zap className="h-4 w-4" />
              <span>Now with AI-powered drawing assistance</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-[slide-up_0.5s_ease-out]">
              Collaborative
              <span className="gradient-text block mt-2">Whiteboarding</span>
            </h1>
            
            <p className="mx-auto mt-8 max-w-2xl text-xl text-muted-foreground animate-[slide-up_0.5s_ease-out_0.1s] opacity-0 [animation-fill-mode:forwards]">
              Create, collaborate, and share beautiful diagrams and sketches with our intuitive drawing tool. 
              Real-time sync, infinite canvas, zero friction.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-[slide-up_0.5s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
              <Link href="/signup">
                <Button size="lg" className="h-14 px-8 text-base bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30">
                  Start Drawing Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="h-14 px-8 text-base group">
                <Play className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                Watch Demo
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required • Free forever for individuals
            </p>
          </div>

          {/* Preview Image Placeholder */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-[slide-up_0.5s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border shadow-2xl shadow-slate-200/50 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-white shadow-lg flex items-center justify-center mb-4">
                    <Pencil className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-medium">Interactive Canvas Preview</p>
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-lg p-3 animate-[float_3s_ease-in-out_infinite] hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm font-medium">End-to-end encrypted</span>
              </div>
            </div>
            <div className="absolute -right-4 top-1/3 bg-white rounded-xl shadow-lg p-3 animate-[float_3s_ease-in-out_infinite_0.5s] hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users2 className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium">10k+ active users</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Logos Section */}
      <section className="py-16 border-y bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-50">
            {["Google", "Microsoft", "Stripe", "Vercel", "Netflix"].map((company) => (
              <span key={company} className="text-xl font-bold text-muted-foreground">{company}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold">
              Everything you need to
              <span className="gradient-text block">create and collaborate</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help teams work together seamlessly
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group p-8 border-0 shadow-lg shadow-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Share2 className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Collaboration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Work together with your team in real-time. See cursors, changes, and comments instantly as they happen.
              </p>
            </Card>

            <Card className="group p-8 border-0 shadow-lg shadow-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users2 className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multiplayer Editing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Multiple users can edit the same canvas simultaneously. Perfect for brainstorming and workshops.
              </p>
            </Card>

            <Card className="group p-8 border-0 shadow-lg shadow-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Drawing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Smart shape recognition and AI assistance helps you create perfect diagrams effortlessly.
              </p>
            </Card>

            <Card className="group p-8 border-0 shadow-lg shadow-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Infinite Canvas</h3>
              <p className="text-muted-foreground leading-relaxed">
                Never run out of space. Zoom, pan, and organize your ideas on a limitless canvas.
              </p>
            </Card>

            <Card className="group p-8 border-0 shadow-lg shadow-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Private & Secure</h3>
              <p className="text-muted-foreground leading-relaxed">
                End-to-end encryption ensures your drawings remain private. Your data, your control.
              </p>
            </Card>

            <Card className="group p-8 border-0 shadow-lg shadow-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                Optimized for performance. Smooth drawing experience even with thousands of elements.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-pink-600" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px]" />
            
            <div className="relative px-8 py-20 sm:px-16 sm:py-28">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                  Ready to bring your ideas to life?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
                  Join thousands of creators, designers, and teams who use our platform to visualize and share their ideas.
                </p>
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/signup">
                    <Button size="lg" variant="secondary" className="h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all">
                      Start Creating Now
                      <Pencil className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="h-14 px-8 text-base bg-white/10 text-white border-white/20 hover:bg-white/20">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                  <Pencil className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold">Excalidraw</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The simplest way to create beautiful diagrams and sketches.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              © 2026 Excalidraw Clone. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;