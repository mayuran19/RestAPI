module.exports = {
    async getAllUsers(req,res) {
        try {
            res.status(200).send("Working");
        }
        catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    },
    async create(req,res) {
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
            res.status(500).send(e);
        }
    }
}