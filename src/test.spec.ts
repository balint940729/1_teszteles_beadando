import {ChatBot} from './chatbot';

describe('Chatbot greet people', function () {

  it('should greet the person', function () {
    let chatBot = new ChatBot();
    expect(chatBot.greet("Bob")).toEqual("Hello, Bob.");
  });

});
