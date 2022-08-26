<p align="center">
  <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://vitejs.dev/logo.svg" alt="Vite logo">
  </a>
  <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React logo">
  </a>
</p>

#  ⚡ vite-super-ssr template 
---
##### This template repo tries to achieve the minimum viable example for a modern front-end application

The list of features:

- ⚡️ [Vite 3](https://vitejs.dev/)
- 🤖 [vite-plugin-ssr (Suspense support)](https://vite-plugin-ssr.com/)
- ⚙️ [React 18](https://reactjs.org/)
- 🧹 [Typescript](https://www.typescriptlang.org/)
- ✨ [ESLint + Prettier](https://eslint.org/)
- 🔃 [Axios](https://formatjs.io/docs/getting-started/installation/)
- 🛣 [React router 6](https://reactrouter.com/en/v6.3.0/getting-started/overview) - optional
- 👻 [Jotai](https://jotai.org/) - optional
- 💎 [Material v5](https://formatjs.io/docs/getting-started/installation/) - optional
- 🌐 [React intl](https://formatjs.io/docs/getting-started/installation/) - optional
- 📋 [React Hook Form](https://react-hook-form.com/) - optional
- 🛠 [Feature-Sliced Design](https://feature-sliced.design/) (Architectural methodology) - optional

---
## Commands
```js
// build development
yarn start 

// build development client only
yarn start:client

// build production
yarn build
```

## Troubleshooting
### Requests are stalled forever [(vite docs link)](https://vitejs.dev/guide/troubleshooting.html#dev-server)

If you are using Linux, file descriptor limits and inotify limits may be causing the issue. As Vite does not bundle most of the files, browsers may request many files which require many file descriptors, going over the limit.

To solve this:

- Increase file descriptor limit by `ulimit`

  ```shell
  # Check current limit
  $ ulimit -Sn
  # Change limit (temporary)
  $ ulimit -Sn 10000 # You might need to change the hard limit too
  # Restart your browser
  ```

- Increase the following inotify related limits by `sysctl`

  ```shell
  # Check current limits
  $ sysctl fs.inotify
  # Change limits (temporary)
  $ sudo sysctl fs.inotify.max_queued_events=16384
  $ sudo sysctl fs.inotify.max_user_instances=8192
  $ sudo sysctl fs.inotify.max_user_watches=524288
  ```

## P.S.
Feel free to customize the template. You can easily remove any feature you want and add your own ✌️