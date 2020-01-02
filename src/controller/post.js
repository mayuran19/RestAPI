module.exports = {
    async getAllPostsOfUser(req,res) {
        try {
            res.status(200).send("Working");
        }
        catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    },
    async createPost(req,res) {

        try {
            res.status(200).send("Working");
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
    },
    async update(req,res) {
        try{
            res.status(200).send("Working");
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }

    }
}