const mongoose = require('mongoose')

const preferenceSchema = mongoose.Schema({
    roll: {
        type: Number,
        requierd: true
    },
    order: {
        type: [String]
    }
});
//preferences colletion created
const Preference = mongoose.model("Preference", userSchema);
export default Preference;