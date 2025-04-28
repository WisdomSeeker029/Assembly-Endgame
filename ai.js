export default async function requestSuggestion(currentWord) {
  const SYSTEM_PROMPT = `
    You are an assistant responsible for providing the user who is playing the hangman game with a suggestion on what the word he is looking for might be. You can use for example the definition of the word. In your answer do not include the current word itself, just the hint. The user is playing a game and therefore you should not reveal it to him
  `

  const apiKey = import.meta.env.VITE_OPENR_QWEN_API_KEY;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      // Oppure prova con:
      // "Authorization": apiKey,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://your-site-url.com", // Richiesto da OpenRouter
      "X-Title": "Your App Name" // Richiesto da OpenRouter
    },
    body: JSON.stringify({
      "model": "qwen/qwen-2.5-7b-instruct:free",
      messages: [
        {role: "system", content: SYSTEM_PROMPT},
        {role: "user", content: `The word is ${currentWord}. Provide a suggestion`},
      ],
      "temperature": 0.7
    })
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "Nessuna risposta.";
}


/* // Esempio di utilizzo
getRecipeFromGemini("Come si fa la carbonara?")
  .then(response => console.log("Risposta:", response))
  .catch(error => console.error("Errore:", error)); */