const mongoose = require('mongoose');
const welfareSchema = mongoose.Schema({
        MRNo: {
            type: String, 
            required:[true, "MRNo is missing"] 
        },
        TokenNo: {
            type: String, 
            required:[true, "TokenNo is missing"] 
        },
        WelfareDate: {
            type: Date,
            default: new Date()
        },
        Profession: {
            type: String, 
            required:[true, "Profession is missing"] 
        },
        Fiqa: {
            type: String, 
            required:[true, "Fiqa is missing"] 
        },
        Education: {
            type: String, 
            required:[true, "Education is missing"] 
        },
        Cast: {
            type: String, 
            required:[true, "Cast is missing"] 
        },
        Guardian: {
            type: String, 
            required:[true, "Guardian is missing"] 
        },
        OtherInfo: {
            type: String, 
            required:[true, "OtherInfo is missing"] 
        },
        MaleKids: {
            type: Number, 
            required:[true, "MaleKids is missing"] 
        },
        MaleKids: {
            type: Number, 
            required:[true, "MaleKids is missing"] 
        },
        FemaleKids: {
            type: Number, 
            required:[true, "FemaleKids is missing"] 
        },
        OtherKids: {
            type: Number, 
            required:[true, "OtherKids is missing"] 
        },
        Sisters: {
            type: Number, 
            required:[true, "Sister is missing"] 
        },
        Brothers: {
            type: Number, 
            required:[true, "Brother is missing"] 
        },
        NoOFFamilyMembers: {
            type: Number, 
            required:[true, "NoOFFamilyMembers is missing"] 
        },
        IsMarried: {
            type: Boolean, 
            required:[true, "IsMarried is missing"] 
        },
        IsAbleToPay: {
            type: Boolean, 
            required:[true, "IsAbleToPay is missing"] 
        },
        IsEarning: {
            type: Boolean, 
            required:[true, "IsEarning is missing"] 
        },
        HaveGold: {
            type: Boolean, 
            required:[true, "HaveGold is missing"] 
        },
        ReqName: {
            type: String, 
            required:[true, "ReqName is missing"] 
        },
        ReqPhone: {
            type: Number, 
            required:[true, "ReqPhone is missing"] 
        },
        ReqRelationWithPatient: {
            type: String, 
            required:[true, "ReqRelationWithPatient is missing"] 
        },
})
const Welfare = mongoose.model('Welfare', welfareSchema)
module.exports = Welfare