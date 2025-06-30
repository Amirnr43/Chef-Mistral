

export async function getRecipeFromai(ingredArr) {
  const ingredStr = ingredArr.join(", ");
  const system_prompt = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`
  const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;  // for Vite projects
  // For Create React App, use: process.env.REACT_APP_OPENROUTER_API_KEY

  if (!API_KEY) {
    console.error("OpenRouter API key is missing! Please add it to your .env file.");
    return "API key missing";
  }

  
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost", 
        "X-Title": "Practice"
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct:free",
        messages: [
          { role: "system", content: system_prompt },
          { role: "user", content: `I have ${ingredStr}. What recipe do you suggest?` }
        ]
      })
    });

    const data = await response.json();
    if (!data.choices || !data.choices[0]?.message?.content) {
      console.error("Bad AI response:", data);
      return "AI returned no message.";
    }
    return data.choices[0].message.content;



  } catch (err) {
    console.error("Ai error:", err.message);
    return "Ai request failed.";
  }
}
