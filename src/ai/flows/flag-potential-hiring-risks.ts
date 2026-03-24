'use server';
/**
 * @fileOverview This file defines a Genkit flow for flagging potential hiring risks and inconsistencies in a resume.
 *
 * - flagPotentialHiringRisks - A function that takes a resume and job description as input and returns a report of potential risks.
 * - FlagPotentialHiringRisksInput - The input type for the flagPotentialHiringRisks function.
 * - FlagPotentialHiringRisksOutput - The return type for the flagPotentialHiringRisks function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FlagPotentialHiringRisksInputSchema = z.object({
  resumeText: z.string().describe('The text content of the resume.'),
  jobDescription: z.string().describe('The job description for the role.'),
});
export type FlagPotentialHiringRisksInput = z.infer<
  typeof FlagPotentialHiringRisksInputSchema
>;

const FlagPotentialHiringRisksOutputSchema = z.object({
  riskReport: z
    .string()
    .describe(
      'A report highlighting potential hiring risks and inconsistencies found in the resume, based on the job description.'
    ),
});
export type FlagPotentialHiringRisksOutput = z.infer<
  typeof FlagPotentialHiringRisksOutputSchema
>;

export async function flagPotentialHiringRisks(
  input: FlagPotentialHiringRisksInput
): Promise<FlagPotentialHiringRisksOutput> {
  return flagPotentialHiringRisksFlow(input);
}

const prompt = ai.definePrompt({
  name: 'flagPotentialHiringRisksPrompt',
  input: {schema: FlagPotentialHiringRisksInputSchema},
  output: {schema: FlagPotentialHiringRisksOutputSchema},
  prompt: `You are an AI expert in identifying hiring risks based on resume and job description.

  Analyze the provided resume in relation to the job description and generate a concise report of potential risks and inconsistencies.
  Focus on areas where the resume might be misrepresenting the candidate's qualifications or experience, and areas that should be verified during the interview process.

  Resume:
  {{resumeText}}

  Job Description:
  {{jobDescription}}
  `,
});

const flagPotentialHiringRisksFlow = ai.defineFlow(
  {
    name: 'flagPotentialHiringRisksFlow',
    inputSchema: FlagPotentialHiringRisksInputSchema,
    outputSchema: FlagPotentialHiringRisksOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
