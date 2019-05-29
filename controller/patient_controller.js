var Patient=require('../model/patient_model');
var mongoose=require('mongoose');
var Children=require('../model/children_model');
var Complain=require('../model/complain_model');
var Illness=require('../model/illness_model');
var History=require('../model/history_model');
var PresentHistory=require('../model/presentHistoryIllness_model');
var PastHistory=require('../model/pastHostoryIllness_model');
var PastHiHisrotyOfModeOfIntakestory=require('../model/historyOfModeOfIntake_model');
var TreatementHistory=require('../model/treatementHistory_model');
var FamilyHistory=require('../model/familyHistory_model');
var PersonalHistory=require('../model/personalHistory_model');
var SubstaneceHistory=require('../model/substanceHistory_model');
var LegalHistory=require('../model/legalHistory_model');

exports.createNewPatient=function(req,res,next){
    
    var pat=new Patient({
        _id:new mongoose.Types.ObjectId,
        addmission_date:req.body.AddmissionDate,
        first_name:req.body.FirstName,
        last_name:req.body.LastName,
        middle_name:req.body.middle_name,
        profile_image:req.body.imageURL
    });
    pat.save(function(err,patient){
        if(!err && patient){
            res.send(patient)
        }else{
            res.status(400).send();
        }
    })
}


exports.getall=function(req,res,next){

    Patient.find().populate('childrensdetails').exec(function(err,pat){
        if(!err && pat){
            res.send(pat)
        }
    })
}

exports.getpatByID=function(req,res,next){
    var data=req.body;
    Patient.findById(data.data).exec(function(err,pat){
        if(!err && pat){
            res.send(pat)
        }
    })
}


exports.getpatByName=function(req,res,next){
    var data=req.body;
    console.log(data)
    Patient.find({first_name:{$regex:data.name}}).exec(function(err,pat){
        if(!err && pat){
            res.send(pat)
        }else{
            console.log(err)
        }
    })
}

exports.addPersonal=function(req,res,next){
    var data=req.body;
    console.log(data)
    Patient.findByIdAndUpdate(data.id,{
        permanent_address:data.ParmentAddress,
        permanent_mobile:data.Mobile,
        permanent_fax:data.OfficeFax,
        permanent_residance_number:data.Residence,
        permanent_landline:data.Landline,
        correspondence_address:data.CorrespondenceAddress,
        correspondence_mobile:data.Mobile,
        correspondence_fax:data.OfficeFax,
        correspondence_residance_number:data.Residence,
        correspondence_landline:data.Landline,
        email:data.Email,
        DOB:data.DateOfBirth,
        age:data.Age,
        sex:data.Gender,
        marrital_status:data.MaterialStatus,
        education:data.Education,
        occupation:data.Occupation

    }).exec(function(err,patien){
        if(!err && patien){
            res.send(patien)
        }else{
            console.log(err)
        }
    })
}

exports.addFamilyData=function(req,res,next){
    var data=req.body;
    console.log(data)
    // Patient.findByIdAndUpdate(data.id,{
    //     spouse_name:data.SpouseName,
    //     spouse_age:data.SpouseAge,
    //     spouse_occupation:data.SpouseOccupation ,
    //     spouse_address:data.SpouseAddress,
    //     spouse_relation_status:data.LivingStatus,
    //     no_of_childern:data.no_of_childern,
    //     guardian_name:data.GuardianName,
    //     guardian_contact_number:data.ContactNo ,
    //     guardian_email:data.Email,
    //     guardian_address:data.Address
    // }).exec(function(err,patien){
    //     if(!err && patien){
    //         console.log(patien)
    //     }else{
    //         console.log(err)
    //     }
    // })

    Patient.findOneAndUpdate({_id:data.id}, {$set:{
        spouse_name:data.SpouseName,
        spouse_age:data.SpouseAge,
        spouse_occupation:data.SpouseOccupation ,
        spouse_address:data.SpouseAddress,
        spouse_relation_status:data.LivingStatus,
        no_of_childern:data.no_of_childern,
        guardian_name:data.GuardianName,
        guardian_contact_number:data.ContactNo ,
        guardian_email:data.Email,
        guardian_address:data.Address
    }}, {new: true}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }
    
        res.send(doc)
    });
}

