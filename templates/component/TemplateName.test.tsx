import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { TemplateName } from './TemplateName';

describe('TemplateName', () => {
  test('renders templateName', () => {
    render(<TemplateName templateName="World" />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});
