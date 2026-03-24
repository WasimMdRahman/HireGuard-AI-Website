import { Lock } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Upload a candidate resume',
    description: 'Securely upload a resume in PDF or DOCX format.',
  },
  {
    number: '2',
    title: 'Paste the job description',
    description: 'Provide context for the AI analysis and scoring.',
  },
  {
    number: '3',
    title: 'Review the AI risk report',
    description: 'Instantly receive a detailed report with actionable insights.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
            How It Works in 30 Seconds
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <span className="text-2xl font-bold text-primary">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center flex items-center justify-center gap-3 text-muted-foreground border-t pt-8 max-w-2xl mx-auto">
          <Lock className="h-4 w-4 flex-shrink-0" />
          <p className="text-sm">Runs privately using your own AI API key for full data control.</p>
        </div>
      </div>
    </section>
  );
}
