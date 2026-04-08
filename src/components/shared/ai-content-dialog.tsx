import { useMemo, useState } from 'react';
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

interface AIContentDialogProps {
  getSelectedText: () => string;
  insertContent: (content: string) => void;
  closeDialog: () => void;
  hostname: string;
  authToken?: string;
  parseAsMarkdown?: boolean;
  dialogTitle?: string;
  systemPrompt?: string;
}

const AIContentDialog = ({
  getSelectedText,
  insertContent,
  closeDialog,
  hostname,
  authToken,
  parseAsMarkdown = false,
  dialogTitle = 'Generate Content with AI',
  systemPrompt,
}: AIContentDialogProps) => {
  const [loading, setLoading] = useState(false);
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
      prompt: getSelectedText(),
    },
  });

  const handleFormSubmit = async (text: string) => {
    const targetedAudience =
      form.getValues('targetedAudience') || 'general audience';
    const prompt = `"${text}" for the ${targetedAudience}`;

    setLoading(true);

    try {
      // Call the API to get the rewritten text
      const apiUrl = `${hostname}/api/v2/ai/generate`;
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
      }

      const requestBody: { prompt: string; systemPrompt?: string } = {
        prompt: prompt,
      };

      if (systemPrompt) {
        requestBody.systemPrompt = systemPrompt;
      }

      const aiResponse = await axios.post(apiUrl, requestBody, {
        headers,
      });
      const responseText = aiResponse.data.data[0].text;
      setGeneratedContent(responseText);
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

  const handleInsertContent = async () => {
    let contentToInsert = generatedContent;

    if (parseAsMarkdown) {
      const { marked } = await import('marked');
      contentToInsert = await marked.parse(generatedContent);
    }

    insertContent(contentToInsert);
    setGeneratedContent('');
    form.reset();
    closeDialog();
  };

  return (
    <div className='flex flex-col items-start gap-6 flex-1 max-h-[80vh] overflow-auto'>
      <DialogDescription className='flex flex-col gap-3 w-full flex-1'>
        <DialogHeader>
          <div data-testid='add-redirects-header'>
            <DialogTitle className='text-xl' data-testid='delete-prompt-title'>
              {dialogTitle}
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
                  <div className='flex items-center justify-between gap-2'>
                    <Label>Prompt:</Label>
                    <span className='text-sm text-text-opt'>
                      (Note : It will generate content of a maximum of 3000
                      words)
                    </span>
                  </div>
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
        <h3>Output:</h3>
        <Textarea
          value={generatedContent}
          onChange={(e) => setGeneratedContent(e.target.value)}
          className='w-full h-32'
        />
        <Button
          type='button'
          className='self-end w-fit'
          onClick={handleInsertContent}
        >
          Insert Content in Editor
        </Button>
      </div>
    </div>
  );
};

export default AIContentDialog;
