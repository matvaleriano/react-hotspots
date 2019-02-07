# React-Hotspots
[![Build Status](https://travis-ci.org/mathvaleriano/react-hotspots.svg?branch=master)](https://travis-ci.org/mathvaleriano/react-hotspots)


` What's a Hotspot? It's a visual effect to show somenthing new.`

### Motivation

This project has been created based on a [challenge](https://github.com/Conpass/challenges/blob/master/Frontend-Challenge.md) proposed by the [Conpass](https://www.conpass.io/) but I liked so much of the idea that has been proposed and hooks was comming. So I had decided to implement a project to show some useful hooks and react createPortal (it's awesome too).

This project have some **forced clicks** (it's not a bug) if you put some hotspot on links in navbar... it'll redirect you to some page like my linkedin (**contract me**, lol), github (this repo) or my twitter account.

### How it works

1. Add a hotspot clicking on button
2. Click on some element of the screen to place hotspot
3. Add some title and text
4. Save it
5. You can hide the poppup clicking on the hotspot
6. You can delete hotspots with **Delete** button existing on hotspots list

### Setup

* Use node 8+
* Install dependencies `yarn`
* Run project `yarn start`
* Run lint `yarn lint`

### Structure/Folders

```
|-- build (generated code)
|-- node_modules (heavy folder, lol)
|-- public (what you is what you get)
|-- src
|   |-- api (request/store)
|   |-- components (just components/contextApi/ui)
|   |-- hooks (yeah... hooks... finally!!!)
|   |-- shared (colors/etc)
|   |-- index.css (global css)
|   |-- index.js (render)
|   |-- serviceWorker
|
|-- ... config files

```

### Made with

* [React](https://reactjs.org/)
* [Hooks](https://reactjs.org/docs/hooks-faq.html)
* [Context Api](https://reactjs.org/docs/context.html)
* [Styled Components](https://www.styled-components.com/)
* [Polished](https://github.com/styled-components/polished)
* Love <3

`Obs.: I didn't create tests because I had no time, lol`

`But I'll create an issue`