import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

import { Poppins } from 'next/font/google';
// import { Roboto } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'], // choose what you need
});


// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '700'],
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} d-flex flex-column min-vh-100`}>

        <main className="flex-grow-1">
          {children}
        </main>

      </body>
    </html>
  );
}