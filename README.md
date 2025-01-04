# React useEffect Cleanup: Asynchronous Operations

This repository demonstrates a common issue with React's `useEffect` hook: improper cleanup of asynchronous operations within the cleanup function.  The bug showcases an example where a timer is started but not always properly stopped, leading to potential memory leaks or unexpected behavior.  The solution illustrates the correct way to handle asynchronous cleanup.

## Bug

The `bug.js` file contains a component that uses `useEffect` to start a timer.  The cleanup function attempts to stop the timer, but due to the asynchronous nature of `setTimeout`, there's a race condition. If the component unmounts before the timer's timeout completes, it will not be cleared. 

## Solution

The `bugSolution.js` file demonstrates the correct approach: using `clearTimeout` within the cleanup function to reliably stop the timer, regardless of when the component unmounts.  The solution also employs a ref to avoid potential issues with stale closures.