// import type { NextApiRequest, NextApiResponse } from 'next'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const data = req.body
//     if (!data.name || !data.phone) {
//       return res.status(400).json({ message: 'Bad request' })
//     }
//   }
//   try {
//     const request = await fetch('http://api.cpa.tl/api/lead/send', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Content-Length': '64',
//         'User-Agent':
//           'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
//         Host: 'api.cpa.tl'
//       },
//       body: JSON.stringify({
//         key: '23Zb0geBG0fP2S7wgvMmgnQF1Hjq9Rz1KP3NvzyLOMExeuPDj6dsbJeuBukgmN',
//         offer_id: '6530',
//         ip_address: '0.0.0.0',
//         country: 'CL',
//         phone: req.body.phone,
//         name: req.body.name
//       })
//     })
//     if (!request.ok) {
//       return res.status(500).json({ message: request })
//     }
//     return res.json({ message: 'Success' })
//   } catch (error) {
//     return res.status(500).json({ message: 'Internal server error' })
//   }
// }
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  email?: string
  phone: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body
    if (!data.name || !data.phone) {
      return res.status(400).json({ message: 'Bad request' })
    }
  }
  try {
    await fetch('https://order.drcash.sh/v1/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer NJK5MJG5ODITNGYXOS00Y2YZLWFHOWUTOTVHYTVIM2YYOTI4'
      },
      body: JSON.stringify({
        stream_code: 'jivby',
        client: {
          name: req.body.name,
          phone: req.body.phone
        }
      })
    })
    return res.status(200).json({ message: 'Success' })
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}
