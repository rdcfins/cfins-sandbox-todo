export async function POST(req, res) {
    try {
        let data = await req.json();
        data = data.map((todo) => ({...todo, id: Math.round(todo.id)}))
        console.log(data)
        return new Response(JSON.stringify(data));
    } catch (error) {
        return new Response(error);
    }
}

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '1mb',
      },
    },
    // Specifies the maximum allowed duration for this function to execute (in seconds)
    maxDuration: 5,
  }