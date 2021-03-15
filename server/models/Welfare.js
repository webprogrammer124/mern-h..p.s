const mongoose = require('mongoose');
const welfareSchema = mongoose.Schema({
    MRNo: 'recID',
    TokenNo: "",
    WelfareDate: new Date(),
    Profession: "",
    Fiqa: "",
    Education: '',
    Cast: "",
    MonthlyIncome: 0,
    Guardian: "",
    OtherInfo: "",
    MaleKids: "",
    FemaleKids: "",
    OtherKids: "",
    Brothers: "",
    Sisters: "",
    NoOFFamilyMembers: "",
    IsMarried: false,
    IsAbleToPay: false,
    IsEarning: false,
    HaveGold: false,
    ReqName: '',
    ReqPhone: "",
    ReqRelationWithPatient: '',
    CreateUser: "Admin",
    ModifyUser: "Admin",
    
})
const Welfare = mongoose.model('welfare', welfareSchema)
module.exports = welfare