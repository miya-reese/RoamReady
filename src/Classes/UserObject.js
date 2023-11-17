
export default class UserObject {
    constructor(firstname, lastname, password, phone, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.profileImg = 'https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg=';
        this.phone = phone;
        this.email = email;
    }

    // just a link for now, some type of image upload should be implemented in the future
    setProfileImg(imgLink){
        this.profileImg = imgLink;
    }

    fullname(){
        return this.firstname + " " + this.lastname;
    }
}
