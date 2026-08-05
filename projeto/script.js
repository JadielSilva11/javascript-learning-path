const chats = [];

function createChat(id, customer){
    newChat = {
        id: id,
        customer: customer,
        messages: [],
        qtdMessages: 0,
        status: 'PENDENTE'
    };

    chats.push(newChat);
}

function listChats(){
    for(const chat of chats){
        console.log(Object.entries(chat));
    }
}

function addMessage(id, chatId, sender, content, time){
    chatExists(chatId);
    newMessage = {
        id: id,
        sender: sender,
        content: content,
        time: time
    };

    for(const chat of chats){
        if(chat.id === chatId){
            chat.messages.push(newMessage);
            chat.qtdMessages++;
        }
    }
}

function listMessages(chatId){
    chatExists(chatId);
    for(const chat of chats){
        if(chat.id === chatId){
            console.log(Object.entries(chat));
        }
    }
}

function endChat(chatId){
    chatExists(chatId);
    for(const chat of chats){
        if(chat.id === chatId){
            chat.status = 'CONCLUIDO';
        }
    }
}

function chatExists(chatId){
    for(const chat of chats){
        if(chat.id === chatId){
            return true;
        }
    }
    return false;
}