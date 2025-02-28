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

# Functional components:

- The functional components are just the normal javascript functions that returns a JSX code/React Element.
- < functional component/>

# props

- passing props to a functional component is just like passing arguements to a js function.
- many times the props are destructed on the fly using array de-structuring.
  const { resName } = resData?.info;

# Two types of imports and exports

- default exports : export default name;
- import name from "path";
- used for exporting single thing

- Named exports : export const CDN_URL;
- import {CDN_URL} from "path";
- Used when we want to export multiple things

# Hooks

- These are the normal javascript utility functions.

- One is the useState() , which provides us the SuperPowerful state variable
  these state variables tracks our component and maintains the state of the component

- it is imported from react ,as a Named import
- const arr = useState(resList) // this returns an array
  const [listOfRestaurants , setListOfRestaurants] = arr; // array de-structuring
- Whenever my state varible updates , the setListOfRestaurants triggers the reconciliation cycle and update the virtual dom by calculating the diff(changes in the object nodes) using diff Algorithm ,then react will re-render my component

- It's very smart it never renders the complete thing again and again and only renders the new changes in the UI.

- Basically it keeps our UI and Data layer in sync with each other.

# useEffect

- useEffect is required for performing async operations in react i.e for performing anything after the initial render
- it takes two arguements
  - the callback function (compulsary)
  - the dependency array (optional)
- if you don not pass the dependency array useEffect(()=>{}) => useEffect will call the function every time the component is rendered
- if you pass an empty dependency array useEffect(()=>{},[]) => function will be called only once at time of initial render.
- if you pass some element in dependency array useEffect(()=>{},[btnName]) => function will be called everytime the element is updated.

- fetch is done inside useEffect()

# 2 types of Routing in web apps

- Client side routing.
  - Single page web application
- Server side routing.

  - Older way of routing = we make a network call

- Static Routing => those routes that we created like '/', '/about'
- Dynamic Routing = route are not fixed ,ex we have a dynamic route for every restaurant

# Class Based Components

class UserClass extends React.Component{

}
React.Component is an in-built class which is getting inherited

# React Lifecycle Methods Diagram:

1. Constructor function
2. Render Method
3. ComponentDidMount

Q. Why React is Fast ?? - Complete React Fibre with this.

## RENDER PHASE

Parent Constructor
Parent Render

  <All light Tasks In Single Batch>
    {First Constructor
    First Render
    Second constructor
    Second Render
    Third Constructor
    Third Render} 
    
 ## COMMIT PHASE
  <expensive Dom Manipulation in Single Batch>
    First ComponentDid Mount
    Second ComponentDid Mount
    Third ComponentDid Mount

Parent ComponentDidMount

- Mounting => the initial phase of loading the data on the web page and inserting it into the DOM is called as Mounting, i.e then our page is said to be Mounted.

- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
