var Patient=require('../model/patient_model');
var mongoose=require('mongoose');
var Children=require('../model/children_model');

exports.createNewPatient=function(req,res,next){

    var pat=new Patient({
        _id:new mongoose.Types.ObjectId,
        addmission_date:req.body.addmission_date,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        middle_name:req.body.middle_name,
        profile_image:req.body.image
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
    Patient.findByIdAndUpdate(data.id,{
        permanent_address:data.permanent_address,
        permanent_mobile:data.permanent_fax,
        permanent_residance_number:data.permanent_residance_number,
        permanent_landline:data.permanent_landline,
        correspondence_address:data.correspondence_address,
        correspondence_mobile:data.correspondence_mobile,
        correspondence_fax:data.correspondence_fax,
        correspondence_residance_number:data.correspondence_residance_number,
        correspondence_landline:data.correspondence_landline,
        email:data.email,
        DOB:data.DOB,
        age:data.age,
        sex:data.sex,
        marrital_status:data.marrital_status,
        education:data.education,
        occupation:data.occupation

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
    Patient.findByIdAndUpdate(data.id,{
        spouse_name:data.spouse_name,
        spouse_age:data.spouse_age,
        spouse_occupation:data.spouse_occupation,
        spouse_address:data.spouse_address,
        spouse_relation_status:data.spouse_relation_status,
        no_of_childern:data.no_of_childern,
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
        name:data.name,
        number:data.number,
        email:data.email,
        address:data.address
    })
    Child.save(function(err,chi){
        if(!err && chi){
            res.send(chi)
        }else{
            res.send(err)
        }
    })
}