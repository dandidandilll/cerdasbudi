# Chapter 5: Theming (Dark Mode)

Welcome back, future CerdasBudi expert! In [Chapter 4: Global Music Playback System](04_global_music_playback_system_.md), we explored how CerdasBudi provides a seamless background music experience that continues playing no matter which part of the app you're using. We learned about the central "music brain" and the "global speaker" that make this possible.

Now, let's talk about something that can drastically change how you experience CerdasBudi: **Theming**, specifically **Dark Mode**. Imagine you're using an app late at night, and the bright white screen is straining your eyes. Wouldn't it be great if you could just flip a switch and have the entire app's colors change to a darker, more comfortable palette? That's exactly what Theming (Dark Mode) allows you to do in CerdasBudi!

### What is Theming (Dark Mode)?

Think of your CerdasBudi application like a house, and Theming is like a **master light switch that changes the ambiance of every room in the house.**

*   **Description:** This feature controls the overall visual appearance of the application, specifically allowing users to switch between a light and a dark theme. It remembers your preference and applies the corresponding styles across the entire app, providing a comfortable viewing experience.

**The main problem it solves:** How do we allow users to customize the app's visual comfort (especially for their eyes), by switching between a bright "light mode" and a darker "dark mode," and make sure this preference is remembered and applied everywhere?

**Our Goal for this Chapter:** By the end of this chapter, you'll understand how CerdasBudi lets you switch to dark mode, how it applies these visual changes across all screens, and how it remembers your choice for next time.

### Key Concepts: Making the App Change its Look

To achieve this "master light switch" effect, CerdasBudi uses a few clever concepts:

1.  **A Global Theme Controller (ThemeContext):** Instead of each part of the app trying to figure out if it should be light or dark, there's one central "brain" called `ThemeContext`. This brain knows the current theme choice (light or dark) and can tell other parts of the app about it. It also has a special button to toggle the theme.
2.  **Remembering Your Choice (`localStorage`):** CerdasBudi uses your device's `localStorage` (a simple browser memory) to save your dark mode preference. So, if you choose dark mode, close the app, and open it later, it will still be in dark mode!
3.  **Applying Styles (CSS Classes):** CerdasBudi uses a styling system called **Tailwind CSS**. For dark mode, it simply adds a special "dark" label (a CSS class named `dark`) to the very top `<html>` element of the web page. When this `dark` class is present, Tailwind CSS automatically knows to use darker colors for backgrounds, texts, and other elements.

### How to Use It: Toggling Dark Mode

You can toggle dark mode from two main places in CerdasBudi:

1.  **From the Landing Pages:** If you're on the home page or information pages (like `/info`), there's a moon/sun icon in the top navigation bar.
2.  **From the Settings Page:** Within the main application (the chat, music, settings area), you can find a dedicated toggle switch in the "Setting" tab.

Let's see how clicking these buttons changes the theme.

#### 1. Toggling from the Top Navigation (`src/components/Navigation.tsx`)

The navigation bar on the landing pages provides a quick way to switch themes.

```typescript
// src/components/Navigation.tsx (simplified)
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext'; // Our theme controller

const Navigation = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Get theme info & toggle function

  return (
    <nav className="...">
      {/* ... other navigation items ... */}
            
      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode} // Call the toggle function when clicked
        className="p-2 rounded-lg text-gray-600 dark:text-gray-300 ..."
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />} {/* Show Sun if dark, Moon if light */}
      </button>
      {/* ... */}
    </nav>
  );
};
```

**Explanation:**
This code snippet shows a button that changes its icon based on the current `isDarkMode` status. When you click it, it calls the `toggleDarkMode` function, which is responsible for actually switching the theme. Both `isDarkMode` and `toggleDarkMode` come from our `ThemeContext` (which we'll explore shortly).

#### 2. Toggling from the Settings Page (`src/components/SettingsPage.tsx`)

Inside the main CerdasBudi app, the "Setting" tab (which you learned about in [Chapter 3: User Onboarding & Settings](03_user_onboarding___settings_.md)) also has a dedicated switch for dark mode.

```typescript
// src/components/SettingsPage.tsx (simplified)
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext'; // Our theme controller

const SettingsPage: React.FC<SettingsPageProps> = ({ /* ... other props ... */ }) => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Get theme info & toggle function

  return (
    <div className="...">
      {/* ... other settings sections ... */}

      {/* Dark Mode Setting */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-gray-800 dark:text-white">Mode Gelap</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Ubah tema aplikasi</p>
        </div>
        <button
          onClick={toggleDarkMode} // Call the toggle function when clicked
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            isDarkMode ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
          }`}
        >
          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform flex items-center justify-center ${
            isDarkMode ? 'translate-x-6' : 'translate-x-1'
          }`}>
            {isDarkMode ? (
              <Moon className="w-2 h-2 text-purple-600" /> // Show Moon if dark
            ) : (
              <Sun className="w-2 h-2 text-yellow-500" /> // Show Sun if light
            )}
          </span>
        </button>
      </div>
      {/* ... */}
    </div>
  );
};
```

