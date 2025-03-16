
import createMDX from '@next/mdx';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
};

const withMDX = createMDX();

export default withMDX(nextConfig); // обернули приложения для возможности работі с mdx