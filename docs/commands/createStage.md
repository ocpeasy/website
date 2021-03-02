---
id: create-stage
title: createStage
sidebar_label: createStage
slug: /commands/createStage
---

To use `createStage`, you need to be within an `ocpeasy.yml` project.

<img src='/img/create-stage/ocpeasy-project.png' class='shadow' />

### Usage

```bash
ocpeasy createStage
```

#### with Proxy

```bash
ocpeasy createStage --proxy=http://proxy.acme.corp:3456
```


## Steps

### Stage ID

<img src='/img/create-stage/create-stage-id.png' class='shadow' />

### Stage Project

<img src='/img/create-stage/create-stage-ocp-project.png' class='shadow' />

### Stage Instance ID

<img src='/img/create-stage/create-stage-ocp-instance.png' class='shadow' />

### Instance Route

<img src='/img/create-stage/create-stage-ocp-route.png' class='shadow' />

### Instance Route

The scheme mustn't appear (`no http/https`)

<img src='/img/create-stage/create-stage-ocp-route.png' class='shadow' />

## Number of replicas (PoD)

<img src='/img/create-stage/create-stage-ocp-replicas.png' class='shadow' />

Once this is configured you should see this confirmation message.

<img src='/img/create-stage/create-stage-confirmation.png' class='shadow' />

## Summary

<img src='/img/create-stage/create-stage-summary.png' class='shadow' />
