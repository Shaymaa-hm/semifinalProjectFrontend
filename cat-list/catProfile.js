const fetchUserById = async (id) => {
    try {
        // Fetch the JSON data from the file

        if (parseInt(id) > 23) {

            const response = await fetch('../profile/cats2.json');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const jsonData = await response.json();
            console.log(jsonData);
            // Find the user by their ID in the JSON array
            console.log(id)
            console.log(parseInt(id))
            console.log(typeof (parseInt(id)))
            const user = jsonData.find((user) => user.id === parseInt(id));
            console.log(user)

            if (user) {
                return user;
            } else {
                throw new Error('User not found');
            }
        }
        else {

            const response = await fetch('../profile/cats.json');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const jsonData = await response.json();
            console.log(jsonData);
            // Find the user by their ID in the JSON array
            console.log(id)
            console.log(parseInt(id))
            console.log(typeof (parseInt(id)))
            const user = jsonData.find((user) => user.id === parseInt(id));
            console.log(user)

            if (user) {
                return user;
            } else {
                throw new Error('User not found');
            }
        }


    } catch (error) {
        console.error(error);
        return null; // Handle the error as needed
    }
};

const displayUserDetails = (user = {}) => {


    document.querySelector(".profileHeader").textContent = user.name+"'s Profile"
    document.querySelector(".image").src = "../"+user.image
    document.querySelector(".age").textContent = user.age
    document.querySelector(".breed").textContent = user.breed
    document.querySelector(".shelterName").textContent = user.sheltername
    document.querySelector(".shelterNumber").textContent = user.shelternumber

}

const getUrlParameter = (parameter) => {
    const query = window.location.search
    const urlParams = new URLSearchParams(query)
    const desiredParameter = urlParams.get(parameter)
    // console.log(desiredParameter)

    return desiredParameter
}

const initApp = async () => {
    const userId = getUrlParameter("id")
    // console.log(userId)
    // const currentUser = await getCurrentUser(userId)
    const currentUser = await fetchUserById(userId)

    displayUserDetails(currentUser)
}
initApp()
