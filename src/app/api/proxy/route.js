export async function GET() {
  try {
    const response = await fetch(
      "https://full-stack-next-js-portfolio-chi.vercel.app/api/projects",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
