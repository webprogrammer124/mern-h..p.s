const mongoose = require('mongoose');
const serviceSchema = mongoose.Schema({
        TokenNo: {
            type: String, 
            required:[true, "TokenNo is missing"] 
        },
        ServiceDate: {
            type: Date,
            default: new Date()
        },
        MRNo: {
            type: String, 
            required:[true, "MRNo is missing"] 
        },
        Ward: {
            type: String, 
            required:[true, "Ward is missing"] 
        },
        Amount: {
            type: Number, 
            required:[true, "Amount is missing"] 
        },
        TotalAmount: {
            type: Number, 
            required:[true, "TotalAmount is missing"] 
        },
        PatientContribution: {
            type: String, 
            required:[true, "PatientContribution is missing"] 
        },
        Remarks: {
            type: String, 
            required:[true, "Remarks is missing"] 
        },
        Remarks: {
            type: String, 
            required:[true, "Remarks is missing"] 
        }
})
const Service = mongoose.model('Service', serviceSchema)
module.exports = Service