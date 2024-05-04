function UpdateUserLayout({ children }) {
  return (
    <div className="fixed bg-black/70 w-full h-full top-1/2 z-99 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-x-hidden flex items-center justify-center">
      {children}
    </div>
  );
}

export default UpdateUserLayout;
