# Contributing to SE31 Build Log

We welcome contributions from all members of the SE31 cohort! This guide will help you get started.

## How to Contribute

There are many ways you can contribute to this project:

1.  **Add/Update Content:**
    *   **Deadlines:** Add new important dates or update existing ones in `src/data/deadlines.ts`.
    *   **Resources:** Add useful links (academic, co-op, student life, dev tools) in `src/data/resources.ts`.
    *   **Courses:** Correct or clarify archived course guides in `src/data/courses.ts` without changing the source meaning.
    *   **Timetable:** Update the clearly labelled planning draft in `src/data/timetable.ts` as official information becomes available.
2.  **Improve Features:** Enhance existing features or propose new ones.
3.  **Fix Bugs:** Help us identify and resolve issues.
4.  **Improve Design/Accessibility:** Make the site more visually appealing and user-friendly.
5.  **Documentation:** Improve this guide, README, or other documentation.

## Getting Started

1.  **Fork the repository:** Click the "Fork" button on the GitHub repository page.
2.  **Clone your forked repository:**
    ```bash
    git clone [your-fork-url]
    cd se31-website
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Create a new branch:** Choose a descriptive name for your branch (e.g., `feature/add-new-resource`, `fix/deadline-typo`).
    ```bash
    git checkout -b your-branch-name
    ```
5.  **Make your changes:**
    *   Open the project in your favorite code editor.
    *   Run the development server to see your changes in real-time: `npm run dev`
    *   Ensure your changes adhere to existing code style and conventions.
    *   **Crucially, maintain TypeScript types defined in `src/data/types.ts` when modifying data files.**

## Submitting a Pull Request (PR)

1.  **Commit your changes:** Write clear and concise commit messages.
    ```bash
    git add .
    git commit -m "feat: Add new resource for AI tools"
    ```
2.  **Push your branch to GitHub:**
    ```bash
    git push origin your-branch-name
    ```
3.  **Open a Pull Request:**
    *   Go to your forked repository on GitHub.
    *   Click the "Compare & pull request" button.
    *   Provide a clear title and description for your PR, explaining the changes you made and why.
    *   Reference any related issues (e.g., `Fixes #123`).

## Contribution Policy

To ensure a safe and positive environment for everyone, please adhere to the following guidelines:

*   **No Private Information:** Do not submit any private personal information (yours or others').
*   **Verified Deadlines:** Only submit unofficial deadlines if you can provide a verifiable source.
*   **No Copyright Infringement:** Do not upload copyrighted course material or sensitive academic content.
*   **Respectful Conduct:** Be respectful and constructive in all interactions and contributions, as outlined in our [Code of Conduct](CODE_OF_CONDUCT.md).

Thank you for contributing to the SE31 Build Log!
