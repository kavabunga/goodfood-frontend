# GoodFood • frontend

## IMPORTANT

⚠️ Do not push changes directly to develop and main; create local branches for changes, then submit them in a pull request for merging!!!

⚠️ Frequently pull changes from the develop branch

## Branching

🔹 One option is Git flow (with elements of GitHub Flow).

Creating a feature branch in Gitflow is a straightforward process.

First, you need to create a new branch off of the develop branch. This branch should be named according to the feature you are working on, such as “feature/my-new-feature”.

Next, you should switch to the new branch and make your changes. This could include adding new files, modifying existing files, or deleting files.

Once you have made your changes, you should commit them to the feature branch. This will create a snapshot of your changes that can be used to track progress.

Once you have committed your changes, you should push the feature branch to the remote repository. This will allow other developers to access your changes and collaborate on the feature.

Finally, you should create a pull request to merge the feature branch into the develop branch. This will allow other developers to review your changes and provide feedback before they are merged into the main codebase.

Once the pull request is approved, the feature branch can be merged into the develop branch and the feature branch can be deleted.

It's important to use continuous integration. This involves integrating the code into the main branch on a regular basis. This helps to ensure that the code is always up to date and that any potential issues or bugs are identified quickly.

🔹 Branch names follow this pattern:

> refactor/what is affected

Examples:

> test/auth-service
>
> hotfix/bem-naming
>
> refactor/auth-controller
>
> fix/libs/workbooks-view
>
> feature/questions
>
> refactor/user/questions/question-form

## Merge Policy [Semi-linear merge](https://devblogs.microsoft.com/devops/pull-requests-with-rebase/)

![semi linear](https://devblogs.microsoft.com/devops/wp-content/uploads/sites/6/2019/04/semilinear-1.gif)

This strategy is a mix of rebase and merge.

1. First, the commits in the PR are rebased onto the main branch.
2. Then a merge is performed with the main branch, creating a merge request. This emulates doing `git rebase master` on the pull request branch, followed by `git merge pr --no-ff` on the master branch.

It combines the best of both worlds: individual commits are preserved so we can see how the work developed, but instead of a simple rebase, a merge commit is created so we can see the start and end of the work in each PR.

## Conventional commits

https://www.conventionalcommits.org/en/v1.0.0/

Commits are made in small steps using Conventional Commits.
Comments can be in English or Russian.
It is better to use the template:

```
<type>[optional scope]: <short summary>

[optional body]

[optional footer]
```

### Type

For automated processing, it is important that types are standardized; they can be extended, but the basic set includes: feat:, fix:, build:, chore:, ci:, docs:, style:, refactor:, perf:, test:;

_feat_ - adding new functionality  
_fix_ - fixing a bug  
_build_ - changes affecting the build process (e.g., adding a dependency to package.json).  
_ci_ - changes affecting CI processes  
_docs_ - documentation changes that do not affect the code  
_style_ - changes in code formatting that do not affect the code's functionality (e.g., renaming variables)  
_refactor_ - changes in code implementation  
_perf_ - changes improving code performance (e.g., algorithm optimization)  
_test_ - changes affecting tests without influencing functionality  
_chore_ - changes that do not fall into the above categories

### Description

An important rule: a good commit message should complete the following sentence:
"If applied, this commit will {{ your subject line here }}". The first part of the phrase in the commit is not written; it is implied.

For example:

> If applied, this commit will _update the readme file_  
> If applied, this commit will _add validation for GET /user/:id API call_  
> If applied, this commit will _revert commit 12345_

Examples of commits:

> _fix: move json module to modules_ - "If applied, this commit will move the json module to modules"
>
> _feat: added service for converting md to pdf_ - "If applied, this commit will add a service for converting md to pdf"
>
> More examples of commits:
> refactor: remove unused methods
>
> refactor(activity-calendar): delete circular import
>
> feat: change title
>
> style: change padding and icon style
>
> fix: change init state from string to const
>
> chore: update file with version

## kebab-case for File and Folder Names

MacOS has a case-insensitive file system, so MyComponent.js and myComponent.js are the same. Git didn't recognize the change, but the CI on GitHub used a Linux image, which is case-sensitive, causing issues.

While this may appear to be ok, there is a danger down the track when you deploy to your Linux machine with a case-sensitive file system.

On your Mac (or PC), you can import a file with a slightly incorrect filename, like this:

> import MyWidget from './myWidget'

Notice the "my" in "./myWidget". This will work ok, but when you deploy, it will fail. These kinds of errors are difficult to find and fix, and you are usually under pressure to get things working, so you are perhaps not as calm as you should be.

To avoid this problem, it's better to make ALL filenames/foldernames lowercase and use kebab-case, which makes it easy to read.

> ❗ instead of MyComponent.js, write my-component.js.

> ❗ instead of useMyHook.js, write use-my-hook.js.

Next.js uses this by default, and Angular includes it in its style guide. Kebab-case can save you and your team some headaches.

## Explaining the process of creating and using .env files and consts

- Environment variables in Vite start with the prefix `VITE_`
- For environment variables, use the `.env.local` file (they are loaded in all cases and ignored by git)
- Loaded env variables are also accessible to client source code via `import.meta.env` (e.g., `import.meta.env.VITE_API_URL;`)
- The `env.d.ts` file at the root of the project is for typing environment variables; this is optional but helps prevent some errors if you are writing in TypeScript
- If there is a typing file (previous point), then import in TypeScript as `const apiUrl: string = import.meta.env.VITE_API_URL;`

## Stages of pre-commit and commit

1.  (`npm run lint`/ `npm run format` / `npm run lint:fix`) optionally
2.  (`npm run prepare`) first run
3.  `git rebase develop` - When this command is executed, Git applies all commits from your branch on top of the latest commit in the `develop` branch
    (It's important to understand that rebasing changes commit history. Therefore, if you rebase a branch that has already been published (e.g., synchronized with a remote repository), be careful as this may cause problems for other team members using this branch.)

4.  `git add . `
5.  `npm run commit` (selecting the appropriate items and names in the terminal, adding comments)
6.  If necessary, publish the branch yourself (if it is not yet in the shared repository), or synchronize the branch with the repository
7.  Create a pull request for changes and request a merge into the develop branch

## Merge on pull request

To keep the commit history linear and clear, when merging in a pull request, always choose the option
Rebase and Merge. This will help avoid tangled commit history.

Documentation: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github

### Pulling changes:

1. Update your local copy of the main branch:
   `git fetch origin develop`
   (This command will download the latest changes from the remote repository's develop branch but will not apply them to your local branch.)
2. `git rebase origin/develop`
   This command rebases your branch onto the latest commit from the develop branch.
   Remember, rebasing changes commit history, so be careful if your branch has already been published and used by other team members.

3. If Git detects conflicts during merging or rebasing, you will need to resolve them manually.

4. Commit
   `git add . `
   `git commit -m "Rebase with develop"`

### OR

1. Use the git pull command
   `git pull --rebase origin develop` (with rebasing)

This command first performs a git fetch to download the latest changes from the remote develop branch and then automatically merges them with your current branch.

2. Commit
   `git add . `
   `git commit -m "Merge (or Rebase) with develop"`

All this helps avoid conflicts and their accumulation 🥷
