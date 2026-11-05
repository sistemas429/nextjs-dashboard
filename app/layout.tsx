import '@/app/ui/global.css'
import {inter} from '@/app/ui/fronts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"className={'${inter.classname}antialiased'}>
      <body>
        {children}</body>
    </html>
  );
}
