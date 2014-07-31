uniqueId
========

A javascript plugin to generate random unique hashes.

## How to use

```
uid(int digits, [int blocks, [int blocks, [...]]])
```
    
### Examples:

```javascript
uid(4, 2, 1, 2) // generates something like: 4a12fd09-674e-64ab9df2c

uid(2, 2, 1, 2) // generates something like: ab51-19-541e

uid(1, 2, 1, 2) // generates something like: a6-1-d5

uid(2, 1, 1, 1, 1, 0, 1) // generates something like: fe-d4-a0-97--32

uid(0, 2, 1, 2, 0) // generates something like: ---
```

