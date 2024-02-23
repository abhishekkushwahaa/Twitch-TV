interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <aside className="fixed left-0 flex mt-0 w-60 h-full bg-muted border-r z-50">
      {children}
    </aside>
  );
};
export default Wrapper;
