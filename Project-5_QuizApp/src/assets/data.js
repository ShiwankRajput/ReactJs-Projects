export const data = [
  {
    question: "What is the default port for a React development server?",
    option1: "3000",
    option2: "8080",
    option3: "5000",
    option4: "8000",
    ans: 1
  },
  {
    question: "What does the `useRef()` hook provide?",
    option1: "A way to share state between components",
    option2: "A reference to a DOM element or a mutable value",
    option3: "A custom hook",
    option4: "A routing mechanism",
    ans: 2
  },
  {
    question: "Which of the following is true about React keys?",
    option1: "They are only used in forms",
    option2: "They must be unique among siblings",
    option3: "They are required for styling",
    option4: "They are used to trigger API calls",
    ans: 2
  },
  {
    question: "How do you handle forms in React?",
    option1: "Using document.getElementById",
    option2: "Through controlled components with state",
    option3: "With jQuery",
    option4: "Using Redux only",
    ans: 2
  },
  {
    question: "What is a controlled component?",
    option1: "A component that renders based on CSS only",
    option2: "A component that uses Redux",
    option3: "A component that does not manage state",
    option4: "A component that manages form inputs via state",
    ans: 4
  },
  {
    question: "How can we prevent re-renders in a React component?",
    option1: "Using useState",
    option2: "Using useEffect",
    option3: "Using React.memo",
    option4: "Using setTimeout",
    ans: 3
  },
  {
    question: "What does `React.Fragment` do?",
    option1: "Creates a new route",
    option2: "Lets you group elements without adding extra nodes to the DOM",
    option3: "Creates global state",
    option4: "Enables lazy loading",
    ans: 2
  },
  {
    question: "What is the purpose of `useContext()` hook?",
    option1: "To fetch data from an API",
    option2: "To manage side effects",
    option3: "To consume a context without using a Consumer component",
    option4: "To style components",
    ans: 3
  },
  {
    question: "How do you perform code-splitting in React?",
    option1: "Using useState",
    option2: "Using lazy and Suspense",
    option3: "Using fetch",
    option4: "Using map function",
    ans: 2
  },
  {
    question: "What is the purpose of the `StrictMode` component in React?",
    option1: "To apply strict CSS rules",
    option2: "To prevent rendering",
    option3: "To highlight potential problems in an application",
    option4: "To restrict routes",
    ans: 3
  },
  {
    question: "What is React primarily used for?",
    option1: "Server-side rendering",
    option2: "Database management",
    option3: "Building user interfaces",
    option4: "Styling web pages",
    ans: 3
  },
  {
    question: "What is a React component?",
    option1: "A function or class that returns HTML",
    option2: "A CSS file",
    option3: "A JavaScript variable",
    option4: "An image file",
    ans: 1
  },
  {
    question: "Which hook is used to handle state in a functional component?",
    option1: "useState()",
    option2: "useEffect()",
    option3: "useReducer()",
    option4: "useMemo()",
    ans: 1
  },
  {
    question: "Which hook is used for side effects in React?",
    option1: "useRef()",
    option2: "useState()",
    option3: "useEffect()",
    option4: "useContext()",
    ans: 3
  },
  {
    question: "What is JSX?",
    option1: "A templating engine",
    option2: "JavaScript XML syntax used in React",
    option3: "A type of CSS preprocessor",
    option4: "A JSON formatter",
    ans: 2
  },
  {
    question: "What does the virtual DOM do in React?",
    option1: "Improves security",
    option2: "Makes the app mobile responsive",
    option3: "Minimizes direct manipulation of the real DOM",
    option4: "Compiles code to machine language",
    ans: 3
  },
  {
    question: "Which method is used to pass data from parent to child component?",
    option1: "State",
    option2: "Props",
    option3: "Context",
    option4: "Ref",
    ans: 2
  },
  {
    question: "Which command is used to create a new React app using Create React App?",
    option1: "npm install react-app",
    option2: "npx create-react-app my-app",
    option3: "npm create app",
    option4: "node react-init",
    ans: 2
  },
  {
    question: "What is the purpose of `key` prop in a list rendering?",
    option1: "To pass values between components",
    option2: "To style list items",
    option3: "To uniquely identify elements for performance",
    option4: "To define animations",
    ans: 3
  },
  {
    question: "How can you lift state up in React?",
    option1: "Using useReducer",
    option2: "By creating a higher-order component",
    option3: "By moving the state to the nearest common ancestor",
    option4: "By using Redux",
    ans: 3
  },
  {
    question: "What is the main purpose of React Router?",
    option1: "To manage form validation",
    option2: "To add dynamic styling",
    option3: "To handle navigation and routing",
    option4: "To handle global state",
    ans: 3
  },
  {
    question: "Which hook is used to optimize performance for functions passed to child components?",
    option1: "useEffect",
    option2: "useState",
    option3: "useMemo",
    option4: "useCallback",
    ans: 4
  },
  {
    question: "In which file do you typically render the root React component?",
    option1: "App.js",
    option2: "index.js",
    option3: "main.js",
    option4: "home.js",
    ans: 2
  },
  {
    question: "How do you perform conditional rendering in React?",
    option1: "Using switch statements only",
    option2: "With if statements outside return",
    option3: "Using ternary or && operator inside JSX",
    option4: "Using loops inside JSX",
    ans: 3
  },
  {
    question: "Which of these is not a valid hook?",
    option1: "useState",
    option2: "useEffect",
    option3: "useProps",
    option4: "useRef",
    ans: 3
  },
  {
    question: "What is the return type of `useState()`?",
    option1: "Array with a value and a setter function",
    option2: "Boolean",
    option3: "Object with value and update method",
    option4: "Single string",
    ans: 1
  },
  {
    question: "Which React hook is used to access previous state values?",
    option1: "useRef",
    option2: "useHistory",
    option3: "usePrevious",
    option4: "useState",
    ans: 1
  },
  {
    question: "What is the default behavior of `useEffect()` with an empty dependency array?",
    option1: "It runs on every render",
    option2: "It never runs",
    option3: "It runs only once after the initial render",
    option4: "It runs only on updates",
    ans: 3
  },
  {
    question: "What does `ReactDOM.createRoot()` do in React 18?",
    option1: "Creates a traditional root render",
    option2: "Creates a concurrent rendering root",
    option3: "Creates a DOM node",
    option4: "Initializes Babel",
    ans: 2
  },
  {
    question: "What is Suspense used for in React?",
    option1: "State management",
    option2: "Lazy loading and fallback UI",
    option3: "Conditional rendering",
    option4: "Animations",
    ans: 2
  }
  ];