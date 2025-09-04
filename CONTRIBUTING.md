# Contributing to IEEE Student Branch Website

Thank you for your interest in contributing to the IEEE Student Branch website! We welcome contributions from everyone.

## How to Contribute

### Reporting Issues

1. Check if the issue already exists in our [Issues](https://github.com/ayushsingh08-ds/ieee-its-2025-website/issues)
2. If not, create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Making Changes

1. **Fork the repository**

   ```bash
   git fork https://github.com/ayushsingh08-ds/ieee-its-2025-website.git
   ```

2. **Clone your fork**

   ```bash
   git clone https://github.com/yourusername/ieee-its-2025-website.git
   cd ieee-its-2025-website
   ```

3. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Install dependencies**

   ```bash
   npm install
   ```

5. **Make your changes**

   - Follow the existing code style
   - Add comments for complex logic
   - Test your changes locally

6. **Test your changes**

   ```bash
   npm start    # Development server
   npm run build # Production build
   ```

7. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: describe your changes"
   ```

8. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

9. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your feature branch
   - Fill out the PR template

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use Tailwind CSS for styling
- Add inline styles as fallbacks when needed
- Keep components small and focused

### Commit Messages

Follow conventional commits format:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `ci:` for CI/CD changes

### File Structure

```
src/
├── components/     # React components
├── App.tsx        # Main application
├── App.css        # Global styles
└── index.tsx      # Entry point
```

## Getting Help

- Check the [README.md](README.md) for setup instructions
- Browse existing [Issues](https://github.com/ayushsingh08-ds/ieee-its-2025-website/issues)
- Create a new issue if you're stuck

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
