export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a futuristic hairstylist AI.",
        },
        {
          role: "user",
          content: `
Hair Type: ${body.hairType}
Face Shape: ${body.faceShape}
Style Preferences: ${body.stylePreferences}
Desired Look: ${body.desiredLook}

Give output in JSON:
{
  "suggestedStyle": "...",
  "reasoning": "...",
  "keywords": ["..."]
}
          `,
        },
      ],
    }),
  });

  const data = await response.json();
  const text = data.choices[0].message.content;

  return Response.json(JSON.parse(text));
}
