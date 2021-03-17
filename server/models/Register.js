const mongoose = require('mongoose');
const registerSchema = mongoose.Schema({
    MRNo: "",
        TokenNo: {
            type: String, 
            required:[true, "TokenNo is missing"] 
        },
        RegistrationDate: {
            type: Date,
            default: new Date()
        },
        Name: {
            type: String, 
            required:[true, "Name is missing"] 
        },
        FatherOrHusband: {
            type: String, 
            required:[true, "FatherOrHusband is missing"] 
        },
        DOB: {
            type: Date,
            required:[true, "DOB is missing"] 
        },
        Age: {
            type: Number, 
            required:[true, "Age is missing"] 
        },
        Gender: "",
        Religion: {
            type: String, 
            required:[true, "Religion is missing"] 
        },
        District:{
            type: String, 
            required:[true, "District is missing"] 
        },
        City: {
            type: String, 
            required:[true, "City is missing"] 
        },
        Area: {
            type: String, 
            required:[true, "Area is missing"] 
        },
        HousNo: {
            type: String, 
            required:[true, "HouseNo is missing"] 
        },
        Address: {
            type: String, 
            required:[true, "Adddress is missing"] 
        },
        CNIC: {
            type: Number, 
            required:[true, "CNIC is missing"] 
        },
        Phone: {
            type: Number, 
            required:[true, "Phone is missing"] 
        },
        OffPhone: {
            type: Number, 
            required:[true, "OffPhone is missing"] 
        },
        Mobile: {
            type: Number, 
            required:[true, "Mobile is missing"] 
        },
        RefBy: {
            type: String, 
            required:[true, "Ref is missing"] 
        },
        Remarks: {
            type: String, 
            required:[true, "Remarks is missing"] 
        },
        IsRejected: {
            type: Boolean, 
            required:[true, "IsRejected is missing"] 
        },
        IsZakat: {
            type: Boolean, 
            required:[true, "IsRejected is missing"] 
        },
        IsPAFEmp: {
            type: Boolean, 
            required:[true, "IsPAFEmp is missing"] 
        },
        MonthlyConsLimit: {
            type: Number, 
            required:[true, "MonthlyConsLimit is missing"] 
        },
        NOY: {
            type: Number, 
            required:[true, "NOY is missing"] 
        },
        EmpID: {
            type: Number, 
            required:[true, "EmpID is missing"] 
        },
        IsStaff:{
            type: Boolean, 
            required:[true, "IsStaff is missing"] 
        }
    
})
const Register = mongoose.model('Register', registerSchema)
module.exports = Register