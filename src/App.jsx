import Form from "./components/Form";
import List from "./components/List";
import Api from "./helpers/api";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import getCookie from "./helpers/getCookie";

function App() {
  const { data: messages } = useQuery("authors", fetchMessages);

  async function fetchMessages() {
    await getCookie();

    const response = await Api.get("messages");

    console.log(response);

    let messages = response.data.result.result.data;
    console.log(messages);
    return messages;
  }

  return (
    <div className="bg-gray-200 min-h-screen p-10 flex">
      <Form />
      <List />
    </div>
  );
}

export default App;
