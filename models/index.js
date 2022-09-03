const ScorePost = require('./Highscore');
const User = require('./User');


User.hasMany(ScorePost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

ScorePost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

module.exports = {
    User,
    ScorePost,
}