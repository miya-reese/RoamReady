import mainUser from "../GlobalUser";

async function ManageProfileController(userData){
    mainUser.setFirstname(userData.firstname);
    mainUser.setLastname(userData.lastname);
    mainUser.setUsername(userData.username);
    mainUser.setPassword(userData.password);
    mainUser.setPhone(userData.phone);
    mainUser.setEmail(userData.email);
    mainUser.setAddress(userData.address);
}

export default ManageProfileController;