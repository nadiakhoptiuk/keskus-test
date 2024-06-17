import { NewsList } from '@/app/(shared)/components/ui/NewsList';
import { SinglePageWrapper } from '@/app/(shared)/components/ui/SinglePageWrapper';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { PageProps } from '@/app/(shared)/types/common.types';
import { RoutesEnum } from '@/app/(shared)/types/enums';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, [i18nNamespaces.NEWS]);

  return (
    <SinglePageWrapper goBackLink={`${RoutesEnum.NEWS}`} linkText={t('goBack')}>
      <div className="news-h1 news-img news-p prose max-w-full">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1>Кінопоказ фільму "Культура проти війни". Річниця Українського кіноклубу в Естонії</h1>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/news-poster.jpeg" alt="" />

        <p>
          Lorem ipsum dolor sit amet consectetur. Orci amet sodales et tellus consequat senectus
          tincidunt. Mauris et sapien amet sed vitae ullamcorper neque. Egestas nunc id tortor purus
          purus aliquet facilisi. Venenatis id amet sollicitudin vel. Commodo augue mattis hac
          aliquam at. Dictumst sagittis felis sed rhoncus. Est nisl at commodo tellus sit eleifend a
          risus. Et tellus faucibus ut pharetra quis et quisque egestas. Eu in eget ut iaculis ut.
          Semper diam tellus dictum odio duis. Purus ut malesuada morbi integer sit in metus augue
          quam. Lobortis massa vestibulum dictumst massa erat mattis risus aliquam. Et convallis
          porttitor phasellus elit diam commodo erat. Nibh duis nibh congue turpis eget turpis
          facilisi amet. Pharetra mauris orci tempus arcu ac curabitur sed ridiculus. Fermentum
          dictum quis cursus quisque nibh integer ipsum. Lacus sit parturient vitae aliquet dolor.
          Rhoncus neque pharetra facilisis ut tellus lacus id. Augue nunc semper metus integer diam
          egestas risus. Lorem ipsum dolor sit amet consectetur. Orci amet sodales et tellus
          consequat senectus tincidunt. Mauris et sapien amet sed vitae ullamcorper neque. Egestas
          nunc id tortor purus purus aliquet facilisi. Venenatis id amet sollicitudin vel. Commodo
          augue mattis hac aliquam at. Dictumst sagittis felis sed rhoncus. Est nisl at commodo
          tellus sit eleifend a risus. Et tellus faucibus ut pharetra quis et quisque egestas. Eu in
          eget ut iaculis ut. Semper diam tellus dictum odio duis. Purus ut malesuada morbi integer
          sit in metus augue quam. Lobortis massa vestibulum dictumst massa erat mattis risus
          aliquam. Et convallis porttitor phasellus elit diam commodo erat. Nibh duis nibh congue
          turpis eget turpis facilisi amet. Pharetra mauris orci tempus arcu ac curabitur sed
          ridiculus. Fermentum dictum quis cursus quisque nibh integer ipsum. Lacus sit parturient
          vitae aliquet dolor. Rhoncus neque pharetra facilisis ut tellus lacus id. Augue nunc
          semper metus integer diam egestas risus.
        </p>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/news-second-img.jpeg" alt="" />

        <p>
          Lorem ipsum dolor sit amet consectetur. Orci amet sodales et tellus consequat senectus
          tincidunt. Mauris et sapien amet sed vitae ullamcorper neque. Egestas nunc id tortor purus
          purus aliquet facilisi. Venenatis id amet sollicitudin vel. Commodo augue mattis hac
          aliquam at. Dictumst sagittis felis sed rhoncus. Est nisl at commodo tellus sit eleifend a
          risus. Et tellus faucibus ut pharetra quis et quisque egestas. Eu in eget ut iaculis ut.
          Semper diam tellus dictum odio duis. Purus ut malesuada morbi integer sit in metus augue
          quam. Lobortis massa vestibulum dictumst massa erat mattis risus aliquam. Et convallis
          porttitor phasellus elit diam commodo erat. Nibh duis nibh congue turpis eget turpis
          facilisi amet. Pharetra mauris orci tempus arcu ac curabitur sed ridiculus. Fermentum
          dictum quis cursus quisque nibh integer ipsum. Lacus sit parturient vitae aliquet dolor.
          Rhoncus neque pharetra facilisis ut tellus lacus id. Augue nunc semper metus integer diam
          egestas risus. Lorem ipsum dolor sit amet consectetur. Orci amet sodales et tellus
          consequat senectus tincidunt. Mauris et sapien amet sed vitae ullamcorper neque. Egestas
          nunc id tortor purus purus aliquet facilisi. Venenatis id amet sollicitudin vel. Commodo
          augue mattis hac aliquam at. Dictumst sagittis felis sed rhoncus. Est nisl at commodo
          tellus sit eleifend a risus. Et tellus faucibus ut pharetra quis et quisque egestas. Eu in
          eget ut iaculis ut. Semper diam tellus dictum odio duis. Purus ut malesuada morbi integer
          sit in metus augue quam. Lobortis massa vestibulum dictumst massa erat mattis risus
          aliquam. Et convallis porttitor phasellus elit diam commodo erat. Nibh duis nibh congue
          turpis eget turpis facilisi amet. Pharetra mauris orci tempus arcu ac curabitur sed
          ridiculus. Fermentum dictum quis cursus quisque nibh integer ipsum. Lacus sit parturient
          vitae aliquet dolor. Rhoncus neque pharetra facilisis ut tellus lacus id. Augue nunc
          semper metus integer diam egestas risus.
        </p>
      </div>

      <div className="py-15 md:py-25">
        <h2 className="news-h2">{t('anotherNews')}</h2>
        <NewsList locale={locale} data={Array.from({ length: 3 })} />
      </div>
    </SinglePageWrapper>
  );
}
