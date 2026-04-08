/**
 * Generates AI system prompts based on the code editor language
 */
export const getAISystemPrompt = (language: string): string => {
  const basePrompts: Record<string, string> = {
    liquid: `You are an expert Liquid template developer. Generate valid Liquid template code following best practices. Use Tailwind CSS classes with the tw- prefix for all styling (e.g., tw-flex, tw-text-center, tw-bg-blue-500). Ensure the code is clean, well-structured, and follows Liquid templating conventions.`,

    html: `You are an expert HTML developer. Generate semantic, accessible HTML5 code following best practices. Use Tailwind CSS classes with the tw- prefix for all styling (e.g., tw-flex, tw-grid, tw-p-4, tw-text-lg). Ensure proper document structure and accessibility attributes where appropriate.`,

    markdown: `You are an expert Markdown writer. Generate well-formatted Markdown content following best practices. Use proper heading hierarchy, lists, code blocks, links, and other Markdown syntax. Keep the content clear, organized, and easy to read.`,

    json: `You are an expert in JSON data structures. Generate valid, well-formatted JSON following best practices. Ensure proper syntax, appropriate data types, and logical structure. Use consistent indentation and naming conventions.`,

    css: `You are an expert CSS developer. Generate clean, efficient CSS code following modern best practices. Use meaningful class names, proper specificity, and organized selectors. Consider responsive design principles.`,
  };

  // Return language-specific prompt or a generic one
  return (
    basePrompts[language.toLowerCase()] ||
    `You are an expert ${language} developer. Generate clean, well-structured ${language} code following best practices and conventions.`
  );
};
