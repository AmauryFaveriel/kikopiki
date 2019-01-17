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
import other0_0 from './assets/imgs/paintings/0/0_other_0.jpg';
import other0_1 from './assets/imgs/paintings/0/0_other_1.jpg';
import other0_2 from './assets/imgs/paintings/0/0_other_2.jpg';

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
            main_painting: {
                author: 'Diego Velasquez',
                desc: 'Portrait d\'Innocent X',
                date: 1650,
                visual: main0,
            },
            inspired_painting: {
                author: 'Francis Bacon',
                desc: 'Étude d\'après le portrait du pape Ixnnocent X par Velázquez',
                date: 1953,
                visual: inspired0,
            },
            zooms: [
                {
                    desc: 'hihihihihLorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            scale: 1.5,
                            x: 0,
                            y: 0
                        },
                        inspired: {
                            scale: 1.5,
                            x: 0,
                            y: 200
                        },
                    }
                },
                {
                    desc: 'hahahahhahaLorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            scale: 2.2,
                            x: 150,
                            y: 10
                        },
                        inspired: {
                            scale: 1.1,
                            x: 100,
                            y: 0
                        },
                    }
                },
                {
                    desc: 'hyhyhyhyhyhyhLorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            scale: 1.2,
                            x: 200,
                            y: 20
                        },
                        inspired: {
                            scale: 1.3,
                            x: 175,
                            y: 125
                        },
                    }
                }
            ],
            other_paintings: [
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    visual: other0_0
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    visual: other0_1
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    visual: other0_2
                }
            ],
        },
        {
            title: 'Vegans not allowed ( cc Clara )',
            intro: 'C’est un tableau particulier dans les oeuvres de Rembrandt, car il s’agit d’une des rares nature morte parmi ses oeuvres. Cette oeuvre a pour portée générale un memento mori, rappelant au spectateur sa proximité avec la mort.',
            main_painting: {
                author: 'Rembrandt Harmenszoon van Rijn',
                desc: ' Le boeuf écorché',
                date: 1655,
                visual: main1,
            },
            inspired_painting: {
                author: 'Marc Chagall',
                desc: 'Le boeuf écorché',
                date: 1947,
                visual: inspired1,
            },
            zooms: [
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            scale: 1.5,
                            x: 100,
                            y: 300
                        },
                        inspired: {
                            scale: 1.5,
                            x: 200,
                            y: 500
                        },
                    }
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            scale: 1.5,
                            x: 10,
                            y: 30
                        },
                        inspired: {
                            scale: 1.5,
                            x: 20,
                            y: 50
                        },
                    }
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            scale: 1.5,
                            x: 1000,
                            y: 3000
                        },
                        inspired: {
                            scale: 1.5,
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
            intro: 'En apparence, Ingres n’a rien d’un excentrique : sa peinture est claire, parfaitement maîtrisée les formes sont définies par des contours précis qui cernent les couleurs; rien d’excessif, rien qui ne dépasse. Tout l’opposée de Picasso pourrait-on penser, et pourtant c’est chez lui que l’Espagnol trouve l’une de ses principales sources d’inspirations pour la représentation des femmes.',
            main_painting: {
                author: 'Jean-Auguste Dominique Ingres',
                desc: 'Madame Moitessier',
                date: 1856,
                visual: main2,
            },
            inspired_painting: {
                author: 'Pablo Picasso',
                desc: 'Portrait de Dora Maar (muse)',
                date: 1937,
                visual: inspired2,
            },
            zooms: [
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            scale: 1.5,
                            x: 100,
                            y: 300
                        },
                        inspired: {
                            scale: 1.5,
                            x: 200,
                            y: 500
                        },
                    }
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            scale: 1.5,
                            x: 10,
                            y: 30
                        },
                        inspired: {
                            scale: 1.5,
                            x: 20,
                            y: 50
                        },
                    }
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            scale: 1.5,
                            x: 1000,
                            y: 3000
                        },
                        inspired: {
                            scale: 1.5,
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
            title: 'Je suis une enfant en jupe',
            intro: 'Francis Bacon est un peintre anglais aussi fameux que le jambon, surtout pour peindre des scènes pleines de sang, de chair, de corps déformés, qui sont ses sujets de prédilection.',
            main_painting: {
                author: 'Diego Velasquez',
                desc: 'Infante Marguerite Thérèse en bleu',
                date: 1651,
                visual: main3,
            },
            inspired_painting: {
                author: 'Fernando Botero',
                desc: 'D’après Velasquez (Infante Marguerite Thérèse en bleu)',
                date: 2005,
                visual: inspired3,
            },
            zooms: [
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            scale: 1.5,
                            x: 100,
                            y: 300
                        },
                        inspired: {
                            scale: 1.5,
                            x: 200,
                            y: 500
                        },
                    }
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            scale: 1.5,
                            x: 10,
                            y: 30
                        },
                        inspired: {
                            scale: 1.5,
                            x: 20,
                            y: 50
                        },
                    }
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            scale: 1.5,
                            x: 1000,
                            y: 3000
                        },
                        inspired: {
                            scale: 1.5,
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
                            scale: 1.5,
                            x: 100,
                            y: 300
                        },
                        inspired: {
                            scale: 1.5,
                            x: 200,
                            y: 500
                        },
                    }
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            scale: 1.5,
                            x: 10,
                            y: 30
                        },
                        inspired: {
                            scale: 1.5,
                            x: 20,
                            y: 50
                        },
                    }
                },
                {
                    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?',
                    zoom: {
                        main: {
                            scale: 1.5,
                            x: 1000,
                            y: 3000
                        },
                        inspired: {
                            scale: 1.5,
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