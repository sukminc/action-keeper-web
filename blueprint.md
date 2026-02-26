# Action Keeper: Blueprint

This document outlines the project's mission, goals, and the design for its promotional website.

## Part 1: README.md Revision

To make the project's purpose clear to all audiences, I will add the following section to the top of the `README.md` file.

---

# Action Keeper

Action Keeper is a platform for creating, managing, and verifying poker staking agreements. Our mission is to bring trust, transparency, and simplicity to the world of poker staking, eliminating the confusion and disputes that can arise from informal deals.

**Our Goal:** To be the industry-standard tool for poker players and backers, providing a secure, non-custodial platform that standardizes agreements and provides tamper-evident proof of terms.

---

## Part 2: Promotional Website Plan

The existing "Lotto Generator" will be replaced with a modern, professional landing page to attract and inform potential users.

### **Design & Aesthetics V2 (Modern & Dynamic)**

*   **Theme:** Modern, clean, and trustworthy with a professional dark theme.
*   **Fonts:** A clean, sans-serif font like 'Inter' or 'Manrope' for readability.
*   **Visuals & Icons:** The generic icons will be replaced with **custom-designed, poker-themed SVG icons**. The hero section will feature a new **subtle, animated gradient background**.
*   **Interactivity & Animations:**
    *   **Scroll-to-Reveal:** Sections will smoothly fade and slide into view as the user scrolls.
    *   **Enhanced Hover Effects:** Feature cards will have a "lift and glow" effect on hover for better feedback.
    *   **Smooth Scrolling:** All anchor links will scroll smoothly.

### **Website Structure & Content**

The website will be a single-page layout with the following sections, with all content derived from the technical `README.md`:

1.  **Hero Section:**
    *   **Headline:** "Action Keeper: The Future of Poker Staking Agreements."
    *   **Sub-headline:** "Create, manage, and verify secure, tamper-evident staking deals. Focus on the game, not the handshake."
    *   **Call to Action (CTA):** A button labeled "Join the Waitlist."

2.  **Problem/Solution Section:**
    *   **Headline:** "Tired of Handshake Deals Gone Wrong?"
    *   **Content:** Briefly explain the risks of informal agreements (disputes, lack of proof) and how Action Keeper provides a clear, verifiable solution.

3.  **Key Features Section:**
    *   Showcases three core features with **new custom poker-themed icons** and brief descriptions.

4.  **Screenshot Loop Section:**
    *   **Headline:** "See It In Action."
    *   **Content:** A gallery that automatically loops through the generated screenshots of the application.

5.  **How It Works Section:**
    *   A simple, 3-step visual guide.

6.  **Footer & Final CTA:**
    *   A final "Join the Waitlist" section.
    *   Links to social media (placeholders).
    *   Copyright information.

### **Technical Implementation V2**

*   **HTML:** The `index.html` will be updated to include the new custom SVG icons.
*   **CSS:** The stylesheet will be updated with:
    *   An animated gradient background for the `.hero` section.
    *   Keyframe animations for the scroll-to-reveal effect (e.g., `fade-in-up`).
    *   Enhanced `transform` and `box-shadow` properties for the `.feature` card hover state.
*   **JavaScript:** The `main.js` file will be updated to include an `IntersectionObserver` to detect when elements are visible in the viewport and apply the animation classes.

This plan will result in a more dynamic and visually engaging promotional website.