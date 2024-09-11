'use client';

import { FC } from 'react';
import { TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import { Clipboard } from '@/app/[locale]/components/Support/components/Clipboard';
import { Tab } from '@/app/[locale]/components/Support/components/Tab';

import { TabPanelType } from '@/app/(shared)/types/common.types';

type Props = {
  tabsData: TabPanelType[];
  clipboardNotificate: string;
  clipboardAria: string;
};

export const Tabs: FC<Props> = ({ tabsData, clipboardNotificate, clipboardAria }) => {
  return (
    <TabGroup className="flex h-fit w-full flex-col max-md:min-h-[370px] max-md:gap-10 md:gap-15">
      <TabList className="flex h-fit gap-2.5 md:gap-3">
        {tabsData.map(({ id, attributes: { payment_system } }) => (
          <Tab key={id}>{payment_system}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabsData.map(({ id, attributes: { tab_clipboard } }) => (
          <TabPanel key={id}>
            <div className="grid gap-y-5">
              {tab_clipboard.map(({ id, title, content }) => (
                <Clipboard
                  key={id}
                  className="w-full max-w-[500px]"
                  label={title}
                  value={content}
                  clipboardNotificate={clipboardNotificate}
                  clipboardAria={clipboardAria}
                />
              ))}
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};
