// controllers/server.js

exports.status = function(req, res, next) {
    res.json({
        defaultConversationId: process.env.VONAGE_DEFAULT_CONVERSATION_ID,
        status: 'ok'
    });
    // res.sendStatus(500);
};