![Logo of Magma](public/logo.png)

# magma-design-system-test: UI Component Library for Magma

This codebase contains our UI component library. It is a comprehensive collection of Vue-based UI components that are designed to be reusable across different projects.

## Publishing magma-design-system-test's Package

After adding or changing components, you can publish the package to npm by following these steps:

1. Update the version number in `package.json`.
2. Run `npm run build` to build the package.
3. Run `npm publish` to publish the package to npm.
4. Update `magma-design-system-test` in `magma-front-test-2024` codebase to the new version.

## Storybook

Along with the UI components, this codebase also includes a Storybook. Storybook is an open-source tool for developing UI components in isolation.

We use storybook to document our UI components and to test them in different states.

To run the Storybook, run `npm run storybook` and navigate to `http://localhost:6006/`.
