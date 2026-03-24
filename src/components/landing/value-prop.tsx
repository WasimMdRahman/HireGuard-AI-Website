import { Gauge, ShieldAlert, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: <Gauge className="h-8 w-8 text-primary" />,
    title: 'Scores resume–job alignment',
  },
  {
    icon: <ShieldAlert className="h-8 w-8 text-primary" />,
    title: 'Flags potential hiring risks and inconsistencies',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: 'Generates targeted interview questions',
  },
];

export default function ValueProp() {
  return (
    <section id="features" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-12 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 slide-in-on-scroll" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground leading-tight">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