exports.addGuardian=function(req,res,next){
    var data=req.body;
    Patient.findByIdAndUpdate(data.id,{
        guardian_name:data.guardian_name,
        guardian_contact_number:data.guardian_contact_number,
        guardian_email:data.guardian_email,
        guardian_address:data.guardian_address
    }).exec(function(err,patien){
        if(!err && patien){
            res.send(patien)
        }else{
            res.send(err)
        }
    })
}

exports.addChildren=function(req,res,next){
    var data=req.body;
    var Child=new Children({
        patient_id:data.id,
        name:data.NameOfChild,
        number:data.ContactNo,
        email:data.Email,
        address:data.Address
    })
    Child.save(function(err,chi){
        if(!err && chi){
            res.send(chi)
        }else{
            res.send(err)
        }
    })
}

exports.addcomplain=function(req,res,next){
    var data = req.body;
    console.log(data);
    var complain=new Complain({
        patient_id:data.id,
        complain:data.ComplaintName,
        complain_duration:data.ComplaintDuration
    })
    complain.save(function(err,com){
        if(!err && com){
            res.send(com)
        }else{
            console.log(err)
        }
    })
}

exports.addIllness=function(req,res,next){
    var data = req.body;
    console.log(data)
    var ill=new Illness({
        patient_id:data.id,
        DurationOfCurruntIllness:data.DurationOfCurruntIllness,
        CurruntEpisodeNumber:data.CurruntEpisodeNumber,
        ModeOfOnset:data.ModeOfOnset,
        Course:data.Course,
        PredisposingFactors:data.PredisposingFactors,
        PrecipatingFactors:data.PrecipatingFactors,
        PrepetuatingFactors:data.PrepetuatingFactors
    })
    ill.save(function(err,com){
        if(!err && com){
            res.send(com)
        }else{
            console.log(err)
        }
    })
}

exports.addHistory=function(req,res,next){
    var data = req.body;
    var his=new History({
        patient_id:data.id,
        History : data.History,
        PsychiatricHistory:data.PsychiatricHistory,
        MedicalSurgicalHistory:data.MedicalSurgicalHistory,
        PresentTreateHistory:data.PresentTreateHistory,
        PastTreateHistory:data.PastTreateHistory,
        FamilyMentalHistory:data.FamilyMentalHistory,
        FamilyEnvironmentHistory:data.FamilyEnvironmentHistory,
        FamilyAttituteHistory:data.FamilyAttituteHistory,
        LivingConditionHistory:data.LivingConditionHistory,
        BirthHistory:data.BirthHistory,
        ImmunizationHistory:data.ImmunizationHistory,
        DevelopmentHistory:data.DevelopmentHistory,
        EducationHistory:data.EducationHistory,
        OccupationHistory:data.OccupationHistory,
        MarritalSexualHistory:data.MarritalSexualHistory,
        MenstrualObstetricHistory:data.MenstrualObstetricHistory,
        HistoryOfChoise:data.HistoryOfChoise,
        HistoryOfTotalDurationOfUse:data.HistoryOfTotalDurationOfUse,
        HistoryOfDurationOfRegularlUse:data.HistoryOfDurationOfRegularlUse,
        HistoryOfDailyIntake:data.HistoryOfDailyIntake,
        HistoryofLastIntakeOfDrug:data.HistoryofLastIntakeOfDrug,
        HistoryOfModeOfIntake:data.HistoryOfModeOfIntake,   
        HomosideAttepts:data.HomosideAttepts,
        PreMorbidPersonality:data.PreMorbidPersonality  
    })
    his.save(function(err,com){
        if(!err && com){
            res.send(com)
        }else{
            console.log(err)
        }
    })

}


exports.addPresentHistory=function(req,res){
    var data=req.body;
    console.log(data)
    var history=new PresentHistory({
        patient_id:data.id,
        history:data.history
    });
    history.save(function(err,com){
        if(!err && com){
            res.send(com)
        }else{
            console.log(err)
        }
    })

}


