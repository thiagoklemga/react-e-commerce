import { FC } from 'react';
import { RadioGroup as HeadlesUiRadioGroup } from '@headlessui/react';

interface RadioGroupProps {
  value: string;
  onChange: (value: string) => void;
  options: {
    value: string;
    label: string;
  }[];
  className?: string;
}

const { Label, Option } = HeadlesUiRadioGroup;

export const RadioGroup: FC<RadioGroupProps> = ({
  value,
  onChange,
  options,
  className,
}) => {
  return (
    <HeadlesUiRadioGroup
      value={value}
      onChange={onChange}
      className={className}
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {({ checked }) => (
            <Label className={checked ? 'text-blue-200' : ''}>
              {option.label}
            </Label>
          )}
        </Option>
      ))}
    </HeadlesUiRadioGroup>
  );
};
