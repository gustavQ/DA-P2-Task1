import dbConnect from '../../../lib/dbConnect'
import Rug from '../../../models/RugsModel'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const rug = await Rug.findById(id)
        if(!rug) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: rug })
      } catch (error) {
        res.status(400).json({ success: false })
      }
    
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
