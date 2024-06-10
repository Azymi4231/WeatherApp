import '../theme/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen w-full flex-grow overflow-hidden bg-sky-100">
        {children}
      </body>
    </html>
  );
}
