import { useState } from 'react';
import { Editor } from "@tiptap/react";
import { z } from 'zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import { Button } from '@components/button';
import { Input } from '@components/input/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/select';
import { Textarea } from '@components/textarea/textarea';
import { Label } from '@components/label/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormMessage } from '@components/form/form';

interface AIContentProps {
  editor: Editor;
  closeDialog: () => void;
}

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
] as const;

const AIContent = ({ editor, closeDialog }: AIContentProps) => {
  const [loading, setLoading] = useState(false);
  const { from, to } = editor.state.selection;
  const [generatedContent, setGeneratedContent] = useState('');

  const FormSchema = z.object({
    prompt: z.string().min(2, {
      message: 'Prompt must be at least 2 characters.',
    }),
    tone: z.enum(tones),
    customTone: z.string().optional(),
    targetedAudience: z.string().optional(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      prompt: editor.state.doc.textBetween(from, to, ' ') || '',
      tone: 'Neutral',
      customTone: '',
    },
  });

  const handleFormSubmit = async (tone: string, text: string) => {
    let finalTone = tone;
    if (tone === 'Custom') {
      finalTone = form.getValues('customTone') || '';
    }

    const targetedAudience = form.getValues('targetedAudience') || 'general audience';
    const prompt = `Rewrite the following text in ${finalTone.toLowerCase()} tone for the ${targetedAudience} and make sure if the following text is a request to generate a content then do that first and then change the tone: "${text}"`

    setLoading(true);

    try {
      // Call the API to get the rewritten text
      const aiResponse = await axios.post('https://api.cms.my.dev.broadlume.com/ai/generate', {
        messages: [
          {
            "content": prompt
          }
        ]
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setGeneratedContent(aiResponse.data.data.text);
    } catch (error) {
      console.error('Error updating text tone:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='~p-2 ~flex ~flex-col ~gap-4 ~max-h-48'>
      <h2 className='~text-center ~mb-4'>Generate Content with AI</h2>
      <div className='~flex max-md:~flex-col ~gap-10 ~justify-between ~items-center'>
        <Form {...form}>
          <div className='~flex-1'>
            <form className='~flex ~flex-col ~gap-10' onSubmit={form.handleSubmit((data) => handleFormSubmit(data.tone, data.prompt))}>
              <FormField
                control={form.control}
                name='prompt'
                render={({ field }) => (
                  <FormItem>
                    <Label>Prompt:</Label>
                    <Textarea placeholder='Enter your prompt here...' {...field} className='~w-full ~h-32' />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='tone'
                render={({ field }) => (
                  <FormItem>
                    <Label>Choose a tone:</Label>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder='Select a tone' />
                      </SelectTrigger>
                      <SelectContent>
                        {tones.map((tone) => (
                          <SelectItem key={tone} value={tone}>
                            {tone}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {
                form.watch('tone') === 'Custom' && (
                  <FormField
                    control={form.control}
                    name='customTone'
                    render={({ field }) => (
                      <FormItem>
                        <Label>Custom Tone:</Label>
                        <Input
                          type='text'
                          placeholder='Enter custom tone'
                          {...field}
                          value={field.value}
                          onChange={(e) => {
                            field.onChange(e.target.value);
                          }}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )
              }
              <FormField
                control={form.control}
                name='targetedAudience'
                render={({ field }) => (
                  <FormItem>
                    <Label>Targeted Audience:</Label>
                    <Input
                      type='text'
                      placeholder='Enter targeted audience'
                      {...field}
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                      }}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='~flex ~gap-2 ~justify-evenly ~items-center'>
                <Button type='button' variant='secondary' onClick={() => form.reset()}>
                  Clear
                </Button>
                <Button
                  type='submit'
                  disabled={loading}
                  onClick={form.handleSubmit((data) => handleFormSubmit(data.tone, data.prompt))}
                >
                  {loading ? 'Loading...' : 'Generate'}
                </Button>
              </div>
            </form>
          </div>
        </Form>
        <div className='~flex-1 ~flex ~flex-col ~gap-2'>
          {
            generatedContent && (
              <>
                <h3>Output:</h3>
                <Textarea value={generatedContent} onChange={e => setGeneratedContent(e.target.value)} className='~w-full ~h-32' />
                <Button
                  type='button'
                  className='~mt-4'
                  onClick={() => {
                    // Process the generated content to handle line breaks properly
                    const processContent = (content: string) => {
                      // Split content by double line breaks (paragraph breaks)
                      const paragraphs = content.split(/\n\s*\n/).filter(p => p.trim());
                      
                      if (paragraphs.length === 0) return content;
                      
                      // If there's only one paragraph, check for single line breaks
                      if (paragraphs.length === 1) {
                        const lines = content.split(/\n/).filter(line => line.trim());
                        if (lines.length > 1) {
                          // Convert single line breaks to <br> tags within a paragraph
                          return `<p>${lines.join('<br>')}</p>`;
                        }
                        // Single line, wrap in paragraph
                        return `<p>${content.trim()}</p>`;
                      }
                      
                      // Multiple paragraphs, wrap each in <p> tags
                      return paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
                    };

                    const htmlContent = processContent(generatedContent);

                    if (from && to) {
                      // Insert the generated content at the current selection
                      editor.chain().focus().deleteRange({ from, to }).insertContent(htmlContent).run();
                    } else {
                      // If no selection, just insert at the end
                      editor.chain().focus().insertContent(htmlContent).run();
                    }
                    setGeneratedContent(''); // Clear the generated content after inserting
                    form.reset(); // Reset the form after inserting
                    closeDialog();
                  }}
                >
                  Insert Content in Editor
                </Button>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default AIContent;
