// const url = process.env.REACT_APP_API_URL;
const url = "http://localhost:3000/data/";

export const getData = async (path) => {
  try {
    const response = await fetch(`${url}${path}`);
    if (response.status !== 200) {
      throw new Error("에러가 발생했습니다.");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("에러가 발생했습니다.");
  }
};
