const express= require('express')
const app = express()
app.use(express.json());

const Joi = require('joi');
const morgan = require('morgan');
const config = require('config');

const courses=[
{id:1, name :'react js'},
{id:2, name :'react native'},
{id:3, name :'node js'}
]

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled')
}

console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));


app.get('/',(req,res) =>{
res.send("Hello World!!!")
});

app.get('/api/courses',(req,res) =>{
    res.send([1,2,3])
});

// app.get('/api/courses/:id', (req, res) => {
//     res.send(req.params.id);
// });
app.get('/api/courses/:id', (req, res) => {
   var course=courses.find(c => c.id==parseInt(req.params.id));
   if(!course)
   res.status(404).send('The course with the given id was not found')


   res.send(course)
});
app.get('/api/courses/posts/:year/:month', (req, res) => {
    res.send(req.params);
});
// app.post('/api/courses', (req, res) => {
//     var course={
//         id: courses.length+1,
//         name:req.body.name
//     };
//     courses.push(course);
//     res.send(course);
// });


// app.post('/api/courses', (req, res) => {
//     if(!req.body.name ||req.body.name.length<3)
//     {
//         res.status(404).send('the name requires atleast 3 charactors');
//         return;
//     }
//     var course={
//         id: courses.length+1,
//         name:req.body.name
//     };
//     courses.push(course);
//     res.send(course);
// });
function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}
app.post('/api/courses', (req, res) => {
   
      const {error}=(validateCourse(req.body));
  console.log(error);

    // if(!req.body.name ||req.body.name.length<3)
    // {
    //     res.status(404).send('the name requires atleast 3 charactors');
    //     return;
    // }
    if(error)
    {
        res.status(404).send(error.details[0].message);
        return;
    }
    var course={
        id: courses.length+1,
        name:req.body.name
    }
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id));
   
    if (!course) return res.status(404).send('The course with the given id was not found');

    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
    // Look up the course
    // Not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) // 404
        res.status(404).send('The course with the given id was not found');

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // Return the same course
    res.send()
})

const port= process.env.port || 3000;
// const port = process.env['PORT'] || 3000;
// console.log(process.env.PORT)
app.listen(port,()=>console.log(`Listening on port ${port}`))

