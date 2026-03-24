'use server';

/**
 * @fileOverview Generates targeted interview questions based on identified risks and skill gaps in a resume.
 *
 * - generateTargetedInterviewQuestions - A function that generates interview questions.
 * - GenerateTargetedInterviewQuestionsInput - The input type for the generateTargetedInterviewQuestions function.
 * - GenerateTargetedInterviewQuestionsOutput - The return type for the generateTargetedInterviewQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTargetedInterviewQuestionsInputSchema = z.object({
  resumeText: z
    .string()
    .describe('The text content of the resume.'),
  jobDescription: z.string().describe('The job description for the role.'),
  identifiedRisks: z
    .string()
    .describe('The identified risks and inconsistencies in the resume.'),
  skillGaps: z.string().describe('The skill gaps identified in the resume.'),
});
export type GenerateTargetedInterviewQuestionsInput = z.infer<
  typeof GenerateTargetedInterviewQuestionsInputSchema
>;

const GenerateTargetedInterviewQuestionsOutputSchema = z.object({
  interviewQuestions: z
    .string()
    .describe('A list of targeted interview questions.'),
});
export type GenerateTargetedInterviewQuestionsOutput = z.infer<
  typeof GenerateTargetedInterviewQuestionsOutputSchema
>;

export async function generateTargetedInterviewQuestions(
  input: GenerateTargetedInterviewQuestionsInput
): Promise<GenerateTargetedInterviewQuestionsOutput> {
  return generateTargetedInterviewQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTargetedInterviewQuestionsPrompt',
  input: {schema: GenerateTargetedInterviewQuestionsInputSchema},
  output: {schema: GenerateTargetedInterviewQuestionsOutputSchema},
  prompt: `You are an expert recruiter and hiring manager. Given a resume, a job description, identified risks, and skill gaps, generate a list of targeted interview questions to assess the candidate's suitability for the role.

Resume:
{{{resumeText}}}

Job Description:
{{{jobDescription}}}

Identified Risks:
{{{identifiedRisks}}}

Skill Gaps:
{{{skillGaps}}}

Generate targeted interview questions:
`,
});

const generateTargetedInterviewQuestionsFlow = ai.defineFlow(
  {
    name: 'generateTargetedInterviewQuestionsFlow',
    inputSchema: GenerateTargetedInterviewQuestionsInputSchema,
    outputSchema: GenerateTargetedInterviewQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
