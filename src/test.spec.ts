describe('Chatbot greet people', function () {

  it('should greet the person', function () {
    const chatBot = new ChatBot();
    expect(chatBot.greet("Bob")).toBe("Hello, Bob.");
  });

});
