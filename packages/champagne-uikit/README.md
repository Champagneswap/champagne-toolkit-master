# 🥞 Champagne UIkit

[![Version](https://img.shields.io/npm/v/@champagneswap/uikit)](https://www.npmjs.com/package/@champagneswap/uikit) [![Size](https://img.shields.io/bundlephobia/min/@champagneswap/uikit)](https://www.npmjs.com/package/@champagneswap/uikit)

Champagne UIkit is a set of React components and hooks used to build pages on Champagne's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @champagneswap/uikit`

***Note**: In case you want to use the older version of the Champagne UIkit, you should install @champagneswap-libs/uikit, instead, but we recommend using the latest version of the UIkit.*


## Setup

### Theme

Before using Champagne UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@champagneswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@champagneswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://champagneswap.github.io/champagne-uikit/)
