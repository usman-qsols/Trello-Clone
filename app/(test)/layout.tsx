const layoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-yellow-500">
      <h1>This is layout</h1>
      <div>{children}</div>
    </div>
  );
};

export default layoutPage;