exports.addPastHistory=function(req,res){
    var data=req.body;
    var history=new PastHistory({
        patient_id:data.id,
        history:data.history
    });
    history.save(function(err,com){
        if(!err && com){
            res.send(com)
        }else{
            console.log(err)
        }
    })
}


exports.AddHistoryOfModeOfIntake=function(req,res){
    var data=req.body;
    console.log(data)
    var history=new PastHiHisrotyOfModeOfIntakestory({
        patient_id:data.id,
        PsychatricHistory:data.psy,
        MedicalHistory:data.med
    })
    history.save(function(err,com){
        if(!err && com){
            res.send(com)
        }else{
            console.log(err)
        }
    })
}


exports.addTreatementHistory=function(req,res){
    var data=req.body;
    console.log(data)
    var history=new TreatementHistory({
        patient_id:data.id,
        presentHistory:data.Present,
        pastHistory:data.Past
    })
    history.save(function(err,com){
        if(!err && com){
            res.send(com)
        }else{
            console.log(err)
        }
    })
}

exports.addFamilyHistory=function(req,res){
    var data=req.body;
    console.log(data)
    var history=new FamilyHistory({
        patient_id:data.id,
        mentalHistory:data.mental,
        environHistory:data.environment,
        attitudeHistory:data.attitute,
        livingHistory:data.living
    })
    history.save(function(err,com){
        if(!err && com){
            res.send(com)
        }else{
            console.log(err)
        }
    })
}

exports.addPersonalHistory=function(req,res){
    var data=req.body;
    console.log(data)
    var history=new PersonalHistory({
        patient_id:data.id,
        BirthHistory:data.Birth,
    ImmunizationHistory:data.Immunization,
    DevelopmentHistory:data.Development,
    EducationHistory:data.Education,
    OccupationHistory:data.Occupation,
    MarritalandSexualHistory:data.MarritalandSexual,
    MenstrualandobstetricHistory:data.Menstrualandobstetric
    })
    history.save(function(err,com){
        if(!err && com){
            res.send(com)
        }else{
            console.log(err)
        }
    })
}


exports.addSubstanceHistory=function(req,res){
    var data=req.body;
    console.log(data)
    var history=new SubstaneceHistory({
        patient_id:data.id,
        HistoryOfChoiseOfSubstance:data.HistoryOfChoiseOfSubstance,
        HistoryOfTotalDurationOfUse:data.HistoryOfTotalDurationOfUse,
        HistoryOfDurationOfRegularUse:data.HistoryOfDurationOfRegularUse,
        HistoryOfDailyIntake:data.HistoryOfDailyIntake,
        HistoryOfLastIntakeOfDrug:data.HistoryOfLastIntakeOfDrug
    })
    history.save(function(err,com){
        if(!err && com){
            res.send(com)
        }else{
            console.log(err)
        }
    })
}

exports.addLegalHistory=function(req,res){
    var data=req.body;
    console.log(data)
    var history=new LegalHistory({
        patient_id:data.id,
        HomicideAttempt:data.HomicideAttempt,
        preMorbidpersonality:data.preMorbidpersonality
    })
    history.save(function(err,com){
        if(!err && com){
            res.send(com)
        }else{
            console.log(err)
        }
    })
}


exports.deleteAllDB=function(req,res){
    Patient.remove(function(err,pat){
        if(!err && pat){
            console.log(pat)
        }else{
            console.log(err)
        }
    })
}

exports.getAlldatafortable=function(req,res){
    Patient.findById(req.body.id)
    .populate('childrensdetails')
    .populate('Complaintsdetails')
    .populate('Illnessdetails')
    .populate('PresentHistoryDetails')
    .populate('PastHistoryDetails')
    .populate('PastHiHisrotyOfModeOfIntakestorydetails')
    .populate('TreateMentHistoryDetails')
    .populate('FamilyHistoryDetails')
    .populate('PersonalHistoryDetails')
    .populate('SubstanceHistoryDetails')
    .populate('LegalHistoryDetails')
    .exec(function(err,pat){
        if(pat){
            res.send(pat)
        }
    })
}

exports.getPatientCount=function(req,res){
    Patient.countDocuments(function(err,pat){
        if(pat){
            res.send({pat:pat})
        }else{
            console.log(err)
        }
    })
}