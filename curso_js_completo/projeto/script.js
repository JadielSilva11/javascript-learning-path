const chats = [];

function createChat(id, user){
    const newChat = {
        id: id,
        user: user,
        messages: [],
        status: 'OPEN'
    };

    chats.push(newChat);
}

function findChatById(chatId){
    for(const chat of chats){
        if(chat.id === chatId){
            return chat;
        }
    }
}

function listChats(){
    for(const chat of chats){
        console.log(Object.entries(chat));
    }
}

function sortChatsByMessages(){
    chats.sort((a, b) => b.messages.length - a.messages.length);
    console.log(chats);
}

function listOpenChats(){
    for(const chat of chats){
        if(chat.status === "OPEN"){
            console.log(chat);
        }
    }
}

function endChat(chatId){
    const chat = findChatById(chatId);
    if(!chat){
        console.log("Chat não encontrado!");
        return;
    }

    chat.status = 'CLOSED';

}

function addMessage(id, chatId, sender, content, time){
    const chat = findChatById(chatId);
    if(!chat){
        console.log("Chat não encontrado!");
        return;
    }

    const newMessage = {
        id: id,
        sender: sender,
        content: content,
        time: time
    };

    chat.messages.push(newMessage);
}

function listMessages(chatId){
    const chat = findChatById(chatId);
    if(!chat){
        console.log("Chat não encontrado!");
        return;
    }

    for(const message of chat.messages){
        console.log(`${message.sender}: ${message.content}`);
    }
}

function totalSystemMessages(){
    let totalMessages = 0;
    for(const chat of chats){
        totalMessages += chat.messages.length;
    }
    return totalMessages;
}

function userWithMostMessages(){
    listChatsByMessages();
    console.log(`Cliente com mais mensagens ${chats[0].user}`);
}

function showChatAttributes(chatId){
    const chat = findChatById(chatId);
    if(!chat){
        console.log("Chat não encontrado!");
        return;
    }

    console.log(Object.keys(chat));
}

function showChatValues(chatId){
    const chat = findChatById(chatId);
    if(!chat){
        console.log("Chat não encontrado!");
        return;
    }

    console.log(Object.values(chat));
}

function showChatDetails(chatId){
    const chat = findChatById(chatId);
    if(!chat){
        console.log("Chat não encontrado!");
        return;
    }

    for(const [key, value] of Object.entries(chat)){
        console.log(`${key}: ${value}`);
    }
}

function checkPermissions(user){
    if(user.type === "ADMIN"){
        console.log("Acesso liberado!");
    }else{
        console.log("Acesso negado!");
    }
}