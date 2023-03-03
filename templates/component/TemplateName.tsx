import { FC } from 'react';

interface TemplateNameProps {
  templateName?: string;
}

export const TemplateName: FC<TemplateNameProps> = ({ templateName }) => {
  return <div>Hello, {templateName}!</div>;
};
