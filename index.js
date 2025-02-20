const express = require("express");
const app = express();
const port =8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid'); 
const methodOverride = require("method-override");


app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts=[
{
    id:uuidv4(),
    username:"shashank",
    content:"i love coding"
},

{
    id:uuidv4(),
    username:"gagan",
    content:"i code coding"
},

{
    id:uuidv4(),
    username:"prasad",
    content:"i hate coding"
},
];

app.get("/posts",(req , res) => {
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
   let{username,content}=req.body;
   let id=uuidv4();
    posts.push({ id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("show.ejs",{post});
 });

 app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    
    let post = posts.find((p) => id === p.id);

    if (post) {
        post.content = newContent;  // Update the post content
        console.log(post);
        res.redirect(`/posts/${id}`);  // Redirect to the updated post's page
    } else {
        res.status(404).send("Post not found");  // Handle case if the post doesn't exist
    }
});


 app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);

    // Check if the post is found
    if (post) {
        res.render("edit.ejs", { post });
    } else {
        res.status(404).send("Post not found");
    }
});

app.delete("/posts/:id",(req,res)=>{
    let{id}=req.params;
    posts = posts.filter((p) => p.id !== id);
    res.redirect("/posts");
});

app.listen(port, ()=>{
    console.log("listening to port :8080");
});