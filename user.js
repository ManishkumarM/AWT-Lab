function readUser()
{
    fetch("user.json")
        .then(response =>
            returns (response.json))
            .then (data=>
                data.users.forEach(user=>
                    {
                        console.log("Username:", user.uname);
                        console.log("Email", user.email);
                    }))
    }
