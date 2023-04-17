import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="text-gray-900 bg-blue-gray-100 dark:bg-blue-gray-800 dark:text-gray-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
