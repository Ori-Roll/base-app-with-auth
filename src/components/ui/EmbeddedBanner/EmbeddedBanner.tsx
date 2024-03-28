import React from 'react';
import styles from './EmbeddedBanner.module.css';

type EmbeddedBannerVariant =
  | 'error'
  | 'warning'
  | 'notification'
  | 'confirmation';

type EmbeddedBannerProps = React.HTMLAttributes<HTMLDivElement> & {
  variant: EmbeddedBannerVariant;
  message?: string;
  header?: string;
};

const variantClassMap: Record<EmbeddedBannerVariant, string> = {
  error: 'error-banner',
  warning: 'warning-banner',
  notification: 'notification-banner',
  confirmation: 'confirmation-banner',
};

export const EmbeddedBanner = React.forwardRef<
  HTMLDivElement,
  EmbeddedBannerProps
>((props, ref) => {
  const { variant, message, header, className } = props;

  const bannerClassName = variantClassMap[variant];

  return (
    <div
      className={`${styles[bannerClassName]} ${styles.wrapper} ${className}`}
      ref={ref}
    >
      {header && <div className={styles.header}>{header}</div>}
      <div>{message}</div>
    </div>
  );
});

EmbeddedBanner.displayName = 'EmbeddedBanner';
