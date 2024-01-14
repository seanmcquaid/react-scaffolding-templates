import type { PropsWithChildren } from 'react';
import LoadingSpinner from '../ui/LoadingSpinner';
import PageError from './PageError';

interface PageWrapperProps extends PropsWithChildren {
  isLoading?: boolean;
  isError?: boolean;
  errorText?: string;
  errorTitleText?: string;
}

const PageWrapper = ({
  children,
  isLoading,
  isError,
  errorText,
  errorTitleText,
}: PageWrapperProps) => {
  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return <PageError errorText={errorText} titleText={errorTitleText} />;
  }

  return <div className="flex h-full w-full p-8 flex-col">{children}</div>;
};

export default PageWrapper;
