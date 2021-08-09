const express = require('express')
const router = express.Router()

// Add project model for CRUD Operations

const Project = require("../models/project");
const Course = require("../models/course");

router.get('/index', (req,res,next) => {

    
    Project.find((err,projects) =>{
        if (err)
        {
            console.log(err)
        }
        else
        {
            res.render('Projects/index', {
            title:'My Project',
            projects: projects})
            
        }
    })
})

// Get /projects/add

router.get('/add',(req,res,next)=>{
    
    Course.find((err,courses) => {
        if (err)
        {
            console.log(err)
        }
        else
        {
            res.render('Projects/add', 
            {title:'ProjectDetails',
            courses: courses
        })
        }
    }).sort({courseCode:1})
})

// Post /projects/add

router.post('/add', (req,res,next) => {

        Project.create({
        name:req.body.name,
        dueDate: req.body.dueDate,
        course: req.body.course
    },(err,newProject) => {
        
        if (err)
        {
            console.log(err)
        }
        else
        {
            
            res.redirect('/Projects/index')
        }
    })
})

// Get/project/delete

router.get('/delete/:_id', (req,res,next)=> {
    
    Project.remove({_id:req.params._id} , err => {
        if (err)
        {
            console.log(err)
        }
        else
        {
            res.redirect('/Projects/index');

        }
    })
  
});

// Get /project/edit
router.get('/edit/:_id', (req,res,next) =>{
    Project.findById(req.params._id, (err,project) => {
        if (err)
        {
            console.log(err)
        }
        else
        {
            Course.find((err,courses)=>{
                if(err)
                {
                    console.log(err)
                }
                else
                {
                    res.render('Projects/edit', {
                    title:'Project Details',
                    project: project,
                    courses: courses
                    })

                }
            }).sort({courseCode:1})
            
        }
    })
})

// POST /projects/edit

router.post('/edit/:_id', (req,res,next) => {
    Project.findOneAndUpdate({_id: req.params._id},
        {
            name: req.body.name,
            dueDate: req.body.dueDate,
            course: req.body.course,
            status: req.body.status
        }, (err,project) => {
            if (err)
            {
                console.log(err)
            }
            else
            {
                res.redirect('/Projects/index')
            }
        })
})

module.exports = router;