/**
 * Handles the logic for each of the three rooms in the Escape Vanilla JavaScript challenge.
 */
document.addEventListener("DOMContentLoaded", () => {
    /**
     * Room 1: Find the most recent book in the JSON library.
     */
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    /**
     * Room 2: Find the common concepts between JavaScript and React.
     */
    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    /**
     * Room 3: Navigate the asynchronous labyrinth.
     */
    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
            .then(response => response.json())
            .then(directions => {
                navigateLabyrinth(directions)
                    .then(message => {
                        document.getElementById("room3Result").textContent = message;
                    });
            });
    });
});

/**
 * Finds the most recent book in the given array of books.
 * @param {Array} books - The array of books to search.
 * @return {Object} The most recent book.
 */
function findMostRecentBook(books) {
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}

/**
 * Finds the common elements between two sets.
 * @param {Set} setA - The first set to compare.
 * @param {Set} setB - The second set to compare.
 * @return {Set} The set of common elements.
 */
function findIntersection(setA, setB) {
    return new Set([...setA.intersection(setB)]);
}
/**
 * Navigates the asynchronous labyrinth by waiting a second between each step.
 * @param {Array} directions - The array of directions to navigate.
 * @return {Promise} A promise that resolves with a success message when the labyrinth is navigated.
 */
async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
