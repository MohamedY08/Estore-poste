//User.JSto create USerSchema in the application

//Including the required packages and assigning it to Local Variables
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;


//Creating UserSchema
const UserSchema = new Schema({
  name: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: { type: String, required: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
  created: {
    type: Date,
    default: Date.now
  },
});
UserSchema.plugin(uniqueValidator);

//Function to handleEvent of password modification
/*UserSchema.pre("save", function (next) {
  var user = this;

  if (!user.isModified("password")) return next();

  bcrypt.hash(user.password, null, null, function (err, hash) {
    if (err) return next(err);

    user.password = hash;
    next();
  });
});

//Function to check if modified and saved passwords match
UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};*/

//Exporting the Review schema to reuse
module.exports = mongoose.model("User", UserSchema);
