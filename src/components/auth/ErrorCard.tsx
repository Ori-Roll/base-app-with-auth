import { AuthCardWrapper } from './AuthCardWrapper';

type ErrorCardProps = {
  error?: string;
};

export const ErrorCard = (props: ErrorCardProps) => {
  const { error } = props;

  return (
    <AuthCardWrapper
      headerLabel={'Something went wrong!'}
      bottomOptionButtonLabel={'Back to login'}
      bottomOptionHref={'/auth/login'}
      showSocial={false}
    >
      {/* <CardHeader>
        <CardContent>CONTENT</CardContent>
        <CardFooter>FOOTER</CardFooter>
      </CardHeader>
      !!!ERROR!!! */}
    </AuthCardWrapper>
  );
};
