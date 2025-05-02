# Getting Started
Install the dependencies and run the project
```
npm install
npm start
```

Head over to https://vitejs.dev/ to learn more about configuring vite
# Assembly: Endgame 🕹️  
**A React-powered Hangman-style game with a programming twist**  

---

## 🎯 Project Description  
"Assembly: Endgame" is a **React-powered Hangman-style game** originally built during the Scrimba React course. This version has been **enhanced with two custom features** not present in the original project:  
- ✨ **AI-Powered Hints** (via `requestSuggestion`)  
- 🏆 **Scoring System with Persistent High Scores**  

These additions demonstrate my ability to extend core functionality, integrate external logic, and improve user engagement while maintaining accessibility and performance.  

---

## 🔥 Key Features  
### **Original Project Features**  
- 8 attempts to guess a programming-related word  
- Eliminated languages visually disappear  
- Confetti celebration on victory  
- Accessible keyboard and screen reader support  

### **Custom Enhancements**  
| Feature              | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| ✨ **AI-Powered Hints** | One-time button click reveals an AI-generated description of the target word (e.g., *"A language that runs everywhere" → JavaScript*). |
| 🏆 **Scoring System**  | Tracks consecutive wins (`currentStreak`) and saves the highest score (`highScore`) using `localStorage`. |

---

## 🕹️ How to Play  
1. **Guess Letters**: Click A-Z buttons to reveal hidden letters.  
2. **Use Hints**: Click the "Hint" button once per game to get an AI-generated clue (disabled after use).  
3. **Win Streaks**: Earn points for consecutive wins; see your record persist across sessions.  
4. **Restart**: Press "New Game" to reset the board.  

---

## 🧩 Skills Demonstrated  
### **Core React Mastery**  
- State management with `useState` and derived values  
- Side effects with `useEffect` (e.g., updating high scores)  
- Conditional rendering and accessibility best practices  

### **Custom Feature Implementation**  
| Skill                  | Enhancement Example                          |  
|------------------------|-----------------------------------------------|  
| **API Integration**     | Async AI hint fetching with `async/await`     |  
| **User Progress Tracking** | Persistent streaks via `localStorage`       |  
| **UI/UX Improvements**  | Visual feedback for hints and scoring         |  

### **Problem-Solving**  
- Balancing original code structure with new features  
- Ensuring accessibility for enhanced components  

---

## 💻 Code Highlights  
### **AI Hint Integration**  
```jsx
async function getSuggestion() {
  setSuggestionText('Loading...')
  const suggestionText = await requestSuggestion(currentWord) // External AI call
  setSuggestionText(<><b>Hint: </b>{suggestionText}</>);
}
```
**Impact**: Adds strategic depth without disrupting core gameplay.  

### **Scoring System**  
```jsx
useEffect(() => {
  if (isGameWon) setCurrentStreak(prev => prev + 1)
  else if (isGameLost) setCurrentStreak(0)
}, [isGameOver])

useEffect(() => {
  if (currentStreak > highScore) {
    setHighScore(currentStreak)
    localStorage.setItem('highScore', currentStreak.toString())
  }
}, [currentStreak])
```
**Impact**: Encourages replayability and tracks user progress.  

---

## 📌 Why This Matters for My Portfolio  
This project showcases my ability to:  
1. **Extend Existing Codebases**: Identify opportunities to improve user experience (e.g., adding hints/scoring).  
2. **Integrate Third-Party Logic**: Seamlessly merge AI suggestions into React state.  
3. **Prioritize Persistence**: Implement `localStorage` for meaningful user progress tracking.  
4. **Balance Innovation with Accessibility**: Ensure all enhancements meet a11y standards.  

---

## 🚀 Ready to Test Your Skills?  
Play "Assembly: Endgame" and see if you can keep the programming world safe — with a little help from AI and a competitive score to beat!  

**Original Course Project** ➡️ [Scrimba React Course](https://scrimba.com/learn/learnreact)  
**Enhancements by You** ➡️ Highlighted in this README  

---  
*Built with React, clsx, react-confetti*  

---
