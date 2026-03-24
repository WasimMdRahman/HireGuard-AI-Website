import Demo from '@/components/landing/demo';
import FinalCta from '@/components/landing/final-cta';
import Hero from '@/components/landing/hero';
import HowItWorks from '@/components/landing/how-it-works';
import Trust from '@/components/landing/trust';
import ValueProp from '@/components/landing/value-prop';
import WhoItsFor from '@/components/landing/who-its-for';

export default function Home() {
  return (
    <>
      <Hero />
      <Demo />
      <ValueProp />
      <WhoItsFor />
      <HowItWorks />
      <Trust />
      <FinalCta />
    </>
  );
}
