## Naming
**.env** - loaded in all cases
**.env.[mode]** - only loaded in specified mode
**.env.[mode].local** - only loaded in specified mode, ignored by git

## Private and public keys
**VITE_SOME_KEY**=123
**DB_PASSWORD**=password

1 - is a public key and it will be visible on client
2 - is a private key *(because it's not prefixed with **VITE_** )* and it will be deleted after bundling

## How to use

```js
console.log(import.meta.env.VITE_SOME_KEY) // 123
console.log(import.meta.env.DB_PASSWORD) // undefined
```