const mongoose = require("mongoose");
const { Schema } = mongoose;

const teamScheam = new Schema(
    {
      fullname: { type: String, required: true },
      img: { type: String, required: true },
     
    },
    { timestamps: true }
  );

  const Team = mongoose.model("Team", teamScheam);
module.exports = Team;
