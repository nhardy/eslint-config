eslint-config-nhardy
--------------------

A collection of ESLint configs which extend `eslint-config-airbnb-base` and `eslint-config-airbnb` with some minor differences, and additions for TypeScript.

Usage
=====

### Plain ESNext

In your project folder config:

```json
{
  "extends": "nhardy"
}
```

### With React

```json
{
  "extends": "nhardy/react"
}
```

### With Mocha

In your `test` folder config:
```json
{
  "extends": ["nhardy", "nhardy/withMocha"]
}
```

### With TypeScript (experimental)

```json
{
  "extends": "nhardy/typescript"
}
```

### With TypeScript and React (experimental)

```json
{
  "extends": "nhardy/typescript-react"
}
```

### With TypeScript, React and Mocha (experimental)

In your `test` folder config:
```json
{
  "extends": "nhardy/typescript-react-mocha"
}
```

### With React and Flow (legacy)

Add to your project folder config:
```json
{
  "extends": "nhardy/react-flow"
}
```
