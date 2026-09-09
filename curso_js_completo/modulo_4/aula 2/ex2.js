const status = "PENDENTE";

// Forma convencional
    console.log("Status: " + status);

// Template string
    console.log(`Status: ${status}`);

// Forma convencional
    renderMessage.innerText = chat.user.name + ": " + message.content;

// Template string
    renderMessages.innerText = `${chat.user.name} : ${message.content}`;