# TSX template for neutralinojs 

Minimal template for creating an app using NeutralinoJS + Typescript + React.

```bash
# First time
sudo npm i -g @neutralinojs/neu
npm install
# Afterwards
npm run start
# Or build and run executable
npm run build
./dist/myapp/myapp-linux_x64
```

The bad:
 - No `listen/watch` method is provided.
 - The close button does not work. Use Ctrl-C on the terminal, or Ctrl+Alt+Esc for some linux distributions.
 - Uses `cp` in package json to copy static assets. It works flawlessly on Linux, but I have not tested in other OS.
