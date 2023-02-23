const chatBot = document.getElementById('chat-bot');
const chatLog = document.getElementById('chat-log');
const chatInput = document.getElementById('chat-input');
const chatForm = document.getElementById('chat-form');
const chatSubmit = document.getElementById('chat-submit');


// Add event listener to the form for handling user input
chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const userInput = chatInput.value;

  chatInput.value = '';
  // Add user message to the chat log
  addMessage(userInput, 'user');
  generateResponse(userInput);
});


chatSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const userInput = chatInput.value;
  // Clear the input field
  chatInput.value = '';
  // Add user message to the chat log
  addMessage(userInput, 'user');
  generateResponse(userInput);
});

// Function to add messages to the chat log
function addMessage(message, sender) {
  // Create a new message element
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.add(sender);
  messageElement.textContent = message;
  // Add the new message to the chat log
  chatLog.appendChild(messageElement);
  // Scroll to the bottom of the chat log
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Function to generate chatbot responses
function generateResponse(userInput) {
  // Process user input and generate response based on keywords
  if (userInput.includes('hello') || userInput.includes('hi') || userInput.includes('Hello')) {
    addMessage('Hello! How can I assist you today?', 'bot');
  } else if (userInput.includes('weather')) {
    addMessage('Sorry, I am not programmed to provide weather information. Is there anything else I can help you with?', 'bot');
  } else if (userInput.includes('joke')) {
    addMessage('Where does a fish keep his money? At a riverbank!', 'bot');
  } else if (userInput.includes('oil')) {
    addMessage('Oil spills can cause significant damage to marine ecosystems, and can take years to recover from.');
    addMessage('Did you know Shell has been fined £22,500 by a Scottish court after admitting failures that led to an oil leak in the North Sea that was the largest in more than a decade.');
    addMessage('What can we do to prevent oil spills in the future?');
  } else if (userInput.includes('overfishing')) {
   addMessage('Overfishing can deplete fish populations, disrupting marine food chains and causing ecological imbalances.');
   addMessage('Did you know that 90% of large predatory fish, such as sharks and tuna, have disappeared from the world\'s oceans?');
  } else if (userInput.includes('beach cleanup') || userInput.includes('cleanup')) {
    addMessage('Participating in beach cleanups is a great way to help reduce the amount of litter and debris that ends up in the ocean.');
    addMessage('Did you know that cigarette butts are the most common type of ocean debris?');
    addMessage('When was the last time you participated in a beach cleanup?');
  } else if (userInput.includes('marine reserves')) {
      addMessage('Marine reserves help to protect and conserve marine ecosystems, preserving them for future generations.');
      addMessage('Did you know that only 2% of the world\'s oceans are protected by marine reserves?');
      addMessage('What do you think we can do to increase the amount of protected ocean areas?');
  } else if (userInput.includes('thank')) {
    addMessage('You\'re welcome! Remember, every small action counts in protecting our oceans.');
  } else if (userInput.includes('fun')) {
    addMessage('I\'m glad you\'re enjoying our conversation! Here\'s a fun fact: Dolphins have names for each other.');
  } else if (userInput.includes('learn')) {
      addMessage('Sure, let\'s learn something new! Did you know that some species of sea turtles can live to be over 100 years old?');
      addMessage('What\'s another ocean-related fact you\'d like to learn?');
  } else if (userInput.includes('movie')) {
    addMessage('Watching a movie about our oceans can be a great way to learn and be inspired. Here are a few of my favorites: Finding Nemo');
  } else if (userInput.includes('travel')) {
      addMessage('Traveling to coastal areas and experiencing the beauty of our oceans firsthand can be a wonderful way to develop a deeper appreciation for marine life.');
      addMessage('Did you know that some of the best coral reefs in the world can be found in the Philippines, Indonesia, and Australia?');
      addMessage('What\'s your favorite coastal destination to visit?');
  } else if (userInput.includes('reuse')) {
      addMessage('Reducing waste can help protect our oceans, and reusing items is a great way to cut down on waste.');
      addMessage('Did you know that you can use cloth bags, reusable water bottles, and metal straws instead of their disposable counterparts?');
      addMessage('What are some ways you\'ve incorporated reusables into your daily life?');
  } else if (userInput.includes('climate change')) {
     addMessage('Climate change can have a significant impact on our oceans, leading to rising sea levels and ocean acidification.');
     addMessage('Did you know that coral reefs, which provide important habitats for marine life, are threatened by rising sea temperatures?');
     addMessage('What do you think we can do to combat climate change and protect our oceans?');
  } else if (userInput.includes('jellyfish')) {
      addMessage('Jellyfish are fascinating creatures that can be found in oceans all over the world.');
      addMessage('Did you know that some species of jellyfish are bioluminescent, meaning they can produce their own light?');
      addMessage('What\'s the most interesting marine creature you\'ve ever seen or learned about?');
  } else if (userInput.includes('thanks')) {
    addMessage('You\'re welcome! I\'m here to help you learn more about protecting our oceans.');
  } else if (userInput.includes('fun')) {
    addMessage('Glad to hear it! Did you know that some species of octopus have been observed using coconut shells as portable shelters?');
  } 
  else if(userInput.includes('play') || userInput.includes('Play')){
    addMessage('To start, choose your fishing net. Once you\'re ready, use your cursor to prevent any trash from falling into the ocean. Be careful, though! You only have three lives, and losing one will happen each time trash gets past you and reaches the water. Don\'t worry, though, there are boosters available to help you if you find yourself struggling. Good luck, and have fun! ')
  }
  else if(userInput.includes('contact' || 'response')){
    addMessage('Thank you for your message we will take around two days to respond back')

  }
  else if (userInput.includes('goodbye') || userInput.includes('bye')) {
    addMessage('Thanks for talking with me. Remember to do your part in protecting our oceans!');
  } else {
    addMessage('I am sorry, I did not understand your request. Please try again.', 'bot');
  }
}