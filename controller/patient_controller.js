var Patient=require('../model/patient_model');
var mongoose=require('mongoose');
var Children=require('../model/children_model');

exports.createNewPatient=function(req,res,next){

    var pat=new Patient({
        _id:new mongoose.Types.ObjectId,
        addmission_date:req.body.AddmissionDate,
        first_name:req.body.MiddleName,
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

    Patient.find().exec(function(err,pat){
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
            res.send(err)
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