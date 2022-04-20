import axios from "axios";

export const GetAllBooks = async () => {
  const res = await axios({
    method: "POST",
    url: "http://localhost:4000/graphql",
    data: {
      query: ` 
        {
            author(id: 3) {
    name
    age
    books{
        name
        genre
    }
  }
        }
      `,
    },
  });

  return res.data;
};
