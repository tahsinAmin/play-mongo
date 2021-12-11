import initDB from "../../helpers/initDB";
import Player from "../../models/player";

initDB();

export default async (req, res) => {
  await Player.find().then((players) => {
    res.status(200).json(players);
  });
};
