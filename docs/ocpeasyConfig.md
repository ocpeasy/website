---
id: ocpeasy-config
title: OCPeasy configuration
sidebar_label: Configuration
slug: /ocpeasy-config
---

## `ocpeasy.yml` config

### Sample configuration

```yaml
gitCredentialsId: gogs-repo-pw
gitRepository: https://www.github.com/user/repo.git
httpProxy: http://proxy.acme.corp.net:1234
httpsProxy: https://proxy.acme.corp.net:5678
projectName: ocpeasy-flask
stages:
- containerId: flaskdev
  containerRoute: flaskdev-odev.ocpcluster.net
  dockerfile: ./Dockerfile
  modules: []
  ocpProject: odev
  podReplicas: '2'
  stageId: dev
templateMeta:
  frameworkId: python-flask
  profile: defaultApp
  strategy: openshift_3_4
  technology: python3.8
  templateUri: https://github.com/ocpeasy/ocpeasy-template-python-flask.git
  version: master
```

#### gitCredentialsId

Secret used to retrieve the source code of your project from OpenShift

#### gitRepository

Repository URI, where your source code will live

#### httpProxy

http proxy configuration (optional), to retrieve OCPeasy strategies behind a corporate proxy for instance. `http` proxy gateway configuration.

#### httpsProxy

https proxy configuration (optional), to retrieve OCPeasy strategies behind a corporate proxy for instance. `https` proxy gateway configuration.


#### projectName

Folder name of your project.

#### stages

Contains configuration stages for the deployment of your projects.

#### templateMeta

:::caution
Don't change these parameters
:::

- frameworkId:
    - template id being used
- profile:
    - describes application profile and will generate respective
- strategyId:
    - openshift version
- technology:
    - technology used for the application
- templateUri:
    - uri of template used to scaffold the application folder
- version:
    - branch/version of the template


## `.ocpeasy` folder

`.ocpeasy` folder will contain the stages definitions, yaml files generated during the deployment process.

These folders will look like something below  (non-exhaustive list):

- build config for `STAGEID` : `.ocpeasy/<STAGEID>/bc.yaml`
- deployment config for `STAGEID` : `.ocpeasy/<STAGEID>/dc.yaml`
- image config for `STAGEID` : `.ocpeasy/<STAGEID>/img.yaml`
- service config for `STAGEID` : `.ocpeasy/<STAGEID>/svc.yaml`
