import main0 from "./assets/imgs/paintings/0/main.jpg";
import inspired0 from "./assets/imgs/paintings/0/inspired.jpg";
import other0_0 from "./assets/imgs/paintings/0/others/other_0.jpg";
import other0_1 from "./assets/imgs/paintings/0/others/other_1.jpg";
import other0_2 from "./assets/imgs/paintings/0/others/other_2.jpg";

import main1 from "./assets/imgs/paintings/1/main.jpg";
import inspired1 from "./assets/imgs/paintings/1/inspired.jpg";
import other1_0 from "./assets/imgs/paintings/1/others/other_0.jpg";
import other1_1 from "./assets/imgs/paintings/1/others/other_1.jpg";
import other1_2 from "./assets/imgs/paintings/1/others/other_2.jpg";
import other1_3 from "./assets/imgs/paintings/1/others/other_3.jpg";
import other1_4 from "./assets/imgs/paintings/1/others/other_4.jpg";
import other1_5 from "./assets/imgs/paintings/1/others/other_5.jpg";
import other1_6 from "./assets/imgs/paintings/1/others/other_6.jpg";

import main2 from "./assets/imgs/paintings/2/main.jpg";
import inspired2 from "./assets/imgs/paintings/2/inspired.jpg";
import other2_0 from "./assets/imgs/paintings/2/others/other_0.jpg";
import other2_1 from "./assets/imgs/paintings/2/others/other_1.jpg";
import other2_2 from "./assets/imgs/paintings/2/others/other_2.jpg";
import other2_3 from "./assets/imgs/paintings/2/others/other_3.jpg";
import other2_4 from "./assets/imgs/paintings/2/others/other_4.jpg";

import main3 from "./assets/imgs/paintings/3/main.jpg";
import inspired3 from "./assets/imgs/paintings/3/inspired.jpg";
import other3_0 from "./assets/imgs/paintings/3/others/other_0.jpg";
import other3_1 from "./assets/imgs/paintings/3/others/other_1.jpg";
import other3_2 from "./assets/imgs/paintings/3/others/other_2.jpg";
import other3_3 from "./assets/imgs/paintings/3/others/other_3.jpg";

import main4 from "./assets/imgs/paintings/4/main.jpg";
import inspired4 from "./assets/imgs/paintings/4/inspired.jpg";

