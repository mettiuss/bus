# Bus App

App created for the Xiaomi mi Band 7 to view busses timetables on the watch.

## Screenshots

![Detail Preview Screenshot](https://github.com/mettiuss/bus/blob/main/assets/home_preview.png?raw=true) ![Detail Preview Screenshot](https://github.com/mettiuss/bus/blob/main/assets/detail_preview.png?raw=true)

## Run Locally

You can run the project on your machine thanks to https://github.com/melianmiko/ZeppPlayer and https://github.com/melianmiko/zmake (Follow the instructions to download the two programs on your system)

Clone the project

```bash
  git clone https://github.com/mettiuss/bus && cd bus
```

Compile the program using zmake and run it using ZeppPlayer (you can find instructions in the github pages)

## Adding stop data

Create a new file under `page/` naming it `data.json`.
Build it following the template in `page/data-structure.txt`

## Installation

Compile the project with zmake

Copy to your phone `dist/bus.bin`

Install it using https://play.google.com/store/apps/details?id=asn.ark.miband7

## Acknowledgements

Huge thanks to [melianmiko](https://github.com/melianmiko) for building the tools necessary for development on the mi band 7!
