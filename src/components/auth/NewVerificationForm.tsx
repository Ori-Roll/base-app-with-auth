'use client';

import React, { useCallback, useEffect } from 'react';
import { AuthCardWrapper } from './AuthCardWrapper';
import { useSearchParams } from 'next/navigation';
import { newVerification } from '@/actions/newVerification';
import { EmbeddedBanner } from '../ui/EmbeddedBanner/EmbeddedBanner';

type NewVerificationFormProps = {};

export const NewVerificationForm = (props: NewVerificationFormProps) => {
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);

  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const submitVerification = useCallback(async () => {
    if (success || error) return;

    if (!token) {
      setError('Invalid token');
      return;
    }
    try {
      const response = await newVerification(token);
      if (response.error) {
        setError(response.error);
      }
      if (response.success) {
        setSuccess(response.success);
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    }
    // I intentionally left out success and error from the dependencies. Their use is only of dev's strict mode rerendering issue.
    // Breaking the function should occur only if the component rerenders twice and not if the error and success state changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    submitVerification();
  }, [submitVerification]);

  return (
    <AuthCardWrapper
      headerLabel="Confirming your email address"
      bottomOptionButtonLabel="Back to Login"
      bottomOptionHref="/auth/login"
    >
      {!success && error && (
        <EmbeddedBanner header={'Error'} variant={'error'} message={error} />
      )}
      {success && <EmbeddedBanner variant={'confirmation'} message={success} />}
      {!error && !success && <div>Loading...</div>}
    </AuthCardWrapper>
  );
};
