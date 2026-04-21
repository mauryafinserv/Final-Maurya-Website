import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X, Send, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917021477258";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Maurya%20Shares%2C%20I%20need%20some%20help%20with%20my%20investments.`;

const Samridhi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Namaste! 🙏 I'm Samridhi, your Maurya Wealth Assistant. I can help you with Mutual Funds, PMS, NRI Investments, Tax Planning, and more. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMessage = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, I couldn't process that. Please try again or contact us on WhatsApp." },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong. Please try again or reach us on WhatsApp." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

        {/* Chat Window */}
        {isOpen && (
          <div className="w-80 md:w-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
            style={{ height: "500px" }}>

            {/* Header */}
            <div className="bg-black px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold text-sm">
                  S
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Samridhi</p>
                  <p className="text-gray-400 text-xs">Maurya Wealth Assistant</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-yellow-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm"
                  }`}>
                    {msg.content.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
                      part.match(/^https?:\/\//) 
                        ? <a key={i} href={part} target="_blank" rel="noopener noreferrer" 
                            className="text-yellow-600 underline break-all hover:text-yellow-800">{part}</a>
                        : part.split(/\*\*(.*?)\*\*/g).map((p, j) =>
                            j % 2 === 1 ? <strong key={j}>{p}</strong> : p
                          )
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-2 shadow-sm">
                    <div className="flex gap-1 items-center h-5">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-yellow-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-yellow-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* WhatsApp Banner */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-50 border-t border-green-100 px-4 py-2 hover:bg-green-100 transition"
            >
              <FaWhatsapp className="text-green-500 text-lg" />
              <span className="text-green-700 text-xs font-medium">
                Need more help? Chat on WhatsApp →
              </span>
            </a>

            {/* Input */}
            <div className="border-t border-gray-200 px-3 py-2 flex items-center gap-2 bg-white">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="flex-1 text-sm px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-yellow-500 text-gray-800 bg-white placeholder-gray-400"
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-full p-2 transition disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-14 h-14 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full shadow-lg flex items-center justify-center transition"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>
    </>
  );
};

export default Samridhi;
