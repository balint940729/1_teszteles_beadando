import {ChatBot} from './chatbot';

describe('Chatbot greet people', function () {
  let chatBot: ChatBot;
  beforeAll(()=>{
    chatBot = new ChatBot();
  })

  it('should greet the person', function () {
    expect(chatBot.greet(['Bob'])).toEqual("Hello, Bob.");
  });

  it('should greet the person without name', function () {
    expect(chatBot.greet([])).toEqual("Hello, my friend.");
  });

  it('should greet the peoples with names and closes with and', function () {
    expect(chatBot.greet(['Bob', 'Alex', 'Henry'])).toEqual("Hello, Bob, Alex, and Henry.");
  });

});

describe('Chatbot SHOUT to the people', function () {
  let chatBot: ChatBot;
  beforeAll(()=>{
    chatBot = new ChatBot();
  })

  it('should SHOUT to one person', function () {
    expect(chatBot.greet(['BOB'])).toEqual("HELLO BOB!");
  });

  it('should SHOUT to multiple people', function () {
    expect(chatBot.greet(['BOB', 'ALEX'])).toEqual("HELLO BOB, AND ALEX!");
  });
  
  it('should greet or shout to multiple peoples in mixed group', function () {
    expect(chatBot.greet(['Bob', 'ALEX', 'Henry'])).toEqual("Hello, Bob, and Henry. AND HELLO ALEX!");
    expect(chatBot.greet(['Bob', 'ALEX', 'HENRY'])).toEqual("Hello, Bob. AND HELLO ALEX, AND HENRY!");
    expect(chatBot.greet(['Bob', 'ALEX', 'HENRY', 'Lisa'])).toEqual("Hello, Bob, and Lisa. AND HELLO ALEX, AND HENRY!");
  });

  describe('Chatbot separate the inputs and greet properly', function () {
    let chatBot: ChatBot;
    beforeAll(()=>{
      chatBot = new ChatBot();
    })
  
    it('should separate and greet people', function () {
      expect(chatBot.greet(['Bob, Alex'])).toEqual("Hello, Bob, and Alex.");
      expect(chatBot.greet(['Bob, Alex', 'Henry'])).toEqual("Hello, Bob, Alex, and Henry.");
    });
  });
  
});
