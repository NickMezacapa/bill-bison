import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import clsx from 'clsx';

interface LayoutProps {
    children: React.ReactNode;
    classNames?: string;
}

const ThemeLayout = ({ children, classNames }: LayoutProps) => {
    return (
    <>
    <Head>
        <title>SplitMe - Split Bills with Friends</title>
        <meta name='description' content='The quickest way to split a bill with friends leveraging the capabilties of AI.' />
        <meta name='keywords' content='SplitMe, Split, Bill, Friends, AI, Artificial Intelligence, Machine Learning, ML, Next.js, React, TypeScript, TailwindCSS, Vercel, Serverless, Serverless Functions, Serverless Functions, Serverless API, Serverless APIs.' />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
    </Head>
    <ThemeProvider enableSystem={true} attribute='class'>
        <section className={clsx(`h-auto min-h-screen w-screen max-w-full dark:bg-[#202125] bg-[#f6f5f8] text-[#eee] transition ease ${classNames || ''} MainApp`)}>
            {children}
        </section>
    </ThemeProvider>
    </>
    );
};

export default ThemeLayout;
