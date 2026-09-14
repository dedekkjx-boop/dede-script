export default function handler(req, res) {
  const userAgent = req.headers["user-agent"] || "";

  if (!userAgent.toLowerCase().includes("roblox")) {
    return res.status(403).send("Acesso permitido somente pelo Roblox.");
  }

  const script = `
-- SEU SCRIPT LUA AQUI
`;

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(script);
}
