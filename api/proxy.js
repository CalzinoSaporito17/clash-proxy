export default async function handler(req, res) {
    const { tag } = req.query;
    // Sostituisci con la tua vera API KEY di Supercell
    const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImYwMDA3YWVhLWMyNDAtNDFmNi05MjE0LTIxOTJkYjJlMjBjYyIsImlhdCI6MTc3MjIwNTYzMywic3ViIjoiZGV2ZWxvcGVyLzUwOWZiZGMxLTI4MTMtMjU1Mi0xMWZhLTFlYzg2MzVlOTU3NSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI5OC44MS4xNzguMTk2Il0sInR5cGUiOiJjbGllbnQifV19.6Nmyp1BbTBU4W12_amCfVqvFFqt04QZiA083dsgUGfR5X2DfOgDtaUSNNRWsJfroUWPFWQHviPUy0FZ_gjBV9Q"; 

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

