function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="box-border max-w-screen-lg px-8 pt-12 mx-auto">
      {children}
    </main>
  );
}

export default Page;
