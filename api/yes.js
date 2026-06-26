export default async function handler(req, res) {

    await fetch(process.env.DISCORD_WEBHOOK, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: "🥹 SHE CLICKED YES!! ❤️"
        })
    });

    res.status(200).json({
        success: true
    });

}