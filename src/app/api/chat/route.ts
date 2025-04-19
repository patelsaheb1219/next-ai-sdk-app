import { mistral } from '@ai-sdk/mistral';
import { streamText } from 'ai';
import { tools } from '@/ai/tools';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(request: Request) {
    
    const { messages } = await request.json();

    const result = streamText({
        model: mistral('pixtral-large-latest'),
        system: 'You are a helpful assistant. Be as concise as possible.',
        messages,
        maxSteps: 5,
        tools
    });

    return result.toDataStreamResponse();
}