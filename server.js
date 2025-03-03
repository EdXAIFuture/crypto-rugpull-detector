const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.get('/analyze', async (req, res) => {
    const address = req.query.address;
    if (!address) {
        return res.send("Invalid contract address.");
    }

    // Simulăm analiza contractului inteligent
    const riskScore = Math.floor(Math.random() * 100); // Generăm un scor de risc aleator
    let riskLevel = "Safe ✅";
    if (riskScore > 70) riskLevel = "High Risk ❌";
    else if (riskScore > 40) riskLevel = "Suspicious ⚠️";

    res.send(`Analysis for ${address}: Risk Score - ${riskScore}/100 (${riskLevel})`);
});

app.listen(3000, () => console.log('Server running on port 3000'));
