const dadJoke = document.querySelector('.dadJoke');
const fact = document.querySelector('.fact');
const funfact = document.querySelector('.fun-fact');
const refreshBtn = document.querySelector('.refresh-btn');

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        return 'NO JOKES AVAILABLE?'
    }
}

const addDadjoke = async () => {
   const joke = await getDadJoke();
   dadJoke.textContent = joke;
} 
addDadjoke();

refreshBtn.addEventListener('click', addDadjoke);

const getFact = async () => {
    try {
        const config = {headers: { Accept: 'random.json?language=en'}};
        const res = await axios.get('https://uselessfacts.jsph.pl/', config);
        console.log(res);
    } catch (e) {
        return `WE'RE ALL OUTTA FACTS TODAY`;
    }
}

const addFact = async () => {
    const fact = await getFact();
    funfact.textContent = fact;
}
addFact();

const getActivity = async () => {
    try {
        const config = {headers: { Accept: '/api/activity/'}};
        const res = await axios.get('https://boredapi.com', config);
        console.log(res);
    } catch (e) {
        return `WE'RE ALL OUTTA FACTS TODAY`;
    }
}

getActivity();

const getBs = async () => {
    try {
        
        const res = await axios.get('https://corporatebs-generator.sameerkumar.website/');
        fact.textContent = res.data.phrase;
    } catch (e) {
        return `WE'RE ALL OUTTA BS TODAY`;
    }
}

getBs();

