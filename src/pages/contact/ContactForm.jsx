import { useEffect, useState } from "react";
import axios from "axios";

function ContactForm() {
  const [inputFields, setInputFields] = useState({
    name: "",
    phone_number: "",
    email: "",
    message: "",
  });

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const { name, phone_number, email, message } = inputFields;
  const [emptyInputFields, setEmptyInputFields] = useState(false);
  const [messageDelivered, setMessageDelivered] = useState(false);

  const onChangeUserInput = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setInputFields({ name: "", phone_number: "", email: "", message: "" });
      setMessageDelivered(true);
    }
  };

  const submitFunction = (e) => {
    e.preventDefault();

    if (
      name.length === 0 ||
      phone_number.length === 0 ||
      email.length === 0 ||
      message.length === 0
    ) {
      setEmptyInputFields(true);
    } else {
      if (navigator.onLine) {
        setServerState({ submitting: true });
        axios({
          method: "POST",
          url: "https://formspree.io/f/mwpebpkj", // your Formspree endpoint
          data: inputFields,
        })
          .then(() => {
            handleServerResponse(true, "Message Delivered Successfully");
          })
          .catch((r) => {
            handleServerResponse(false, r.response.data.error);
          });
      } else {
        console.log("Offline");
      }
    }
  };

  useEffect(() => {
    if (emptyInputFields) {
      const borderColourTimer = setTimeout(() => {
        setEmptyInputFields(false);
      }, 3000);

      return () => clearTimeout(borderColourTimer);
    }
  }, [emptyInputFields]);

  useEffect(() => {
    if (messageDelivered) {
      const messageTimer = setTimeout(() => {
        setMessageDelivered(false);
      }, 3000);

      return () => clearTimeout(messageTimer);
    }
  }, [messageDelivered]);

  return (
    <div>
      <header className="text-center font-semibold text-lg pt-5 underline">
        Send Us A Direct Message
      </header>
      <br />
      <main className="bg-gray-200 py-5 md:px-5 max-sm:mx-6 px-2 mx-1 rounded-sm mb-10 md:mb-2">
        <form className="flex flex-col gap-5">
            <input
                onChange={onChangeUserInput}
                name="name"
                value={name}
                type="text"
                placeholder="Your Name"
                className={`outline-none border-b-2 bg-gray-200 py-2 px-2 font-medium rounded-sm transition ${
                emptyInputFields && !name ? "border-red-500" : "border-black focus:border-gold-500"
                }`}
            />
            <input
                onChange={onChangeUserInput}
                name="phone_number"
                value={phone_number}
                type="tel"
                placeholder="Your Phone Number"
                className={`outline-none border-b-2 bg-gray-200 py-2 px-2 font-medium rounded-sm transition ${
                emptyInputFields && !phone_number ? "border-red-500" : "border-black focus:border-gold-500"
                }`}
            />
            <input
                onChange={onChangeUserInput}
                name="email"
                value={email}
                type="email"
                placeholder="Your Email"
                className={`outline-none border-b-2 bg-gray-200 py-2 px-2 font-medium rounded-sm transition ${
                emptyInputFields && !email ? "border-red-500" : "border-black focus:border-gold-500"
                }`}
            />
            <textarea
                onChange={onChangeUserInput}
                name="message"
                value={message}
                rows={4}
                placeholder="Your Message"
                className={`outline-none border-b-2 bg-gray-200 py-2 px-2 font-medium rounded-sm transition ${
                emptyInputFields && !message ? "border-red-500" : "border-black focus:border-gold-500"
                }`}
            />

            {/* Button + Status */}
            <div className="flex flex-col gap-2 items-center">
                <button
                disabled={serverState.submitting}
                type="submit"
                onClick={submitFunction}
                className={`text-lg px-4 py-2 rounded font-medium text-white transition ${
                    serverState.submitting ? "bg-gray-500" : "bg-gold-500 hover:bg-gold-600"
                }`}
                >
                {serverState.submitting ? "Sending..." : "Send Message"}
                </button>

                {serverState.status && messageDelivered && (
                <p className="bg-green-500 text-white font-semibold text-lg rounded-md py-2 px-3">
                    {serverState.status.msg}
                </p>
                )}
            </div>
        </form>

      </main>
    </div>
  );
}

export default ContactForm;
