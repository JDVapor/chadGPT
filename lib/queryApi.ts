import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 1.2,
      //top_p: 0.1,
      max_tokens: 2048,
      frequency_penalty: 0.2,
      presence_penalty: 0.1,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `chadGPT doesn't have an answer for that, my guy! (Error: ${err.message})`
    );
  return res;
};
export default query;
