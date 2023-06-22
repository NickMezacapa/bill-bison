import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { DefaultSeo } from 'next-seo';
import { SeoConfig } from 'next-seo.config';

import { api } from "~/utils/api";

import ThemeLayout from '~/components/theme/ThemeLayout';
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeLayout>
        <DefaultSeo {...SeoConfig} />
        <main className='relative overflow-hidden'>
          <Component {...pageProps} />
        </main>
      </ThemeLayout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
