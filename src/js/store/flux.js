const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personas: [],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async () => {
				const store = getStore();
				let count = 0;

				for (let i = 0; i < localStorage.length; i++) {
					if (localStorage.key(i).substring(0, 8) == "starwars") {
						if (
							JSON.parse(localStorage.getItem(localStorage.key(i))).description ==
							"A person within the Star Wars universe"
						) {
							setStore({
								personas: [...store.personas, JSON.parse(localStorage.getItem(localStorage.key(i)))]
							});
						}

						if (JSON.parse(localStorage.getItem(localStorage.key(i))).description == "A planet.") {
							setStore({
								planets: [...store.planets, JSON.parse(localStorage.getItem(localStorage.key(i)))]
							});
						}
						count++;
					}
				}

				if (count < 20) {
					let response = await fetch("https://www.swapi.tech/api/people");
					let peopleIndex = await response.json();
					peopleIndex = peopleIndex.results;

					peopleIndex.forEach(async element => {
						response = await fetch(element.url);
						let people = await response.json();
						people = people.result;

						localStorage.setItem("starwars-" + people.properties.name, JSON.stringify(people));

						setStore({ personas: [...store.personas, people] });
					});

					response = await fetch("https://www.swapi.tech/api/planets");
					let planetsIndex = await response.json();
					planetsIndex = planetsIndex.results;

					planetsIndex.forEach(async element => {
						response = await fetch(element.url);
						let planets = await response.json();
						planets = planets.result;

						localStorage.setItem("starwars-" + planets.properties.name, JSON.stringify(planets));

						setStore({ planets: [...store.planets, planets] });
					});
				}

				/*

				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
