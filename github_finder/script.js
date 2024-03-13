// const client_id = "Iv1.b70fd8ef4026d0f2";
// const client_key = "J2bLa51ePspDq9rKgRDp9rQ01NL2fBMZMvoyfcWknCo=";

const img = document.getElementById("img");
const names = document.getElementById("name");
const url = document.getElementById("url");
const repo = document.getElementById("repo");
const followers = document.getElementById("followers");

async function fetchData() {
    try{

        const userName = document.getElementById("username").value;

        const response = await fetch(`https://api.github.com/users/${userName}`);

        if(!response.ok){
            throw new Error("Could not Fetch resourse");

        }

        data = await response.json();

        
        img.src = data.avatar_url;
        names.innerText = "Username: " + data.name;
        url.innerText = "Link: " + data.html_url;
        repo.innerText = "Number Of Repositories: " + data.public_repos;
        followers.innerText = "Followers: " + data.followers;
        
    }
    catch(error){
        console.error(error);

    }
}
