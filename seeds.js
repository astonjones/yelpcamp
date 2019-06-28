var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "The best Camp",
            image: "https://unsplash.com/photos/XJuhZqEE4Go",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            name: "Dessert Camp",
            image: "https://unsplash.com/photos/3fJOXw1RbPo",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
        },
        {
            name: "Snowy Camp",
            image: "https://images.unsplash.com/photo-1455496231601-e6195da1f841?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from"
        }
    ]



function seedDB(){
    Campground.remove({}, function(err){
        if(err){
            console.log(err)
        } else {
            console.log("removed campgrounds!");
            //added a few campgrounds
            // data.forEach(function(seed){
            //     Campground.create(seed, function(err, campground){
            //         if(err){
            //             console.log(err);
            //         } else {
            //             console.log("Added a campground!");
            //             //create a comment
            //             Comment.create(
            //                 {
            //                   text: "THis place is great but has no wifi",
            //                   author: "Homer"
            //                 }, function(err, comment){
            //                   if(err){
            //                       console.log(err);
            //                   } else {
            //                       campground.comments.push(comment);
            //                       campground.save();
            //                       console.log("Created new comment");
            //                   }
            //               }
            //             );
            //         }
            //     });
            // });
        }
    });
    //add a few campground
    //Add a few comments
}

module.exports = seedDB;