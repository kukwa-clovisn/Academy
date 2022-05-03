/**
 * capitalizing the username.
 */

const capitalizeUserName = (username) => {
     let nameArr = username.split(" ");

     let capitalizedName = "";

     let registeredName = "";

     for (let i = 0; i < nameArr.length; i++) {

          capitalizedName += nameArr[i].charAt(0).toUpperCase() + nameArr[i].slice(1) + " ";

          registeredName = capitalizedName.slice(0, -1);

     }
     return registeredName;
}
module.exports = capitalizeUserName;