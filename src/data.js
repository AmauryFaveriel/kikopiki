import main0 from './assets/imgs/paintings/0/main.jpg';
import inspired0 from './assets/imgs/paintings/0/inspired.jpg';
import other0_0 from './assets/imgs/paintings/0/others/other_0.jpg';
import other0_1 from './assets/imgs/paintings/0/others/other_1.jpg';
import other0_2 from './assets/imgs/paintings/0/others/other_2.jpg';
import other0_3 from './assets/imgs/paintings/0/others/other_3.jpg';
import other0_4 from './assets/imgs/paintings/0/others/other_4.jpg';
import other0_5 from './assets/imgs/paintings/0/others/other_5.jpg';

import main1 from './assets/imgs/paintings/1/main.jpg';
import inspired1 from './assets/imgs/paintings/1/inspired.jpg';
import other1_0 from './assets/imgs/paintings/1/others/other_0.jpg';
import other1_1 from './assets/imgs/paintings/1/others/other_1.jpg';
import other1_2 from './assets/imgs/paintings/1/others/other_2.jpg';
import other1_3 from './assets/imgs/paintings/1/others/other_3.jpg';
import other1_4 from './assets/imgs/paintings/1/others/other_4.jpg';
import other1_5 from './assets/imgs/paintings/1/others/other_5.jpg';
import other1_6 from './assets/imgs/paintings/1/others/other_6.jpg';

import main2 from './assets/imgs/paintings/2/main.jpg';
import inspired2 from './assets/imgs/paintings/2/inspired.jpg';
import other2_0 from './assets/imgs/paintings/2/others/other_0.jpg';
import other2_1 from './assets/imgs/paintings/2/others/other_1.jpg';
import other2_2 from './assets/imgs/paintings/2/others/other_2.jpg';
import other2_3 from './assets/imgs/paintings/2/others/other_3.jpg';
import other2_4 from './assets/imgs/paintings/2/others/other_4.jpg';

import main3 from './assets/imgs/paintings/3/main.jpg';
import inspired3 from './assets/imgs/paintings/3/inspired.jpg';
import other3_0 from './assets/imgs/paintings/3/others/other_0.gif';
import other3_1 from './assets/imgs/paintings/3/others/other_1.gif';
import other3_2 from './assets/imgs/paintings/3/others/other_2.jpg';
import other3_3 from './assets/imgs/paintings/3/others/other_3.jpg';
import other3_4 from './assets/imgs/paintings/3/others/other_4.jpg';
import other3_5 from './assets/imgs/paintings/3/others/other_5.jpg';

import main4 from './assets/imgs/paintings/4/main.jpg';
import inspired4 from './assets/imgs/paintings/4/inspired.jpg';
import other4_0 from './assets/imgs/paintings/4/others/other_0.jpg';
import other4_1 from './assets/imgs/paintings/4/others/other_1.jpg';
import other4_2 from './assets/imgs/paintings/4/others/other_2.jpg';
import other4_3 from './assets/imgs/paintings/4/others/other_3.jpg';
import other4_4 from './assets/imgs/paintings/4/others/other_4.jpg';
import other4_5 from './assets/imgs/paintings/4/others/other_5.jpg';

import conclusion from './assets/imgs/conclusion.jpg'

