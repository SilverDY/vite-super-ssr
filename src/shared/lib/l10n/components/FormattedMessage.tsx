import React, { CSSProperties } from 'react';
import { MessageDescriptor, FormattedMessage as ReactIntlFormattedMessage } from 'react-intl';

export type FormattedMessageProps = MessageDescriptor & {
  style?: CSSProperties;
  values?: { [key: string]: string | number };
};

export const FormattedMessage: React.FC<FormattedMessageProps> = ({ style, ...props }) => {
  const renderMessage = () => {
    return <ReactIntlFormattedMessage {...props}>{(txt) => <>{txt}</>}</ReactIntlFormattedMessage>;
  };

  if (style) {
    return <span style={style}>{renderMessage()}</span>;
  }

  return renderMessage();
};
