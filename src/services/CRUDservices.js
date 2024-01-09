const connection = require("../config/database");
const getAllUsers = async() => {
    let [results, fields] = await connection.query("select * from Users")
    return results
}

const getUserById = async (userID) => {
    let [results, fields] = await connection.query("select * from Users where id = ?", [userID])
    let user = results && results.length > 0 ? results[0] : {}
    return user
}

const updateUserById = async(email, name, city , userId) =>{
    let [results, fields] = await connection.query(
        `UPDATE Users
        SET email = ? , name = ?,  city= ?
        WHERE id = ?;
        `, [email, name, city , userId]
    );
}
module.exports = {
    getAllUsers,
    getUserById,
    updateUserById
}