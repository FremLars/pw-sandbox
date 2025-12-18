# Playwright-sandbox

## Installing Playwright
> npm init playwright@latest
You can re-run the command later; it does not overwrite existing tests.

### What´s installed
Playwright downloads required browser binaries and creates the scaffold below.

playwright.config.ts         # Test configuration
package.json
package-lock.json            # Or yarn.lock / pnpm-lock.yaml
tests/
example.spec.ts            # Minimal example test

The playwright.config centralizes configuration: target browsers, timeouts, retries, projects, reporters and more. In existing projects dependencies are added to your current package.json.

tests/ contains a minimal starter test.




## CMD commands
> $ npx playwright --help
    # Up to date list of commands and arguments available on the CLI

> $ npx playwright test [options] [test-filter...]
    Syntax


**$ npx playwright test**
  - Run all tests

**$ npx playwright test tests/login-page/todo.spec.ts**
  - Run a single test

Se dokumentasjon for flere kommandoer: https://playwright.dev/docs/test-cli