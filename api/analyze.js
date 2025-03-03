const fetch = require('node-fetch');

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { address } = req.query;
    if (!address) {
        return res.status(400).json({ error: "Missing contract address" });
    }

    // Simulăm analiza contractului inteligent
    const riskScore = Math.floor(Math.random() * 100);
    let riskLevel = "Safe ✅";
    if (riskScore > 70) riskLevel = "High Risk ❌";
    else if (riskScore > 40) riskLevel = "Suspicious ⚠️";

    res.status(200).json({ contract: address, riskScore, riskLevel });
}
