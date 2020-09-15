function ApplicationFactory(stored) {
    var userMappedData = stored || {};

    function setUser(item) {
        switch (item) {
            case "African":
                return "African"
            case "White":
                return "White"
            case "Colored":
                return "Colored"
            case "Asian":
                return "Asian"
            case "Male":
                return "Male"
            case "Female":
                return "Female"
            case "YES":
                return "YES"
            case "NO":
                return "NO"
            case "Post":
                return "Post"
            case "mail":
                return "E-mail"
            case "Fax":
                return "Fax"
            default:
                return "Hello"
        }
    }

    function getNameFromInput(textBoxValue) {
        var regularExpression = /[^A-Za-z]/g;
        if (textBoxValue !== "") {
            var lettersOnly = textBoxValue.replace(regularExpression, "")
            var name = lettersOnly.charAt(0).toUpperCase() + lettersOnly.slice(1).toLowerCase()
            return name;
        }
        return "";
    }

    function addedUser(userName) {
        if (userMappedData[userName] === undefined) {
            userMappedData[userName] = 0;
        }
    }

    function getAllUsers() {
        // this is for local storage
        return userMappedData;
    }

    return {
        getNameFromInput,
        getAllUsers,
        addedUser,
        setUser
    }
}