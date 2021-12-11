import Player from "../../../models/player";

export default async (req, res) => {
  const { pid } = req.query;
  const product = await Player.findOne({ _id: pid });
  res.status(200).json(product);
};
