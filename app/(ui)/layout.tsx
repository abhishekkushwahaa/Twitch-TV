import { Suspense } from "react";
import { Container } from "./_components/container";
import { Navbar } from "./_components/navbar";
import { Sidebar, SidebarSkeleton } from "./_components/sidebar";

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
          <Suspense fallback={<SidebarSkeleton />}>
            <Sidebar />
          </Suspense>
          <Container>{children}</Container>
        </div>
      </body>
    </html>
  );
}
