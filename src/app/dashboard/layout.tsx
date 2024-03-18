import React from 'react';

type LayoutProps = React.PropsWithChildren<{}>;

const layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <div>This is a mock navbar</div>
      <div>{children}</div>
    </>
  );
};

export default layout;
