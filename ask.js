export default async function handler(req, res) {
  const { question } = req.body;

  const API_KEY = process.env.GEMINI_API_KEY;

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + API_KEY,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: question }] }]
      })
    }
  );

  const data = await response.json();
  res.status(200).json({
    answer: data.candidates?.[0]?.content?.parts?.[0]?.text || "No answer"
  });
}