const data = {

    intro: {
      title: `Kikopiki`,
      intro_1: `Rien ne se perd, rien ne se crée tout se transforme, disait Lavoisier à propos de la matière. Paraît-il que dans l'histoire de la peinture, c'est un peu la même chose.`,
      intro_2: `Découvrez comment les grands noms du XXème siècle se sont appropriés les classiques pour transmettre un tout autre message.`,
      cta: `Choisir une oeuvre`
    },
    paintings: [
  
      {
        title: `La pietà paternelle`,
        intro: `Max Ernst a été le précurseur de toutes les techniques picturales du surréalisme. Il a ouvert la voie aux autres peintres du groupe qui exploiteront à sa suite le principe du collage alliant le rêve à la réalité.`,
        inspired_painting: {
          author: `Max Ernst`,
          desc: `Pietà ou la Révolution de la nuit`,
          date: 1923,
          visual: inspired4
        },
        main_painting: {
          author: `Tarascon`,
          desc: `La Pietà de Tarascon`,
          date: 1457,
          visual: main4
        },
        zooms: [
          {
            desc: `Dans l’oeuvre de Max Ernst, la célèbre Pietà prend la forme d’un bourgeois tenant dans ses bras un jeune homme. La Vierge Marie est remplacée par un modèle paternel, partageant tout les deux la même expression, visage baissé, la main servant de soutien.`,
            zoom: {
              main: {
                scale: 1.01,
                x: -9000,
                y: 0
              },
              inspired: {
                scale: 1.35,
                x: 450,
                y: 30
              }
            }
          },
          {
            desc: `La personne dans les bras de l’homme portant un chapeau de l’oeuvre de Max Ernst, n’est autre que lui-même, endormi. À la différence de la pietà de Tarascon où il s’agit de Jesus mort.`,
            zoom: {
              main: {
                scale: 1.4,
                x: -3000,
                y: 0
              },
              inspired: {
                  scale: 1.4,
                  x: 200,
                  y: 0
              }
            }
          }
        ],
        other_paintings: [
          {
            desc: `La silhouette de droite portant un bandeau sur la tête représente Freud, célèbre psychanalyse auquel Max Ernst porte un grand intêret. Pieta ou Revolution de la nuit représente la protestation de l’artiste par rapport à son père, Philippe Ernst dénigrant le travail de son fils jugé provocateur et responsable de la relation conflictuelle entre eux. La présence de Freud ne fait que renforcer cette idée, comme manifestation d’un conflit oedipien entre père et fils.`,
            visual: other4_0
          },
          {
            desc: `Max Ernst à apporté une grande participation au Dadaïsme, grand mouvement artistique. En effet, à la fin de la Première Guerre Mondiale, il épouse sa première femme Louise Straus, s’intalle à Cologne et fonde dans la foulé le premier groupe Dada de Cologne avec son épouse ainsi que plusieurs amis.
            Jugeant l’Allemagne peu propice a l’épanouissement des idées, décide de s’installer à Paris pour exercer son art`,
            visual: other4_1
          },
          {
            desc: `Constamment en expérimentation, il inventa une nouvelle technique d’art graphique nommé le frottage en 1925 Ernst découvrit cette technique, en observant un plancher de bois délavé. Il mit un morceau de papier sur les planches et à transférer ensuite ses textures sur la feuille avec du graphite.`,
            visual: other4_2
          },
          {
            desc: `<strong><em> « Si ce sont les plumes qui font le plumage, ce n’est pas la colle qui fait le collage. »</em></strong> a dit Max Ernst.<br><br>
              Sa fascination pour les oiseaux se retranscrit de plus en plus dans ses oeuvres, allant même crée un alter-ego qu’il nomma Loplop. Loplop fit sa première apparition dans La Femme 100 Têtes tenant un rôle de narrateur et commentateur.`,
            visual: other4_3
          },
          {
            desc: `Dans son processus de création, il n’hésite pas à reprendre les bases de tableaux d’autres artistes pour l’intégrer dans son univers, basé principalement sur le corps féminin. Comme exemple, “Tentation de Saint-Antoine”, ou il s’inspire du Jardin des délices de Jérôme Bosch, mais aussi de la Tentation d’Antoine le Grand.`,
            visual: other4_4
          },
          {
            desc: `Durant sa carrière, il rencontrera le succès dans 3 pays différents, fait rare pour un artiste. Son influence sera également notable sur de nombreuses oeuvres abstraites américaines comme exemple Jackson Pollock, Mark Rothko et Willem de Kooning pour ne citer qu’eux, mais aussi les jeunes artistes américains impressionnés par ses nouvelles méthodes (collage, frottage, grattage).`,
            visual: other4_5
          }
        ],
        nextArticle: `La peinture de Chagall est également imprégnée, de surréalisme et d'onirisme.`
      },
  
      {
        title: `Une scène macabre`,
        intro: `<strong><em>« Je suis certain que Rembrandt m’aime »</em></strong>  a dit un jour Marc Chagall.
  
              La leçon des grands maîtres de la peinture est perceptible chez Chagall, particulièrement celle de Rembrandt. Plusieurs illustrations bibliques effectuées
              par Chagall rappellent les oeuvres du grand peintre de l’Ecole hollandaise. C’est le cas de cette oeuvre le Boeuf écorché.`,
        main_painting: {
          author: `Rembrandt`,
          desc: `Le boeuf écorché`,
          date: 1655,
          visual: main1
        },
        inspired_painting: {
          author: `Marc Chagall`,
          desc: `Le boeuf écorché`,
          date: 1947,
          visual: inspired1
        },
        zooms: [
          {
            desc: `Cette oeuvre pour le moins macabre, a été inspirée à Chagall par Rembrandt. Le modèle central des deux tableaux est un boeuf éventré. Dans son tableau Chagall a reprit la représentation du boeuf comme sujet de piété, comme l'avait fait presque 300 ans auparavant son aîné, Rembrandt. En effet, le bœuf est réellement mis en croix, figure de la souffrance à laquelle chacun peut, finalement, s'identifier.`,
            zoom: {
              main: {
                scale: 1.01,
                x: -17000,
                y: 600
              },
              inspired: {
                scale: 1.01,
                x: 4500,
                y: 0
              }
            }
          },
          {
            desc: `Tout comme dans l’oeuvre de Rembrandt, Marc Chagall a peint le visage d’une femme, en arrière-plan, presque effacée, avec un regard à la fois tourné vers le cadavre ou le spectateur. `,
            zoom: {
              main: {
                scale: 2,
                x: 500,
                y: 250
              },
              inspired: {
                scale: 1.5,
                x: 900,
                y: 700
              }
            }
          }
        ],
        other_paintings: [
          {
            desc: `Originaire de Russie, Marc Chagall a souvent incorporé des éléments de sa Russie natale dans ses oeuvres. C’est le cas dans le boeuf écorché, où la scène se déroule au sein d’un village Russe par une nuit d’ hiver, sur fond de huttes empilées comme des boîtes.`,
            visual: other1_0
          },
          {
            desc: `La religion juive et le christianisme sont des thématiques souvent reprisent dans les peintures de Marc Chagall.`,
            visual: other1_1
          },
          {
            desc: `Au cours des années 30, Jésus crucifié en était venu à représenter clairement pour lui la souffrance du peuple juif. Ce sujet a de nombreuses ramifications, mais la plus importante était peut-être d'alerter les chrétiens sur les atrocités perpétrées contre les juifs par les terreurs sans précédent de l'Holocauste.`,
            visual: other1_2
          },
          {
            desc: `Quant à la religion juive très importante pour Chagall, car ce dernier était issu d’une famille de confession juive. Durant son enfance, Chagall voyait des animaux tués à la manière juive dans l’abattoir de son grand-père. L'abattage de l'animal le fascinait étrangement, comme le rituel d'un sacrifice qui avait un sens profondément caché et pour lequel il lui fallait finalement trouver un moyen d'expression.`,
            visual: other1_3
          },
          {
            desc: `Le premier atelier du peintre Russe (de 1911 à 1913) à La Ruche (lieu d’apprentissage, mais aussi de passage pour les artistes de l’époque) était proche des abattoirs de Vaugirard, et il se souvient : <br><br><strong><em>« L'aube se lève. Quelque part non loin de là, ils commencent à trancher la gorge du bétail, les vaches mugissent, et je les peins. »</em></strong><br><br> La plupart de ses œuvres réalisées à la Ruche présentent de nombreux bovins, à l’image de son huile sur toile Moi et le Village, réalisée en 1911.`,
            visual: other1_4
          },
          {
            desc: `L'emploi de la couleur chez Chagall est très personnel. Dans ses illustrations de la Bible et le Message biblique, notamment, on voit qu'une barbe peut être tour à tour violette, bleue ou verte. Il renverse les impressions chromatiques habituelles, et emploie la palette pour structurer l'espace de la toile davantage que pour traduire la réalité.`,
            visual: other1_5
          },
          {
            desc: `Chagall ne peut pas être rattaché à une école. Certains le rapprochent au courant surréaliste, puisque son travail laisse une large part à son imagination et ses rêves. Mais si en deux mots, on pouvait caractériser son œuvre, on parlerait de « chromatisme onirique ». Blaise Cendars disait de Chagall : <br><br><strong><em>« Il dort, il est éveillé, il prend une église et il peint avec une église, il prend une vache et il peint avec une vache, Avec une sardine… ».</em></strong><br><br> Dans ses oeuvres Chagall dépeint souvent des scènes irréalistes. Comme on peut le voir dans sa peinture du Boeuf écorché, un événement des plus irréalistes qui transforme l'ensemble des figures et des choses, apparemment à mi-chemin du réalisme, en un royaume visionnaire. Un Juif hassidique, arrivant du ciel, les bras tendus, armé d’un couteau ensanglanté comme un messager de la terreur.`,
            visual: other1_6
          }
        ],
        nextArticle: `À la manière d'un enfant Chagall n'utilise que des couleurs primaires. On retrouve cette naïveté chez Botero à travers ses personnages lisses er ronds.`
      },
  
      {
        title: `Tout en rondeur`,
        intro: `Fernando Botero fait partie de ses peintres contemporain qui se réapproprie des oeuvres de peintre classique. C’est le cas de cette oeuvre nommé D’après Velasquez Infante Marguerite Thérèse en bleu. En effet cette peinture s’inspire d’une oeuvre du grand maître Espagnol, Diego Velázquez, qui fût le peintre du roi Philippe IV. `,
        main_painting: {
          author: `Diego Velasquez`,
          desc: `Infante Marguerite Thérèse en bleu`,
          date: 1655,
          visual: main3
        },
        inspired_painting: {
          author: `Fernando Botero`,
          desc: `D’après Velasquez Infante Marguerite Thérèse en bleu`,
          date: 2005,
          visual: inspired3
        },
        zooms: [
          {
            desc: `Pas besoin de zoom pour voir au premier coup d’oeil la ressemblance entre ces deux tableaux. Botero a peint l’infante avec la même pose que le tableau du maître Espagnol, mais la large armature de sa robe a été le prétexte pour lui à développer une monumentalité chère et caractéristique du style de Botero.`,
            zoom: {
              main: {
                scale: 1.01,
                x: -11000,
                y: 500
              },
              inspired: {
                scale: 1.01,
                x: 10000,
                y: 0
              }
            }
          }
        ],
        other_paintings: [
          {
            desc: `Mais en y regardant de plus près, cette peinture de Botero recèle de nombreuses différences. En effet, l’oeuvre de Botero est en réalité un mélange subtile de plusieurs oeuvres de Velasquez. Véritable hommage au travail de Velasquez, que le peintre Colombien admire et s’en est inspiré à plusieurs reprises. Botero a reprit des éléments : le mouchoir et la fleur tenu par l’infante, qui sont présents dans un notre portrait de la princesse : L’Infante Marguerite-Thérèse en robe rose, également réalisé par le maître Espagnol. `,
            visual: other3_0
          },
          {
            desc: `Un autre élément a été ajouté par Botero, il s’agit du miroir. Ce dernier est issu d’un autre tableau célèbre tableau de Velazquez : Les ménines. Cet ajout du miroir dans l’oeuvre de Botero introduit un élément d’intrigue, déjà présente dans cette célèbre peinture de Velazquez. `,
            visual: other3_1
          },
          {
            desc: `Le style singulier de Botero lui a été inspiré en partie par les fresques Egytiennes, il a déclaré un jour : <br><br><strong><em>« Je peins aussi des visages impassibles, sans psychologie, car je veux donner un sentiment d'éternité, comme dans les fresques égyptiennes. »</em></strong>`,
            visual: other3_2
          },
          {
            desc: `La racine même du style de Botero, avec ses personnages volumétriques, tout en rondeur lui est venu en observant l'art précolombien. Le peintre Colombien s'est lui même surnommé ironiquement <strong><em>« Le plus Colombien des artistes Colombiens. »</em></strong>`,
            visual: other3_3 
          },
          {
            desc: `Le mouvement du muralisme mexicain, de grandes fresques sur des murs avec souvent un message politique, était important quand Fernando Botero était étudiant, avec notamment les trois grands peintres : Diego Rivera, José Clemente Orozco et David Alfaro Siqueiros… Ce mouvement et ses artistes ont énormément contribué à développer son style.`,
            visual: other3_4
          },
          {
            desc: `Fernando Botero veut prendre le contre pied et retrouver le volume que la peinture contemporaine a complètement oublié. C'est ainsi qu'il s'est intéressé à l'histoire de l'art, au trecento et au quattrocento. <br><br><strong><em>« En Toscane, j'ai été marqué par Giotto qui le premier a donné l'illusion du volume dans ses fresques. C'était une vraie révolution. Il faut regarder les grands maîtres pour apprendre »</em></strong> a dit Fernando Botero`,
            visual: other3_5
          }
        ],
        nextArticle: `Botero gonfle les corps, Bacon lui les fait fondre.`
      },
      {
        title: `Un portrait horrifiant`,
        intro: `Francis Bacon est un peintre anglais aussi fameux que le jambon, surtout pour peindre des scènes pleines de sang, de chair, de corps déformés, qui sont ses sujets de prédilection. 
              Derrière ce tableau bien effrayant au nom à rallonge, se cache une obsession. En effet notre cher Francis a étudié pendant 20 ans un portrait du pape Innocent X peint par Velázquez en 1650.`,
        main_painting: {
          author: `Diego Velasquez`,
          desc: `Portrait d'Innocent X`,
          date: 1650,
          visual: main0
        },
        inspired_painting: {
          author: `Francis Bacon`,
          desc: `Étude d'après le portrait du pape Innocent X par Velázquez`,
          date: 1953,
          visual: inspired0
        },
        zooms: [
          {
            desc: `On peut voir que le portrait est relativement semblable à l’original dans la structure générale et la posture du sujet. Mais c’est une tout autre sensation qui nous traverse face au pape hurlant de Bacon. Le rouge, couleur chaude se substitue à des couleurs froides qui évoquent la mort autant que la spiritualité.`,
            zoom: {
              main: {
                scale: 1.01,
                x: -19000,
                y: 0
              },
              inspired: {
                scale: 1.01,
                x: 13000,
                y: 0
              }
            }
          },
          {
            desc: `Le visage hurlant se devine derrière un voile blanc, la chair semble se décomposer tandis que les valeurs spirituelles et morales partent en fumée.`,
            zoom: {
              main: {
                scale: 2.0,
                x: 30,
                y: 0
              },
              inspired: {
                scale: 2.0,
                x: 440,
                y: 50
              }
            }
          },
          {
            desc: `Mi moignon mi main crispée chez Bacon, la main aggripée au bord du fauteuil est comme celle d’un détenu d’une chaise électrique. Tandis que celle du pape de Velasquez tient négligement un document paroissial. `,
            zoom: {
              main: {
                scale: 2.0,
                x: 650,
                y: 470
              },
              inspired: {
                scale: 2.0,
                x: 1000,
                y: 600
              }
            }
          }
        ],
        other_paintings: [
          {
            desc: `Chez les peintres du début du XXème siècle, il était très courant de reprendre les classiques très figuratifs pour les refaire à sa sauce. Mais pour Bacon c’est allé beaucoup plus loin, il a peind pas moins de 46 versions ! Une véritable obsession.  Parmi elles, c’est celle de 1953 qui est la plus connue et la plus semblable à l’originale.`,
            visual: other0_0
          },
          {
            desc: `
            Les sujets religieux sont très chers au peintre comme ce christ fantômatique dont les côtes se confondent avec la lumière, comme si son corps avait déjà rejoins l’au delà.`,
            visual: other0_1
          },
          {
            desc: `
            Sévère mais calme chez le pape de Velazquez, la bouche hurle et devient béante au milieu du visage décharné du pape violet. Elle peut être inspiré par le cri de l’infirmière.
            `,
            visual: other0_2
          },
          {
            desc: `
            Les traits font penser à un rideau comme celui là, qui cacherait sa vison ou notre vision
            `,
            visual: other0_3
          },
          {
            desc: `Le pape Pie XII garde des relations diplomatiques avec l’allemagne nazie. Le voile devant le pape équivaut à une oeillère.
            Le cri d’effroi étouffé par le voile, ne résonne que pour lui et ne s’étend jamais au reste du monde`,
            visual: other0_4
          },
          {
            desc: `Une deuxième hypothèse: figure d’autorité paternelle
            où le pape est le saint père. Bacon originaire d’une famille catholique d’irlande chassé par son père pour son homosexualité à 16 ans
            hurle devant la déviance sexuelle, comprend pas grand chose comme le figure le rideau`,
            visual: other0_5
          }
        ],
        nextArticle: `Dans un autre registre découvrez les déformations géométriques de Picasso.`
      },
      
      {
        title: `La penseuse`,
        intro: `En apparence, Ingres n’a rien d’un excentrique : sa peinture est claire, parfaitement maîtrisée les formes sont définies par des contours précis qui cernent les couleurs; rien d’excessif, rien qui ne dépasse. Tout l’opposée de Picasso pourrait-on penser, et pourtant c’est chez lui que l’Espagnol trouve l’une de ses principales sources d’inspirations pour la représentation des femmes.`,
        main_painting: {
          author: `Jean-Auguste Ingres`,
          desc: `Madame Moitessier`,
          date: 1856,
          visual: main2
        },
        inspired_painting: {
          author: `Pablo Picasso`,
          desc: `Portrait de Dora Maar`,
          date: 1937,
          visual: inspired2
        },
        zooms: [
          {
            desc: `Sous l’aspect très contenu et classique de sa peinture Ingres n’hésitait pas à déformer les corps de manière subtile certes, mais qui lui permettait de construire l’espace d’un tableau simplement en variant la position des corps, sans l’aide d’un décor ou de la perspective. Une particularité que Picasso, spécialiste de la décomposition des silhouettes savait apprécier. `,
            zoom: {
              main: {
                scale: 1.1,
                x: -1500,
                y: 400
              },
              inspired: {
                scale: 1.01,
                x: 8000,
                y: 0
              }
            }
          },
          {
            desc: `Similitude de la pose, les deux femmes se tiennent assises, le visage placé de 3/4 et soutenu par la main gauche posée sur la joue, les doigts écartés. Le corps et le décor s’entremêlent.`,
            zoom: {
              main: {
                scale: 1.05,
                x: -3000,
                y: 300
              },
              inspired: {
                scale: 1.1,
                x: 1200,
                y: 0
              }
            }
          },
          {
            desc: `Picasso a repris et joué avec la couleur rose déjà présente dans l’oeuvre d’Ingres, afin de donner du volume au visage de son modèle et parvenir à faire ressortir ses joues comme des pêches.`,
            zoom: {
              main: {
                scale: 2.2,
                x: 140,
                y: 100
              },
              inspired: {
                scale: 1.6,
                x: 480,
                y: 0
              }
            }
          },
          {
            desc: `En y regardant de plus près, on remarque que la morphologie des deux modèles est similaire. En effet, la forme de leurs bustes est triangulaire, dans l’oeuvre de Picasso cet attribut physique est exagéré. Le peintre Espagnol a également intégré le noeud de la robe.`,
            zoom: {
              main: {
                scale: 1.4,
                x: -70,
                y: 500
              },
              inspired: {
                scale: 1.2,
                x: 1100,
                y: 700
              }
            }
          },
          {
            desc: `Tout comme Ingres, Picasso a également représenté son sujet de face et de profil. Ingres a utilisé la convention traditionnelle du miroir pour représenter son modèle de face et de profil. Tandis que le peintre Espagnol a eu recours à une synthèse graphique, une fusion picturale développée au travers de ses expériences cubistes, afin de capturer tous les aspects du modèle.`,
            zoom: {
              main: {
                scale: 1.05,
                x: 100,
                y: 90
              },
              inspired: {
                scale: 1.2,
                x: 760,
                y: 0
              }
            }
          }
        ],
        other_paintings: [
          {
            desc: `<strong><em>« Qu’est-ce au fond qu’un peintre ? C’est un collectionneur qui veut se constituer une collection en faisant lui-même les tableaux qu’il aime chez les autres. C’est comme cela que je commence et puis cela devient autre chose. »</em></strong> Pablo Picasso`,
            visual: other2_0
          },
          {
            desc: `Tout au long de sa carrière, Picasso s’est inspiré des arts dit primitif notamment d’Africain et Ibérique, pour créer ses oeuvres. En effet, Pablo Picasso est allé chercher à travers ces arts, une simplification des formes qui correspond à l'idée d'une présence et d'une humanité générique. On retrouve dans ces arts des fondamentaux rapidement adoptés par l'artiste : la schématisation, la verticalité, l'assemblage de formes, les questions du regard et du sexe, très importantes pour lui…`,
            visual: other2_1
          },
          {
            desc: `<strong><em>« Si je connais Cézanne ! Il était mon seul et unique maître ! Vous pensez bien que j’ai regardé ses tableaux… J’ai passé des années à les étudier… »</em></strong> disait Picasso à Brassaï.<br><br> Cézanne travaillait sur l’aplatissement de l’espace, la simplification et transformation des formes naturelles en formes géométriques essentielles : <strong><em>« Dans la nature, tout est sphères, cônes et cylindres »</em></strong>. C'est donc la forme qui vient en premier et non le sujet ou la couleur.`,
            visual: other2_2
          },
          {
            desc: `Pablo Picasso, génie oblige, aura 8 liaisons féminines connues. Les femmes et en particulier les muses ont été d’importantes sources d’inspirations pour Picasso.`,
            visual: other2_3
          },
          {
            desc: `En écoutant Maurice Princet et en étudiant le travail de Raymond Poincaré, tout deux mathématiciens. Picasso réalise que la géométrie offre un nouveau langage. C'est par le biais de cette réalisation que Pablo Picasso a développé son propre style et est devenu avec Georges Braque, le co-fondateur d'un nouveau mouvement artistique : le cubisme, à la fin des années 30. <br><br><strong><em>« J'ai assisté à la naissance du cubisme, à sa croissance, à son déclin. Picasso en fut l'accoucheur, Guillaume Apollinaire la sage-femme, Princet le parrain »</em></strong>, explique Maurice Vlaminck.`,
            visual: other2_4
          }
        ],
        nextArticle: `Si vous avez consulté tous les tableaux, vous pourrez en apprendre un peu plus sur les possibilités du numérique dans l'art aujourd'hui, en cliquant juste à droite.`
      }
    ],
    cta: `Découvrir`,
    conclusion: {
      title: `Aller plus loin`,
      content: [
        {
          title: `Les algorithmes dans l’univers de l’art`,
          content: `Aujourd’hui la technologie rentre de plus en plus dans l’univers de l’art. En mêlant la connaissance, le savoir faire humain et la puissance des ordinateurs; des chercheurs ont enseigné à un ordinateur, en le dotant d’un algorithme qui lui permet d’établir automatiquement des liens entre différents tableaux. Après avoir analysé les 1700 tableaux, l’algorithme a non seulement retrouvé des influences que les historiens de l’art connaissaient déjà, mais en a révélé de nouvelles.`,
          visual: conclusion
        },
        {
          title: `X degrees of separation by Google`,
          content: `Google a récemment mis au point au sein de son Google lab experiment, un outil qui se base sur le même algorithme qui est utilisé derrière la recherche d’image de Google. Ensuite, toutes les formes importantes des deux images sont repérées et chaque image est connectée à 15 images voisines les plus proches (sur la forme, la couleur, le type, etc.). Une fois ces 15 images trouvées, l’algorithme raffine les images et crée de la même façon le chemin le plus logique entre les deux images.`,
          visual: conclusion
        }
      ]
    }
  };
  
  export default data;
  