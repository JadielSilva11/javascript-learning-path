const chats = [];
const users = [];
let userId = 0;
let chatsId = 0;

function createUser(name){
    userId++;

    const user = {
        id: userId,
        name: name,
        type: 'CUSTOMER'
    };

    users.push(user);
    return user;
}

function findUserById(id){
    for(const user of users){
        if(user.id === id){
            return user;
        }
    }
}

function createChat(userId){
    const user = findUserById(userId);
    chatsId++;

    const newChat = {
        id: chatsId,
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

function renderChats(){
    const chatList = document.getElementById('chat-list');
    chatList.innerText = '';

    for(const chat of chats){
        const renderChat = document.createElement('div');
        renderChat.classList.add('chat');
        renderChat.dataset.id = chat.id;

        const renderUserName = document.createElement('p');
        renderUserName.innerText = chat.user.name;

        const renderChatMessages = document.createElement('p');
        renderChatMessages.innerText = `${chat.messages.length} mensagens`;

        const renderChatStatus = document.createElement('p');
        renderChatStatus.innerText = chat.status;

        renderChat.appendChild(renderUserName);
        renderChat.appendChild(renderChatMessages);
        renderChat.appendChild(renderChatStatus);

        chatList.appendChild(renderChat);
    }

}

function selectChat(chatId){
    const chatsElements = document.querySelectorAll('.chat');

    for(const chatElement of chatsElements){
        
        chatElement.classList.remove('selected');

        if(chatElement.dataset.id === chatId){
            chatElement.classList.add('selected');
        }

        console.log('Evento Função selecionar');
    }
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
    sortChatsByMessages();
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

const form = document.getElementById('create-chat');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userName = document.getElementById('user-name').value.trim();

    if(!userName){
        alert('Nome não pode estar vazio.');
        return;
    }

    const user = createUser(userName);
    createChat(user.id);

    renderChats();

    form.reset();
})

const chatList = document.getElementById('chat-list');

chatList.addEventListener('click', (event) => {
    const chatClicked = event.target.closest('.chat');

    if(!chatClicked){
        console.log('Não foi possível selecionar o chat.')
        return;
    }

    console.log('Evento clique');
    selectChat(chatClicked.dataset.id);
})