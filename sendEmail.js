const nodemailer = require("nodemailer");

// é necessário gerar uma appPassword a partir do seu e-mail Google para conseguir utilizar a API.
// tutorial -> https://support.google.com/accounts/answer/185833?hl=en
// cole a senha gerada pelo Google abaixo.
const appPassword = ""

async function main() {

    // Primeiro, criamos o 'transportador' de e-mail, um 'meio' para conseguirmos acessar o host do email e enviá-lo

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // SMTP server address (normalmente: mail.your-domain.com -> acess for support(https://support.google.com/mail/answer/7126229?hl=pt-BR#zippy=%2Cetapa-alterar-o-smtp-e-outras-configura%C3%A7%C3%B5es-no-seu-cliente-de-e-mail))
        port: 465, // Port for SMTP (usually 465)
        secure: true, // Usually true if connecting to port 465
        auth: {
            user: "email@gmail.com", // Your email address
            pass: appPassword, // Password (for gmail, your app password)
            // ⚠️ For better security, use environment variables set on the server for these values when deploying
        },
    });

    // Define o conteúdo da mensagem. O 'html' pode ser personalizado como quiser, criando uma variável string que recebe o valor do html que você desejar.

    let info = {
        from: '"seu-nome" <seu-email>',
        to: "email-destinatario",
        subject: "titulo-do-email",
        html: `
        <h1>NodeMailer Test</h1>
        <p>This is a NodeMailer Test</p>
        `,
    }
    
    // Aqui, fazemos o envio do e-mail com base nas informações que configuramos acima através do transporter que criamos lá em cima.
    let response = await transporter.sendMail(info);
    
    console.log("Mensagem enviada. messageId: " + response.messageId); // ID aleatório gerado por uma requisição feita com sucesso (optional)
    
}

// chamada da função
main()
    .catch(err => console.log(err));
