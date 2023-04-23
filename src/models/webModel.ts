import mongoose, { Document } from "mongoose";

interface IWeb {
  name: string;
  components: any;
}

const webSchema = new mongoose.Schema<IWeb>({
  name: {
    type: String,
    required: [true, "A web must have a name"],
  },
  components: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skills",
    },
  ],
});

webSchema.pre(/^find/, function (next) {
  this.populate({
    path: "components",
    select: "name experience",
  });
  next();
});

const Web = mongoose.model<IWeb & Document>("Web", webSchema);

export default Web;
