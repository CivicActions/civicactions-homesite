# CivicActions.com - CivicActions home site

Our home site is live at https://civicactions.com please check it out and bookmark that page if you do that.

## Related resources

[The official react docs](https://react.dev/learn)

[Intro to Gatsby](https://www.gatsbyjs.com/docs/tutorial/)

[Gatsby config](https://www.gatsbyjs.com/docs/reference/config-files/)

[Using Gatsby with Strapi](https://strapi.io/blog/build-a-static-blog-with-gatsby-and-strapi)

## Gatsby and Strapi integration

[Strapi Quick-start guide](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#_1-install-strapi-and-create-a-new-project)

## Getting Started

1. First follow the instructions in the [Git Workflow Doc](docs/GIT_WORKFLOW.md).
1. Make sure you are using a version of node that is at least 18.0.0 `$ node --version` — see [how to update node](https://phoenixnap.com/kb/update-node-js-version) if needed.
1. Run `yarn install`
1. Verify the lockfile integrity with `yarn run lint:lockfile`
1. Confirm `.env.development` exists with the correct credentials from Owen.

   ```dotenv
   STRAPI_TOKEN=your_strapi_token_here
   STRAPI_API_URL=https://your-strapi-instance.example.com
   ```

1. `yarn build` runs Gatsby in the production environment (`NODE_ENV=production`), so local builds read from `.env.production`. If you want to use the same local Strapi credentials as development, you can copy `.env.development` to `.env.production`.

1. Run `yarn build`.

   If the build fails due to stale Gatsby artifacts, run a clean build instead:

   ```bash
   yarn clean && yarn build
   ```

1. Run `yarn start`.

## Managing Dependencies

When adding or updating dependencies, verify the lockfile integrity afterwards:

```bash
yarn run lint:lockfile
```

## Accessibility

Check out our [Accessibility statement](https://civicactions.com/accessibility-statement) on the site and feel free to reach out to us there. Alternatively since you're already on GitHub, feel free to submit an issue or a PR. Accessibility is important to us, and this means we try to go beyond WCAG 2.1 AA and build a good customer experience for our clients.
