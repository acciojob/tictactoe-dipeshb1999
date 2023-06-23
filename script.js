//your JS code here. If required.
// Get player names and submit button
const player1Input = document.getElementById('player-1');
const player2Input = document.getElementById('player-2');
const submitButton = document.getElementById('submit');

// Get game board and message div
const board = document.getElementById('board');
const messageDiv = document.getElementById('message');

// Player names and current turn
let player1Name = '';
let player2Name = '';
let currentPlayer = '';

// Add event listener to submit button
submitButton.addEventListener('click', startGame);

// Function to start the game
function startGame() {
  // Get player names from input fields
  player1Name = player1Input.value;
  player2Name = player2Input.value;

  // Set current player
  currentPlayer = player1Name;

  // Display whose turn is it
  displayMessage(`${currentPlayer}, you're up!`);

  // Remove player input fields and submit button
  player1Input.style.display = 'none';
  player2Input.style.display = 'none';
  submitButton.style.display = 'none';

  // Add event listeners to board cells
  const cells = Array.from(document.getElementsByClassName('cell'));
  cells.forEach(cell => cell.addEventListener('click', cellClick));
}

// Function to handle cell click event
function cellClick(event) {
  const cell = event.target;

  // Check if the cell is empty
  if (!cell.innerHTML) {
    // Set cell content to current player's symbol (X or O)
    cell.innerHTML = currentPlayer === player
