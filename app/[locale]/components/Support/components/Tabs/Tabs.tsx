'use client';

import { FC } from 'react';

import { Clipboard } from '@/app/[locale]/components/Support/components/Clipboard';
import { TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import { Tab } from '@/app/[locale]/components/Support/components/Tab';
import { paymentType } from '@/app/[locale]/components/Support/Support.constants';

export const Tabs: FC = () => {
  return (
    <TabGroup className="grid w-full gap-y-10 md:gap-y-[60px]">
      <TabList className="flex gap-2.5 md:gap-3">
        {paymentType.map(({ id, name, disabled }) => (
          <Tab key={id} disabled={disabled}>
            {name}
          </Tab>
        ))}
      </TabList>

      <TabPanels className="mt-3">
        <TabPanel>
          <div className="grid gap-y-5">
            <Clipboard label="Отримувач" value="MTÜ Ukraina Keskus" />

            <Clipboard label="Номер рахунку:" value="EE711010220300696227" />

            <Clipboard
              className="w-full md:w-[500px]"
              label="Пояснення платежу:"
              value="Toetus MTÜ põhikirjaliste eesmärkide saavutamiseks"
            />
          </div>
        </TabPanel>

        <TabPanel>
          <p>Two</p>
        </TabPanel>

        <TabPanel>
          <p>Three</p>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};
