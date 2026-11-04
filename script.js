
/* =================================
   FORMULÁRIO DE CONTATO
================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        document.getElementById("formFeedback").textContent =
            "Mensagem registrada apenas nesta demonstração. Para receber mensagens de verdade, conecte o formulário a um servidor.";

        contactForm.reset();

    });

}


/* =================================
   CHAT ONLINE
================================= */

const chatForm = document.getElementById("chatForm");

if (chatForm) {

    chatForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const input = document.getElementById("chatText");

        const message = input.value.trim();

        if (!message) {
            return;
        }

        // Criar mensagem enviada

        const bubble = document.createElement("div");

        bubble.className = "message sent";

        bubble.textContent = message;

        document.getElementById("chatMessages").appendChild(bubble);

        input.value = "";

        // Criar resposta automática

        const reply = document.createElement("div");

        reply.className = "message received";

        reply.textContent =
            "Obrigado por escrever! Este chat é apenas uma demonstração do projeto escolar.";

        document.getElementById("chatMessages").appendChild(reply);

        // Rolar para a última mensagem

        document.getElementById("chatMessages").scrollTop =
            document.getElementById("chatMessages").scrollHeight;

    });

}
