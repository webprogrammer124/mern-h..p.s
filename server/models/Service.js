const mongoose = require('mongoose');
const serviceSchema = mongoose.Schema({
    MRNo: "",
    TokenNo: "",
    ServiceDate: new Date(),
    MRNo: 'recID',
    Ward: "",
    Amount: "",
    TotalAmount: "",
    PatientContribution: "",
    Remarks: "",
    CreatedUser: "Admin",
    ModifyUser: "Admin"
    
})
const Register = mongoose.model('service', serviceSchema)
module.exports = Service