import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PlaceholderPage } from '@/pages/PlaceholderPage';

const renderWithRouter = (ui: React.ReactElement, initialEntries = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>
  );
};

describe('PlaceholderPage', () => {
  it('renders the page title', () => {
    renderWithRouter(<PlaceholderPage />);
    expect(screen.getByText(/Secondary App Placeholder/i)).toBeInTheDocument();
  });

  it('displays the current path with basePath', () => {
    renderWithRouter(<PlaceholderPage basePath="/secondary" />);
    expect(screen.getByText('/secondary/')).toBeInTheDocument();
  });

  it('calls onNavigate when navigation button is clicked', () => {
    const mockNavigate = jest.fn();
    renderWithRouter(
      <PlaceholderPage basePath="/secondary" onNavigate={mockNavigate} />
    );

    const button = screen.getByText('Navigate to /secondary');
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith('/secondary');
  });

  it('allows custom path navigation', () => {
    const mockNavigate = jest.fn();
    renderWithRouter(
      <PlaceholderPage basePath="/secondary" onNavigate={mockNavigate} />
    );

    const input = screen.getByPlaceholderText('/secondary/custom');
    const goButton = screen.getByText('Go');

    fireEvent.change(input, { target: { value: '/secondary/custom-path' } });
    fireEvent.click(goButton);

    expect(mockNavigate).toHaveBeenCalledWith('/secondary/custom-path');
  });

  it('has accessible headings and landmarks', () => {
    renderWithRouter(<PlaceholderPage basePath="/secondary" />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: /Current Route/i })
    ).toBeInTheDocument();
  });
});
