import type { MDXComponents } from "mdx/types";
import Image from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-black-900 text-5xl font-bold py-2 md:max-w-2xl mx-auto">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-black-900 text-4xl font-bold py-2 md:max-w-2xl mx-auto">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-black-900 text-3xl font-bold py-2 md:max-w-2xl mx-auto">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-black-900 text-2xl font-bold py-2 md:max-w-2xl mx-auto">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-black-900 text-xl font-bold py-2 md:max-w-2xl mx-auto">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-black-900 font-bold py-2 md:max-w-2xl mx-auto">
        {children}
      </h6>
    ),
    p: ({ children }) => <p className="text-gray-500 py-2">{children}</p>,
    ul: ({ children }) => (
      <ul className="md:max-w-2xl space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 mx-auto my-4">
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li className="text-gray-500 self-center">{children}</li>
    ),
    img: ({ src, alt }: any) => (
      <Image
        className="py-2 mx-auto"
        src={src}
        alt={alt}
        width={500}
        height={500}
        priority
      />
    ),
    ...components,
  };
}
