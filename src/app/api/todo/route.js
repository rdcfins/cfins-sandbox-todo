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

export async function GET(req, res) {
  try {
      return new Response(JSON.stringify([
        { id: 1, name: "Task 1", completed: false },
        { id: 2, name: "Task 2", completed: false },
        { id: 3, name: "Task 3", completed: false },
      ]));
  } catch (error) {
      return new Response(error);
  }
}

// export const config = {
//     api: {
//       bodyParser: {
//         sizeLimit: '1mb',
//       },
//     },
//     // Specifies the maximum allowed duration for this function to execute (in seconds)
//     maxDuration: 5,
//   }