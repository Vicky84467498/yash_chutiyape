export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { date, time, activity } = req.body;

    try {

        await fetch(process.env.DISCORD_WEBHOOK, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                embeds: [
                    {
                        title: "💖 She Filled Your Date Form!",
                        color: 0xff4f8b,
                        fields: [
                            {
                                name: "📅 Date",
                                value: date || "Not selected",
                                inline: true
                            },
                            {
                                name: "🕒 Time",
                                value: time || "Not selected",
                                inline: true
                            },
                            {
                                name: "❤️ Activity",
                                value: activity || "None"
                            }
                        ],
                        timestamp: new Date().toISOString()
                    }
                ]
            })
        });

        res.status(200).json({ success: true });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false
        });

    }

}