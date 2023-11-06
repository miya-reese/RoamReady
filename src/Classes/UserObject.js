export default class {
    constructor(firstname, lastname, username, password, phone, email, addrLine1, addrLine2) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
        this.profileImg = 'https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg=';
        this.phone = phone;
        this.email = email;
        this.addrLine1 = addrLine1;
        this.addrLine2 = addrLine2;
    }

    // just a link for now, some type of image upload should be implemented in the future
    setProfileImg(imgLink){
        this.profileImg = imgLink;
    }

    fullname(){
        return this.firstname + " " + this.lastname;
    }
}