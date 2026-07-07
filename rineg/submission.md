# Personal Portfolio Website

## Written Description

My project is a personal portfolio website created for the course assignment. The site introduces me, describes my web design goals, displays my course projects, and provides a contact section. It was built with HTML, CSS, and JavaScript.

The website includes the required main sections:

- **About Me:** introduces who I am and what I am learning.
- **Projects:** shows my course projects using project cards.
- **Contact:** includes a labeled contact form with name, email, and message fields.
- **Extras:** clearly lists and demonstrates the four extras used in the project.

## Four Extras Demonstrated

1. **Responsive navigation menu**  
   The navigation menu works on desktop and changes into a mobile menu on smaller screens.

2. **CSS animation and hover effects**  
   Buttons and project cards include hover effects. The hero card also uses a simple floating CSS animation.

3. **Contact form**  
   The contact section includes a form with accessible labels for name, email, and message.

4. **Image gallery or project cards**  
   The projects section uses visual project cards with colored preview areas and links to my course work.

## Responsive Design Evidence

The website uses a mobile-first layout and media queries. On small screens, content stacks vertically and the navigation becomes a toggle menu. On tablet and desktop sizes, the projects and about cards display in multiple columns.

Responsive CSS features used:

- `meta viewport` tag
- flexible widths using percentages and `min()`
- CSS Grid layouts
- media queries at 760px and 900px
- mobile navigation menu

## W3C Validator Compliance

The site was written with semantic HTML and valid structure, including:

- `<!DOCTYPE html>` declaration
- language attribute on the `html` element
- `meta charset` and viewport tags
- semantic elements such as `header`, `nav`, `main`, `section`, `article`, `form`, and `footer`
- accessible form labels
- alt-style descriptions for visual project previews through `role="img"` and `aria-label`

I checked the HTML and CSS with the W3C Validator and made sure there were no validation errors.

## Styling Evidence

The CSS file includes:

- custom color variables
- responsive layout rules
- card styling with borders, shadows, and rounded corners
- hover and focus states
- accessible focus outlines
- reduced motion support with `prefers-reduced-motion`

## Site Link

If GitHub Pages is enabled, the portfolio link is:

https://huyqd171.github.io/WD4E-Assignments/rineg/
