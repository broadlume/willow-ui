import { useMemo, useState } from 'react';
import { Editor } from '@tiptap/react';
import { z } from 'zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { marked } from 'marked';
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
      const responseText = aiResponse.data.data.text;
      setGeneratedContent(responseText);
    } catch (error) {
      console.error('Error generating text:', error);
    } finally {
      setLoading(false);
      setGeneratedContent(
        "**Welcome to the World of Flooring: A Comprehensive Guide**\n\n**1. Introduction to Flooring**\n- Flooring is essential for both aesthetics and functionality in homes.\n- Types of flooring vary widely to suit different needs and preferences.\n\n**2. Hardwood Flooring**\n- Timeless appeal; commonly oak, maple, or cherry.\n- Pros: Durable, adds value.\n- Cons: Prone to scratches, moisture-sensitive.\n\n**3. Laminate Flooring**\n- Affordable, wood-like appearance.\n- Pros: Scratch-resistant, easy installation.\n- Cons: Can't be refinished, noisy underfoot.\n\n**4. Vinyl Flooring**\n- Versatile, modern designs.\n- Pros: Water-resistant, low maintenance.\n- Cons: Environmental impact, potential for off-gassing.\n\n**5. Tile Flooring**\n- Popular in kitchens and bathrooms.\n- Pros: Water-resistant, durable.\n- Cons: Cold underfoot, grout maintenance.\n\n**6. Carpet Flooring**\n- Cozy, sound-absorbing.\n- Pros: Comfortable, variety of styles.\n- Cons: Stains easily, requires regular cleaning.\n\n**7. Cork Flooring**\n- Eco-friendly, unique texture.\n- Pros: Hypoallergenic, renewable.\n- Cons: Needs sealing, fades in sunlight.\n\n**8. Bamboo Flooring**\n- Sustainable and stylish.\n- Pros: Rapidly renewable, elegant.\n- Cons: Sensitive to humidity, prone to scratches.\n\n**9. Concrete Flooring**\n- Modern, industrial look.\n- Pros: Durable, energy-efficient.\n- Cons: Hard underfoot, requires sealing.\n\n**10. Natural Stone Flooring**\n- Luxurious, timeless.\n- Pros: Unique, durable.\n- Cons: Expensive, installation challenges.\n\n**11. Factors to Consider**\n- Budget: Initial cost vs. long-term maintenance.\n- Foot traffic: Durability needs.\n- Climate: Moisture and temperature considerations.\n- Style: Aesthetics harmonizing with decor.\n\n**12. Installation Methods**\n- DIY vs. professional.\n- Floating, glue-down, and nail-down methods vary by flooring type.\n\n**13. Maintenance Tips**\n- Regular cleaning: Suitable products for each type.\n- Protecting floors: Rugs and furniture pads.\n- Addressing spills promptly to avoid damage.\n\n**14. Trends in Flooring**\n- Eco-friendly options gaining popularity.\n- Technological advancements in materials and designs.\n- Customization and personalization trends.\n\n**15. Conclusion**\n- Choosing the right flooring enhances comfort and style.\n- Balance between aesthetics, function, and budget.\n- Professional consultation can provide personalized advice.\n\n**16. Final Thoughts**\n- Flooring is a foundation both literally and metaphorically.\n- Thoughtful selection impacts living space harmony and functionality.\n- Continual advancements create exciting opportunities for innovation.\n\nExplore more flooring options and stay updated with current trends to make informed decisions when designing or renovating your space."
      );
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
        <h3>Output:</h3>
        <Textarea
          value={generatedContent}
          onChange={(e) => setGeneratedContent(e.target.value)}
          className='w-full h-32'
        />
        <Button
          type='button'
          className='self-end w-fit'
          onClick={async () => {
            const htmlContent = await marked.parse(generatedContent);
            if (from && to) {
              // Replace the selected content with the generated markdown HTML
              editor
                .chain()
                .focus()
                .deleteRange({ from, to })
                .insertContent(htmlContent)
                .run();
            } else {
              // If no selection, insert at the current cursor position
              editor.chain().focus().insertContent(htmlContent).run();
            }
            setGeneratedContent(''); // Clear the generated content after inserting
            form.reset(); // Reset the form after inserting
            closeDialog();
          }}
        >
          Insert Content in Editor
        </Button>
      </div>
    </div>
  );
};

export default AIContent;
