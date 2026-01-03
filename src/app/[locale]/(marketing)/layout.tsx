import { setRequestLocale } from 'next-intl/server';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex-1">{props.children}</main>
      <Footer />
    </div>
  );
}
