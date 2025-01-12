import { render, screen } from '@testing-library/react';
import PageNavigation from './PageNavigation';

test('renders the previous, next and page numbers correctly', () => {
    render(<PageNavigation currentPage={2} updatePage={() => {}} numberOfPages={5} />);
    expect(screen.getByText('◀')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('▶')).toBeInTheDocument();
});

test('renders the next button and page numbers correctly', () => {
    render(<PageNavigation currentPage={1} updatePage={() => {}} numberOfPages={5} />);
    expect(screen.getByText('◀')).toHaveClass('disable');
    expect(screen.queryByText('6')).not.toBeInTheDocument();
    expect(screen.getByText('▶')).toBeInTheDocument();
});

test('renders the previous button and page numbers correctly', () => {
    render(<PageNavigation currentPage={5} updatePage={() => {}} numberOfPages={5} />);
    expect(screen.getByText('◀')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('▶')).toHaveClass('disable');
});
