import React from 'react';

type LayoutProps = React.PropsWithChildren<{}>;

const layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className="h-full flex items-center justify-center bg-slate-500">
      {children}
    </div>
  );
};

export default layout;