**Explanation:**
Similar to the navigation bar, the `SettingsPage` uses `isDarkMode` to show the current state of the switch and calls `toggleDarkMode` when the switch is clicked. This ensures that no matter where you toggle the theme, it behaves consistently.

### Under the Hood: How Theming Works its Magic

Now, let's peek behind the curtain to understand how CerdasBudi actually changes its appearance when you flip that switch.

#### The Flow: From Click to New Look

```mermaid
sequenceDiagram
    participant User
    participant ThemeToggleComponent (e.g., SettingsPage, Navigation)
    participant ThemeContext
    participant LocalStorage
    participant Browser_DOM

    User->>ThemeToggleComponent: 1. Clicks "Dark Mode" toggle
    ThemeToggleComponent->>ThemeContext: 2. Calls `toggleDarkMode()`
    ThemeContext->>ThemeContext: 3. Updates `isDarkMode` state (e.g., from false to true)
    ThemeContext->>LocalStorage: 4. Saves `isDarkMode` preference
    ThemeContext->>Browser_DOM: 5. Adds/Removes "dark" class on `<html>` tag
    Browser_DOM->>User: 6. Applies dark mode styles to entire app
    Note over ThemeContext: All components using ThemeContext re-render
```

**Step-by-step walkthrough:**

1.  **You click the "Dark Mode" toggle** button (either in Settings or the top navigation).
2.  The button tells the **`ThemeContext`** to switch the theme by calling its `toggleDarkMode()` function.
3.  The **`ThemeContext`** updates its internal `isDarkMode` state (for example, from `false` to `true` if you're switching to dark mode).
4.  Immediately, the `ThemeContext` saves this new `isDarkMode` preference to your browser's **`LocalStorage`**. This is how CerdasBudi remembers your choice even after you close and reopen the app.
5.  Crucially, the `ThemeContext` also directly tells the **Browser's Document Object Model (DOM)** – specifically the very top `<html>` tag of your web page – to either `add` or `remove` a special CSS class named `dark`.
6.  Because this `dark` class is now on the `<html>` tag, **Tailwind CSS** (our styling library) sees it and automatically applies all its "dark mode" styles (like `dark:bg-gray-900`, `dark:text-white`) to every part of the application. This instantly changes the app's entire look, and **you see the new theme!**

#### Core Components and Data Flow

Let's look at the actual code that makes this "master light switch" possible, primarily in `src/contexts/ThemeContext.tsx` and how it's used.

#### 1. The Theme Context (`src/contexts/ThemeContext.tsx`)

This file is the brain of our theming system. It uses a special React feature called "Context" to make `isDarkMode` and `toggleDarkMode` available to any component that needs them, without having to pass them down manually through many layers.

```typescript
// src/contexts/ThemeContext.tsx

import React, { createContext, useContext, useEffect, useState } from 'react';

// 1. Define what our Theme Context will provide
interface ThemeContextType {
  isDarkMode: boolean; // Is dark mode currently active?
  toggleDarkMode: () => void; // Function to switch theme
}

// 2. Create the Context itself
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Custom Hook to easily use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// 4. The Provider component that holds the theme logic
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State to hold the current dark mode status
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Try to load saved preference from localStorage
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved); // Use saved preference if found
    }
    // Otherwise, check user's system preference (e.g., Windows Dark Mode)
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Effect to save preference and apply CSS class whenever isDarkMode changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode)); // Save to localStorage
    
    // Add/remove 'dark' class to the <html> tag
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]); // This effect runs whenever isDarkMode changes

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode); // Flip the switch!
  };

  return (
    // Make isDarkMode and toggleDarkMode available to all children
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

**Explanation:**
*   **`ThemeContextType`**: This is like a blueprint telling us what information (a `boolean` for `isDarkMode` and a function `toggleDarkMode`) our theme system will provide.
*   **`createContext`**: This line actually creates the "context" which is like a container for our theme information.
*   **`useTheme` Hook**: This is a convenient shortcut. Any component that wants to know the current theme or change it can just `useTheme()` instead of writing long code.
*   **`ThemeProvider`**: This is the most important part. You "wrap" your entire application (or the parts that need theming) with `ThemeProvider`.
    *   It uses `useState` to keep track of whether `isDarkMode` is true or false. When the app first loads, it checks your `localStorage` to see if you saved a preference before. If not, it checks your computer's system settings (e.g., if your Windows/macOS is in dark mode).
    *   The `useEffect` here is like a watchful assistant. Whenever `isDarkMode` changes, it automatically does two things:
        1.  It saves the new `isDarkMode` value to `localStorage`.
        2.  It adds or removes the `dark` class from the `<html>` element of your web page. This is the magic trigger for Tailwind CSS.
    *   The `toggleDarkMode` function simply flips the `isDarkMode` state from true to false or vice versa.
*   **`<ThemeContext.Provider>`**: This wraps your app's content, making the `isDarkMode` value and `toggleDarkMode` function accessible to all components inside it.

#### 2. Wrapping the Application with `ThemeProvider` (`src/App.tsx`)

For the `ThemeContext` to work, the main `App` component needs to "provide" the theme context to all its children. This is done by wrapping the relevant parts of the application with `ThemeProvider`.

```typescript
// src/App.tsx (simplified)
import React, { useState, useEffect, useRef } from 'react';
// ... other imports ...
import { ThemeProvider } from './contexts/ThemeContext'; // Import our ThemeProvider

function App() {
  // ... other state and logic ...

  // NOTE: The App component's internal settings state for `darkMode`
  // and its corresponding useEffect for `document.documentElement.classList`
  // are now conceptually handled by ThemeProvider.
  // The `settings` state in App.tsx might still exist for other app settings.

  if (!isOnboarded) {
    return <OnboardingPage onComplete={handleOnboardingComplete} />;
  }

  return (
    // Wrap the entire application (except onboarding) with ThemeProvider
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex flex-col transition-colors duration-300">
        {/* Fixed Header */}
        <header className="..."></header>

        {/* Main Content */}
        <main className="..."></main>

        {/* Fixed Bottom Navigation */}
        <nav className="..."></nav>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

**Explanation:**
By putting `<ThemeProvider>` around the main content, any component inside the `ChatApp` (like `ChatPage`, `MusicPage`, `SettingsPage`) and any component in `LandingLayout` (if it's also wrapped by `ThemeProvider` higher up, like in `index.tsx`) can now use the `useTheme()` hook to access `isDarkMode` and `toggleDarkMode`.

#### 3. Tailwind CSS Integration (`tailwind.config.js` and `src/index.css`)

The final piece of the puzzle is how Tailwind CSS understands and applies the dark mode styles.

First, in your `tailwind.config.js`, you tell Tailwind how to detect dark mode:

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // <--- This line is key!
  theme: {
    extend: {
      // ... custom colors, fonts, animations ...
    },
  },
  plugins: [],
};
```

**Explanation:**
`darkMode: 'class'` tells Tailwind: "Look for a class named `dark` on the `<html>` tag (or any parent element). If you find it, use the `dark:` prefixed styles!"

Then, in your CSS (e.g., `src/index.css`), you can define base styles for light mode, and Tailwind automatically generates the dark mode versions when the `dark` class is present.

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* === GLOBAL BASE STYLE === */
body {
  font-family: 'Inter', sans-serif;
  /* ... other base styles ... */
}

@layer base {
  * {
    @apply border-border; /* Default border color for light mode */
  }

  body {
    @apply bg-background text-foreground; /* Default background/text for light mode */
  }

  /* This tells the browser about the color scheme */
  .dark {
    color-scheme: dark;
  }
}
```

Now, when you use Tailwind classes in your components, you can define specific styles for dark mode using the `dark:` prefix:

```html
<div class="bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
  This text will be dark on white in light mode, and white on dark gray in dark mode.
</div>
```

**Explanation:**
*   `bg-white text-gray-800`: These are the default styles (for light mode).
*   `dark:bg-gray-900 dark:text-white`: These styles will *only* apply when the `dark` class is present on the `<html>` tag (which our `ThemeContext` adds!). This means the background will change to `gray-900` and the text to `white` when dark mode is active.

This system makes it incredibly efficient to apply consistent theming across the entire application.

### Conclusion

You've now mastered the "master light switch" of CerdasBudi! You learned how the `ThemeContext` acts as a central control panel for managing dark mode, how your preference is saved using `localStorage`, and how Tailwind CSS magically applies the `dark:` styles across the entire app by simply adding a `dark` class to the `<html>` tag. This powerful yet simple system provides a customizable and comfortable viewing experience for all users.

Next, we'll dive into an even broader topic: how CerdasBudi manages all its important information and interactions across the entire application. Get ready for [Core Application State Management](06_core_application_state_management_.md)!

---

<sub><sup>Generated by [AI Codebase Knowledge Builder](https://github.com/The-Pocket/Tutorial-Codebase-Knowledge).</sup></sub> <sub><sup>**References**: [[1]](https://github.com/dandidandilll/cerdasbudi/blob/83bdae60d276e4ff7b5a2816de9d915f06e6666b/src/ChatApp.tsx), [[2]](https://github.com/dandidandilll/cerdasbudi/blob/83bdae60d276e4ff7b5a2816de9d915f06e6666b/src/components/Navigation.tsx), [[3]](https://github.com/dandidandilll/cerdasbudi/blob/83bdae60d276e4ff7b5a2816de9d915f06e6666b/src/components/SettingsPage.tsx), [[4]](https://github.com/dandidandilll/cerdasbudi/blob/83bdae60d276e4ff7b5a2816de9d915f06e6666b/src/contexts/ThemeContext.tsx), [[5]](https://github.com/dandidandilll/cerdasbudi/blob/83bdae60d276e4ff7b5a2816de9d915f06e6666b/src/index.css), [[6]](https://github.com/dandidandilll/cerdasbudi/blob/83bdae60d276e4ff7b5a2816de9d915f06e6666b/tailwind.config.js)</sup></sub>