const frontendQuestions = [
    {
        id:'0',
        title: "What is the difference between var, let, and const in JavaScript?",
        description: "var is function-scoped, let is block-scoped, and const is also block-scoped, but it cannot be reassigned."
    },
    {
        id:1,
        title: "Explain the concept of closures in JavaScript.",
        description: "A closure is a function that has access to its outer function's variables, even after the outer function has returned."
    },
    {
            id:2,
            title: "What is the difference between == and === in JavaScript?",
            description: "== performs type coercion, while === checks for both value and type."
        
    },
    {
            id:3,
            title: "Describe the event loop in JavaScript.",
            description: "The event loop is a mechanism that allows JavaScript to handle asynchronous operations without blocking the main thread."
    },
    {
            id:4,
            title: "What is the difference between null and undefined in JavaScript?",
            description: "null represents the intentional absence of any object value, while undefined represents a variable that has been declared but not assigned a value."
    },
    {
            id:5,
            title: "Explain the concept of hoisting in JavaScript.",
            description: "Hoisting is the process of moving variable and function declarations to the top of their scope during compilation."
    }
];
export default frontendQuestions;