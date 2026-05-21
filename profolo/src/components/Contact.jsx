import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState("");
  const email = "ale906271@gmail.com";
  const telegram = "your_telegram_username"; // replace with your username (without @)

  function openGmailCompose() {
    const subject = encodeURIComponent("Contact from portfolio");
    const body = encodeURIComponent("Hi, I saw your portfolio and would like to connect.");
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(url, "_blank");
  }

  function openMailto() {
    const subject = encodeURIComponent("Contact from portfolio");
    const body = encodeURIComponent("Hi, I saw your portfolio and would like to connect.");
    const url = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = url;
  }

  function openTelegram() {
    const url = `https://t.me/${telegram}`;
    window.open(url, "_blank");
  }

  async function copyToClipboard(value, label) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(""), 2000);
    } catch (e) {
      console.error("copy failed", e);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900  p-4">
      <div className="w-full max-w-2xl rounded-xl bg-zinc-950 shadow-2xl overflow-hidden border border-zinc-800">
        {/* Top bar */}
        <div className="flex items-center gap-2 bg-zinc-800 px-4 py-3">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-cascadia text-green-400 text-sm sm:text-base">
          {/* Command */}
          <p className="text-gray-300 text-[#15f1a4]">
            johnsmith <span className="text-green-400">$</span> cd contact
          </p>

          <p className="mt-2 text-gray-300">
            contact (main) <span className="text-green-400">$</span> ls
          </p>

          {/* List */}
          <div className="mt-6 space-y-3 font-cascadia">
            <ul className="mt-6 space-y-4 w-full items-start md:justify-start text-base cursor-default">
              <li className="flex items-center gap-3 text-gray-200 duration-400">
                <span className="text-blue-400 text-lg">📧</span>
                <div className="flex-1">
                  <div className="text-lg">Email</div>
                  <div className="text-sm text-gray-400 break-all">{email}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={openGmailCompose} className="px-3 py-1 bg-green-600 rounded text-white">Open in Gmail</button>
                  <button onClick={openMailto} className="px-3 py-1 bg-blue-600 rounded text-white">Use mailto</button>
                  <button onClick={() => copyToClipboard(email, "email")} className="px-3 py-1 border rounded">{copied === 'email' ? 'Copied' : 'Copy'}</button>
                </div>
              </li>

              <li className="flex items-center gap-3 text-gray-200 duration-400">
                <span className="text-cyan-400 text-lg">💬</span>
                <div className="flex-1">
                  <div className="text-lg">Telegram</div>
                  <div className="text-sm text-gray-400">@{telegram}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={openTelegram} className="px-3 py-1 bg-blue-500 rounded text-white">Open Telegram</button>
                  <button onClick={() => copyToClipboard(`@${telegram}`, 'telegram')} className="px-3 py-1 border rounded">{copied === 'telegram' ? 'Copied' : 'Copy'}</button>
                </div>
              </li>

              <li className="pt-4 text-sm text-gray-400">Or send a message via the contact form below:</li>

              <li>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target;
                  const name = encodeURIComponent(form.name.value || '');
                  const message = encodeURIComponent(form.message.value || '');
                  // fallback to mailto
                  window.location.href = `mailto:${email}?subject=Contact from ${name}&body=${message}`;
                }} className="mt-3 flex flex-col gap-2">
                  <input name="name" placeholder="Your name" className="px-3 py-2 rounded bg-zinc-800 text-white" />
                  <textarea name="message" placeholder="Your message" rows={4} className="px-3 py-2 rounded bg-zinc-800 text-white"></textarea>
                  <div className="flex gap-2">
                    <button type="submit" className="px-4 py-2 bg-indigo-600 rounded text-white">Send via email</button>
                    <button type="button" onClick={() => {
                      const subject = encodeURIComponent('Contact from portfolio');
                      const body = encodeURIComponent(`Hi, I would like to connect.`);
                      const tg = `https://t.me/${telegram}`;
                      window.open(tg, '_blank');
                    }} className="px-4 py-2 bg-cyan-600 rounded text-white">Open Telegram</button>
                  </div>
                </form>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
