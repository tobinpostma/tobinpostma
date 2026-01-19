import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom component mappings can be added here
    // HeadshotImage: HeadshotImage,
    ...components,
  };
}
