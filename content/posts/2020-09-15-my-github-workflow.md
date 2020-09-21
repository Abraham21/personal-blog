---
template: post
title: My GitHub Workflow
slug: github-workflow
draft: true
date: 2020-09-15T14:58:22.005Z
description: In this post, I describe the development process I follow when
  working on projects with GitHub.
category: Project Management
tags:
  - Project Management
  - Version Control
  - GitHub
---
I like to follow systems in my work that will prioritize collaboration and project organization. With GitHub, this means making the most of well-defined branches, issues, project boards, and pull requests.

## Branches

When creating a repository, GitHub will set your default branch to the **`main`** branch (previously **`master`** branch prior to October 1, 2020). My goal is to keep only **deploy-able** and **tested** code in the **`main`** branch.

Next, I will create a new branch called **`develop`** that will be used for current development. This branch will carry my most up to date completed changes. During active development, develop branch will generally have code that is not yet deployed to production.

For specific features that will be implemented, I will create feature branches. Feature branches will have names specific to the item at hand and they will be worked on independently of other development. This allows developers to collaborate on various features and make targeted pull requests.

### Branch Workflow

These branches will work together in the following process. Feature branches will be merged into **`develop`** branch when the changes are ready and tested. Develop branch will be merged into the **`main`** branch once the changes in **`develop`** are deployed and tested.

Feature branches can be removed once work on them is completed and their changes have been merged into the **`main`** branch, which should happen when **`develop`** is merged into **`main`** if you have been following the workflow. If you are wary of deleting branches, you can also keep track of the commit history by creating a tag.

## Issues

GitHub issues allow you to keep track of various bugs, tasks, and enhancements related to your project. At the start of every project, I will usually create issues for the various tasks that need to be done. I will create a label called `requirement` that I will apply to these tasks. I will also create a label called `testing` to apply to any testing related tasks. When I find a bug, I will create an issue and label it correctly with the `bug` label. After a team discussion, issues can be assigned to the appropriate developers.

The GitHub issues allow for greater organization and increased collaboration with developers. Issues also allow you to upload photos to give more context, which is very useful when it comes to reproducing bugs or making design decisions. Moreover, their integration into project boards make project management much easier to tackle.

## Project Boards

One of my favorite organizational tools are the integrated project boards in GitHub. I will usually create a project board with the automated kanban template. Then, I will reduce the columns down to only To do, In progress, and Done. I will also make sure that all existing issues and any new issues are linked to this project board. The issues will automatically be inserted into the To do column. When I am working on an issue, I will make sure I have myself assigned and I will drag the issue to the In progress column. When the issue is closed, it will automatically be moved to the Done column. This flow is simple and lends itself to quickly completing the tasks at hand in an organized manner. This is a powerful technique when paired with pull requests and issue references.

## Pull Requests

For pull requests (PRs), I will describe the changes being made in the PR as well as linking any issues that will be closed. You can have an issue closed when a PR is merged by using a keyword like "closes" or "resolves" and selecting the issue using the # key. For example, my PR would include something like "Closes #1" if I want the issue with the key #1 to be closed. I also like to include screenshots of the changes if applicable along with instructions for testing the changes. This can be further streamlined if you setup a template for pull requests that developers should follow. Moreover, you can look into setting up GitHub Actions if you would like to automate builds, unit tests, and deployments.