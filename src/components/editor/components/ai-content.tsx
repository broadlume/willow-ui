import { useMemo, useState } from 'react';
import { Editor } from '@tiptap/react';
import { z } from 'zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import { Button } from '@components/button';
import { Input } from '@components/input/input';
import { Textarea } from '@components/textarea/textarea';
import { Label } from '@components/label/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormMessage } from '@components/form/form';
import { DialogHeader } from '@components/dialog/dialog';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { Loader } from '@components/Loader/Loader';

interface AIContentProps {
  editor: Editor;
  closeDialog: () => void;
  hostname: string;
}

const AIContent = ({ editor, closeDialog, hostname }: AIContentProps) => {
  const [loading, setLoading] = useState(false);
  const { from, to } = editor.state.selection;
  const [generatedContent, setGeneratedContent] = useState('');

  const FormSchema = z.object({
    prompt: z.string().min(2, {
      message: 'Prompt must be at least 2 characters.',
    }),
    targetedAudience: z.string().optional(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      prompt: editor.state.doc.textBetween(from, to, ' ') || '',
    },
  });

  const handleFormSubmit = async (text: string) => {
    const targetedAudience =
      form.getValues('targetedAudience') || 'general audience';
    const prompt = `"${text}" for the ${targetedAudience} and remove extra words, need only the content.`;

    setLoading(true);

    try {
      // Call the API to get the rewritten text
      const apiUrl = `${hostname}/ai/generate`;
      const aiResponse = await axios.post(
        apiUrl,
        {
          messages: [
            {
              content: prompt,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setGeneratedContent(aiResponse.data.data.text);
    } catch (error) {
      console.error('Error generating text:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderIcon = useMemo(() => {
    if (loading) {
      return <Loader name='loading-icon' className='inline-block h-3 w-3' />;
    }
    return null;
  }, [loading]);

  return (
    <div className='flex flex-col items-start gap-6 flex-1 max-h-[80vh] overflow-auto'>
      <DialogDescription className='flex flex-col gap-3 w-full flex-1'>
        <DialogHeader>
          <div data-testid='add-redirects-header'>
            <DialogTitle className='text-xl' data-testid='delete-prompt-title'>
              Generate Content with AI
            </DialogTitle>
          </div>
        </DialogHeader>

        <Form {...form}>
          <form
            className='flex flex-col flex-1 p-5 bg-surface-pri gap-4 rounded'
            onSubmit={form.handleSubmit((data) =>
              handleFormSubmit(data.prompt)
            )}
          >
            <FormField
              control={form.control}
              name='prompt'
              render={({ field }) => (
                <FormItem className='flex flex-col flex-1 gap-2'>
                  <Label>Prompt:</Label>
                  <Textarea
                    placeholder='Enter your prompt here...'
                    {...field}
                    className='w-full h-32'
                  />
                  <FormMessage className='text-text-destructive font-normal' />
                </FormItem>
              )}
            />
            <div className='flex gap-3 w-full'>
              <FormField
                control={form.control}
                name='targetedAudience'
                render={({ field }) => (
                  <FormItem className='flex flex-col flex-1 gap-2'>
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
                    <FormMessage className='text-text-destructive font-normal' />
                  </FormItem>
                )}
              />
            </div>

            <div className='flex flex-row-reverse justify-start w-full gap-2'>
              <Button
                variant={'default'}
                id='generate-ai-prompt-action-button'
                data-testid='generate-ai-prompt-action-button'
                type='submit'
                disabled={loading}
                onClick={form.handleSubmit((data) =>
                  handleFormSubmit(data.prompt)
                )}
              >
                {renderIcon}
                Generate
              </Button>
              <Button
                type='button'
                variant='secondary'
                onClick={() => form.reset()}
                id='generate-ai-prompt-cancel-button'
                data-testid='generate-ai-prompt-cancel-button'
              >
                Clear
              </Button>
            </div>
          </form>
        </Form>
      </DialogDescription>

      <div className='flex-1 flex flex-col gap-2 w-full'>
        <>
          <h3>Output:</h3>
          <Textarea
            value={generatedContent}
            onChange={(e) => setGeneratedContent(e.target.value)}
            className='w-full h-32'
          />
          <Button
            type='button'
            className='self-end w-fit'
            onClick={() => {
              const htmlContent = generatedContent
                .split('\n')
                .map((line) => {
                  const trimmedLine = line.trim();
                  if (trimmedLine.length === 0) return null;
                  return {
                    type: 'paragraph',
                    content: [
                      {
                        type: 'text',
                        text: trimmedLine,
                      },
                    ],
                  };
                })
                .filter((el) => el);
              if (from && to) {
                // Insert the generated content at the current selection
                htmlContent.map((el) => {
                  editor
                    .chain()
                    .focus()
                    .deleteRange({ from, to })
                    .insertContent(el)
                    .run();
                  editor
                    .chain()
                    .focus()
                    .deleteRange({ from, to })
                    .insertContent('<br />')
                    .run();
                });
              } else {
                // If no selection, just insert at the end
                htmlContent.map((el) => {
                  editor.chain().focus().insertContent(el).run();
                  editor.chain().focus().insertContent('<br />').run();
                });
              }
              setGeneratedContent(''); // Clear the generated content after inserting
              form.reset(); // Reset the form after inserting
              closeDialog();
            }}
          >
            Insert Content in Editor
          </Button>
        </>
      </div>
    </div>
  );
};

export default AIContent;
