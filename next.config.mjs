import nextMDX from '@next/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';

const nextConfig = {
  output: 'export',
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeHighlight],
  },
});

export default withMDX({
  nextConfig,
  pageExtensions: ['js', 'jsx', 'tsx', 'ts', 'md', 'mdx'],
});
