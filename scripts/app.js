//dom queries
const chatList = document.querySelector('.chat-list');

//class instances
const chatroom = new Chatroom('general', 'jeremy');
const chatui = new ChatUI(chatList);

//get chats and render
chatroom.getChats(data => chatui.render(data));