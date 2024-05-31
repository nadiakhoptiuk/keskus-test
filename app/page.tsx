import React from 'react';

import { Form } from '@/app/(shared)/components/ui/Form';

import { NextPage } from 'next/types';

const Page: NextPage = () => {
  return (
    <section className="pb-40 pt-40">
      <div className="container">
        <div className="grid gap-10 text-center">
          <h1 className="font-kyiv-type-sans text-3xl font-bold text-gray-700">
            Next js starter
          </h1>

          <p className="font-fixel text-base font-normal text-gray-800">
            This is a starter for Next js with Typescript, ESLint, Prettier,
            Husky,
            <br />
            Tailwind CSS, React Hook Form, React Use and more.
          </p>

          <h2 className="text-2xl font-bold">Simple Form template</h2>

          <Form />
        </div>
      </div>
    </section>
  );
};

export default Page;
