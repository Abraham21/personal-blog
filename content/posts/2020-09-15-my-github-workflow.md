---
template: post
title: My GitHub Workflow
slug: github-workflow
draft: true
date: 2020-09-25T14:58:22.005Z
description: I describe the development process I follow for improved productivity when
  working on projects with GitHub.
category: Project Management
tags:
  - Project Management
  - Version Control
  - GitHub
---
I like to follow systems in my work that will prioritize collaboration and project organization. With GitHub, this means making the most of well-defined branches, issues, project boards, and pull requests.

## Branches

When creating a repository, GitHub will set your default branch to the **main** branch (previously **master** branch prior to October 1, 2020). My goal is to keep only **deploy-able** and **tested** code in the **main** branch.

Next, I will create a new branch called **develop** that will be used for current development. This branch will carry my most up to date completed changes. During active development, develop branch will generally have code that is not yet deployed to production.

For specific features that will be implemented, I will create feature branches. Feature branches will have names specific to the item at hand and they will be worked on independently of other development. This allows developers to collaborate on various features and make targeted pull requests.

### Branch Workflow

These branches will work together in the following process. Feature branches will be merged into **develop** branch when the changes are ready and tested. Develop branch will be merged into the **main** branch once the changes in **develop** are deployed and tested.

Feature branches can be removed once work on them is completed and their changes have been merged. I will usually remove a feature branch once its changes are merged into the **main** branch, which should happen when **develop** is merged into **main** with my workflow. If you are wary of deleting branches, you can also keep track of the commit history by creating a tag.

## Issues

GitHub issues allow you to keep track of various bugs, tasks, and enhancements related to your project. At the start of every project, I will usually create issues for the various tasks that need to be done and label them appropriately. I will create a label named **requirement** for issues that are project requirements and I will also create a label named **testing** for any testing related tasks. When I find a bug, I will create an issue and label it correctly with the **bug** label. After a team discussion, issues can be assigned to the appropriate developers.

The GitHub issues allow for greater organization and increased collaboration with developers. Issue descriptions also allow you to upload photos to give more context, which is very useful when it comes to reproducing bugs or making design decisions. Moreover, their integration into project boards make project management much easier to tackle.

## Project Boards

One of my favorite organizational tools are the integrated project boards in GitHub. I will usually create a project board with the automated kanban template. This will give me three columns: To do, In progress, and Done. I will also make sure that all existing issues and any new issues are linked to this project board. Open issues will automatically be inserted into the To do column once linked. When I am working on an issue, I will make sure I have myself assigned and I will drag the issue to the In progress column. When the issue is closed, it will automatically be moved to the Done column. This flow is simple and lends itself to quickly completing the tasks at hand in an organized manner. This is a powerful technique when paired with pull requests and issue references.

## Pull Requests

Pull requests (PRs) allow other developers to review and approve your work before merging changes. In my PRs, I describe changes being made and link relevant issues. You can have an issue closed when a PR is merged into the default branch by using a keyword like "closes" or "resolves" and selecting the issue using the # key. For example, my PR from **develop** to **main** would include something like "Closes #1" if I want the issue with the key #1 to be closed. I also like to include screenshots of the changes if applicable along with instructions for testing the changes. This can be further streamlined if you setup a template for pull requests that developers should follow. Moreover, you can look into setting up GitHub Actions if you would like to automate builds, unit tests, and deployments.

## Putting It All Together

I mainly apply the following workflow in large projects while collaborating in a team. However, to help illustrate my workflow, I have created an example repository and went through the flow from the beginning to a feature being implemented. For this example, I have created a repository for a Tic Tac Toe game.

### Steps

1. I created a repository named **`tic-tac-toe`** in all lower case separated by dashes because this naming practice makes navigating in my terminal easier.

![Repository Name](/media/github-workflow/step1.png "Repository Name")

2. I created a **develop** branch off of the **main** branch.

![Branches](/media/github-workflow/step2.PNG "Branches")

3. I created a project board with the **automated kanban flow** template to track issues.

![Project Board Template](/media/github-workflow/step3.PNG "Project Board Template")

4. I defined issues for tasks to be completed for the project and made sure to link them to the project board.
5. I moved the issue I was working on to the In progress column in my kanban board.

![Project Board](/media/github-workflow/step5.PNG "Project Board")

6. I created a **feature branch** off of the **main** branch, since the **main** branch should be the source of code that is always deploy-able.

![Branches](/media/github-workflow/step6.PNG "Branches")

7. I implemented the feature that my branch was focused on by committing my changes.
8. I made a pull request from my **feature branch** to **develop** branch.

![PR from Feature Branch to Develop](/media/github-workflow/step8.png "PR from Feature Branch to Develop")

9. Once the PR was reviewed and the code was tested, the PR is merged into the **develop** branch.

![PR merged](/media/github-workflow/step9.png "PR merged")

10. Assuming these are all the changes we expect for the next release, I will make a PR from **develop** into the **main** branch making sure to link the issues that I want closed upon merging.

![PR from Develop to Main](/media/github-workflow/step10.png "PR from Develop to Main")

11. I will confirm that **develop** is deploy-able by deploying from **develop** and checking for success.
12. Once **develop** is deemed deploy-able and the PR is approved, we merge **develop** into the **main** branch. This completes the life cycle of any feature implementations we had created. We will see both the issue and PR closed and moved to Done in the automated project board.

![PR and Issue Closed](/media/github-workflow/step12.png "PR and Issue Closed")

13. Optionally clean up feature branches that were merged by deleting them and consider tagging the commit history if you would like to keep a reference.
14. Repeat steps 5 through 13 indefinitely.

This may seem like a lot of steps, but systems like this will become natural over time! As I become more experienced, my workflow is subject to change; however, following the system above has proven to greatly increase the productivity of my team and I. For practicality, you should adjust your workflow to meet the specific needs of your team and project. I hope you learned something from my GitHub workflow that will help you develop software more efficiently!