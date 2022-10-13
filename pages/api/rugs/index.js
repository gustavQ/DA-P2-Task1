import dbConnect from '../../../lib/dbConnect'
import Rug from '../../../models/RugsModel'; 

export default async function handler(req, res) {
    await dbConnect()
    const rugs = await Rug.find();
    res.status(200).json(rugs);
}