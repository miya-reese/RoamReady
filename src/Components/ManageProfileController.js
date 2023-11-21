import mainUser from "../GlobalUser";

async function ManageProfileController(userData){
    mainUser.setFullname(userData.fullname);
    mainUser.setUsername(userData.username);
    mainUser.setPassword(userData.password);
    mainUser.setPhone(userData.phone);
    mainUser.setEmail(userData.email);
    mainUser.setAddrLine1(userData.addrLine1);
    mainUser.setAddrLine2(userData.addrLine2);
}

export default ManageProfileController;