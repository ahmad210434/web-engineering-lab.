function greet(name) {
  return `Hello, ${name}!`;
}

// Only update the DOM if running in a browser environment
if (typeof document !== "undefined") {
  const heading = document.getElementById("greeting-heading");
  if (heading) {
    heading.textContent = greet("World");
  }
}

// Export for Node's test runner
module.exports = greet;
