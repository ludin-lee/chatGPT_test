import logger from "../../config/logger.js";
import ChatGpt from "../../config/chatgpt.js";

class ChatController {
  chatGpt = new ChatGpt();

  //   showChatGpt = async (req, res) => {
  //     res.render("askgpt", { pass: true });
  //     // res.json({ ok: "ok" });
  //   };

  askPostChatGpt = async (req, res) => {
    try {
      const prompt = req.body.prompt;
      const response = await this.chatGpt.callChatGPT(prompt);

      if (response) {
        res.json({ response });
      } else {
        res
          .status(500)
          .json({ error: "Failed to get response from ChatGPT API" });
      }
    } catch (err) {
      console.error(err);
      logger.error(err);
    }
  };
}
export default ChatController;
