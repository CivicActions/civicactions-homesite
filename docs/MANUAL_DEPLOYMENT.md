# Manual Deployment of the Static Gatsby site

This site is currently manually deployed using Github pages. This will change when the codebase is converted to use automatic deployments.

The site is deployed with GitHub Pages by pusing the public folder with the static assets to the gh-pages branch in the [civicactions-homesite repo.](https://github.com/CivicActions/civicactions-homesite)

A custom script in package.json builds the site and moves the contents of the built files to the gh-pages branch.

## Deployment Steps:
1. Pull the latest code from the remote main branch `git pull --rebase prime main`.
1. Run `yarn install` to install packages.
1. Run `gatsby develop` and confirm that the site builds and displays as expected.
1. Run `gatsby build` to build the site.
1. Run `yarn deploy` to deploy the site.
1. Visit [the deployments page](https://github.com/CivicActions/civicactions-homesite/deployments/activity_log?environment=github-pages) to confirm the the site got deployed correctly.

