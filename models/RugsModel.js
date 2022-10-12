import { Schema, model, models, ObjectId } from 'mongoose';

const rugSchema = new Schema({
  _id: ObjectId,
  nft_pfp: String,
  nft_name: String,
  nft_rug_descr: String,
});

const Rug = models.Rug || model('Rug', rugSchema);

export default Rug;