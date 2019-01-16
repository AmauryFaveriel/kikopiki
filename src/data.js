import main0 from './assets/imgs/paintings/0/0_main.jpeg';
import inspired0 from './assets/imgs/paintings/0/0_inspired.jpg';
import main1 from './assets/imgs/paintings/1/1_main.jpg';
import inspired1 from './assets/imgs/paintings/1/1_inspired.jpg';
import main2 from './assets/imgs/paintings/2/2_main.jpg';
import inspired2 from './assets/imgs/paintings/2/2_inspired.jpg';
import main3 from './assets/imgs/paintings/3/3_main.jpg';
import inspired3 from './assets/imgs/paintings/3/3_inspired.jpg';
import main4 from './assets/imgs/paintings/4/4_main.jpg';
import inspired4 from './assets/imgs/paintings/4/4_inspired.jpg';

const data = {
    intro: {
        title: 'Kikopiki',
        intro_1: 'Rien ne se perd, rien ne se krée tout se transforme, disait Lavoisier à propos de la matière. Parait-il que dans l\'histoire de la peinture, c\'est un peu la même chose.',
        intro_2: 'Découvrez comment les grands noms du XXème siècle se sont appropriés les klassiques pour transmettre un tout autre message.',
        cta: 'Choisir un oeuvre'
    },
    paintings: [
        {
            title: 'Un portrait horrifiant',
            intro: 'Francis Bacon est un peintre anglais aussi fameux que le jambon, surtout pour peindre des scènes pleines de sang, de chair, de corps déformés, qui sont ses sujets de prédilection.\nDerrière ce tableau bien effrayant au nom à rallonge, se cache une obsession. En effet notre cher Francis a étudié pendant 20 ans un portrait du pape Innocent X peint par Velázquez en 1650.',
            inspired_painting: {
                author: 'Francis Bacon',
                desc: 'Étude d\'après le portrait du pape Innocent X par Velázquez',
                date: 1953,
                visual: inspired0,
            },
            main_painting: {
                author: 'Diego Velasquez',
                desc: 'Portrait d\'Innocent X',
                date: 1650,
                visual: main0,
            },
            zooms: [
                {
                    desc: 'hihihihihLorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            x: 100,
                            y: 300
                        },
                        inspired: {
                            x: 200,
                            y: 500
                        },
                    }
                },
                {
                    desc: 'hahahahhahaLorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            x: 10,
                            y: 30
                        },
                        inspired: {
                            x: 20,
                            y: 50
                        },
                    }
                },
                {
                    desc: 'hyhyhyhyhyhyhLorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            x: 1000,
                            y: 3000
                        },
                        inspired: {
                            x: 2000,
                            y: 5000
                        },
                    }
                }
            ],
            other_paintings: [
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    visual: 'https://picsum.photos/500/750?image=0'
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    visual: 'https://picsum.photos/500/750?image=1'
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    visual: 'https://picsum.photos/500/750?image=2'
                }
            ],
        },
        {
            title: 'Un portrait horrifiant 2',
            intro: 'Francis Bacon est un peintre anglais aussi fameux que le jambon, surtout pour peindre des scènes pleines de sang, de chair, de corps déformés, qui sont ses sujets de prédilection.',
            inspired_painting: {
                author: 'Francis Bacon JAMBON',
                desc: 'Étude d\'après le portrait du pape Innocent X par Velázquez QUEZ',
                date: 195390,
                visual: inspired1,
            },
            main_painting: {
                author: 'Diego VelasquezAWI',
                desc: 'Portrait d\'InnocenFEZG"Et X',
                date: 165098,
                visual: main1,
            },
            zooms: [
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            x: 100,
                            y: 300
                        },
                        inspired: {
                            x: 200,
                            y: 500
                        },
                    }
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            x: 10,
                            y: 30
                        },
                        inspired: {
                            x: 20,
                            y: 50
                        },
                    }
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            x: 1000,
                            y: 3000
                        },
                        inspired: {
                            x: 2000,
                            y: 5000
                        },
                    }
                }
            ],
            other_paintings: [
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    visual: 'https://picsum.photos/500/750?image=5'
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    visual: 'https://picsum.photos/500/750?image=6'
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    visual: 'https://picsum.photos/500/750?image=7'
                }
            ],
        },
        {
            title: 'Portrait de femme pensive',
            intro: 'Francis Bacon est un peintre anglais aussi fameux que le jambon, surtout pour peindre des scènes pleines de sang, de chair, de corps déformés, qui sont ses sujets de prédilection.',
            inspired_painting: {
                author: 'Pablo Picasso',
                desc: 'Portrait de Dora Maar (muse)',
                date: 1937,
                visual: inspired2,
            },
            main_painting: {
                author: 'Jean-Auguste Dominique Ingres',
                desc: 'Madame Moitessier',
                date: 1856,
                visual: main2,
            },
            zooms: [
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            x: 100,
                            y: 300
                        },
                        inspired: {
                            x: 200,
                            y: 500
                        },
                    }
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            x: 10,
                            y: 30
                        },
                        inspired: {
                            x: 20,
                            y: 50
                        },
                    }
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            x: 1000,
                            y: 3000
                        },
                        inspired: {
                            x: 2000,
                            y: 5000
                        },
                    }
                }
            ],
            other_paintings: [
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    visual: 'https://picsum.photos/500/750?image=10'
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    visual: 'https://picsum.photos/500/750?image=11'
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    visual: 'https://picsum.photos/500/750?image=12'
                }
            ],
        },
        {
            title: 'Un portrait horrifiant 2',
            intro: 'Francis Bacon est un peintre anglais aussi fameux que le jambon, surtout pour peindre des scènes pleines de sang, de chair, de corps déformés, qui sont ses sujets de prédilection.',
            inspired_painting: {
                author: 'Francis Bacon JAMBON',
                desc: 'Étude d\'après le portrait du pape Innocent X par Velázquez QUEZ',
                date: 195390,
                visual: inspired3,
            },
            main_painting: {
                author: 'Diego VelasquezAWI',
                desc: 'Portrait d\'InnocenFEZG"Et X',
                date: 165098,
                visual: main3,
            },
            zooms: [
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            x: 100,
                            y: 300
                        },
                        inspired: {
                            x: 200,
                            y: 500
                        },
                    }
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            x: 10,
                            y: 30
                        },
                        inspired: {
                            x: 20,
                            y: 50
                        },
                    }
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            x: 1000,
                            y: 3000
                        },
                        inspired: {
                            x: 2000,
                            y: 5000
                        },
                    }
                }
            ],
            other_paintings: [
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    visual: 'https://picsum.photos/500/750?image=15'
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    visual: 'https://picsum.photos/500/750?image=16'
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    visual: 'https://picsum.photos/500/750?image=17'
                }
            ],
        },
        {
            title: 'Un portrait horrifiant 2',
            intro: 'Francis Bacon est un peintre anglais aussi fameux que le jambon, surtout pour peindre des scènes pleines de sang, de chair, de corps déformés, qui sont ses sujets de prédilection.',
            inspired_painting: {
                author: 'Francis Bacon JAMBON',
                desc: 'Étude d\'après le portrait du pape Innocent X par Velázquez QUEZ',
                date: 195390,
                visual: inspired4,
            },
            main_painting: {
                author: 'Diego VelasquezAWI',
                desc: 'Portrait d\'InnocenFEZG"Et X',
                date: 165098,
                visual: main4,
            },
            zooms: [
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            x: 100,
                            y: 300
                        },
                        inspired: {
                            x: 200,
                            y: 500
                        },
                    }
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            x: 10,
                            y: 30
                        },
                        inspired: {
                            x: 20,
                            y: 50
                        },
                    }
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            x: 1000,
                            y: 3000
                        },
                        inspired: {
                            x: 2000,
                            y: 5000
                        },
                    }
                }
            ],
            other_paintings: [
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    visual: 'https://picsum.photos/500/750?image=20'
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    visual: 'https://picsum.photos/500/750?image=21'
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    visual: 'https://picsum.photos/500/750?image=22'
                }
            ],
        },
    ],
    cta: 'Découvrir',
    lorem_1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
    lorem_2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
    lorem_3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?'
}

export default data;