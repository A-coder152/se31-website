# SE31 Nest

**Tagline:** Our cohort, all in one place.

## Visit Site

Access the live site here: [SE31 Nest](https://advancedforge.github.io/se31-website/)

## Purpose

SE31 Nest is an open-source, unofficial home for the University of Waterloo Software Engineering Class of 2031. It brings together:
- A public landing page for the cohort.
- A source-linked record of important dates and trusted Waterloo links.
- A skimmable guide to the six 1A courses, based on archived outlines.
- A section-aware Fall 2026 timetable based on official listings and cohort-supplied Quest rows, while keeping each student’s Quest schedule authoritative.
- A shared cohort home that students can improve as we grow.

## Important Disclaimer

**Unofficial student-run project. Not affiliated with the University of Waterloo.**
Please verify all academic and administrative deadlines and information through official University of Waterloo sources.

## Features

-   **Identity:** A cozy, teal-forward palette and friendly typography drawn from the original SE31 favicon, plus a responsive light/dark interface.
-   **Home Page:** Current milestones, the next action, timetable status, all six 1A courses, official shortcuts, and a contribution CTA.
-   **Courses:** Six detailed, navigable guides that summarize archived Fall 2025 Waterloo outlines and link back to the source.
-   **Deadlines Page:** Chronological list of upcoming and past deadlines with live countdowns, categories, sources, and verification status.
-   **Timetable Page:** A section-aware Fall 2026 typical week, personalized tutorial rooms, and a separate chronological list of tests and additional meetings.
-   **Resources Page:** Curated directory of links grouped by category, with clear source indicators.
-   **Contribute:** A practical guide to improving content, features, design, and accessibility.
-   **Tech Stack:** Astro, TypeScript, Tailwind CSS.
-   **Deployment:** Static site generation, compatible with GitHub Pages.
-   **Maintainability:** Easy for incoming students to contribute via GitHub pull requests.
-   **Design:** Responsive, accessible, dark-mode ready, and shaped around a playful identity that belongs to the cohort.

## Local Setup Instructions

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (LTS version recommended)
-   npm (Node Package Manager)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AdvancedForge/se31-website.git
    cd se31-website
    ```
2.  **Install NPM packages:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The site should now be accessible at `http://localhost:4321`.

## How to Contribute

We welcome contributions from members of the SE31 cohort! Please see our dedicated [CONTRIBUTING.md](CONTRIBUTING.md) guide for detailed instructions.

**Quick links:**
-   [View Repository](https://github.com/AdvancedForge/se31-website)
-   [Open an Issue](https://github.com/AdvancedForge/se31-website/issues/new/choose)
-   [Submit a Pull Request](https://github.com/AdvancedForge/se31-website/compare)

## Deployment

This site is designed for static site deployment, such as GitHub Pages.

To build the project for production:
```bash
npm run build
```
The output will be in the `dist/` directory.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Code of Conduct

Please review our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for expectations on behavior and contributions.
