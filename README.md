eslint-config-nhardy
--------------------

A collection of ESLint configs which extend `eslint-config-airbnb-base` with some minor differences.

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

### With Mocha

In your `test` folder config:
```json
{
  "extends": ["nhardy", "nhardy/withMocha"]
}
```

### With React and Flow (legacy)

Add to your project folder config:
```json
{
  "extends": "nhardy/react-flow"
}
```
