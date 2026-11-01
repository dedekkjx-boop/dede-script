export default function handler(req, res) {
  const userAgent = req.headers["user-agent"] || "";

  if (!userAgent.toLowerCase().includes("roblox")) {
    return res.status(403).send("Acesso permitido somente pelo Roblox.");
  }

  const script = `
loadstring(game:HttpGet'https://raw.githubusercontent.com/dedekkjx-boop/67/refs/heads/main/Real_Hub_Dede_Final-obfuscated.lua.txt')()
`;

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(script);
}
