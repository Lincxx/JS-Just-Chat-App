//class instances 
const chatroom = new Chatroom('general', 'jeremy');

//get chats and render
chatroom.getChats((data) => {
  console.log(data);
});