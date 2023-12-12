export async function GET(request) {
    console.log("request", request);
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    try {
        const data = await  fetch("https://929d7d70-a3d5-42e2-9899-2da9712a3aa1.mock.pstmn.io/api/hello", requestOptions)
        const response = await data.text();
        return new Response(response);
    } catch (error) {
        return new Response(error);
        
    }
}
