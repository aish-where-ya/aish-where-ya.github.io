---
title: "Plant Disease Detection Using An IoT Device"
date: 2019-12-23T15:55:44+06:00
type: portfolio
image: "images/projects/plant-disease.png"
category: ["IOT/MACHINE LEARNING"]
link: "https://github.com/aish-where-ya/Crop-Disease-Detection"
---

Developed a system that could identify diseases in crops using images of leaves.

A custom image recognition model was trained on a GPU and deployed on a Raspberry Pi. A PiCamera was attached to the Raspberry Pi and it was connected to an Android app. A command to generate reports was sent to the Pi from the Android app upon which the Pi clicked a picture of a plant leaf, predicted the disease in this leaf and send the report back to the Android app. This app also gave suggestions on how to cure the particular disease in that plant. Integrated this system with Cloud to generate regular reports on an Android app.