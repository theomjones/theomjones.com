---
title: Learning React Hooks using WebSockets
date: 2019-04-24T20:13:40.365Z
type: post
feature: 'https://teamextension.blog/wp-content/uploads/2017/10/react.png'
tags: [react, hooks, websockets]
---

I finally made the time to learn delve into [React Hooks](https://reactjs.org/docs/hooks-intro.html), I decided to explore the new API by making use of [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API). My aim in the exercise was to provide consumers of a WebSocket instance (in the context of react) a clean, easy to understand & consume API.

## Why Hooks?

The core principle behind the new Hooks API is to allow sharing code between components, and as you'll probably know, components are the principle building blocks of reusability in React. Before hooks, we had patterns like HOCs and render props which allowed us to reuse logic between components. These patterns are excellent and work well, but they have their flaws.

I've always felt HOCs lack an explicitness that gives consumers confidence in what a component does. Without some kind of abstract naming pattern (see: `ConnectedComponent`), a consumer can never be sure what that component offers without looking into the implementation. Another issue with HOCs is the constant wrapping, annoying both in terms of boilerplate, and dev tool inspection.

I prefer the render prop pattern (especially using the `children` prop) to HOCs as it reads more explicitly, you expose an API that can be consumed in the nested `children`. You can see exactly what it does just by looking at it. However, overusing it causes that familiar ["nesting hell"](https://youtu.be/dpw9EHDh2bM?t=141) that the React team are keen to find a solution to. That _solution_ is **Hooks**.

`gist:6cfea0a010fa85cf635c714a4b4cc438#base58.go`
