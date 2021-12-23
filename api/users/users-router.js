const express = require("express")
const router = express.Router();
const Users = require("./users-model");
const { validatePotluckId } = require("../middleware/middleware");

router.get("/users", async (req, res) => {
    Users.find()
        .then(user => {
            res.status(200).json(user);

        }) .catch(error => {
            res.status(500).json({ message: error });
        });
});

router.delete("/user/:id", validatePotluckId, (req, res) => {
    Users.deleteUser(req.params.id)
        .then(() => {
            res.status(200).json({ message: "Users has been deleted" });
            
        }) .catch(error => {
            res.status(500).json({ message: error });
        });
});

module.exports = router;