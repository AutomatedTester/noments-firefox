# Contributing

## Prerequisites

To develop this addon you will need to have Node.js and npm installed. Once those
are installed you will need to install [jpm](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm). This is the command line
tool that allows you to build and run the addon.

To run the addon do

```bash
  jpm run
```
## Contributing Code

If you make any changes, do the following

### Step 1: Fork this repository
Fork the project [on Github](https://github.com/AutomatedTester/noments-firefox) and check out your copy locally.

```bash
% git clone git@github.com:username/noments-firefox.git
% cd noments-firefox
% git remote add upstream git://github.com/AutomatedTester/noments-firefox.git
```

### Step 2: Branch

Create a feature branch and start hacking:
```bash
% git checkout -b my-feature-branch
```

We practice HEAD-based development, which means all changes are applied directly on top of master.

### Step 3: Commit

First make sure git knows your name and email address:
```bash
% git config --global user.name 'Santa Claus'
% git config --global user.email 'santa@example.com'
```

Writing good commit messages is important. A commit message should describe what changed, why, and reference issues fixed (if any). Follow these guidelines when writing one:

 1. The first line should be around 50 characters or less and contain a short description of the change.
 * Keep the second line blank.
 * Wrap all other lines at 80 columns.
 * Include Fixes #N, where N is the issue number the commit fixes, if any.

A good commit message can look like this:
```
explain commit normatively in one line

Body of commit message is a few lines of text, explaining things
in more detail, possibly giving some background about the issue
being fixed, etc.

The body of the commit message can be several paragraphs, and
please do proper word-wrap and keep columns shorter than about
72 characters or so. That way `git log` will show things
nicely even when it is indented.

Fixes #141
```
The first line must be meaningful as it's what people see when they run `git shortlog` or `git log --oneline`.

### Step 4: Rebase

Use git rebase (not git merge) to sync your work from time to time.

```bash
% git fetch upstream
% git rebase upstream/master
```
