const router = require('express').Router();
const { Post } = require('../../models');
const { Op } = require("sequelize");

// get search results based on user search information
//SEARCH PROVIDES EMPTY RESPONSE WITH NO ACTUAL SEARCH RESULTS IN BODY
router.post('/search', async (req, res) => {
    let { term } = req.body;
    // term = term.toLowerCase()
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        try{
        // finds all product listings where the product name or description contain the search term at all
        const found = await Post.findAll({
            where:
            {
                [Op.or]:
                    [{ title: { [Op.like]: '%' + term + '%' } },
                    { post: { [Op.like]: '%' + term + '%' } }]
            }
        });
        posts = found.map( posts => posts.get({ plain:true }));
        console.log(posts);
        res.render('viewsearch', { post, loggedIn: req.session.loggedIn 
        });
    }

    catch (err){             
        console.log(err);
        res.status(500).json(err);
        }

    }
});
        // post for adding new produc tlisting
router.post('/new', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {

        try {
            const dbPostData = await Post.create({
            title: req.body.title,
            post: req.body.post
            });
            
            res.redirect("/")
          }

          catch (err) {
            console.log(err);
            res.status(500).json(err);
          }
        } 

    
});

module.exports = router;