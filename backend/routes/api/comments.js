/**
 * Express router providing comment related routes.
 * @module routes/api/comments
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

/**
 * Get all comments.
 * @name GET /
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {JSON} - A JSON object containing all comments
 */

/**
 * Create a new comment.
 * @name POST /
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {string} req.body.content - The content of the comment
 * @param {string} req.body.user - The user who created the comment
 * @param {string} req.body.post - The post that the comment is associated with
 * @returns {JSON} - A JSON object containing the created comment
 */

/**
 * Get a comment by ID.
 * @name GET /:id
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {string} req.params.id - The ID of the comment
 * @returns {JSON} - A JSON object containing the comment
 */

/**
 * Update a comment by ID.
 * @name PUT /:id
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {string} req.params.id - The ID of the comment
 * @param {string} req.body.content - The content of the comment
 * @param {string} req.body.user - The user who created the comment
 * @param {string} req.body.post - The post that the comment is associated with
 * @returns {JSON} - A JSON object containing the updated comment
 */

/**
 * Delete a comment by ID.
 * @name DELETE /:id
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {string} req.params.id - The ID of the comment
 * @returns {JSON} - A JSON object containing the deleted comment
 */

module.exports = router;

// Hey GitHub Copilot, I'm trying to create a route that will allow me to create a new comment. I want to be able to pass in a comment's content, the user who created the comment, and the post that the comment is associated with. I'm thinking that I should be able to use the `Comment.create` method to create a new comment, but I'm not sure how to pass in the required information. Can you help me with that?

router.get("/", async (req, res) => {
    const comments = await Comment.find();
    res.json({ comments });
}
    } catch (error) {
    res.status(500).json({ error: "Error fetching comments" });
}
});

router.post("/", async (req, res) => {
    const { content, user, post } = req.body;
    if (!content || !user || !post) {
        return res.status(400).json({ error: "Content, user, and post are required" });
    }

    try {
        const comment = await Comment.create({ content, user, post });
        res.status(201).json({ comment });
    } catch (error) {
        res.status(500).json({ error: "Error creating comment" });
    }
}
);

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    try {
        const comment = await Comment.findById(id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ comment });
    } catch (error) {
        res.status(500).json({ error: "Error fetching comment" });
    }
}
);

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { content, user, post } = req.body;
    if (!id || !content || !user || !post) {
        return res.status(400).json({ error: "ID, content, user, and post are required" });
    }

    try {
        const comment = await Comment.findByIdAndUpdate(id, { content, user, post }, { new: true });
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ comment });
    } catch (error) {
        res.status(500).json({ error: "Error updating comment" });
    }
}
);

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    try {
        const comment = await Comment.findByIdAndDelete(id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ comment });
    } catch (error) {
        res.status(500).json({ error: "Error deleting comment" });
    }
});

