import { Section } from '@/app/(shared)/components/ui/Section';

import { NextPage } from 'next/types';

const Page: NextPage = () => {
  return (
    <Section className="pb-40 pt-40">
      <div className="container">
        <h1 className="text-center text-4xl font-bold">Page</h1>
      </div>
    </Section>
  );
};

export default Page;
