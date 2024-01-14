import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body
    if (!data.name || !data.phone) {
      return res.status(400).json({ message: 'Bad request' })
    }
  }

  try {
    const formData = new URLSearchParams()
    formData.append('name', req.body.name)
    formData.append('phone', req.body.phone)
    formData.append('flow_hash', req.body.productCode)
    formData.append('referrer', 'google.ads.com')
    formData.append('country', req.body.country)

    const request = await fetch('http://wapi.leadbit.com/api/pub/new-order/_642acc590012f638185742', {
      method: 'POST',
      body: formData
    })
    if (!request.ok) {
      return res.status(500).json({ message: request.json() })
    }
    return res.json({ message: 'Success' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
