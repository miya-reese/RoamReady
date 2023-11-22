
export default class UserObject{
    constructor(firstname, lastname, username, password, phone, email, address) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
        this.profileImg = 'https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg=';
        this.phone = phone;
        this.email = email;
        this.address = address;
    }

    getAddrLine1(){
        let address = this.address;
        if (!isValidAddress(address)){
            return "invalid address";
        }
        let addrArr = address.split(",");
        return addrArr[0];
    }
    
    getAddrLine2(){
        let address = this.address;
        if (!isValidAddress(address)){
            return "";
        }
        let addrArr = address.split(",");
        addrArr = addrArr.slice(1);
        return addrArr.join(",");
    }
    
    getFullname(){
        let fullname = this.firstname + " " + this.lastname;
        return fullname;
    }

    // just a link for now, some type of image upload should be implemented in the future
    setProfileImg(imgLink){
        this.profileImg = imgLink;
    }

    setFirstname(firstname){
        this.firstname = firstname;
    }

    setLastname(lastname){
        this.lastname = lastname;
    }

    setUsername(username){
        this.username = username;
    }

    setPassword(pass){
        this.password = pass;
    }

    setPhone(phone){
        this.phone = phone;
    }

    setEmail(email){
        this.email = email;
    }

    setAddress(address){
        this.address = address;
    }
}

function isValidAddress(address){
    let addrArr = address.split(",");
    let len = addrArr.length;
    return (len > 2);
}
