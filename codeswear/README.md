# Codeswear.com - Wear the <code/>

## Getting Started

> 1. Create the next app using below command and provide the basic details needed to create the app

```bash

yarn create next-app

```

> 2. Install tailwind css

```bash

yarn add -D tailwindcss postcss autoprefixer

```

> 3. Initiate tailwind css

```bash

yarn tailwindcss init -p

```



> 4. Paste the following into tailwind.config.js file

```bash

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

> 5. Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./styles/globals.css file.

```bash

@tailwind base;
@tailwind components;
@tailwind utilities;

```

> 5. Add the extension in VS code
Add the @tailwind directives for each of Tailwind’s layers to your ./styles/globals.css file.

```bash

Tailwind CSS IntelliSense

```

> 6. Add the React icons


```bash

yarn add react-icons --save

```

> 7. Code Input data pin or password


```bash

yarn add react-code-input --save

```

> 8. Install redux


```bash

yarn add next-redux-wrapper redux react-redux redux-thunk redux-devtools-extension

```

> 9. Install redux


```bash

yarn add @reduxjs/toolkit

```
