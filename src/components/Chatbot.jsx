
import { useEffect, useRef, useState } from "react";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! Welcome to The Sweet Spot. How can I help you today?",
    },
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const getReply = (text) => {
    const question = text.toLowerCase();

    // GREETINGS
    if (
      question.includes("hello") ||
      question.includes("hi") ||
      question.includes("hey") ||
      question.includes("good morning") ||
      question.includes("good afternoon")
    ) {
      return "Hi! Welcome to The Sweet Spot. What can I help you with today?";
    }

    // MENU
    if (
      question.includes("menu") ||
      question.includes("what do you sell") ||
      question.includes("what do you offer") ||
      question.includes("what cakes")
    ) {
      return "We offer homemade celebration cakes in Vanilla Bean, Chocolate Fudge, Red Velvet and Marble Cake. You can also choose from a variety of delicious fillings and add-ons. Visit our Menu page to explore all the options.";
    }

    // VANILLA
    if (
      question.includes("vanilla") ||
      question.includes("vanilla bean")
    ) {
      return "Yes! Vanilla Bean is one of our cake flavours. You can pair it with one of our available fillings and choose your preferred cake size and design.";
    }

    // CHOCOLATE
    if (
      question.includes("chocolate") ||
      question.includes("chocolate cake") ||
      question.includes("choc cake")
    ) {
      return "Yes! We do Chocolate Fudge cake. It's one of our available cake flavours and can be paired with different fillings, depending on your preference.";
    }

    // RED VELVET
    if (
      question.includes("red velvet") ||
      question.includes("red velvet cake")
    ) {
      return "Yes! Red Velvet is available at The Sweet Spot. You can choose your preferred filling, size and design.";
    }

    // MARBLE
    if (
      question.includes("marble") ||
      question.includes("marble cake")
    ) {
      return "Yes! Marble Cake is one of our available flavours. You can customise it with your preferred filling, size and design.";
    }

    // CAKE FLAVOURS
    if (
      question.includes("flavour") ||
      question.includes("flavor") ||
      question.includes("flavors") ||
      question.includes("flavours")
    ) {
      return "Our cake flavours are Vanilla Bean, Chocolate Fudge, Red Velvet and Marble Cake.";
    }

    // FILLINGS
    if (
      question.includes("filling") ||
      question.includes("fillings") ||
      question.includes("inside the cake") ||
      question.includes("inside")
    ) {
      return "Our available fillings include Swiss Meringue, Milk Truffle, Chocolate Truffle and Strawberry Compote. You can also choose our exclusive fillings: Cream Cheese, Biscoff and Salted Caramel for an additional R50.";
    }

    // SWISS MERINGUE
    if (
      question.includes("swiss meringue") ||
      question.includes("meringue")
    ) {
      return "Yes! Swiss Meringue is one of our base filling options.";
    }

    // MILK TRUFFLE
    if (
      question.includes("milk truffle")
    ) {
      return "Yes! Milk Truffle is one of our available fillings.";
    }

    // CHOCOLATE TRUFFLE
    if (
      question.includes("chocolate truffle")
    ) {
      return "Yes! Chocolate Truffle is one of our available fillings.";
    }

    // STRAWBERRY COMPOTE
    if (
      question.includes("strawberry") ||
      question.includes("strawberry compote")
    ) {
      return "Yes! Strawberry Compote is one of our available fillings.";
    }

    // BISCOFF
    if (
      question.includes("biscoff") ||
      question.includes("lotus")
    ) {
      return "Yes! Biscoff is one of our exclusive filling options. It is available for an additional R50.";
    }

    // CREAM CHEESE
    if (
      question.includes("cream cheese")
    ) {
      return "Yes! Cream Cheese is one of our exclusive filling options and is available for an additional R50.";
    }

    // SALTED CARAMEL
    if (
      question.includes("salted caramel") ||
      question.includes("caramel")
    ) {
      return "Yes! Salted Caramel is one of our exclusive filling options and is available for an additional R50.";
    }

    // CAKE SIZES
    if (
      question.includes("size") ||
      question.includes("sizes") ||
      question.includes("inch") ||
      question.includes("inches") ||
      question.includes("cm")
    ) {
      return "Our cakes are available in different sizes, from 4-inch up to 10-inch. The available sizes are 4, 5, 6, 7, 8 and 10 inches. The best size depends on how many guests you are serving.";
    }

    // PRICE
    if (
      question.includes("price") ||
      question.includes("prices") ||
      question.includes("cost") ||
      question.includes("how much") ||
      question.includes("expensive")
    ) {
      return "Cake prices depend on the size, flavour, filling and design. For a personalised quote, please send us your cake design or inspiration through the Order page.";
    }

    // ADD-ONS
    if (
      question.includes("add on") ||
      question.includes("add-on") ||
      question.includes("decoration") ||
      question.includes("decorations") ||
      question.includes("topper") ||
      question.includes("drip") ||
      question.includes("strawberries") ||
      question.includes("flowers") ||
      question.includes("isomalt") ||
      question.includes("wafer")
    ) {
      return "We offer different cake add-ons and decorations, including Fresh Strawberries, Isomalt Sail, Drip, Custom Topper, Fresh Flowers and Wafer Paper. Send us your cake design or inspiration for an exact quote.";
    }

    // CUSTOM CAKES
    if (
      question.includes("custom") ||
      question.includes("customise") ||
      question.includes("customize") ||
      question.includes("design") ||
      question.includes("inspiration")
    ) {
      return "Absolutely! We love creating cakes based on your ideas. You can send us your cake design or inspiration when placing your order, and we'll provide an exact quote based on the design.";
    }

    // OCCASIONS
    if (
      question.includes("birthday") ||
      question.includes("wedding") ||
      question.includes("baby shower") ||
      question.includes("anniversary") ||
      question.includes("bridal shower") ||
      question.includes("corporate") ||
      question.includes("celebration") ||
      question.includes("occasion")
    ) {
      return "We create cakes for birthdays, weddings, baby showers, anniversaries, bridal showers, corporate events and even those 'just because' moments!";
    }

    // ORDERING
    if (
      question.includes("order") ||
      question.includes("buy") ||
      question.includes("book") ||
      question.includes("booking") ||
      question.includes("place an order")
    ) {
      return "You can place an order through our order page. Simply provide your preferred cake flavour, filling, size, occasion and design details. You can also send us your cake inspiration for an exact quote.";
    }

    // NOTICE PERIOD
    if (
      question.includes("how early") ||
      question.includes("how soon") ||
      question.includes("notice") ||
      question.includes("last minute") ||
      question.includes("same day")
    ) {
      return "We recommend giving us at least 2 days' notice for an order. More complex designs may require up to 1 week, so ordering early is always best.";
    }

    // DEPOSIT
    if (
      question.includes("deposit") ||
      question.includes("payment") ||
      question.includes("pay")
    ) {
      return "A 50% non-refundable deposit is required to secure your order. The remaining balance will be discussed when your order is confirmed.";
    }

    // COLLECTION
    if (
      question.includes("collect") ||
      question.includes("collection") ||
      question.includes("pick up") ||
      question.includes("pickup")
    ) {
      return "Collection is available in Cape Town at an agreed time. Once your order is confirmed, we'll provide the collection details.";
    }

    // DELIVERY
    if (
      question.includes("delivery") ||
      question.includes("deliver") ||
      question.includes("delivering")
    ) {
      return "Yes! Delivery is available around Cape Town at an additional cost. We can also arrange delivery outside Cape Town for an extra fee, depending on the location.";
    }

    // OUTSIDE CAPE TOWN
    if (
      question.includes("outside cape town") ||
      question.includes("outside cape") ||
      question.includes("other city") ||
      question.includes("other cities") ||
      question.includes("outside the city")
    ) {
      return "Yes, delivery outside Cape Town can be arranged at an additional cost. The delivery fee will depend on your location.";
    }

    // CAPE TOWN
    if (
      question.includes("where are you") ||
      question.includes("where are you based") ||
      question.includes("location") ||
      question.includes("where")
    ) {
      return "The Sweet Spot is based in Cape Town, South Africa. Collection is available at an agreed time, and delivery can be arranged at an additional cost.";
    }

    // CONTACT
    if (
      question.includes("contact") ||
      question.includes("email") ||
      question.includes("phone") ||
      question.includes("number") ||
      question.includes("call")
    ) {
      return "You can contact The Sweet Spot through:\n\nEmail: thesweetspotbymayra@gmail.com\nCalls: 081 846 6280\nWhatsApp:+258845023340\n\nWe're always happy to help with your cake enquiries!";
    }

    // WHATSAPP
    if (
      question.includes("whatsapp") ||
      question.includes("whats app")
    ) {
      return "You can reach us on WhatsApp at 081 846 6280. Feel free to send us your cake design or inspiration there for an exact quote.";
    }

    // EMAIL
    if (
      question.includes("email") ||
      question.includes("e-mail")
    ) {
      return "You can email The Sweet Spot at thesweetspotbymayra@gmail.com. We'd be happy to assist with your enquiry or order.";
    }

    // PHONE
    if (
      question.includes("call") ||
      question.includes("telephone") ||
      question.includes("phone number")
    ) {
      return "You can call The Sweet Spot on 081 846 6280.";
    }

    // OPENING DAYS
    if (
      question.includes("open") ||
      question.includes("opening") ||
      question.includes("hours") ||
      question.includes("available") ||
      question.includes("days")
    ) {
      return "The Sweet Spot is open Monday to Saturday. Orders are collected or delivered at an agreed time.";
    }

    // ABOUT
    if (
      question.includes("about you") ||
      question.includes("who are you") ||
      question.includes("your story") ||
      question.includes("about the sweet spot")
    ) {
      return "The Sweet Spot by Mayra is a homemade baking business based in Cape Town. Our story began in Mozambique, with a genuine love for baking, creating beautiful cakes and bringing people together through sweet moments.";
    }

    // THANK YOU
    if (
      question.includes("thank you") ||
      question.includes("thanks")
    ) {
      return "You're very welcome! We'd love to make something sweet for you.";
    }

    // GOODBYE
    if (
      question.includes("bye") ||
      question.includes("goodbye")
    ) {
      return "Goodbye! Thank you for visiting The Sweet Spot. We hope to bake something special for you soon!";
    }

    // DEFAULT
    return "I'd be happy to help! You can ask me about our cake flavours, fillings, sizes, prices, custom designs, delivery, ordering or contact details.";
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = message.trim();

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
      {
        sender: "bot",
        text: getReply(userMessage),
      },
    ]);

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      <button
        className="chatbot-button"
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
      >
        <span>{open ? "Close" : "Let's chat!"}</span>
      </button>

      {open && (
        <div className="chatbot">

          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div>
                <h3>The Sweet Spot</h3>
                <span>Sweet Assistant</span>
              </div>
            </div>

            <button
              className="chatbot-close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.sender}`}
              >
                {msg.text.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < msg.text.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask me something..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button onClick={sendMessage}>
              →
            </button>
          </div>

        </div>
      )}
    </>
  );
}

export default Chatbot;
