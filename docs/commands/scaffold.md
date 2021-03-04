---
id: scaffold
title: scaffold
sidebar_label: scaffold
slug: /commands/scaffold
---

`scaffold` target permits to generate a project ready to be used with `ocpeasy`.


### Usage

```bash
ocpeasy scaffold
```

#### with proxy

```bash
ocpeasy scaffold --proxy=http://acme.corp.net:3456
```

## Steps

### Strategy selection

<img src='/img/scaffold/strategy-selection.png' class='shadow' />

### Technology selection

<img src='/img/scaffold/technology-selection.png' class='shadow' />

To filter, use the character `/` followed by the pattern to apply

<img src='/img/scaffold/filter-technology.png' class='shadow' />

### Framework selection

<img src='/img/scaffold/framework-selection.png' class='shadow' />

### Folder name selection

Folder name is the name of the folder to be used for your newly created project.

<img src='/img/scaffold/folder-name-selection.png' class='shadow' />

### Folder location selection

Folder location is the location of the folder to be used for your newly created project. (e.g.: /Users/username/dev)

<img src='/img/scaffold/folder-location-selection.png' class='shadow' />


Then a confirmation will be required:

<img src='/img/scaffold/scaffold-confirmation.png' class='shadow' />

### Git repository

This repository corresponds to the place where your source code will live.

<img src='/img/scaffold/source-code-repository.png' class='shadow' />

### Git credentials ID

Git credentials ID is secret ID in OpenShift required to access the repository where your project's source code will live.

It can be either `basic auth` (username, password) or `ssh key`.

Here's a configuration example to create a secret to pull a git repository internally hosted with `username` and `password`, and a `.gitconfig` to specify git pull specific options. For instance, if you need to specify a combination of secret (username, password + CA options)

In that case, the secret is being used within a corporate environment and gitlab is self-hosted with custom CA, it's possible to disable the SSL verification adding specific options to the .gitconfig file.

<img src='/img/scaffold/gitlab-credential-id.png' class='shadow' />

Then `gitlab-internal-id` will be the credential-id

<img src='/img/scaffold/source-code-credential-id.png' class='shadow' />


### Project created

Once you've completed all the steps above, you'll see a folder like this one:

<img src='/img/scaffold/project-created.png' class='shadow' />

With a structure corresponding to the selected template:

<img src='/img/scaffold/project-created-structure.png' class='shadow' />