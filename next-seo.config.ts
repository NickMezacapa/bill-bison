import { type DefaultSeoProps } from 'next-seo';

export const SeoConfig: DefaultSeoProps = {
    title: 'SplitMe - Split bills with friends',
    description: 'SplitMe is the fastest way to split a bill with friends.',
    openGraph: {
        title: 'SplitMe - Split bills with friends',
        type: 'website',
        locale: 'en_IE',
        url: 'https://splitme.dev/',
        siteName: 'SplitMe - Split bills with friends',
        profile: {
            firstName: 'SplitMe',
            lastName: '',
        },
        description: 'SplitMe is the fastest way to split a bill with friends.',
    },
    twitter: {
        handle: '@splitmeapp',
        site: '@splitmeapp',
        cardType: 'summary_large_image',
    },
};
