import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Target,
  Shield,
  Database,
  Briefcase,
  TrendingUp,
  Users,
  FileText,
  Zap,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  BarChart3,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-bold tracking-tight">
                BizProspex
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#solutions"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Solutions
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                Sign In
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-20 sm:py-24 lg:py-32">
          {/* Animated background decoration */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <svg
              className="absolute -right-20 top-0 h-full w-full"
              viewBox="0 0 800 800"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="oklch(var(--primary))" />
                  <stop offset="100%" stopColor="oklch(var(--secondary))" />
                </linearGradient>
              </defs>
              <g fill="none" stroke="url(#grad1)" strokeWidth="1.5">
                <polyline
                  points="100,600 200,450 300,500 400,350 500,400 600,250 700,300"
                  className="animate-pulse"
                  style={{ animationDuration: "3s" }}
                />
                <polyline
                  points="100,650 200,500 300,550 400,400 500,450 600,300 700,350"
                  className="animate-pulse"
                  style={{ animationDuration: "4s", animationDelay: "0.5s" }}
                />
                <circle cx="300" cy="500" r="4" fill="url(#grad1)" />
                <circle cx="500" cy="400" r="4" fill="url(#grad1)" />
                <circle cx="600" cy="250" r="4" fill="url(#grad1)" />
              </g>
            </svg>
          </div>

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="animate-fade-in">
                <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                  Human-Verified B2B Data That Powers{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Predictable Revenue Growth
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  AI-assisted and manually validated contact intelligence, job
                  feeds, exhibitor data, and compliance datasets built for modern
                  sales and marketing teams.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button size="lg" className="shadow-glow">
                    Get Free Data Sample
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Request Custom List
                  </Button>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">
                      98% Verified Accuracy
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">
                      GDPR & CCPA Compliant
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">
                      Global Coverage Across Industries
                    </span>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block animate-fade-in-slow">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
                  <Card className="relative overflow-hidden shadow-card-hover border-2">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">Live Data Feed</Badge>
                        <span className="flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-success opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                        </span>
                      </div>
                      <CardTitle className="text-xl">
                        Pipeline Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">
                              Contact Accuracy
                            </span>
                            <span className="font-semibold">98.4%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full w-[98.4%] bg-gradient-to-r from-primary to-secondary rounded-full" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">
                              Email Deliverability
                            </span>
                            <span className="font-semibold">96.8%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full w-[96.8%] bg-gradient-to-r from-primary to-accent rounded-full" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">
                              Response Rate
                            </span>
                            <span className="font-semibold">45.2%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full w-[45.2%] bg-gradient-to-r from-accent to-secondary rounded-full" />
                          </div>
                        </div>
                      </div>
                      <Separator className="my-6" />
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-primary">2.4K</p>
                          <p className="text-xs text-muted-foreground">
                            Verified Today
                          </p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-secondary">
                            15M+
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Total Records
                          </p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-accent">120+</p>
                          <p className="text-xs text-muted-foreground">
                            Industries
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 border-b bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-muted-foreground mb-8">
              Trusted by 2,000+ global revenue teams
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-8 w-24 bg-muted-foreground/20 rounded"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Why Leading Teams Choose BizProspex
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Data quality is the foundation of successful outreach. We combine
                cutting-edge AI with human expertise to deliver unmatched accuracy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">98% Verified Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Manual + AI validation to eliminate outdated or invalid
                    contacts. Every record is verified before delivery.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Precision Targeting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Industry, geography, revenue size, job title, technology
                    stack filtering to reach your ideal customer profile.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">
                    Compliance-First Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Built with global privacy standards and ethical sourcing
                    practices. GDPR, CCPA, and CAN-SPAM compliant.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section id="solutions" className="py-20 sm:py-24 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Comprehensive Data Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From lead generation to market intelligence, we provide the data
                infrastructure your revenue team needs to scale.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="text-lg">B2B Lead Lists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Targeted prospect lists with verified contact details, job
                    titles, and company information.
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Learn More <ArrowRight className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-secondary" />
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="text-lg">Job Feed Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Real-time job postings and hiring signals to identify
                    companies in growth mode.
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium text-secondary hover:underline inline-flex items-center gap-1"
                  >
                    Learn More <ArrowRight className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="text-lg">
                    Exhibitor & Event Intelligence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Attendee and exhibitor data from industry conferences and
                    trade shows worldwide.
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium text-accent hover:underline inline-flex items-center gap-1"
                  >
                    Learn More <ArrowRight className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="h-10 w-10 rounded-lg bg-chart-3/10 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-chart-3" />
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-chart-3 group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="text-lg">
                    Funding & Investor Data
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Track funding rounds, investor relationships, and capital
                    events for targeted outreach.
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium text-chart-3 hover:underline inline-flex items-center gap-1"
                  >
                    Learn More <ArrowRight className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="h-10 w-10 rounded-lg bg-chart-4/10 flex items-center justify-center">
                      <Database className="h-5 w-5 text-chart-4" />
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-chart-4 group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="text-lg">
                    CRM Data Cleaning & Enrichment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Append missing fields, validate existing records, and
                    eliminate duplicates in your CRM.
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium text-chart-4 hover:underline inline-flex items-center gap-1"
                  >
                    Learn More <ArrowRight className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="h-10 w-10 rounded-lg bg-chart-5/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-chart-5" />
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-chart-5 group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="text-lg">Custom Data Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Bespoke data research and compilation for unique use cases
                    and niche markets.
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium text-chart-5 hover:underline inline-flex items-center gap-1"
                  >
                    Learn More <ArrowRight className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From request to delivery, we've streamlined the process to get you
                high-quality data fast.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connection lines for desktop */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -z-10" />

              <div className="relative">
                <div className="mb-6">
                  <div className="h-16 w-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-display text-2xl font-bold shadow-glow mx-auto">
                    1
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-center">
                  Define Your ICP
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  Tell us your ideal customer profile, target industries, job
                  titles, and geographic preferences.
                </p>
              </div>

              <div className="relative">
                <div className="mb-6">
                  <div className="h-16 w-16 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center font-display text-2xl font-bold shadow-glow mx-auto">
                    2
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-center">
                  Data Compiled & Verified
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  Our AI compiles initial data, then human researchers verify every
                  contact for accuracy.
                </p>
              </div>

              <div className="relative">
                <div className="mb-6">
                  <div className="h-16 w-16 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center font-display text-2xl font-bold shadow-glow mx-auto">
                    3
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-center">
                  Receive Clean Dataset
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  Get structured, CRM-ready data delivered in your preferred format
                  (CSV, Excel, API).
                </p>
              </div>

              <div className="relative">
                <div className="mb-6">
                  <div className="h-16 w-16 rounded-2xl bg-chart-3 text-white flex items-center justify-center font-display text-2xl font-bold shadow-glow mx-auto">
                    4
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-center">
                  Launch Outreach & Scale
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  Import to your CRM, start campaigns, and watch your pipeline fill
                  with qualified opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results / Benefits */}
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Measurable Impact on Revenue
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Better data means better outcomes. See how BizProspex customers
                accelerate their growth.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="border-2 text-center hover:shadow-card-hover transition-all duration-300">
                <CardHeader className="pb-2">
                  <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold text-primary">
                    +67%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Increase in Qualified Meetings
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 text-center hover:shadow-card-hover transition-all duration-300">
                <CardHeader className="pb-2">
                  <Mail className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold text-secondary">
                    +45%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Improvement in Email Deliverability
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 text-center hover:shadow-card-hover transition-all duration-300">
                <CardHeader className="pb-2">
                  <CheckCircle2 className="h-8 w-8 text-accent mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold text-accent">
                    -82%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Reduction in Bounce Rates
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 text-center hover:shadow-card-hover transition-all duration-300">
                <CardHeader className="pb-2">
                  <TrendingUp className="h-8 w-8 text-chart-3 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold text-chart-3">
                    +54%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Acceleration in Pipeline Growth
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 text-center hover:shadow-card-hover transition-all duration-300">
                <CardHeader className="pb-2">
                  <Zap className="h-8 w-8 text-chart-4 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold text-chart-4">
                    +38%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Improvement in Sales Efficiency
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-2 shadow-card-hover max-w-4xl mx-auto overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-gradient-to-br from-primary to-secondary p-8 text-white flex flex-col justify-center">
                  <Badge className="bg-white/20 text-white border-white/40 w-fit mb-4">
                    Customer Success Story
                  </Badge>
                  <h3 className="font-display text-3xl font-bold mb-2">+45%</h3>
                  <p className="text-white/90">Response Rate Increase</p>
                </div>

                <div className="md:col-span-3 p-8">
                  <h3 className="font-display text-2xl font-bold mb-4">
                    How a SaaS Company Increased Response Rates by 45%
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                        PROBLEM
                      </h4>
                      <p className="text-sm leading-relaxed">
                        A mid-market SaaS company struggled with low email response
                        rates and high bounce rates due to outdated contact data
                        from generic data vendors.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                        SOLUTION
                      </h4>
                      <p className="text-sm leading-relaxed">
                        Switched to BizProspex's verified B2B lead lists with
                        precision targeting based on technology stack and company
                        growth signals.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                        RESULT
                      </h4>
                      <p className="text-sm leading-relaxed mb-4">
                        Within 60 days, response rates jumped from 8% to 45%, bounce
                        rates dropped to under 3%, and the sales team booked 2.3x
                        more qualified demos.
                      </p>
                      <Button variant="outline" size="sm">
                        Read Full Case Study <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 sm:py-24 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Transparent, Scalable Pricing
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pay only for what you need. No subscriptions, no hidden fees. Just
                verified data, delivered on demand.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {/* Free Sample */}
              <Card className="border-2 hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Free Sample</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$0</span>
                  </div>
                  <CardDescription>100 Leads</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-6" variant="outline">
                    Get Started
                  </Button>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Verified Contacts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Email & Phone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Industry Targeting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>CSV Delivery</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Starter */}
              <Card className="border-2 hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Starter</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$499</span>
                  </div>
                  <CardDescription>1,250 Leads</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-6" variant="outline">
                    Get Started
                  </Button>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Verified Contacts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Email & Phone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Industry Targeting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Structured Delivery</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Growth - Most Popular */}
              <Card className="border-2 border-primary shadow-glow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />
                <CardHeader>
                  <Badge className="w-fit mb-2">Most Popular</Badge>
                  <CardTitle className="text-lg">Growth</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$899</span>
                  </div>
                  <CardDescription>2,500 Leads</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-6">Get Started</Button>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Verified Contacts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Email & Phone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Industry Targeting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Structured Delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Priority Support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Pro */}
              <Card className="border-2 hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Pro</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$1,599</span>
                  </div>
                  <CardDescription>5,000 Leads</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-6" variant="outline">
                    Get Started
                  </Button>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Verified Contacts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Email & Phone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Industry Targeting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Structured Delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Dedicated Support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card className="border-2 hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Enterprise</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">Custom</span>
                  </div>
                  <CardDescription>Custom Solution</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-6">Contact Sales</Button>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Unlimited Leads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Custom Research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>API Access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Structured Delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>Account Manager</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Not All Data Providers Are Equal
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how BizProspex compares to generic data vendors.
              </p>
            </div>

            <Card className="max-w-4xl mx-auto overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">
                        <div className="flex items-center justify-center gap-2">
                          <Database className="h-5 w-5 text-primary" />
                          BizProspex
                        </div>
                      </th>
                      <th className="text-center p-4 font-semibold text-muted-foreground">
                        Generic Vendors
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Verified Accuracy</td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="h-5 w-5 text-success inline-block" />
                        <span className="ml-2 text-sm font-semibold">98%+</span>
                      </td>
                      <td className="p-4 text-center text-muted-foreground">
                        60-75%
                      </td>
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-4">Manual Validation</td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="h-5 w-5 text-success inline-block" />
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-destructive font-medium">✕</span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Custom List Building</td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="h-5 w-5 text-success inline-block" />
                      </td>
                      <td className="p-4 text-center text-muted-foreground">
                        Limited
                      </td>
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-4">Compliance Standards</td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="h-5 w-5 text-success inline-block" />
                        <span className="ml-2 text-sm font-semibold">
                          GDPR, CCPA
                        </span>
                      </td>
                      <td className="p-4 text-center text-muted-foreground">
                        Varies
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">Flexible Volume Orders</td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="h-5 w-5 text-success inline-block" />
                      </td>
                      <td className="p-4 text-center text-muted-foreground">
                        Fixed Plans
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 sm:py-24 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions? We have answers. Can't find what you need? Reach
                out to our team.
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              className="max-w-3xl mx-auto space-y-4"
            >
              <AccordionItem
                value="item-1"
                className="bg-background border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How do you verify data accuracy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We use a two-phase validation process: AI-powered data
                  compilation followed by manual verification by trained
                  researchers. Every contact is checked for validity, job title
                  accuracy, and company affiliation before delivery. We also
                  continuously monitor and update records to maintain 98%+
                  accuracy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-background border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Do you offer free samples?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes! We offer a free sample of 100 verified leads so you can
                  test our data quality before committing. Simply fill out the
                  request form with your ideal customer profile, and we'll deliver
                  your sample within 24-48 hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-background border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What is the typical delivery timeline?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Standard orders are delivered within 3-5 business days. For
                  custom data projects or larger enterprise orders, timelines vary
                  based on complexity and volume. Rush delivery options are
                  available for an additional fee.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-background border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What compliance standards do you follow?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We adhere to GDPR, CCPA, CAN-SPAM, and other global privacy
                  regulations. All data is ethically sourced from public and
                  licensed sources. We maintain strict data governance policies and
                  provide documentation to support your compliance requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-background border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Can I customize my target criteria?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Absolutely. We support detailed targeting including industry
                  (SIC/NAICS codes), geography (country, state, city), company size
                  (revenue, employee count), job titles, seniority levels,
                  technology stack, and more. For unique requirements, we offer
                  custom data research projects.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-background border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What is your refund or replacement policy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We stand behind our data quality. If contacts don't meet our
                  stated accuracy threshold, we'll replace invalid records at no
                  charge or issue a prorated refund. Contact our support team
                  within 30 days of delivery with details, and we'll make it right.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCA0YzEuMTA1IDAgMiAuODk1IDIgMnMtLjg5NSAyLTIgMi0yLS44OTUtMi0yIC44OTUtMiAyLTJ6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-10" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Ready to Build a High-Performing Sales Pipeline?
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Request a verified data sample and experience the difference that
                human-verified intelligence makes for your revenue team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="shadow-glow-lg text-lg px-8"
                >
                  Request Your Free Sample
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8"
                >
                  Talk to Sales
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Database className="h-5 w-5 text-primary" />
                <span className="font-display font-bold tracking-tight">
                  BizProspex
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Human-verified B2B data intelligence for modern sales and marketing
                teams.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    B2B Lead Lists
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Job Feed Data
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Event Intelligence
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    CRM Enrichment
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026. Built with <Heart className="inline h-4 w-4 text-destructive fill-destructive" /> using <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline">caffeine.ai</a></p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
