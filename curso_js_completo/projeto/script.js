const chats = [];
const users = [];
let usersId = 0;
let chatsId = 0;
let messagesId = 0;
let selectedChatId = 0;

function createUser(name){
    usersId++;

    const user = {
        id: usersId,
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

function selectChat(chatId){
    const chatsElements = document.querySelectorAll('.chat');

    for(const chatElement of chatsElements){
        
        chatElement.classList.remove('selected');

        if(chatElement.dataset.id === chatId){
            chatElement.classList.add('selected');
            selectedChatId = Number(chatId);
            renderMessages(selectedChatId);
        }

        console.log('Evento Função selecionar');
    }
}

function renderChats(){
    const chatList = document.getElementById('chat-list');
    chatList.innerText = '';

    for(const chat of chats){
        const renderChat = document.createElement('div');
        renderChat.classList.add('chat');
        renderChat.dataset.id = chat.id;

        if(chat.status === 'CLOSED'){
            renderChat.classList.add('finished');
        }

        const renderUserName = document.createElement('p');
        renderUserName.innerText = chat.user.name;

        const renderChatMessages = document.createElement('p');
        renderChatMessages.innerText = `${chat.messages.length} mensagens`;

        const renderChatStatus = document.createElement('p');
        renderChatStatus.innerText = `Status: ${chat.status}`;

        const chatFinishButton = document.createElement('button');
        chatFinishButton.classList.add('finish-chat');
        chatFinishButton.innerText = 'Concluir';

        const chatDeleteButton = document.createElement('button');
        chatDeleteButton.classList.add('delete-chat');
        chatDeleteButton.innerText = 'Deletar';

        renderChat.appendChild(renderUserName);
        renderChat.appendChild(renderChatMessages);
        renderChat.appendChild(renderChatStatus);
        renderChat.appendChild(chatFinishButton);
        renderChat.appendChild(chatDeleteButton);

        chatList.appendChild(renderChat);
    }

}

function finishChat(chatId){
    const chat = findChatById(chatId);
    if(!chat){
        console.log("Chat não encontrado!");
        return;
    }

    chat.status = 'CLOSED';
}

function deleteChat(chatId){
    const chat = findChatById(chatId);
    if(!chat){
        console.log("Chat não encontrado!");
        return;
    }

    const index = chats.findIndex(chat => chat.id === chatId);

    if(index !== -1){
        chats.splice(index, 1);
    }

    selectedChatId = 0;
    document.getElementById('messages-list').innerText = '';
}

function addMessage(chatId, sender, content){
    const chat = findChatById(chatId);
    if(!chat){
        console.log("Chat não encontrado!");
        return;
    }

    if(chat.status === 'CLOSED'){
        alert('O chat selecionado já foi finalizado.');
        return;
    }

    messagesId++;

    const newMessage = {
        id: messagesId,
        chatId: chatId,
        sender: sender,
        content: content,
        time: new Date()
    };

    chat.messages.push(newMessage);
}

function renderMessages(chatId){
    const chat = findChatById(chatId);
    if(!chat){
        console.log("Chat não encontrado!");
        return;
    }

    const renderMessages = document.getElementById('messages-list');
    renderMessages.innerText = '';

    for(const message of chat.messages){
        const renderMessage = document.createElement('p');

        if(message.sender === 'USER'){
            renderMessage.innerText = `${chat.user.name}: ${message.content}`;
        }else{
            renderMessage.innerText = `${message.sender}: ${message.content}`;
        }

        renderMessages.appendChild(renderMessage);
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
  
    if(event.target.classList.contains('finish-chat')){
        chatClicked.classList.add('finished');
        finishChat(Number(chatClicked.dataset.id));
        alert('Chat finalizado.');
    } 
    else if(event.target.classList.contains('delete-chat')){
        deleteChat(Number(chatClicked.dataset.id));
        renderChats();
        alert('Chat deletado.');
    }

    if(!chatClicked){
        console.log('Não foi possível selecionar o chat.')
        return;
    }
    console.log('Evento clique');
    selectChat(chatClicked.dataset.id);
})

const messagesForm = document.getElementById('messages-form');

messagesForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if(selectedChatId === 0){
        alert('Selecione um chat primeiro.');
        return;
    }

    const content = document.getElementById('message-input').value;
    if(!content.trim()){
        alert('Digite uma mensagem.');
        return;
    }

    const sender = document.getElementById('sender').value;

    addMessage(selectedChatId, sender, content);
    renderMessages(selectedChatId);

    document.getElementById('message-input').value = '';

    messagesForm.reset();
})