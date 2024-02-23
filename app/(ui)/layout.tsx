import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

export default function UiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />

        <div className="flex h-full pt-12 mt-0.5">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
