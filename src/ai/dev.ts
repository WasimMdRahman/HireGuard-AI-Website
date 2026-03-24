import { config } from 'dotenv';
config();

import '@/ai/flows/flag-potential-hiring-risks.ts';
import '@/ai/flows/score-resume-job-alignment.ts';
import '@/ai/flows/generate-targeted-interview-questions.ts';