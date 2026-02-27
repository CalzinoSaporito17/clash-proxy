export default async function handler(req, res) {
    const { tag } = req.query;
    // Sostituisci con la tua vera API KEY di Supercell
    const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjRiZjQ2ZjQ2LWQxYWUtNDVkYy05ODJkLTM2ZTYwNzk4M2I5ZSIsImlhdCI6MTc3MjE5NTQ5MSwic3ViIjoiZGV2ZWxvcGVyLzUwOWZiZGMxLTI4MTMtMjU1Mi0xMWZhLTFlYzg2MzVlOTU3NSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI5My4xNDkuMTMyLjIxNSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.-JptI-_5ysc5i2YNDPOs7Sq2XlhEIv6t-wNhretdJzUXiiC8ilSsXx2sCCAI28s2ciYlqYMDkv8TXaGredK1pA"; 

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
