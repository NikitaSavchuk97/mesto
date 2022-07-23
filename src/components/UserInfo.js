class UserInfo {
    constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector }) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileJob = document.querySelector(profileJobSelector);
        this._profileAvatar = document.querySelector(profileAvatarSelector);
    }

    getUserInfo() {
        return {
            name: this._profileName.textContent,
            job: this._profileJob.textContent
        }
    }

    setUserInfo({ name, about, avatar }) {
        this._profileName.textContent = name;
        this._profileJob.textContent = about;
        this._profileAvatar.src = avatar;
    }
}

export default UserInfo;