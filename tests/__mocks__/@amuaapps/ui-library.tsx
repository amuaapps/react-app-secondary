import React from 'react';

// Mock ui-library components as simple pass-through components
export const Button = ({
  children,
  ...props
}: React.ComponentProps<'button'>) => <button {...props}>{children}</button>;

export const Card = ({ children, ...props }: React.ComponentProps<'div'>) => (
  <div {...props}>{children}</div>
);

export const CardHeader = ({
  children,
  ...props
}: React.ComponentProps<'div'>) => <div {...props}>{children}</div>;

export const CardTitle = ({
  children,
  ...props
}: React.ComponentProps<'h3'>) => <h3 {...props}>{children}</h3>;

export const CardDescription = ({
  children,
  ...props
}: React.ComponentProps<'p'>) => <p {...props}>{children}</p>;

export const CardContent = ({
  children,
  ...props
}: React.ComponentProps<'div'>) => <div {...props}>{children}</div>;

export const Input = (props: React.ComponentProps<'input'>) => (
  <input {...props} />
);

export const Label = ({
  children,
  ...props
}: React.ComponentProps<'label'>) => <label {...props}>{children}</label>;

export const Alert = ({ children, ...props }: React.ComponentProps<'div'>) => (
  <div role="alert" {...props}>
    {children}
  </div>
);

export const Badge = ({ children, ...props }: React.ComponentProps<'span'>) => (
  <span {...props}>{children}</span>
);

export const Separator = (props: React.ComponentProps<'hr'>) => (
  <hr {...props} />
);
