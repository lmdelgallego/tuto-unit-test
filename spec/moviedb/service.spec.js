describe('tmdb service', function () {

  var baseUrl = 'http://api.themoviedb.org/3/';
  var apiKey = '?api_key=386d9bc2541c487c3ef4666ee5449ab2&';

  var movieData = {"page":1,"total_results":117,"total_pages":6,"results":[{"vote_count":6767,"id":11,"video":false,"vote_average":8.1,"title":"Star Wars","popularity":39.320918,"poster_path":"\/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg","original_language":"en","original_title":"Star Wars","genre_ids":[12,28,878],"backdrop_path":"\/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg","adult":false,"overview":"Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.","release_date":"1977-05-25"},{"vote_count":7965,"id":140607,"video":false,"vote_average":7.5,"title":"Star Wars: The Force Awakens","popularity":37.340089,"poster_path":"\/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg","original_language":"en","original_title":"Star Wars: The Force Awakens","genre_ids":[28,12,878,14],"backdrop_path":"\/c2Ax8Rox5g6CneChwy1gmu4UbSb.jpg","adult":false,"overview":"Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.","release_date":"2015-12-15"},{"vote_count":429,"id":12180,"video":false,"vote_average":5.8,"title":"Star Wars: The Clone Wars","popularity":11.139046,"poster_path":"\/xd6yhmtS6mEURZLwUDT5raEMbf.jpg","original_language":"en","original_title":"Star Wars: The Clone Wars","genre_ids":[53,16,28,878,12,14],"backdrop_path":"\/b3w2eXhAZvk79dMtIBTEBf8FXjc.jpg","adult":false,"overview":"Set between Episode II and III the Clone Wars is the first computer animated Star Wars film. Anakin and Obi Wan must find out who kidnapped Jabba the Hutts son and return him safely. The Seperatists will try anything to stop them and ruin any chance of a diplomatic agreement between the Hutt's and the Republic.","release_date":"2008-08-05"},{"vote_count":0,"id":181808,"video":false,"vote_average":0,"title":"Star Wars: The Last Jedi","popularity":21.639707,"poster_path":"\/47zTsc9gkruDmDssiCqyZTxdOla.jpg","original_language":"en","original_title":"Star Wars: The Last Jedi","genre_ids":[28,12,14,878],"backdrop_path":"\/c4Dw37VZjBmObmJw9bmt8IDwMZH.jpg","adult":false,"overview":"Having taken her first steps into a larger world in \"Star Wars: The Force Awakens\", Rey continues her epic journey with Finn, Poe and Luke Skywalker in the next chapter of the Star Wars saga.","release_date":"2017-12-13"},{"vote_count":5091,"id":330459,"video":false,"vote_average":7.4,"title":"Rogue One: A Star Wars Story","popularity":32.023122,"poster_path":"\/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg","original_language":"en","original_title":"Rogue One: A Star Wars Story","genre_ids":[28,12,878],"backdrop_path":"\/tZjVVIYXACV4IIIhXeIM59ytqwS.jpg","adult":false,"overview":"A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.","release_date":"2016-12-14"},{"vote_count":57,"id":42979,"video":true,"vote_average":6.9,"title":"Robot Chicken: Star Wars","popularity":9.34361,"poster_path":"\/kWKspQ7YiQ82xXM1jVbIbqh5OyV.jpg","original_language":"en","original_title":"Robot Chicken: Star Wars","genre_ids":[16,35,878],"backdrop_path":"\/gZxY7VDOI48gjhnDJK1E6n9uHWk.jpg","adult":false,"overview":"Fans of Adult Swim's \"Robot Chicken\" and the Star Wars movie franchise won't want to miss this collection of 30 sketches. This hilarious compilation features an array of skits -- such as \"Darth Vader's Collect Call\" and \"Inside the AT-AT\" -- as well as the incredible voice talents of Hulk Hogan, Malcolm McDowell, Conan O'Brien and even the original Luke Skywalker himself, Mark Hamill.","release_date":"2007-07-17"},{"vote_count":21,"id":70608,"video":false,"vote_average":6.1,"title":"Lego Star Wars: The Padawan Menace","popularity":10.094218,"poster_path":"\/cIKQu7UlXAv94guz14Zij0Xm0tx.jpg","original_language":"en","original_title":"Lego Star Wars: The Padawan Menace","genre_ids":[16,10751,878],"backdrop_path":"\/hYJ1gD7bHtQsNKV8UVTsX9tD1EJ.jpg","adult":false,"overview":"A routine Jedi Academy field trip is turned into a rip-roaring comic adventure in LEGO Star Wars: The Padawan Menace. Tour guide Master Yoda leads a group of rambunctious Jedi Younglings through Senate chambers when he senses a disturbance in the Force. Summoned to help save the Republic, he discovers that one of the Younglings secretly boarded his ship...and has a taste for adventure! Meanwhile, C-3PO and R2-D2 are put in charge of the boisterous group and find themselves in over their heads. As the evil Sith prepare to wreak havoc, it's up to Yoda and the Droids to ensure that their young charges aren't torn to bricks!","release_date":"2011-07-22"},{"vote_count":4066,"id":1894,"video":false,"vote_average":6.4,"title":"Star Wars: Episode II - Attack of the Clones","popularity":15.942313,"poster_path":"\/2vcNFtrZXNwIcBgH5e2xXCmVR8t.jpg","original_language":"en","original_title":"Star Wars: Episode II - Attack of the Clones","genre_ids":[12,28,878],"backdrop_path":"\/560F7BPaxRy8BsOfVU6cW4ivM46.jpg","adult":false,"overview":"Ten years after the invasion of Naboo, the galaxy is on the brink of civil war. Under the leadership of a renegade Jedi named Count Dooku, thousands of solar systems threaten to break away from the Galactic Republic. When an assassination attempt is made on Senator Padmé Amidala, the former Queen of Naboo, twenty-year-old Jedi apprentice Anakin Skywalker is assigned to protect her. In the course of his mission, Anakin discovers his love for Padmé as well as his own darker side. Soon, Anakin, Padmé, and Obi-Wan Kenobi are drawn into the heart of the Separatist movement and the beginning of the Clone Wars.","release_date":"2002-05-15"},{"vote_count":4193,"id":1895,"video":false,"vote_average":7.1,"title":"Star Wars: Episode III - Revenge of the Sith","popularity":15.448158,"poster_path":"\/tgr5Pdy7ehZYBqBkN2K7Q02xgOb.jpg","original_language":"en","original_title":"Star Wars: Episode III - Revenge of the Sith","genre_ids":[878,12,28],"backdrop_path":"\/wUYTfFbfPiZC6Lcyt1nonr69ZmK.jpg","adult":false,"overview":"Years after the onset of the Clone Wars, the noble Jedi Knights lead a massive clone army into a galaxy-wide battle against the Separatists. When the sinister Sith unveil a thousand-year-old plot to rule the galaxy, the Republic crumbles and from its ashes rises the evil Galactic Empire. Jedi hero Anakin Skywalker is seduced by the dark side of the Force to become the Emperor's new apprentice – Darth Vader. The Jedi are decimated, as Obi-Wan Kenobi and Jedi Master Yoda are forced into hiding. The only hope for the galaxy are Anakin's own offspring – the twin children born in secrecy who will grow up to become heroes.","release_date":"2005-05-17"},{"vote_count":4515,"id":1893,"video":false,"vote_average":6.4,"title":"Star Wars: Episode I - The Phantom Menace","popularity":13.735299,"poster_path":"\/n8V09dDc02KsSN6Q4hC2BX6hN8X.jpg","original_language":"en","original_title":"Star Wars: Episode I - The Phantom Menace","genre_ids":[12,28,878],"backdrop_path":"\/wdp4unWJWY9hGKN1tM56HeSt6PZ.jpg","adult":false,"overview":"Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.","release_date":"1999-05-19"},{"vote_count":26,"id":181812,"video":false,"vote_average":0,"title":"Star Wars: Episode IX","popularity":4.427393,"poster_path":"\/yVYTFvIiKyr6vsrPw3o5C6t2eoL.jpg","original_language":"en","original_title":"Star Wars: Episode IX","genre_ids":[28,12,878],"backdrop_path":"\/i0NGCiMxL4NIVk2hhjtVgnNYZ3a.jpg","adult":false,"overview":"","release_date":"2019-12-18"},{"vote_count":80,"id":74849,"video":false,"vote_average":3.2,"title":"The Star Wars Holiday Special","popularity":5.460096,"poster_path":"\/sNxgvnswaahOA3mdkjcuYYpLi7i.jpg","original_language":"en","original_title":"The Star Wars Holiday Special","genre_ids":[12,35,10751,878,10770],"backdrop_path":"\/ie6u0zegHcVJEtHSpYn0KgEogrD.jpg","adult":false,"overview":"Luke Skywalker and Han Solo battle evil Imperial forces to help Chewbacca reach his imperiled family on the Wookiee planet - in time for Life Day, their most important day of the year!","release_date":"1978-12-01"},{"vote_count":29,"id":42982,"video":false,"vote_average":7.3,"title":"Robot Chicken: Star Wars Episode II","popularity":7.994062,"poster_path":"\/kTCaL5VFwQr11P8dZpb0yzk4oQy.jpg","original_language":"en","original_title":"Robot Chicken: Star Wars Episode II","genre_ids":[35,878],"backdrop_path":"\/qrdLxo18H7x3tr7ewpSz5A3VajH.jpg","adult":false,"overview":"Seth Green and Matthew Senreich serve up more hilarious Star Wars-inspired satire in this second compilation of sketches featuring the zany stop-motion animation of Adult Swim's \"Robot Chicken.\" Gary the stormtrooper deals with irascible boss Darth Vader on Take Your Daughter to Work Day, while Anakin babysits a certain up-and-coming Jedi. Carrie Fisher, Billy Dee Williams, Conan O'Brien and other stars provide voices.","release_date":"2008-11-16"},{"vote_count":34,"id":332479,"video":false,"vote_average":7.8,"title":"Star Wars: TIE Fighter","popularity":3.01406,"poster_path":"\/jwUexLOEBMFMbBoKzK4AT7hQYDw.jpg","original_language":"en","original_title":"Star Wars: TIE Fighter","genre_ids":[878,28,16],"backdrop_path":"\/eNSyTprwxXrXs5amshnz2R2GKod.jpg","adult":false,"overview":"Paul “OtaKing” Johnson drops a real treat in the form of this “Star Wars: TIE Fighter” animated short. Complete with appropriately radical electric guitar solos and impressive attention to detail, “TIE Fighter” casts the forces of the Galactic Empire not in the role of disposable cannon fodder seen in the Star Wars films, but as near-suicidally reckless angels of death.  Johnson animated this 7-minute short over the course of “four years’ worth of weekends,” and his love and attention-to-detail shows.","release_date":"2015-03-24"},{"vote_count":5987,"id":1891,"video":false,"vote_average":8.2,"title":"The Empire Strikes Back","popularity":22.111846,"poster_path":"\/6u1fYtxG5eqjhtCPDx04pJphQRW.jpg","original_language":"en","original_title":"The Empire Strikes Back","genre_ids":[12,28,878],"backdrop_path":"\/amYkOxCwHiVTFKendcIW0rSrRlU.jpg","adult":false,"overview":"The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.","release_date":"1980-05-17"},{"vote_count":22,"id":76180,"video":false,"vote_average":7.1,"title":"Empire of Dreams: The Story of the Star Wars Trilogy","popularity":6.89842,"poster_path":"\/nvYb5G5p94dERKNrALKFNSdHS4O.jpg","original_language":"en","original_title":"Empire of Dreams: The Story of the Star Wars Trilogy","genre_ids":[99],"backdrop_path":"\/klGSFk41qpDoHxOWW4r1hYdpFQn.jpg","adult":false,"overview":"Empire of Dreams: The Story of the Star Wars Trilogy is a 2004 documentary film directed by Kevin Burns and narrated by Robert Clotworthy. It documents the making of the original Star Wars trilogy.","release_date":"2004-09-12"},{"vote_count":16,"id":80829,"video":false,"vote_average":4.6,"title":"Star Wars: Revelations","popularity":2.726656,"poster_path":"\/7ocWi5hcPOzqyseLjOpeZR3TIfC.jpg","original_language":"en","original_title":"Star Wars: Revelations","genre_ids":[878,14],"backdrop_path":"\/cmImr7dgEKq1li9ux9hfdaaif5J.jpg","adult":false,"overview":"Seers once shaped the path of the Jedi Order. But their visions grew unreliable and the Jedi came to distrust those with the ability. Seers hid their visions or left the Order forever  In the wake of the temple's destruction, a power struggle has emerged between Darth Vader, the dark Lord of the Sith, and Zhanna, the Emperor's Hand. Each seeks to eliminate the last of the Jedi and gain The Emperor's favor.  Caught between them is one woman who cannot deny the truth of her visions as all race to possess an ancient 'Jedi secret…","release_date":"2005-04-16"},{"vote_count":27,"id":333355,"video":true,"vote_average":8,"title":"Star Wars: Clone Wars: Volume 1","popularity":2.723835,"poster_path":"\/2Bc0Ust8YlcJy6tSwiXTLu66xRa.jpg","original_language":"en","original_title":"Star Wars: Clone Wars (Volume 1)","genre_ids":[28,12,16,14,878],"backdrop_path":"\/jwAVVivirH1vCceiTakFdLqiL9o.jpg","adult":false,"overview":"The Saga continues with the Emmy-winning \"Star Wars: Clone Wars.\" This animated micro-series, directed by Genndy Tartakovsky, captures George Lucas' vision in a dynamic animated style that is a visual delight for all ages.  \"Star Wars: Clone Wars\" Volume 1 reveals the epic adventures that bridge the story arc between \"Star Wars: Episode II: Attack of the Clones\" and \"Star Wars: Episode III: Revenge of the Sith.\" Follow the valiant Jedi Knights and the Brave soldiers of the Republic's clone army as they battle against the droid forces of the Separatists, led by the evil Sith Lord, Count Dooku. Witness the battles that made galactic heroes out of Anakin Skywalker and Obi-Wan Kenobi, and along the way get a first look at the new menace from Episode III, General Grevious.  This is a must-have for any \"Star Wars\" collection.","release_date":"2005-03-21"},{"vote_count":0,"id":479310,"video":false,"vote_average":0,"title":"Star Wars Rebels: Heroes of Mandalore","popularity":5.093709,"poster_path":"\/jNyRTohZOID3SYkjT7b3uvEUCyP.jpg","original_language":"en","original_title":"Star Wars Rebels: Heroes of Mandalore","genre_ids":[28,16,878,14],"backdrop_path":null,"adult":false,"overview":"Sabine leads Ezra, Kanan and an army of her fellow Mandalorians back to her home world to rescue her father from the clutches of the Empire. When she discovers that the Empire has resurrected a devastating weapon she created and plans to use it against her people, she must decide whether to destroy it or use it herself.","release_date":"2017-10-16"},{"vote_count":2,"id":348350,"video":false,"vote_average":0,"title":"Han Solo: A Star Wars Story","popularity":3.355286,"poster_path":"\/ddgxgzWsRKz6PrLRFcf4Xlcb4C4.jpg","original_language":"en","original_title":"Han Solo: A Star Wars Story","genre_ids":[28,12,10751,878],"backdrop_path":"\/AW6R9QRrKZHQYcA7E5y3Q4u0z9.jpg","adult":false,"overview":"The story is centered on a young Han Solo, the roguish smuggler who later meets Obi-Wan Kenobi and Luke Skywalker in the Mos Eisley Cantina.","release_date":"2018-05-23"}]}
  var movieDataById = {
    "adult": false,
    "backdrop_path": "/ezXodpP429qK0Av89pVNlaXWJkQ.jpg",
    "belongs_to_collection": {
      "id": 403374,
      "name": "Jack Reacher Collection",
      "poster_path": "/7baSUtFKi8PQ9SLo6ECYBfAW2K8.jpg",
      "backdrop_path": "/3FHrAeYMogXd6K1e5tUzQAiS7GE.jpg"
    },
    "budget": 60000000,
    "genres": [{
      "id": 80,
      "name": "Crime"
    }, {
      "id": 18,
      "name": "Drama"
    }, {
      "id": 53,
      "name": "Thriller"
    }],
    "homepage": "http://www.jackreachermovie.com/",
    "id": 75780,
    "imdb_id": "tt0790724",
    "original_language": "en",
    "original_title": "Jack Reacher",
    "overview": "In an innocent heartland city, five are shot dead by an expert sniper. The police quickly identify and arrest the culprit, and build a slam-dunk case. But the accused man claims he's innocent and says \"Get Jack Reacher.\" Reacher himself sees the news report and turns up in the city. The defense is immensely relieved, but Reacher has come to bury the guy. Shocked at the accused's request, Reacher sets out to confirm for himself the absolute certainty of the man's guilt, but comes up with more than he bargained for.",
    "popularity": 19.619252,
    "poster_path": "/38bmEXmuJuInLs9dwfgOGCHmZ7l.jpg",
    "production_companies": [{
      "name": "Paramount Pictures",
      "id": 4
    }, {
      "name": "Mutual Film Company",
      "id": 762
    }, {
      "name": "Skydance Productions",
      "id": 6277
    }, {
      "name": "TC Productions",
      "id": 21777
    }],
    "production_countries": [{
      "iso_3166_1": "US",
      "name": "United States of America"
    }],
    "release_date": "2012-12-20",
    "revenue": 218340595,
    "runtime": 130,
    "spoken_languages": [{
      "iso_639_1": "en",
      "name": "English"
    }],
    "status": "Released",
    "tagline": "The Law Has Limits. He Does Not.",
    "title": "Jack Reacher",
    "video": false,
    "vote_average": 6.3,
    "vote_count": 3038
  };
  var tmdbApi = {};
  var $httpBackend;
  var Restangular;
  beforeEach(module('tmdb'));
  beforeEach(inject(function (_tmdbApi_, _$httpBackend_,_Restangular_) {
    tmdbApi = _tmdbApi_;
    $httpBackend = _$httpBackend_;
    Restangular = _Restangular_;
  }));

  it('should return search movie data', function () {
    var response;

    $httpBackend.when('GET', baseUrl + 'search/movie' + apiKey + "query="+ encodeURIComponent('Star Wars'))
      .respond(200, movieData);

    tmdbApi.search('Star Wars')
      .then(function (resolve) {
        // console.log(angular.mock.dump(resolve));
        response = resolve;
      });

    $httpBackend.flush();

    expect(response).toEqual(movieData)
  });

  it('should handle error', function () {
    var response;

    $httpBackend.when('GET', baseUrl + 'movie/75780/' + apiKey)
      .respond(500);

    tmdbApi.find(75780)
      .then(function (resolve) {
        response = resolve;
      })
      .catch(function (error) {  
        response = "Error!";
      });

    $httpBackend.flush();

    expect(response).toEqual("Error!");
  });

  it('should return movie data by id', function () {
    var response;

    $httpBackend.when('GET', baseUrl + 'movie/75780/' + apiKey)
      .respond(200, movieDataById);

    tmdbApi.find(75780)
      .then(function (resolve) {
        response = resolve;
      });

    $httpBackend.flush();

    expect(response).toEqual(movieDataById);
  });
})