# Getting Started

## Prerequisites

Before running CerdasBudi, ensure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn package manager
- Modern web browser with JavaScript enabled

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dandidandilll/cerdasbudi.git
   cd cerdasbudi
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env file with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to start using CerdasBudi

## Usage

### First Time Setup
1. **Launch the Application**: Open CerdasBudi in your web browser
2. **Complete Onboarding**: Follow the guided setup to personalize your experience
3. **Set Preferences**: Configure your theme, notification, and privacy settings
4. **Start Chatting**: Begin your first conversation with the AI assistant

### Daily Use
- **Chat Interface**: Type or speak your thoughts and concerns to receive supportive responses
- **Music Player**: Use the global music player to enhance your mood during conversations
- **Settings**: Access user settings to modify preferences or view your progress
- **Theme Toggle**: Switch between light and dark mode based on your preference

# Contributing

We welcome contributions to make CerdasBudi even better! Here's how you can help:

## Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/your-username/cerdasbudi.git
   cd cerdasbudi
   ```

2. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/dandidandilll/cerdasbudi.git
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

5. **Make your changes and test thoroughly**
   ```bash
   npm run test
   npm run lint
   ```

6. **Commit your changes**
   ```bash
   git add .
   git commit -m 'Add amazing feature'
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

8. **Open a Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Fill out the PR template with details about your changes

## Development Guidelines

### Code Standards
- Follow the existing code style and conventions
- Use meaningful variable and function names
- Write clear, concise comments for complex logic
- Ensure code is properly formatted (use `npm run format`)

### Testing
- Write unit tests for new features
- Ensure all existing tests pass before submitting
- Test your changes across different browsers and devices
- Include manual testing steps in your PR description

### Commit Messages
Follow conventional commit format:
```
type(scope): description

feat(chat): add voice message functionality
fix(ui): resolve dark mode toggle issue
docs(readme): update installation instructions
```

## Areas for Contribution

### 🐛 Bug Fixes
- Report and fix bugs found in the application
- Improve error handling and user feedback
- Optimize performance bottlenecks

### ✨ New Features
- **AI Enhancements**: Improve chatbot responses and context understanding
- **Music Integration**: Add new therapeutic music features
- **Accessibility**: Improve app accessibility for users with disabilities
- **Mobile Experience**: Enhance mobile responsiveness and touch interactions

### 📝 Documentation
- Improve code documentation and comments
- Create user guides and tutorials
- Translate documentation to other languages
- Update API documentation

### 🌐 Internationalization
- Add support for new languages
- Improve existing translations
- Adapt cultural considerations for different regions

### 🧪 Testing & Quality
- Write comprehensive unit and integration tests
- Perform manual testing and report issues
- Improve code coverage
- Set up automated testing workflows

## Pull Request Process

1. **Check existing issues**: Look for related issues or discussions before starting work
2. **Discuss major changes**: For significant features, open an issue first to discuss the approach
3. **Keep PRs focused**: Submit one feature/fix per pull request
4. **Update documentation**: Include relevant documentation updates
5. **Add tests**: Ensure new code is properly tested
6. **Review feedback**: Be responsive to code review comments

## Code Review Guidelines

### For Contributors
- Be open to feedback and suggestions
- Explain your design decisions in PR descriptions
- Keep discussions constructive and professional
- Address all review comments promptly

### For Reviewers
- Provide constructive, specific feedback
- Focus on code quality, security, and maintainability
- Acknowledge good practices and improvements
- Be respectful and encouraging

## Getting Help

- **Discord/Slack**: Join our community chat for real-time help
- **GitHub Issues**: Use issue templates for bug reports and feature requests
- **Documentation**: Check existing docs and code comments
- **Mentorship**: Experienced contributors are available to help newcomers

## Recognition

Contributors will be recognized in:
- `CONTRIBUTORS.md` file
- Release notes for significant contributions
- Special mentions in project announcements

Thank you for contributing to CerdasBudi and helping make mental health support more accessible! 💙
