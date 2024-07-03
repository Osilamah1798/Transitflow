import { toast } from "react-toastify";
import { PlainButton } from "./Button";
import { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    message: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formIsValid =
    formData.name !== "" &&
    formData.email !== "" &&
    formData.message !== "" &&
    formData.number !== "" &&
    formData.city !== "";
  const sendMessage = () => {
    let data = formData;
    let url =
      "https://sheet.best/api/sheets/dea09495-1248-4ea0-b0de-830871f3de5c";

    if (formIsValid) {
      setLoading(() => true);
      fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((d) => d.json())
        .then(() => {
          setFormData(() => ({
            name: "",
            email: "",
            number: "",
            city: "",
            message: "",
          }));
          toast("👍 Your message has been sent!");
          setLoading(() => false);
        })
        .catch((err) => {
          console.log({ err });
          setLoading(() => false);
        });
    } else {
      toast.error("Please fill out form completely");
    }
  };
  return (
    <div className="flex w-full md:w-[80%] lg:w-[60%] pt-10 justify-between items-center flex-wrap gap-4">
      <input
        type="text"
        className="w-full md:w-[48%] h-12 mb-2 bg-transparent font-spartan text-white placeholder:text-white border-1 border-input-border px-5 py-3"
        name="name"
        placeholder="Your Name*"
        value={formData.name}
        onChange={handleFormData}
      />
      <input
        type="email"
        className="w-full md:w-[48%] h-12 mb-2 bg-transparent font-spartan text-white placeholder:text-white border-1 border-input-border px-5 py-3"
        name="email"
        placeholder="Email*"
        value={formData.email}
        onChange={handleFormData}
      />
      <input
        type="tel"
        className="w-full md:w-[48%] h-12 mb-2 bg-transparent font-spartan text-white placeholder:text-white border-1 border-input-border px-5 py-3"
        name="number"
        placeholder="Phone Number*"
        value={formData.number}
        onChange={handleFormData}
      />
      <input
        type="text"
        className="w-full md:w-[48%] h-12 mb-2 bg-transparent font-spartan text-white placeholder:text-white border-1 border-input-border px-5 py-3"
        name="city"
        placeholder="City*"
        value={formData.city}
        onChange={handleFormData}
      />
      <textarea
        placeholder="Your Message"
        name="message"
        value={formData.message}
        onChange={handleFormData}
        className="w-full min-h-36 mb-4 bg-transparent font-spartan text-white placeholder:text-white border-1 border-input-border px-5 py-3"
      />
      <PlainButton
        text={"Submit Message"}
        state={"primary"}
        onClick={sendMessage}
        loading={loading}
      />
    </div>
  );
};

export default ContactForm;
