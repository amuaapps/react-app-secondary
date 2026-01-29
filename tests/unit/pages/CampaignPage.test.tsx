import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CampaignPage } from '@/pages/CampaignPage';

describe('CampaignPage', () => {
  it('renders the campaign header', () => {
    render(<CampaignPage />);

    expect(
      screen.getByText('Every Child Deserves a Bright Future')
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Join us in providing quality education and resources/i)
    ).toBeInTheDocument();
  });

  it('renders the mission section', () => {
    render(<CampaignPage />);

    expect(screen.getByText('Our Mission')).toBeInTheDocument();
    expect(
      screen.getByText(
        /We believe every child, regardless of their circumstances/i
      )
    ).toBeInTheDocument();
  });

  it('renders impact statistics', () => {
    render(<CampaignPage />);

    expect(screen.getByText('Our Impact')).toBeInTheDocument();
    expect(screen.getByText('5,000+')).toBeInTheDocument();
    expect(screen.getByText('Children Helped')).toBeInTheDocument();
    expect(screen.getByText('50+')).toBeInTheDocument();
    expect(screen.getByText('Schools Supported')).toBeInTheDocument();
    expect(screen.getByText('95%')).toBeInTheDocument();
    expect(screen.getByText('Graduation Rate')).toBeInTheDocument();
  });

  it('renders the program benefits list', () => {
    render(<CampaignPage />);

    expect(screen.getByText('What We Provide')).toBeInTheDocument();
    expect(
      screen.getByText(/School supplies and textbooks for every student/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/After-school tutoring and homework help/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Mentorship programs connecting students with role models/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Technology access and digital literacy training/i)
    ).toBeInTheDocument();
  });

  it('renders the email signup form', () => {
    render(<CampaignPage />);

    expect(screen.getByText('Stay Connected')).toBeInTheDocument();
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Join Our Mission/i })
    ).toBeInTheDocument();
  });

  it('renders success story section', () => {
    render(<CampaignPage />);

    expect(screen.getByText('Success Story')).toBeInTheDocument();
    expect(
      screen.getByText(/This program changed my life/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Maria, Program Graduate/i)).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    render(<CampaignPage />);

    const nameInput = screen.getByLabelText('Your Name');
    const emailInput = screen.getByLabelText('Email Address');
    const submitButton = screen.getByRole('button', {
      name: /Join Our Mission/i,
    });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.click(submitButton);

    expect(submitButton).toHaveTextContent('Submitting...');
    expect(submitButton).toBeDisabled();

    await waitFor(
      () => {
        expect(
          screen.getByText('Thank you for joining us!')
        ).toBeInTheDocument();
      },
      { timeout: 2000 }
    );

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
  });

  it('disables form inputs while submitting', async () => {
    render(<CampaignPage />);

    const nameInput = screen.getByLabelText('Your Name');
    const emailInput = screen.getByLabelText('Email Address');
    const submitButton = screen.getByRole('button', {
      name: /Join Our Mission/i,
    });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.click(submitButton);

    expect(nameInput).toBeDisabled();
    expect(emailInput).toBeDisabled();
    expect(submitButton).toBeDisabled();

    await waitFor(
      () => {
        expect(nameInput).not.toBeDisabled();
      },
      { timeout: 2000 }
    );
  });

  it('requires name and email fields', () => {
    render(<CampaignPage />);

    const nameInput = screen.getByLabelText('Your Name');
    const emailInput = screen.getByLabelText('Email Address');

    expect(nameInput).toBeRequired();
    expect(emailInput).toBeRequired();
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('shows privacy notice', () => {
    render(<CampaignPage />);

    expect(
      screen.getByText(
        /By signing up, you'll receive updates about our programs/i
      )
    ).toBeInTheDocument();
  });

  it('renders hero image with alt text', () => {
    render(<CampaignPage />);

    const heroImage = screen.getByAltText('Children learning together');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute(
      'src',
      expect.stringContaining('unsplash.com')
    );
  });

  it('renders all campaign images with alt text', () => {
    render(<CampaignPage />);

    expect(
      screen.getByAltText('Children learning together')
    ).toBeInTheDocument();
    expect(screen.getByAltText('Children in classroom')).toBeInTheDocument();
    expect(screen.getByAltText('Student success')).toBeInTheDocument();
  });

  it('renders call-to-action button', () => {
    render(<CampaignPage />);

    const ctaButton = screen.getByRole('button', {
      name: /Visit Our Website/i,
    });
    expect(ctaButton).toBeInTheDocument();
  });

  it('hides success message after timeout', async () => {
    jest.useFakeTimers();
    render(<CampaignPage />);

    const nameInput = screen.getByLabelText('Your Name');
    const emailInput = screen.getByLabelText('Email Address');
    const submitButton = screen.getByRole('button', {
      name: /Join Our Mission/i,
    });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(
      () => {
        expect(
          screen.getByText('Thank you for joining us!')
        ).toBeInTheDocument();
      },
      { timeout: 2000 }
    );

    jest.advanceTimersByTime(5000);

    await waitFor(() => {
      expect(
        screen.queryByText('Thank you for joining us!')
      ).not.toBeInTheDocument();
    });

    jest.useRealTimers();
  });
});
