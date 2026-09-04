import { useState } from "react";

const cakeBases = [
  "Vanilla Bean",
  "Chocolate Fudge",
  "Red Velvet",
  "Marble Cake",
];

const fillings = [
  "Cream Cheese Frosting",
  "Peppermint Crisp",
   "Classic Caramel",
  "Biscoff Lotus",
  "Milk Truffle",
  "Dark Chocolate Truffle",
  "Chocolate Ganache",
  "Strawberry Compote",
  "Salted Caramel",
];

const occasions = [
  "Birthday",
  "Wedding",
  "Baby Shower",
  "Anniversary",
  "Bridal Shower",
  "Corporate Event",
  "Just Because",
];

const sizes = [
  "4 inch /10cm",
  "6 inch /15cm",
  "7 inch /18cm",
];

function Order() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    occasion: "Birthday",
    date: "",
    base: "Vanilla Bean",
    filling: "Cream Cheese Frosting",
    size: "6 inch",
    delivery: "Collection",
    notes: "",
  });


  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }


  const ready =
    form.name.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.date !== "";


  const message = `Hi The Sweet Spot! 🍰

I would like to place a cake order.

Name: ${form.name}
Contact number: ${form.phone}

Occasion: ${form.occasion}
Date needed: ${form.date}

Cake base: ${form.base}
Filling / frosting: ${form.filling}
Size: ${form.size}

Collection / delivery: ${form.delivery}

Design notes:
${form.notes || "No additional notes"}

Thank you! ♡`;


  const whatsappUrl = `https://wa.me/258845023340?text=${encodeURIComponent(
    message
  )}`;


  return (
    <main className="page">

      <section className="page-header">

        <h1>Order Your Cake</h1>

        <div className="heart-divider">
          ♡
        </div>

        <p>
          Tell us a little about the cake you're dreaming of and we will take care of the rest.
        </p>

      </section>


      <section className="order-layout">

        <div className="order-form-card">

          <h2>Let's create something sweet</h2>

          <p className="form-intro">
            Complete the details below and your order will be
            sent as a WhatsApp message.
          </p>


          <div className="form-grid">

            <label>
              <span>Name</span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g Mayra"
              />
            </label>


            <label>
              <span>Contact number</span>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="e.g. 080 123 4567"
              />
            </label>


            <label>
              <span>Occasion</span>

              <select
                name="occasion"
                value={form.occasion}
                onChange={handleChange}
              >
                {occasions.map((occasion) => (
                  <option key={occasion}>
                    {occasion}
                  </option>
                ))}
              </select>
            </label>


            <label>
              <span>Collection date</span>

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </label>


            <label>
              <span>Cake base</span>

              <select
                name="base"
                value={form.base}
                onChange={handleChange}
              >
                {cakeBases.map((base) => (
                  <option key={base}>
                    {base}
                  </option>
                ))}
              </select>
            </label>


            <label>
              <span>Filling / frosting</span>

              <select
                name="filling"
                value={form.filling}
                onChange={handleChange}
              >
                {fillings.map((filling) => (
                  <option key={filling}>
                    {filling}
                  </option>
                ))}
              </select>
            </label>


            <label>
              <span>Size</span>

              <select
                name="size"
                value={form.size}
                onChange={handleChange}
              >
                {sizes.map((size) => (
                  <option key={size}>
                    {size}
                  </option>
                ))}
              </select>
            </label>


            <label>
              <span>Collection or delivery</span>

              <select
                name="delivery"
                value={form.delivery}
                onChange={handleChange}
              >
                <option>Collection</option>
                <option>Delivery (extra cost)</option>
              </select>
            </label>


            <label className="full-width">
              <span>Design notes & inspiration</span>

              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows="5"
                placeholder="Colours scheme, theme, message on the cake, allergies..."
              />
            </label>

          </div>


          {ready ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-order-button"
            >
              Send order on WhatsApp
            </a>
          ) : (
            <button
              type="button"
              className="whatsapp-order-button disabled"
              disabled
            >
              Complete your details
            </button>
          )}

          <p className="form-help">
            {ready
              ? "WhatsApp will open with your order details filled in."
              : "Please add your name, contact number and date to continue."}
          </p>

        </div>


        <aside className="order-summary">

          <h2>Order Summary</h2>

          <div className="heart-divider">
            ♡
          </div>

          <div className="summary-item">
            <span>Occasion</span>
            <strong>{form.occasion}</strong>
          </div>

          <div className="summary-item">
            <span>Date</span>
            <strong>
              {form.date || "Not selected"}
            </strong>
          </div>

          <div className="summary-item">
            <span>Base</span>
            <strong>{form.base}</strong>
          </div>

          <div className="summary-item">
            <span>Filling</span>
            <strong>{form.filling}</strong>
          </div>

          <div className="summary-item">
            <span>Size</span>
            <strong>{form.size}</strong>
          </div>

          <div className="summary-item">
            <span>Delivery</span>
            <strong>{form.delivery}</strong>
          </div>

          <div className="summary-message">
            <span>Design notes</span>

            <p>
              {form.notes || "No design notes added yet."}
            </p>
          </div>

        </aside>

      </section>

    </main>
  );
}

export default Order;