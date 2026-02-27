export default async function handler(req, res) {
    const { tag } = req.query;
    // Sostituisci con la tua vera API KEY di Supercell
    const apiKey = "TUO_TOKEN_QUI"; 

    try {
        const response = await fetch(`https://api.clashroyale.com/v1/clans/%23${tag.replace('#', '')}/currentriverrace`, {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({ error: "Errore durante la chiamata API" });
    }
}