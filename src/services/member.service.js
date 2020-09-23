import axios from "axios";
export const getMemberListService = async () => {
  const endpoint = "http://minhaj.se/app-api/get_members.php";
  try {
    const membersResponse = await axios.get(endpoint);
    return membersResponse.data;
  } catch (error) {
    console.error(error);
  }
};
