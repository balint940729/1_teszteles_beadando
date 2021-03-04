import {ChatBot} from './chatbot';

describe('Chatbot greet people', function () {
  let chatBot: ChatBot;
  beforeEach(()=>{
    chatBot = new ChatBot();
  })

  it('should greet the person', function () {
    expect(chatBot.greet(['Bob'])).toEqual("Hello, Bob.");
  });

  it('should greet the person without name', function () {
    expect(chatBot.greet([])).toEqual("Hello, my friend.");
  });

  it('should greet the persons with names and closes with and', function () {
    expect(chatBot.greet(['Bob', 'Alex', 'Henry'])).toEqual("Hello, Bob, Alex, and Henry.");
  });
});
