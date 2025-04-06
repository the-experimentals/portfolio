import { render } from '@testing-library/react';
import App from "./App";

describe('App', () => {
    it('renders without crashing', () => {
        // This test is a placeholder to ensure the App component renders without crashing.
        // You can add more specific tests as needed.
        expect(true).toBe(true);
    })

    it('renders component', () => {
        render(<App />);
    })
})