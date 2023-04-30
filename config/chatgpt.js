import { Configuration, OpenAIApi } from "openai";
import logger from "./logger.js";

class ChatGpt {
  callChatGPT = async (prompt) => {
    try {
      const configuration = new Configuration({
        organization: process.env.CHAT_GPT_ID,
        apiKey: process.env.CHAT_GPT_API,
      });

      const openai = new OpenAIApi(configuration);
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

      return response.data.choices[0].message.content;
    } catch (err) {
      console.error("Error Calling ChatGPT API:", err);
      logger.error(err);
    }
  };
}
export default ChatGpt;
