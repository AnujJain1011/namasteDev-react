# Namaste React 🚀

# Parcel (https://parceljs.org/)

- Dev Build
- Local Server
- Live Updation By HMR : Hot Module Replacement
- File Watching Algorithm ,written in C++
  as soon as we save anything it re-builds
- Caching - Faster Builds
- Image Optimization
- Minification of code(shortens the code)
- Bundling
- Compresses Files
- consistent hashing
- Differential Bundling - allows older browser support
- Diagnostics
- Beautiful Error Handling
- Https - can load server to http,https as per requirement
- Tree Shaking - removes unused code to make files light weight and efficient at production
- Provides Different dev and prod bundles

- browserslist (https://browserslist.dev/)

  - Add it in package.json to certainly configure your webapp to selected browser versions

- Replaced React from CDN links with the React from npm ----

# Babel (https://babeljs.io/)

- Converts(transpiles) JSX code to React.createElement(Js engine understandible code)
- It is a javascript compiler needed by Parcel to do all this conversion
- It reads the characters(tokens) one by one -> then create AST -> JS engine understandible code
- It even converts ES6 to older JS versions/older browser compatible JS.

* Functional components:

- The functional components are just the normal javascript functions that returns a JSX code/React Element.
- < functional component/>

* props

- passing props to a functional component is just like passing arguements to a js function.
- many times the props are destructed on the fly using array de-structuring.
  const { resName } = resData?.info;
