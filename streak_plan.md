# Streak Tracking Implementation Plan

## Current Project Analysis
- Word guessing game with React
- Main component: App.jsx
- Game tracks:
  - Current word
  - Guessed letters
  - Win/lose status
- Already has confetti animation on win
- Backlog includes "Add score and record"

## Proposed Changes
1. **State Management**:
   - Add `currentStreak` (number)
   - Add `highScore` (number)
   - Initialize `highScore` from localStorage

2. **Game Logic**:
   - On win: increment `currentStreak`
   - On loss: reset `currentStreak` to 0
   - Update `highScore` if `currentStreak` exceeds it

3. **Persistence**:
   - Store `highScore` in localStorage
   - Add helper functions in utils.js:
     - `getHighScore()`
     - `setHighScore()`

4. **UI Changes**:
```jsx
<section className="score-display">
  <div>Current Streak: {currentStreak}</div>
  <div>Record: {highScore}</div>
</section>
```

## Implementation Steps
1. Modify App.jsx:
   - Add state variables
   - Update game end logic
   - Add score display section

2. Modify utils.js:
   - Add localStorage helpers

3. Add CSS for score display

## Mockup
```
[Header]
Assembly: Endgame

[Score Display]
Current Streak: 3
Record: 5

[Game Status]
You win! Well done! 🎉