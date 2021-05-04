# Git

A consistent git workflow enhances our organization and facilitates understanding across teams and time. The git
repository is managed in the [civicactions-homesite repo in the CivicActions' Github Organization](https://github.com/CivicActions/civicactions-homesite).

## Prerequisites

1. [Git 2.0+](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
1. Engineer account on Github.

## Initial setup

The initial setup *should* only need to be done once at the beginning of the project.

### Clone Repo

1. Enter `cd ~/workspace` (or the location of the repo on your local) in your terminal.
1. Enter `git clone git@github.com:CivicActions/civicactions-homesite.git` to clone the repo locally.

### Create fork

1. Go to [the Homesite repo](https://github.com/CivicActions/civicactions-homesite) in your browser.
1. Click the `fork` button to initiate the fork of the repo.
1. Click the `name, image, or icon` of your user to create your fork of the project.
1. Enter `cd ~/workspace/civicactions-homesite` (or the location of the repo on your local sandbox) in your terminal to change your work
directory to the repo.
1. Enter `git remote add myfork git@github.com:GITHUB_USERNAME/civicactions-homesite.git` to add your fork as a
remote. *Replace `GITHUB_USERNAME` with your Github username.*

### Configure Upstream

1. Enter `cd ~/workspace/civicactions-homesite` (or the location of the repo on your local sandbox) in your terminal to change your work
directory to the repo.
1. Enter `git remote rename origin prime` to rename the original remote.
1. Enter `git remote set-url --push prime no-pushing` to disable pushing to the prime remote.
1. Enter `git remote -v` to verify your remotes.
1. See `fetch` and `push` returned for `myfork`, and `fetch` only for `prime` (prime push should return `no-pushing`).

## Workflow

The Gitflow branching model is used, which employs two parallel long-running branches:

* Main
    * Always production ready
    * Fully tested
* Develop
    * The branch to which all feature branches are merged
    * Where tests are performed

There is also a static deployment branch, gh-pages where the static site is periodically pushed. It contains Gatsby's public folder. See [Deployment Instructions](./MANUAL_DEPLOYMENT.md) for more details.

In addition to the long-running branches there are feature branches that correspond to each Jira ticket.

### Feature Branch

Before you start work create a feature branch.

1. Enter `git checkout develop` in your terminal to check out the develop branch.
1. Enter `git fetch --all` to fetch all the most recent changes.
1. Enter `git pull prime develop` to apply the most recently merged changes into your local develop branch.
1. Enter `git checkout -b homer-##-ticket-init`. (e.g., `homer-99-homehero-ii`) *Replace:*
    1. `##` with `the Jira ticket number`
    1. `ticket` with `a brief description of the ticket`
    1. `init` with `your intials`

### Commit Changes

During development create commits to save your changes.

1. Enter `git add dir/file` to stage changes for commit. *Be sure to `replace dir/file with directories and/or files
you wish to stage`.
1. Enter `git commit -m 'HOMER-##: Commit message.'` (e.g., HOMER-99: Style the home hero section.) to save your changes locally.
*Replace:*
    1. `##` with `the Jira ticket number`
    1. `Commit message` with `a summary of the changes in the commit`

### Request Merge

When you are finished with a ticket create a merge request. 

1. Enter `git fetch --all` in your terminal to fetch the most recent changes.
1. Enter `git pull --rebase prime develop` to include any changes that have been merged in since creating your branch.
1. Enter `git push -u myfork homer-##-ticket-init` (e.g., homer-99-home-hero-ii) to write changes to your remote fork.
*Replace:*
    1. `##` with `the Jira ticket number`
    1. `ticket` with `a brief description of the ticket`
    1. `init` with `your intials`
1. This should generate a link to create a merge request.
1. Either follow that link or go to [the Homesite repo](https://github.com/CivicActions/civicactions-homesite) in your browser and press the
`Create merge request` button.
1. Enter the Merge Request title as `HOMER-##: Jira summary` (e.g., HOMER-99: Style homepage hero.). *Replace:*
    1. `##` with `the Jira ticket number`
    1. `Jira summary` with `the Jira ticket summary`
1. Verify that the source branch is the one you have been working on in your remote fork `myfork`.
1. Verify that the target branch is `develop` in the `nsf` repo.
1. Review the merge request and make any necessary changes.
1. Press the `Submit merge request` button.
