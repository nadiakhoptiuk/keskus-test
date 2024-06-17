'use client';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Clipboard } from '@/app/[locale]/components/Support/components/Clipboard';
import { TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import { Tab } from '@/app/[locale]/components/Support/components/Tab';
import { paymentType } from '@/app/[locale]/components/Support/Support.constants';

export const Tabs: FC = () => {
  const { t } = useTranslation();

  return (
    <TabGroup className="md:gap-y-15 grid w-full gap-y-10">
      <TabList className="flex gap-2.5 md:gap-3">
        {paymentType.map(({ id, name, disabled }) => (
          <Tab key={id} disabled={disabled}>
            {name}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        <TabPanel>
          <div className="grid gap-y-5">
            <Clipboard label={t('recipient')} value="MTÜ Ukraina Keskus" />

            <Clipboard label={t('accountNumber')} value="EE711010220300696227" />

            <Clipboard
              className="max-w-[500px]"
              label={t('explanationOfPayment')}
              value="Toetus MTÜ põhikirjaliste eesmärkide saavutamiseks test"
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
