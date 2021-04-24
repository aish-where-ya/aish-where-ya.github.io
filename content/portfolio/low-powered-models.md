---
title: "Low Powered Models For Disease Detection"
date: 2019-12-23T20:56:42+06:00
type: portfolio
image: "images/projects/gsoc.jpg"
category: ["DEEP LEARNING"]
link: "https://gsoc2020withlibrehealth.blogspot.com/2020/08/gsoc-2020-with-librehealth-final-report.html"
---

Worked on this project during Google Summer of Code 2020 under LibreHealth. The project is called "Low Powered Models for Disease Detection and Classification for Radiology Images". I used 2 datasets - RSNA Pneumonia Detection dataset and Chest-XRay14 dataset. Experimented with models such as DenseNet, Inception, CheXNet, etc. on these datasets.

Using quantization and pruning techniques, I reduced the model sizes by 91% while having minimal reduction in the accuracy and performance metrics of the models. Also improved model performance in terms of latency, memory usage and power consumption and tested it on ARM devices using Qemu emulator and Docker.

Learn more about model compression, quantization, pruning, its necessity, use in the healthcare sector and an extended understanding of this project in the link given below.