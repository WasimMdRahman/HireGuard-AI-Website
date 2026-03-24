import { DatabaseZap, KeyRound, Lock } from 'lucide-react';

const trustPoints = [
  {
    icon: <DatabaseZap className="h-6 w-6 text-primary" />,
    text: 'No resume data is stored permanently',
  },
  {
    icon: <KeyRound className="h-6 w-6 text-primary" />,
    text: 'Runs on client-owned AI API keys',
  },
  {
    icon: <Lock className="h-6 w-6 text-primary" />,
    text: 'Designed for internal, private use',
  },
];

export default function Trust() {
  return (
    <section id="trust" className="w-full py-12 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
            Trust & Security by Design
          </h2>
          <p className="text-lg text-muted-foreground">
            Your data privacy is our priority. Our tool is built for secure, internal use.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg bg-background shadow-sm border"
            >
              {point.icon}
              <span className="font-medium text-foreground">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
