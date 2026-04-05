'use server';
/**
 * @fileOverview An AI assistant that helps clients articulate their desired hairstyle or suggests options based on their input.
 *
 * - aiStyleAssistant - A function that handles the AI style assistant process.
 * - AIStyleAssistantInput - The input type for the aiStyleAssistant function.
 * - AIStyleAssistantOutput - The return type for the aiStyleAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIStyleAssistantInputSchema = z.object({
  hairType: z.string().describe('The client\'s hair type (e.g., straight, wavy, curly, coily, fine, thick).'),
  faceShape: z.string().describe('The client\'s face shape (e.g., oval, round, square, heart, long).'),
  stylePreferences: z.string().describe('The client\'s style preferences (e.g., short and edgy, long and flowing, professional, casual, bold colors).'),
  currentStyle: z.string().optional().describe('A description of the client\'s current hairstyle.'),
  desiredLook: z.string().optional().describe('A general idea of the desired look or feeling the client wants to achieve.'),
});
export type AIStyleAssistantInput = z.infer<typeof AIStyleAssistantInputSchema>;

const AIStyleAssistantOutputSchema = z.object({
  suggestedStyle: z.string().describe('A detailed description of a suggested hairstyle or a refined articulation of the client\'s desired look.'),
  keywords: z.array(z.string()).describe('A list of keywords related to the suggested style for further discussion or search.'),
  reasoning: z.string().describe('An explanation of why this style is suggested based on the provided input.'),
});
export type AIStyleAssistantOutput = z.infer<typeof AIStyleAssistantOutputSchema>;

export async function aiStyleAssistant(input: AIStyleAssistantInput): Promise<AIStyleAssistantOutput> {
  return aiStyleAssistantFlow(input);
}

const aiStyleAssistantPrompt = ai.definePrompt({
  name: 'aiStyleAssistantPrompt',
  input: {schema: AIStyleAssistantInputSchema},
  output: {schema: AIStyleAssistantOutputSchema},
  prompt: `You are an expert AI Style Assistant for a futuristic, luxury hair salon. Your goal is to help clients articulate their desired hairstyle or suggest new options based on their characteristics and preferences.

Consider the following information about the client:
Hair Type: {{{hairType}}}
Face Shape: {{{faceShape}}}
Style Preferences: {{{stylePreferences}}}
{{#if currentStyle}}Current Hairstyle: {{{currentStyle}}}{{/if}}
{{#if desiredLook}}Client's General Desired Look: {{{desiredLook}}}{{/if}}

Based on this information, provide a detailed and inspiring description of a hairstyle. If the client has provided a "Desired Look", refine and articulate it into a concrete style suggestion. Otherwise, suggest a new style that would suit them.

In your response, include:
1.  A "suggestedStyle" that is a detailed description of the hairstyle.
2.  "keywords" which are a list of relevant terms for this style.
3.  "reasoning" explaining why this style is a good fit, considering their hair type, face shape, and preferences, and how it aligns with the salon's futuristic, luxury aesthetic.`,
});

const aiStyleAssistantFlow = ai.defineFlow(
  {
    name: 'aiStyleAssistantFlow',
    inputSchema: AIStyleAssistantInputSchema,
    outputSchema: AIStyleAssistantOutputSchema,
  },
  async (input) => {
    const {output} = await aiStyleAssistantPrompt(input);
    if (!output) {
      throw new Error('AI Style Assistant prompt returned no output.');
    }
    return output;
  }
);
