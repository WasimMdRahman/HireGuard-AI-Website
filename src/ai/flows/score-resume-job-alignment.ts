'use server';
/**
 * @fileOverview Scores resume alignment with the job description.
 *
 * - scoreResumeJobAlignment - A function that scores resume alignment with the job description.
 * - ScoreResumeJobAlignmentInput - The input type for the scoreResumeJobAlignment function.
 * - ScoreResumeJobAlignmentOutput - The return type for the scoreResumeJobAlignment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ScoreResumeJobAlignmentInputSchema = z.object({
  resume: z.string().describe('The resume text.'),
  jobDescription: z.string().describe('The job description text.'),
});
export type ScoreResumeJobAlignmentInput = z.infer<typeof ScoreResumeJobAlignmentInputSchema>;

const ScoreResumeJobAlignmentOutputSchema = z.object({
  score: z.number().describe('The alignment score between the resume and the job description (0-100).'),
  reason: z.string().describe('The reason for the score.'),
});
export type ScoreResumeJobAlignmentOutput = z.infer<typeof ScoreResumeJobAlignmentOutputSchema>;

export async function scoreResumeJobAlignment(input: ScoreResumeJobAlignmentInput): Promise<ScoreResumeJobAlignmentOutput> {
  return scoreResumeJobAlignmentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'scoreResumeJobAlignmentPrompt',
  input: {schema: ScoreResumeJobAlignmentInputSchema},
  output: {schema: ScoreResumeJobAlignmentOutputSchema},
  prompt: `You are an expert recruiter.

You will receive a resume and a job description. You will score the resume based on its alignment with the job description, and provide a reason for the score.

Resume:
{{resume}}

Job Description:
{{jobDescription}}

Score (0-100):`,
});

const scoreResumeJobAlignmentFlow = ai.defineFlow(
  {
    name: 'scoreResumeJobAlignmentFlow',
    inputSchema: ScoreResumeJobAlignmentInputSchema,
    outputSchema: ScoreResumeJobAlignmentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
