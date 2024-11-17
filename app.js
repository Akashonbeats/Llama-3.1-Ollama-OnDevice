////////////////////////////////////////////// HTML Manipulation //////////////////////////////////////////////

////////////////////////////////////////////// Ollama Stuff //////////////////////////////////////////////
import Ollama from "ollama";

async function getModelResponse() {
  try {
    const response = await Ollama.chat({
      model: "llama3.1:8b",
      messages: [{
        role: "user",
        content: "Hello, Llama!"
      }]
    });
    
    // Extracting just the model's response away from the other crap
    const modelResponse = response.message.content;
    console.log(modelResponse);
  } catch (error) {
    console.error('Error:', error);
  }
}

getModelResponse();