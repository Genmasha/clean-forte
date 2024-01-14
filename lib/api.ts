type Data = {
  name: string
  phone: string
  email?: string
}

export const sendContactForm = async (data: Data) => {
  return await fetch('/api/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
}
