const ALLOWED_ORIGINS = [
    "https://jeremyshaw.co.nz",
    "https://www.jeremyshaw.co.nz",
    "https://portfolio-website-a71ab.web.app",
    "https://portfolio-website-a71ab.firebaseapp.com",
    "http://localhost:5173",
];

// Assembled at runtime so the address is not greppable in this public repo.
const TO_ADDRESS = ["pure" + "mana", ["gmail", "com"].join(".")].join("@");
const FROM_ADDRESS = "portfolio@idlefellowship.com";

function corsHeaders(origin) {
    return {
        "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
    };
}

function json(body, status, origin) {
    return new Response(JSON.stringify(body), {
        status,
        headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
    });
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

export default {
    async fetch(request, env) {
        const origin = request.headers.get("Origin") || "";

        if (request.method === "OPTIONS") {
            return new Response(null, { status: 204, headers: corsHeaders(origin) });
        }
        if (request.method !== "POST") {
            return json({ error: "Method not allowed" }, 405, origin);
        }

        let data;
        try {
            data = await request.json();
        } catch {
            return json({ error: "Invalid JSON body" }, 400, origin);
        }

        const name = String(data.name || "").trim().slice(0, 200);
        const email = String(data.email || "").trim().slice(0, 200);
        const message = String(data.message || "").trim().slice(0, 5000);

        if (!name || !email || !message) {
            return json({ error: "Name, email and message are required" }, 400, origin);
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return json({ error: "Invalid email address" }, 400, origin);
        }

        // Honeypot: real visitors never see this field, so a value means a bot.
        // Report success so the bot doesn't learn it was filtered.
        if (data.website) {
            return json({ ok: true }, 200, origin);
        }

        try {
            await env.EMAIL.send({
                to: TO_ADDRESS,
                from: { email: FROM_ADDRESS, name: "Portfolio Contact Form" },
                replyTo: email,
                subject: `Portfolio contact from ${name}`,
                text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
                html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
            });
        } catch (error) {
            console.error(`Email send failed: ${error.code} - ${error.message}`);
            return json({ error: "Failed to send message" }, 502, origin);
        }

        return json({ ok: true }, 200, origin);
    },
};
