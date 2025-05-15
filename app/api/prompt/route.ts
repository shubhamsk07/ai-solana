// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: 'AIzaSyDLUjUDsypJh6KjNfwh6jxswANof_hMaY4',
});
const config = {
  responseMimeType: "text/plain",
};
const model = "gemini-1.5-flash";

export  async function POST(req: NextRequest,res:NextResponse) {
  const { prompt } = await req.json();

const systemPrompt = `
You are an AI that converts user commands into structured JSON actions for a Solana wallet Dapp.

Supported commands include:
1. get_balance → { "command": "get_balance" }
2. send_sol → { "command": "send_sol", "amount": <number>, "to": "<wallet_address>" }
3. airdrop → { "command": "airdrop", "amount": <number> }
4. get_nfts → { "command": "get_nfts" }
5. get_tokens → { "command": "get_tokens" }
6. send_nft → { "command": "send_nft", "nft_name": "<string>", "to": "<wallet_address>" }
7. get_transactions → { "command": "get_transactions" }
8. create_token → { "command": "create_token", "name": "<string>", "symbol": "<string>", "decimals": <number>, "initial_supply": <number> }

Rules:
- Always return a JSON object.
- Additionally, include a short natural-language message field describing the action being taken.
- If required fields for a command are missing, respond with a JSON object that asks the user to provide the missing details.
  For example, if "create_token" command is missing "symbol", reply with:
  { "command": "create_token", "missing": ["symbol"], "message": "Please provide the token symbol." }
- If a nickname is used and not found, include a helpful message like: "Nickname 'BoB' not found. Please provide a wallet address."
- Do NOT include any other explanation outside the JSON.
- Assume wallet addresses start with "D" or "F" and are Base58 strings.
- Infer user intent as accurately as possible.

Now convert this user command to JSON + message:
${prompt}
`;


  const contents = [
    {
      role: "user",
      parts: [
        {
          text: systemPrompt,
        },
      ],
    },
  ];
  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let output=''
  for await (const chunk of response) {
    console.log(chunk.text);
    output +=chunk.text
  }
  return NextResponse.json({message:output})
}
