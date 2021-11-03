const axios = require("axios");

async function fetch_data() {
    try {
        const response = await axios.get("https://reqres.in/api/users");
        let datafrominternet = [];
        for (let i = 0; i < response.data.total_pages; i++) {
            const respond = await axios.get(
                `https://reqres.in/api/users?page=${i + 1}`
            );
            // datafrominternet.push(respond.data.data);
            respond.data.data.forEach(hasil => datafrominternet.push(hasil));
        }
        // const data = datafrominternet[0].concat(datafrominternet[1]);
        console.log(datafrominternet);
    } catch (error) {
        console.error(error);
    }
}
return fetch_data();