//Structure of the chat - using JS Objects
//adding new chat documents
//setting up a real-time listners to get new chats
//updating the username
//updating the room

class Chatroom {

  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
  }

  async addChat(message) {
    //format a chat object
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      create_at: firebase.firestore.Timestamp.fromDate(now)
    };

    //save the chat document
    const response = await this.chats.add(chat);

    return response;
  }

  //real time listener
  getChats(callback) {
    this.chats
      //complex query 
      .where('room', '==', this.room)
      .onSnapshot(snapshot => {
        //docChanges - get an array of all changes
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            //update the ui
            callback(change.doc.data());
          }
        });
      });
  }

}

const chatroom = new Chatroom('gaming', 'jeremy');

chatroom.getChats((data) => {
  console.log(data);
});

// chatroom.addChat('hello everyone')
//   .then(() => {
//     console.log('chat added')
//   })
//   .catch(err => console.log(err));

// console.log(chatroom);