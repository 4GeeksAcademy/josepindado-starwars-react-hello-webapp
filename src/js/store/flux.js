const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            storecharacterswithUid: [],
            storecharacterswithProperties: [],
            singlecharacter: null,
            vehicleswithUid: [],
            vehicleswithProperties: [],
            vechicle: null,
            planetswithUid: [],
            planetswithProperties: [],
            planet: null,
            favorites: [],
            charactersimgs: ["0","https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796","https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg?region=176%2C0%2C951%2C536","https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536","https://lumiere-a.akamaihd.net/v1/images/image_fcf66d2c.jpeg?region=131,0,817,460","https://lumiere-a.akamaihd.net/v1/images/60423c5f75f0ef00019a3921-image_0388a3e6.jpeg?region=0,0,1536,864&width=1200","https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=0%2C34%2C1053%2C593","https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png?region=342%2C0%2C938%2C527","https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666","https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878","https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721"],
            vehiclesimgs: ["0","1","2","3","https://lumiere-a.akamaihd.net/v1/images/sandcrawler-main_eb1b036b.jpeg?region=251%2C20%2C865%2C487","5","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7muWiEYIej_I5qOXeidRBGLl57WpFT0xUfA&s","https://static.wikia.nocookie.net/starwars/images/9/9e/X-34.jpg/revision/latest?cb=20071005104945&path-prefix=nl","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGU4e7lVRRlgjSYAkwXm08GvPdzTj1u4LNSA&s","9","10","11","12","13","https://lumiere-a.akamaihd.net/v1/images/snowspeeder_ef2f9334.jpeg?region=135%2C42%2C1766%2C1323","15","https://static.wikia.nocookie.net/disney/images/1/17/TIE_Bomber_BF2.png/revision/latest?cb=20170906175715","17","https://lumiere-a.akamaihd.net/v1/images/AT-AT_89d0105f.jpeg?region=214%2C19%2C1270%2C716","https://upload.wikimedia.org/wikipedia/en/1/19/Star_Wars_All_Terrain_Scout_Transport.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfhccK07xCzP1ZEMivRCqa6O9p_mZok-iFg&s","21","22","23","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxsvfR4Vr1fF4iJJw_3vAb68x-WDZc9Xjag&s"],
            planetsimg: ["0","https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg","https://static.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20061211013805","https://static.wikia.nocookie.net/starwars/images/d/d4/Yavin-4-SWCT.png/revision/latest?cb=20181015023938","https://static.wikia.nocookie.net/starwars/images/1/1d/Hoth_SWCT.png/revision/latest?cb=20160630022322","https://static.wikia.nocookie.net/starwars/images/4/48/Dagobah_ep3.jpg/revision/latest?cb=20100122163146","https://static.wikia.nocookie.net/starwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20170222012550","https://upload.wikimedia.org/wikipedia/en/d/d4/PlanetEndor.jpg","https://static.wikia.nocookie.net/starwars/images/f/f0/Naboo_planet.png/revision/latest?cb=20240216051108","https://static.wikia.nocookie.net/starwars/images/1/16/Coruscant-EotE.jpg/revision/latest/scale-to-width-down/1200?cb=20240118012902","https://static.wikia.nocookie.net/starwars/images/a/a9/Eaw_Kamino.jpg/revision/latest?cb=20090527045541"]
        },
        actions: {
            getCharactersWithUid: () => {
                fetch('https://www.swapi.tech/api/people')
                  .then((resp) => resp.json())
                  .then((data) => {
                    setStore({storecharacterswithUid: data.results});
                    console.log("Array de characters (getCharactersWithUid): ", data.results);
                  })
                  .catch((error) => console.log(error));
              },
              fetchCharactersWithProperties: () => {
                const fetchedCharacters = [];
                for (let index = 1; index <= 10; index++) {
                  fetch(`https://www.swapi.tech/api/people/${index}`)
                    .then((resp) => resp.json())
                    .then((data) => {
                      fetchedCharacters.push(data.result.properties);
                      if (fetchedCharacters.length === 10) {
                        setStore({storecharacterswithProperties: fetchedCharacters});
                        console.log("Fetched characters (fetchCharactersWithProperties): ", fetchedCharacters);
                      }
                    })
                    .catch((error) => console.log(error));
                }
              },
              getCharacter: (contactID) => {
                fetch(`https://www.swapi.tech/api/people/${contactID}`)
                .then((resp) => resp.json())
                .then((data) => {
                  setStore({singlecharacter: data.result.properties})
                  console.log("este es el character con el contactid numero: ", contactID, " y estas son sus propiedades:  ", data.result.properties)
                })
                .catch((error) => console.log(error));
              },
              getVehiclesWithUid: async () => {
                try {
                  let response = await fetch('https://www.swapi.tech/api/vehicles')
                  let data = await response.json()
                  setStore({vehicleswithUid: data.results});
                  console.log("Array de vehicles (getVehicles): ", data.results);
                } catch (error) {
                  console.log("aqui esta el error: ", error)
                }
              },
              fetchVehiclesWithProperties: () => {
                const fetchedVehicles = [];
                const vehicleIds = [4, 6, 7, 8, 14, 16, 18, 20, 24]; // IDs específicos de los vehículos
                vehicleIds.forEach((id) => {
                  fetch(`https://www.swapi.tech/api/vehicles/${id}`)
                      .then((resp) => resp.json())
                      .then((data) => {
                          fetchedVehicles.push(data.result.properties);
                          if (fetchedVehicles.length === vehicleIds.length) {
                              setStore({ vehicleswithProperties: fetchedVehicles });
                          }
                      })
                      .catch((error) => console.log(error));
              });
            },
            getVehicle: (vehicleID) => {
              fetch(`https://www.swapi.tech/api/vehicles/${vehicleID}`)
              .then((resp) => resp.json())
              .then((data) => {
                setStore({vechicle: data.result.properties})
                console.log("este es el Vehicle con el vehicleID numero: ", vehicleID, " y estas son sus propiedades:  ", data.result.properties)
              })
              .catch((error) => console.log(error));
            },
            getPlanetsWithUid: async () => {
              try {
                let response = await fetch('https://www.swapi.tech/api/planets')
                let data = await response.json()
                setStore({planetswithUid: data.results});
                console.log("Array de planets (getPlanetsWithUid): ", data.results);
              } catch (error) {
                console.log("aqui esta el error: ", error)
              }
            },
            fetchPlanetsWithProperties: () => {
              const fetchedPlanets = [];
              for (let index = 1; index <= 10; index++) {
                fetch(`https://www.swapi.tech/api/planets/${index}`)
                  .then((resp) => resp.json())
                  .then((data) => {
                    fetchedPlanets.push(data.result.properties);
                    if (fetchedPlanets.length === 10) {
                    setStore({ planetswithProperties: fetchedPlanets });
                      console.log("Fetched planets (fetchPlanetsWithProperties): ", fetchedPlanets);
                    }
                  })
                  .catch((error) => console.log(error));
              }
            },
            updateFavorites: (objectname) => {
              const store = getStore();
              if(store.favorites.includes(objectname)) {
                setStore({favorites: store.favorites.filter(name => name !== objectname)})//Si incluye el nombre, lo elimina (filtra)
              } else {
                setStore({favorites: [...store.favorites, objectname]}) //Si no incluye el nombre, lo agrega
              }
            },
            getPlanet: (planetID) => {
              fetch(`https://www.swapi.tech/api/planets/${planetID}`)
              .then((resp) => resp.json())
              .then((data) => {
                setStore({planet: data.result.properties})
                console.log("este es el Planet con el planetID numero: ", planetID, " y estas son sus propiedades:  ", data.result.properties)
              })
              .catch((error) => console.log(error));
            },
            
        },
    };
};

export default getState;