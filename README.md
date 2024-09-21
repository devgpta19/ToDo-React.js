### Todo List Application

## Key Features:
- Add Tasks: Users can input a task in the text field, and upon submission, the task is added to the list of todos.
- Delete Tasks: Each task has a delete button, allowing users to remove the task when it is no longer needed.
- Drag-and-Drop Interface: Tasks can be dragged within the UI, offering a fluid, responsive experience using the useRef hook to manage draggable task components.

## Technology Stack:
- Next.js: Used for rendering and routing .
- React.js: Core library used for building the interactive UI.
- useState: A hook to manage the state of the task list. This handles adding and removing tasks dynamically, ensuring the UI re-renders efficiently as the list updates.
- useRef: This hook is utilized to implement the drag-and-drop feature for each task. useRef holds the reference to DOM elements and is ideal for handling dragging logic without causing unnecessary re-renders.

### Future Improvements:
- Add persistent task storage using local storage or a backend database.
- Add task prioritization or categorization.
- Enhance the drag-and-drop feature to reorder tasks.


### -----------------------------------------------------------------------------------------------


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



