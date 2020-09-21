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

When creating a repository, GitHub will set your default branch to the **`main`** branch (previously `master` branch prior to October 1, 2020). My goal is to keep only **deploy-able** and **tested** code in the `main` branch.

Next, I will create a new branch called **`develop`** that will be used for current development. This branch will carry my most up to date completed changes. During active development, develop branch will generally have code that is not yet deployed to production.

For specific features that will be implemented, I will create feature branches. Feature branches will have names specific to the item at hand and they will be worked on independently of other development. This allows developers to collaborate on various features and make targeted pull requests.

### Branch Workflow

These branches will work together in the following process. Feature branches will be merged into **`develop`** branch when the changes are ready and tested. Develop branch will be merged into the **`main`** branch once the changes in develop are deployed and tested.
