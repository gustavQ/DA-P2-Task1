import mongoose from 'mongoose';

const RugSchema = new mongoose.Schema({
  nft_pfp: {
    type: String,
  },
  nft_name: {
    type: String,
  },
  nft_rug_descr: {
    type: String,
  },
});

export default mongoose.models.Rug || mongoose.model('Rug', RugSchema);