const data = {
  intro: {
    title: "Kikopiki",
    intro_1:
      "Rien ne se perd, rien ne se crée tout se transforme, disait Lavoisier à propos de la matière. Parait-il que dans l'histoire de la peinture, c'est un peu la même chose.",
    intro_2:
      "Découvrez comment les grands noms du XXème siècle se sont appropriés les classiques pour transmettre un tout autre message.",
    cta: "Choisir un oeuvre"
  },
  paintings: [
    {
      title: "Un portrait horrifiant",
      intro:
        "Francis Bacon est un peintre anglais aussi fameux que le jambon, surtout pour peindre des scènes pleines de sang, de chair, de corps déformés, qui sont ses sujets de prédilection.\nDerrière ce tableau bien effrayant au nom à rallonge, se cache une obsession. En effet notre cher Francis a étudié pendant 20 ans un portrait du pape Innocent X peint par Velázquez en 1650.",
      main_painting: {
        author: "Diego Velasquez",
        desc: "Portrait d'Innocent X",
        date: 1650,
        visual: main0
      },
      inspired_painting: {
        author: "Francis Bacon",
        desc: "Étude d'après le portrait du pape Innocent X par Velázquez",
        date: 1953,
        visual: inspired0
      },
      zooms: [
        {
          desc:
            "hihihihihLorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?",
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
            }
          }
        },
        {
          desc:
            "hahahahhahaLorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?",
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
            }
          }
        },
        {
          desc:
            "hyhyhyhyhyhyhLorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?",
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
            }
          }
        }
      ],
      other_paintings: [
        {
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?",
          visual: other0_0
        },
        {
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?",
          visual: other0_1
        },
        {
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?",
          visual: other0_2
        }
      ]
    },
    {
      title: "Une scène macabre",
      intro:
        "DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO DEFAULT_INTRO",
      main_painting: {
        author: "Rembrandt",
        desc: "Le boeuf écorché",
        date: 1655,
        visual: main1
      },
      inspired_painting: {
        author: "Marc Chagall",
        desc: "Le boeuf écorché",
        date: 1947,
        visual: inspired1
      },
      zooms: [
        {
          desc:
            "Cette oeuvre pour le moins macabre, a été inspirée à Chagall par Rembrandt. Le modèle central des deux tableaux est un boeuf éventré. Dans son tableau Chagall a reprit la représentation du boeuf comme sujet de piété, comme l'avait fait presque 300 ans auparavant son aîné, Rembrandt. En effet, le bœuf est réellement mis en croix, figure de la souffrance à laquelle chacun peut, finalement, s'identifier.",
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
            }
          }
        },
        {
          desc:
            "Tout comme dans l’oeuvre de Rembrandt, Marc Chagall a peint le visage d’une femme, en arrière-plan, presque effacée, avec un regard à la fois tourné vers le cadavre ou le spectateur. ",
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
            }
          }
        }
      ],
      other_paintings: [
        {
          desc:
            "Originaire de Russie, Marc Chagall a souvent incorporé des éléments de sa Russie natale dans ses oeuvres. C’est le cas dans le boeuf écorché, où la scène se déroule au sein d’un village Russe par une nuit d’ hiver, sur fond de huttes empilées comme des boîtes.",
          visual: other1_0
        },
        {
          desc:
            "La religion juive et le christianisme sont des thématiques souvent reprisent dans les peintures de Marc Chagall.",
          visual: other1_1
        },
        {
          desc:
            "Au cours des années 30, Jésus crucifié en était venu à représenter clairement pour lui la souffrance du peuple juif. Ce sujet a de nombreuses ramifications, mais la plus importante était peut-être d'alerter les chrétiens sur les atrocités perpétrées contre les juifs par les terreurs sans précédent de l'Holocauste.",
          visual: other1_2
        },
        {
          desc:
            "Quant à la religion juive très importante pour Chagall, car ce dernier était issu d’une famille de confession juive. Durant son enfance, Chagall voyait des animaux tués à la manière juive dans l’abattoir de son grand-père. L'abattage de l'animal le fascinait étrangement, comme le rituel d'un sacrifice qui avait un sens profondément caché et pour lequel il lui fallait finalement trouver un moyen d'expression.",
          visual: other1_3
        },
        {
          desc:
            "Le premier atelier du peintre Russe (de 1911 à 1913) à La Ruche (lieu d’apprentissage, mais aussi de passage pour les artistes de l’époque) était proche des abattoirs de Vaugirard, et il se souvient : « L'aube se lève. Quelque part non loin de là, ils commencent à trancher la gorge du bétail, les vaches mugissent, et je les peins. » La plupart de ses œuvres réalisées à la Ruche présentent de nombreux bovins, à l’image de son huile sur toile Moi et le Village, réalisée en 1911.",
          visual: other1_4
        },
        {
          desc:
            "L'emploi de la couleur chez Chagall est très personnel. Dans ses illustrations de la Bible et le Message biblique, notamment, on voit qu'une barbe peut être tour à tour violette, bleue ou verte. Il renverse les impressions chromatiques habituelles, et emploie la palette pour structurer l'espace de la toile davantage que pour traduire la réalité.",
          visual: other1_5
        },
        {
          desc:
            "Chagall ne peut pas être rattaché à une école. Certains le rapprochent au courant surréaliste, puisque son travail laisse une large part à son imagination et ses rêves. Mais si en deux mots, on pouvait caractériser son œuvre, on parlerait de « chromatisme onirique ». Blaise Cendars disait de Chagall : « Il dort, il est éveillé, Il prend une église et il peint avec une église, Il prend une vache et il peint avec une vache, Avec une sardine… ». Dans ses oeuvres Chagall dépeint souvent des scènes irréalistes. Comme on peut le voir dans sa peinture du Boeuf écorché, un événement des plus irréalistes qui transforme l'ensemble des figures et des choses, apparemment à mi-chemin du réalisme, en un royaume visionnaire. Un Juif hassidique, arrivant du ciel, les bras tendus, armé d’un couteau ensanglanté comme un messager de la terreur.",
          visual: other1_6
        }
      ]
    },
    {
      title: "La penseuse",
      intro:
        "En apparence, Ingres n’a rien d’un excentrique : sa peinture est claire, parfaitement maîtrisée les formes sont définies par des contours précis qui cernent les couleurs; rien d’excessif, rien qui ne dépasse. Tout l’opposée de Picasso pourrait-on penser, et pourtant c’est chez lui que l’Espagnol trouve l’une de ses principales sources d’inspirations pour la représentation des femmes.",
      main_painting: {
        author: "Jean-Auguste Ingres",
        desc: "Madame Moitessier",
        date: 1856,
        visual: main2
      },
      inspired_painting: {
        author: "Pablo Picasso",
        desc: "Portrait de Dora Maar",
        date: 1937,
        visual: inspired2
      },
      zooms: [
        {
          desc:
            "Sous l’aspect très contenu et classique de sa peinture Ingres n’hésitait pas à déformer les corps de manière subtile certes, mais qui lui permettait de construire l’espace d’un tableau simplement en variant la position des corps, sans l’aide d’un décor ou de la perspective. Une particularité que Picasso, spécialiste de la décomposition des silhouettes savait apprécier. ",
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
            }
          }
        },
        {
          desc:
            "Similitude de la pose, les deux femmes se tiennent assises, le visage placé de 3/4 et soutenu par la main gauche posée sur la joue, les doigts écartés. Le corps et le décor s’entremêlent.",
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
            }
          }
        },
        {
          desc:
            "Picasso a repris et joué avec la couleur rose déjà présente dans l’oeuvre d’Ingres, afin de donner du volume au visage de son modèle et parvenir à faire ressortir ses joues comme des pêches.",
          zoom: {
            main: {
              scale: 1,
              x: 50,
              y: 350
            },
            inspired: {
              scale: 2,
              x: 10,
              y: 10
            }
          }
        },
        {
          desc:
            "En y regardant de plus près, on remarque que la morphologie des deux modèles est similaire. En effet, la forme de leurs bustes est triangulaire, dans l’oeuvre de Picasso cet attribut physique est exagéré. Le peintre Espagnol a également intégré le noeud de la robe.",
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
            }
          }
        },
        {
          desc:
            "Tout comme Ingres, Picasso a également représenté son sujet de face et de profil. Ingres a utilisé la convention traditionnelle du miroir pour représenter son modèle de face et de profil. Tandis que le peintre Espagnol a eu recours à une synthèse graphique, une fusion picturale développée au travers de ses expériences cubistes, afin de capturer tous les aspects du modèle.",
          zoom: {
            main: {
              scale: 1.2,
              x: 110,
              y: 330
            },
            inspired: {
              scale: 1.2,
              x: 220,
              y: 550
            }
          }
        }
      ],
      other_paintings: [
        {
          desc:
            "« Qu’est-ce au fond qu’un peintre ? C’est un collectionneur qui veut se constituer une collection en faisant lui-même les tableaux qu’il aime chez les autres. C’est comme cela que je commence et puis cela devient autre chose. » Pablo Picasso",
          visual: other2_0
        },
        {
          desc:
            "Tout au long de sa carrière, Picasso s’est inspiré des arts dit primitif notamment d’Africain et Ibérique, pour créer ses oeuvres. En effet, Pablo Picasso est allé chercher à travers ces arts, une simplification des formes qui correspond à l'idée d'une présence et d'une humanité générique. On retrouve dans ces arts des fondamentaux rapidement adoptés par l'artiste : la schématisation, la verticalité, l'assemblage de formes, les questions du regard et du sexe, très importantes pour lui…",
          visual: other2_1
        },
        {
          desc:
            '« Si je connais Cézanne ! Il était mon seul et unique maître ! Vous pensez bien que j’ai regardé ses tableaux… J’ai passé des années à les étudier… » disait Picasso à Brassaï. Cézanne travaillait sur l’aplatissement de l’espace, la simplification et transformation des formes naturelles en formes géométriques essentielles : "Dans la nature, tout est sphères, cônes et cylindres". C\'est donc la forme qui vient en premier et non le sujet ou la couleur.',
          visual: other2_2
        },
        {
          desc:
            "Pablo Picasso, génie oblige, aura 8 liaisons féminines connues. Les femmes et en particulier les muses ont été d’importantes sources d’inspirations pour Picasso.",
          visual: other2_3
        },
        {
          desc:
            "En écoutant Maurice Princet et en étudiant le travail de Raymond Poincaré, tout deux mathématiciens. Picasso réalise que la géométrie offre un nouveau langage. C'est par le biais de cette réalisation que Pablo Picasso a développé son propre style et est devenu avec Georges Braque, le co-fondateur d'un nouveau mouvement artistique : le cubisme, à la fin des années 30. « J'ai assisté à la naissance du cubisme, à sa croissance, à son déclin. Picasso en fut l'accoucheur, Guillaume Apollinaire la sage-femme, Princet le parrain », explique Maurice Vlaminck.",
          visual: other2_4
        }
      ]
    },
    {
      title: "Tout en rondeur",
      intro:
        "Fernando Botero fait partie de ses peintres contemporain qui se réapproprie des oeuvres de peintre classique. C’est le cas de cette oeuvre nommé D’après Velasquez Infante Marguerite Thérèse en bleu. En effet cette peinture s’inspire d’une oeuvre du grand maître Espagnol, Diego Velázquez, qui fût le peintre du roi Philippe IV. ",
      main_painting: {
        author: "Diego Velasquez",
        desc: "Infante Marguerite Thérèse en bleu",
        date: 1655,
        visual: main3
      },
      inspired_painting: {
        author: "Fernando Botero",
        desc: "D’après Velasquez Infante Marguerite Thérèse en bleu",
        date: 2005,
        visual: inspired3
      },
      zooms: [
        {
          desc:
            "Pas besoin de zoom pour voir au premier coup d’oeil la ressemblance entre ces deux tableaux. Botero a peint l’infante avec la même pose que le tableau du maître Espagnol, mais la large armature de sa robe a été le prétexte pour lui à développer une monumentalité chère et caractéristique du style de Botero.",
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
            }
          }
        },
        {
          desc:
            "Fernando Botero fait partie de ses peintres contemporain qui se réapproprie des oeuvres de peintre classique. C’est le cas de cette oeuvre nommé D’après Velasquez Infante Marguerite Thérèse en bleu. En effet cette peinture s’inspire d’une oeuvre du grand maître Espagnol, Diego Velázquez, qui fût le peintre du roi Philippe IV. ",
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
            }
          }
        },
        {
          desc: "à voir wainting ...",
          zoom: {
            main: {
              scale: 1.1,
              x: 666,
              y: 666
            },
            inspired: {
              scale: 1.1,
              x: 666,
              y: 666
            }
          }
        }
      ],
      other_paintings: [
        {
          desc:
            "Le style singulier de Botero lui a été inspiré en partie par les fresques Egytiennes, il a déclaré un jour : « Je peins aussi des visages impassibles, sans psychologie, car je veux donner un sentiment d'éternité, comme dans les fresques égyptiennes. » ",
          visual: other3_0
        },
        {
          desc:
            "La racine même du style de Botero, avec ses personnages volumétriques, tout en rondeur lui est venu en observant l'art précolombien. Le peintre Colombien s'est lui même surnommé ironiquement « Le plus Colombien des artistes Colombiens ».",
          visual: other3_1
        },
        {
          desc:
            "Le mouvement du muralisme mexicain, de grandes fresques sur des murs avec souvent un message politique, était important quand Fernando Botero était étudiant, avec notamment les trois grands peintres : Diego Rivera, José Clemente Orozco et David Alfaro Siqueiros… Ce mouvement et ses artistes ont énormément contribué à développer son style.",
          visual: other3_2
        },
        {
          desc:
            "Fernando Botero veut prendre le contre pied et retrouver le volume que la peinture contemporaine a complètement oublié. C'est ainsi qu'il s'est intéressé à l'histoire de l'art, au trecento et au quattrocento. « En Toscane, j'ai été marqué par Giotto qui le premier a donné l'illusion du volume dans ses fresques. C'était une vraie révolution. Il faut regarder les grands maîtres pour apprendre » a dit Fernando Botero",
          visual: other3_3
        }
      ]
    },
    {
      title: "Un portrait horrifiant 2",
      intro:
        "Francis Bacon est un peintre anglais aussi fameux que le jambon, surtout pour peindre des scènes pleines de sang, de chair, de corps déformés, qui sont ses sujets de prédilection.",
      inspired_painting: {
        author: "Francis Bacon JAMBON",
        desc: "Étude d'après le portrait du pape Innocent X par Velázquez QUEZ",
        date: 195390,
        visual: inspired4
      },
      main_painting: {
        author: "Diego VelasquezAWI",
        desc: "Portrait d'InnocenFEZG\"Et X",
        date: 165098,
        visual: main4
      },
      zooms: [
        {
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?",
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
            }
          }
        },
        {
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?",
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
            }
          }
        },
        {
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?",
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
            }
          }
        }
      ],
      other_paintings: [
        {
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?",
          visual: "https://picsum.photos/500/750?image=20"
        },
        {
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?",
          visual: "https://picsum.photos/500/750?image=21"
        },
        {
          desc:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo voluptatum labore molestiae ducimus vel ut error, eum consequuntur necessitatibus facilis quod a et quaerat harum id ipsum, distinctio accusantium?",
          visual: "https://picsum.photos/500/750?image=22"
        }
      ]
    }
  ],
  cta: "Découvrir",
  conclusion: {
    title: "Conclusion",
    content:
      "Here is the conclusion. Special thanks to my computer to make this possible. Fuck it",
    cta: "go back to paintings"
  }
};

export default data;
