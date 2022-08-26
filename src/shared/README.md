# Shared

![shared-themed-bordered](https://feature-sliced.design/assets/images/shared-14b558e88a6c1319ea28deade496363b.png)

## Description

There are usually placed:

- shared **UIKit** of the application (if there is one)
  - ***Segment**: `shared/ui`*
- shared **auxiliary libraries**
  - ***Segment**: `shared/lib`*
- general module for **working with the API**
  - ***Segment**: `shared/api`*
- module **configuration of the application** and its environment
  - ***Segment**: `shared/config`*

## Can use
shared can't use any layer

## Structure

```sh
└── shared/
      ├── api/
      ├── config/
      ├── lib/
      └── ui/
```

## Examples

### Using UIKit

```tsx title=shared/ui/button/index.tsx
export const Button = () => {...}
```

```tsx title=shared/ui/card/index.tsx
export const Card = () => {...}
```

```tsx title=**/**/index.tsx
import { Button } from "shared/ui/button";
import { Card } from "shared/ui/card";
// Or in extreme cases
// import { Button, Card } from "shared/ui";
```

### Using environment variables

*The implementation depends on the project and the team, here is just one of the options*

```ts title=shared/config/index.ts
export const isDevEnv = NODE_ENV === "development";
export const OAUTH_TOKEN = getEnvVar("REACT_APP_OAUTH_TOKEN");
```

```ts title=**/**/index.tsx
import { OAUTH_TOKEN, isDevEnv } from "shared/config";

export const OAuthProvider = () => (
    <OAuth
        debug={isDevEnv}
        token={OAUTH_TOKEN}
        ...
    />
)
```