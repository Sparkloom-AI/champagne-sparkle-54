import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { useEffect, useState, useCallback, memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const costReductionData = [
  { month: 'Jan', manualCost: 100, aiCost: 100, savings: 0 },
  { month: 'Feb', manualCost: 95, aiCost: 85, savings: 15 },
  { month: 'Mar', manualCost: 90, aiCost: 70, savings: 30 },
  { month: 'Apr', manualCost: 85, aiCost: 55, savings: 45 },
  { month: 'May', manualCost: 80, aiCost: 40, savings: 60 },
  { month: 'Jun', manualCost: 75, aiCost: 25, savings: 75 },
];

const revenueData = [
  { month: 'Jan', revenue: 100, profit: 100 },
  { month: 'Feb', revenue: 110, profit: 125 },
  { month: 'Mar', revenue: 125, profit: 155 },
  { month: 'Apr', revenue: 140, profit: 185 },
  { month: 'May', revenue: 160, profit: 220 },
  { month: 'Jun', revenue: 180, profit: 255 },
];

// Optimized AnimatedCounter that defers animation start and uses time-slicing
const AnimatedCounter = memo(({ end, duration = 2000, suffix = "", delay = 0 }: { 
  end: number; 
  duration?: number; 
  suffix?: string;
  delay?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Defer animation start to prevent blocking main thread
    const startDelay = setTimeout(() => {
      let startTime: number;
      let animationId: number;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Use time-slicing to prevent long tasks
        if (progress < 1) {
          setCount(Math.floor(progress * end));
          animationId = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      animationId = requestAnimationFrame(animate);
      
      return () => {
        if (animationId) cancelAnimationFrame(animationId);
      };
    }, delay);
    
    return () => clearTimeout(startDelay);
  }, [end, duration, delay]);

  return <span>{count}{suffix}</span>;
});

const StatisticsSection = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [startAnimations, setStartAnimations] = useState(false);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
      // Stagger animation start to prevent simultaneous heavy operations
      setTimeout(() => setStartAnimations(true), 300);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { 
      threshold: 0.2,
      rootMargin: '50px' // Start loading slightly before visible
    });

    const section = document.getElementById('statistics-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section id="statistics-section" className="py-28 md:py-32 bg-gradient-to-b from-background to-sl-obsidian/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Maximize Profits by <span className="text-transparent bg-gradient-to-r from-sl-auric-700 to-sl-auric-500 bg-clip-text">Cutting Costs</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-loose">
            See the real impact of AI automation on operational efficiency and revenue growth
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-sl-auric-700 mb-2">
              {startAnimations && <AnimatedCounter end={75} suffix="%" delay={0} />}
            </div>
            <p className="text-muted-foreground">Cost Reduction</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-sl-auric-700 mb-2">
              {startAnimations && <AnimatedCounter end={155} suffix="%" delay={200} />}
            </div>
            <p className="text-muted-foreground">Profit Increase</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-sl-auric-700 mb-2">
              {startAnimations && <AnimatedCounter end={30} delay={400} />}
            </div>
            <p className="text-muted-foreground">Days to ROI</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cost Reduction Chart */}
          <Card className="bg-sl-slate-800/50 border-sl-iron-600/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-medium text-foreground leading-snug">Operational Cost Reduction</CardTitle>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Monthly comparison: Manual vs AI-Automated processes</p>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={costReductionData} className={isVisible ? "animate-fade-in" : "opacity-0"}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--sl-iron-600) / 0.2)" />
                    <XAxis 
                      dataKey="month" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--sl-obsidian))',
                        border: '1px solid hsl(var(--sl-iron-600) / 0.3)',
                        borderRadius: '8px',
                        color: 'hsl(var(--foreground))'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="manualCost" 
                      stroke="hsl(var(--sl-fog-300))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--sl-fog-300))', strokeWidth: 2, r: 4 }}
                      name="Manual Process"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="aiCost" 
                      stroke="hsl(var(--sl-auric-700))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--sl-auric-700))', strokeWidth: 2, r: 4 }}
                      name="AI Automated"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Revenue Growth Chart */}
          <Card className="bg-sl-slate-800/50 border-sl-iron-600/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-medium text-foreground leading-snug">Revenue & Profit Growth</CardTitle>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Post-AI implementation performance metrics</p>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData} className={isVisible ? "animate-fade-in" : "opacity-0"}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--sl-iron-600) / 0.2)" />
                    <XAxis 
                      dataKey="month" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--sl-obsidian))',
                        border: '1px solid hsl(var(--sl-iron-600) / 0.3)',
                        borderRadius: '8px',
                        color: 'hsl(var(--foreground))'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="hsl(var(--sl-pearl-100))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--sl-pearl-100))', strokeWidth: 2, r: 4 }}
                      name="Revenue"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="profit" 
                      stroke="hsl(var(--sl-auric-700))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--sl-auric-700))', strokeWidth: 2, r: 4 }}
                      name="Net Profit"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-lg mb-6 leading-loose">
            Ready to see similar results for your business?
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/5 border border-accent/20 rounded-lg">
            <span className="text-foreground font-medium">Start your 30-day transformation today</span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default StatisticsSection;