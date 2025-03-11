import { useState } from 'react';
import { Editor } from "@tiptap/react";
import { Button } from '@components/button';
import { Input } from '@components/input/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/select';
import { Textarea } from '@components/textarea/textarea';
import { Label } from '@components/label/label';
// import OpenAI from 'openai';

interface AIContentProps {
  editor: Editor;
}

// Mock OpenAI client
const client = {
  chat: {
    completions: {
      create: async ({ model, prompt, max_tokens }: { model: string; prompt: string; max_tokens: number }) => {
        return {
          choices: [
            {
              text: `Mock response for prompt: ${prompt}`
            }
          ]
        };
      }
    }
  }
};

// const client = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
//     dangerouslyAllowBrowser: true
// });

const tones = [
  'Friendly',
  'Professional',
  'Conversational',
  'Helpful',
  'Authoritative',
  'Cheerful',
  'Empathetic',
  'Neutral',
  'Witty',
  'Direct',
  'Custom'
];

const AIContent = ({ editor }: AIContentProps) => {
  const [customTone, setCustomTone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleToneClick = async (tone: string) => {
    const { from, to } = editor.state.selection;
    const selectedText = editor.state.doc.textBetween(from, to, ' ');
    const prompt = `Rewrite the following text in a ${tone.toLowerCase()} tone: ${selectedText}`;

    setLoading(true);

    try {
      const response = await client.chat.completions.create({
        model: 'gpt-3.5-turbo',
        prompt,
        max_tokens: 150,
      });

      const updatedText = response.choices[0].text.trim();
      editor.chain().focus().deleteRange({ from, to }).insertContent(updatedText).run();
    } catch (error) {
      console.error('Error updating text tone:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='~p-2 ~flex ~flex-col ~gap-4 ~max-h-48'>
      <h2 className='~text-center ~mb-4'>Generate Content with AI</h2>
      <div className='~flex ~justify-between ~items-center'>
        <div className='~flex ~flex-col ~gap-4'>
          <h3>Prompt</h3>
          <Label>Enter text to rewrite: </Label>
          <Textarea className='~w-40' />
          <Select>
            <Label>Choose a tone: </Label>
            <SelectTrigger>
              <SelectValue>Choose Tone</SelectValue>
            </SelectTrigger>
            <SelectContent className='~max-h-10'>
              {tones.map((tone) => (
                <SelectItem key={tone} value={tone}>
                  {tone}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className='~flex ~gap-2 ~items-center'>
            <Label>Choose a custom tone: </Label>
            <Input
              type="text"
              value={customTone}
              onChange={(e) => setCustomTone(e.target.value)}
              placeholder="Enter custom tone"
              className='~w-1/2'
            />
            <Button onClick={() => handleToneClick(customTone)}>
              Apply
            </Button>
          </div>
        </div>
        <div>
          Generated Content
        </div>
      </div>
    </div>
  );
};

export default AIContent;
