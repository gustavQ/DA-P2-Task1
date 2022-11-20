import dbConnect from '../../../lib/dbConnect'
import Rug from '../../../models/RugsModel'

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const rugs = await Rug.find({})
        res.status(200).json({ success: true, data: rugs })
      } catch (e) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const rug = await Rug.create(
          req.body
        )
        res.status(201).json({success: true, data: rug })
      } catch (e) {
        res.status(400).json({ success: false })
      }
    default:
      res.status(400).json({ success: false })
      break
  }
}
