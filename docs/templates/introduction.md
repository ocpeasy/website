---
id: introduction
title: Introduction
sidebar_label: Introduction
slug: /template/introduction
---

OCPeasy templates are boilerplate ready to be used implemented with opinionated technologies, in dedicated repositories.

## Example

- Flask API with Poetry: https://github.com/ocpeasy/ocpeasy-template-python-flask

<img src='/img/templates/ocpeasy-template-flask.png' class='shadow' />

- `app.py`, Python application entrypoint
- `Dockerfile`, Dockerfile that can be used locally and will be used during OpenShift build process
- `docker-compose`, https://docs.docker.com/compose
- `poetry.lock`, lock file with frozen dependencies generated by poetry
- `pyproject.toml`, project definition, dependencies, used by poetry to generate artefacts