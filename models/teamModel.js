const mongoose = require("mongoose");
const { Schema } = mongoose;

const teamScheam = new Schema(
    {
      img: { type: String, required: true },
      fullname: { type: String, required: true },
     
    },
    { timestamps: true }
  );

  const Team = mongoose.model("Team", teamScheam);
module.exports = Team;
