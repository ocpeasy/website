---
id: introduction
title: Introduction
sidebar_label: Introduction
slug: /
---


OCPeasy CLI is an open-source software provisioning, configuration management, and application-deployment tool enabling infrastructure as code on OpenShift.

It has been implemented with Python 3.8, fire, GitPython, PyYAML, simple-term-menu.

- Python 3.8: https://www.python.org/downloads/release/python-380
- fire: https://github.com/google/python-fire
- GitPython: https://gitpython.readthedocs.io/en/stable
- PyYAML: https://pyyaml.org


This library is consuming its metadata (such as templates, technologies) from git repositories.

## Get Started

### Pre-requisites

OCPeasy CLI requires `oc` installed.

https://docs.openshift.com/enterprise/3.4/cli_reference/get_started_cli.html

Before using `ocpeasy`, you'll have to be authenticated against the target cluster.

Follow this link for more details on this setup:

https://docs.openshift.com/enterprise/3.4/cli_reference/get_started_cli.html#basic-setup-and-login


### Installation

<a
  target="_blank"
  href="https://pip.pypa.io/en/stable/">
  pip3
</a>

<br/>

- `pip3 install ocpeasy`

If you don't have the permission to install globally a dependency in your system, you can use the `--user` flag.

- `pip3 install ocpeasy --user`



### 