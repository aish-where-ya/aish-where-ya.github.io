---
title: "Argo Workflows and Prometheus Metrics in Kanister"
date: 2019-12-23T20:56:42+06:00
type: portfolio
image: "images/projects/kanister.png"
category: ["DEVOPS"]
link: "https://github.com/kanisterio/kanister/pulls?q=is%3Apr+author%3Aaish-where-ya+"
---

This is a set of 2 projects that I worked on during the course of my Summer Internship at Kasten by Veeam.
They were contributions to the Open Source Project : Kanister

Project 1 : Automating ActionSet Creation using Argo Workflows

ActionSets are Custom Resources in Kanister that allow for performing actions such as backup and recovery.
Using Argo Cron Workflows, these operations can be automated by scheduling the creation of ActionSets.
I created a reference architecture that can be used to achieve this pipeline.

Project 2 : Exporting ActionSet Metrics in Kanister

Prometheus metrics are an important factor that improve the overall Observability of an application.
In this project, I designed a pipeline to export metrics in the Kanister project. 
The initial metric exposed was the total number of ActionSet Custom Resources created in the Controller.