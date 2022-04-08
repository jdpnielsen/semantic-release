# Semantic release experiment repo

This repo is for testing out a workflow using a custom conventional-commits [configuration](./changelog.config.js) released using Semantic Release.

On top of this, [semantic-release-backmerge](https://github.com/saitho/semantic-release-backmerge) is added to ensure the release commit is backported to the devel branch.

In order to make this work, devel branch must be in sync (ie merges to main branch must use `git merge devel --ff-only` strategy as Githubs rebase merge changes commit sha's) and therefore a custom command is added to merge a pull request. This command can be triggered on a pull request by writing a comment containing the following text: `/fast-forward`.
