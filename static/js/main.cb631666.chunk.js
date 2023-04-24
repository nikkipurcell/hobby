(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(7),r=t(3),s=t(1),l=(t(4),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("a",{className:"logo",href:"/hobby"},"hobby"),i.a.createElement("a",{href:"#main-menu",id:"main-menu-toggle",className:"menu-toggle","aria-label":"Open main menu"},i.a.createElement("span",{className:"sr-only"},"Open main menu"),i.a.createElement("span",{className:"fa fa-bars"})),i.a.createElement("nav",{id:"main-menu",className:"main-menu","aria-label":"Main menu"},i.a.createElement("a",{href:"#main-menu-toggle",id:"main-menu-close",className:"menu-close","aria-label":"Close main menu"},i.a.createElement("span",{className:"sr-only"},"Close main menu"),i.a.createElement("span",{className:"fa fa-close","aria-hidden":"true"})),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(r.b,{to:"/category/past"},"Past")),i.a.createElement("li",null,i.a.createElement(r.b,{to:"/category/present"},"Present")),i.a.createElement("li",null,i.a.createElement(r.b,{to:"/category/future"},"Future")),i.a.createElement("li",null,i.a.createElement(r.b,{to:"/category/ideas"},"More")))))}),c=function(){return i.a.createElement("header",{className:"header"},i.a.createElement(l,null))},h=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,null),i.a.createElement("main",null,i.a.createElement("h1",null,"hobby ",i.a.createElement("span",{className:"pronunciation"},"[hob-ee]")),i.a.createElement("h3",{className:"pronoun"},"noun, plural hob\xb7bies."),i.a.createElement(r.b,{to:"/category/past",className:"btn-primary"},"Past Hobbies"),i.a.createElement(r.b,{to:"/category/present",className:"btn-primary"},"Present Hobbies"),i.a.createElement(r.b,{to:"/category/future",className:"btn-primary"},"Future Hobbies"),i.a.createElement("section",{className:"explanation"},i.a.createElement("h2",null,"So what is the point of this site? "),i.a.createElement("p",null,"It's just a list of all my hobbies. This helps me remember what I did in the past, what I'm into now, and what I might want to do in the future. The world is interesting. Routine gets boring. Start a new hobby and you should be able to find something fun to focus on for awhile.")),i.a.createElement("div",null,i.a.createElement("p",null,"Looking for more hobby ideas?"),i.a.createElement(r.b,{to:"/category/ideas",className:"btn-primary"},"Hobby Ideas"))))},u=t(5),d=function(e){var a=e.name,t=e.src;return i.a.createElement("li",null,i.a.createElement(r.b,{to:"/hobbies/".concat(t)},i.a.createElement("img",{src:"".concat(window.location.origin,"/hobby/images/").concat(t,".jpg"),alt:a})))},g=function(e){var a=e.categoryData;return i.a.createElement("ul",{className:"hobbies-list"},a.map(function(e){return i.a.createElement(d,{key:e.id,name:e.name,src:e.src})}))},m=function(e){var a=e.allHobbies,t=Object(n.useState)([]),o=Object(u.a)(t,2),r=o[0],l=o[1],h=Object(n.useState)(""),d=Object(u.a)(h,2),m=d[0],y=d[1],p=Object(s.f)();return Object(n.useEffect)(function(){l(a)},[]),Object(n.useEffect)(function(){var e=p.pathname.split("/").pop();y(e)},[p]),Object(n.useEffect)(function(){var e=a.filter(function(e){return e.category===m});l(e)},[m]),i.a.createElement("div",{className:"categories-page"},i.a.createElement(c,null),i.a.createElement("main",null,i.a.createElement("h1",{className:"category-name"},m," Hobbies"),i.a.createElement("p",null,"Click on a hobby to read more."),i.a.createElement(g,{categoryData:r})))},y=function(e){var a=e.text,t=e.onClick;return i.a.createElement("button",{className:"btn-primary",onClick:t},a)},p=function(e){var a=e.src,t=e.name,n=e.category,o=e.description,r="/images/".concat(a,".jpg");return i.a.createElement("div",{className:"hobby-detail"},i.a.createElement("figure",null,i.a.createElement("img",{src:r,alt:t})),i.a.createElement("p",{className:"category"},n," hobby"),i.a.createElement("h1",null,t),i.a.createElement("p",{className:"description"},o))},b=[{id:1,name:"Canoeing",category:"future",description:"Paddling lazily across the water is one of man\u2019s great joys. Whether with a friend, or just enjoying nature on a solo outing, there are few better recreational activities. Paddling takes a certain level of skill to deftly captain a canoe or kayak. You can start by renting at a local rec shop, and if you enjoy it, buy yourself a vessel. When you get really into it, you can move beyond the casual paddle around the lake, and take multi-day trips on great American waterways.",src:"canoeing"},{id:2,name:"Skateboarding",category:"past",description:"Skateboarding is one of the most exciting and creative action sports. Not only is it a recreational activity but also a form of art. It is fun, exhilarating and can be very beneficial in many ways. It helps build character, maintain ones health, and can give you that feeling of being free.",src:"skateboarding"},{id:3,name:"Woodworking",category:"present",description:"Much like masonry, woodworking relies on a developed skill for seeing underlying patterns of stress or growth within the medium. Because wood has greater plasticity and is more easily procured than blocks of stone, you might enjoy this particular hobby more, while still gaining the valuable skill of seeing deeply into the nature of things.",src:"woodworking"},{id:4,name:"Martial Arts",category:"past",description:"There are myriad benefits to learning a martial art: gaining self-defense skills, building your discipline and focus, increasing your health, connecting with a manly tradition, and giving the warrior side of yourself an outlet.",src:"martial-arts"},{id:5,name:"Rock Painting",category:"ideas",description:"Spending time on creative activities like rock painting will boost your mood, increasing joy, interest, and alertness and reducing negative moods such as anger, anxiety or fear.",src:"rock-painting"},{id:6,name:"Motorcycling",category:"past",description:'Whether riding cross-country or tinkering in the garage, plenty of people enjoy being a motorcyclist. \u201cIn a car you\u2019re always in a compartment, and because you\u2019re used to it you don\u2019t realize that through that car window everything you see is just more TV. You\u2019re a passive observer and it is all moving by you boringly in a frame. "On a cycle the frame is gone. You\u2019re completely in contact with it all. You\u2019re in the scene, not just watching it anymore, and the sense of presence is overwhelming.\u201d \u2013 Robert Pirsig, Zen and the Art of Motorcycle Maintenance',src:"motorcycling"},{id:7,name:"Scuba Diving",category:"past",description:"Scuba diving is a unique hobby in that you\u2019re required to take classes and become certified before being able to participate. You\u2019ll become an amateur historian and biologist all in one by joining schools of fish and ancient shipwrecks on diving adventures.",src:"scuba-diving"},{id:8,name:"Cooking",category:"future",description:"The benefits of knowing your way around a kitchen are legion: it gives you independence, it saves you money, and it helps you stay healthy.",src:"cooking"},{id:9,name:"Blogging",category:"past",description:"Blogging offers its own interesting twist on the timeless activity of writing. A blog can be an outlet for sharing something you\u2019re passionate and knowledgeable about with other people. You can meet people from all over the world who share your interest, and you can start great discussions and online friendships in that way. Or you can use your blog as your personal journal \u2014 a permanent treasure trove of musings and photographs that you can look back on in the years to come.",src:"blogging"},{id:10,name:"Adventure Racing",category:"past",description:"Obstacle races grew out of the basic training courses of the world\u2019s militaries. Running for miles, climbing over walls, and crawling under barbed wire will call upon your strength, cardio fitness, and agility, and test you both physically and mentally.",src:"adventure-racing"},{id:11,name:"Snowboarding",category:"past",description:"Snowboarding is an exciting, thrilling, fast paced action hobby. You can either speed down the slopes for that high adrenalin rush, or just enjoy a leisurely ride to relax you!",src:"snowboarding"},{id:12,name:"Traditional Sports",category:"past",description:"Physical activity keeps you healthy and in shape, staves off depression, and soothes your stress. Team sports allow you and others to tap into the competitive spirit.",src:"traditional-sports"},{id:13,name:"Magic",category:"past",description:"This is the art of human nature, of misdirection coupled with delight. Magic is a wonderful hobby that makes for great icebreaking tactics in new social situations, and also teaches you to see what others might miss or hope that you will miss.",src:"magic"},{id:14,name:"Sailing",category:"past",description:"Taking to the seas on your own volition is something that many people have dreamed about. Sailing involves some of the most ancient disciplines: weather forecasting, navigating, rope skills, etc. You harken back to crusty, bearded men of yore fighting rough seas and angry whales, even if just puttering around the calm waters of a small lake. It\u2019s a literal breath of fresh air, and provides both physical and mental exercise.",src:"sailing"},{id:15,name:"Mountain Biking",category:"past",description:"Whether it\u2019s on the trail or in the bike lane, cycling is a fantastic way to see the world through which you move in clearer detail than driving affords. As well, you\u2019ll improve your health and your ability to assess upcoming obstacles.",src:"mountain-biking"},{id:16,name:"Bodybuilding",category:"present",description:"This is the art of the self. As well as enhancing your physical health and appearance, you\u2019ll give an enormous boost to your self-esteem, because bodybuilding goes beyond lifting weights. It incorporates nutrition, concepts of balance and proportion, planning and pacing yourself, and goal setting. Whether you go for the buff look or not, this is a worthy hobby for any man, because you\u2019ll stand straighter and go after what you really want in life with greater efficacy.",src:"bodybuilding"},{id:17,name:"Photography",category:"present",description:"By learning this skill, you\u2019ll hone your eye for composition of elements, and notice the surprising, the striking, and the exquisite faces of the world wherever you go.",src:"photography"},{id:18,name:"Gardening",category:"present",description:"This element of outdoor design will sharpen your planning skills and your understanding of nested interrelated systems. Not only do shapes work together, but also water and earth features, species of plants, and symbiotic animal species working within the microenvironment that you\u2019re landscaping. Marcel Proust said once, \u201cLet us be grateful for the people who make us happy, for they are the charming gardeners of our soul.\u201d Gardening actually improves your mental and physical health \u2014 beneficial bacteria in the soil are inhaled that actually boost your mood! As well, when you garden, you are nurturing a living thing, watching it grow and become. It is one of the most satisfying and simple hobbies on this entire list.",src:"gardening"},{id:19,name:"Halloween Props",category:"present",description:"Like other DIY hobbies, building Halloween props gets your creative juices flowing. It's fun to transform your space into a spooky world. By building your own props, you will be saving money while learning many new skills.",src:"halloween-props"},{id:20,name:"Guitar",category:"present",description:"Knowing how to play the guitar is a skill that will provide you and those around you with years of enjoyment.",src:"guitar"},{id:21,name:"Fishing",category:"present",description:"This is both a sport and a great way to be out of doors. Fishing involves an understanding of your intended prey, and how to lure and draw them in. This incorporates concepts of ecology, physics, and animal psychology. More than that, it gives you time to simply be still, which is a skill that many Westerners have all but lost.",src:"fishing"},{id:22,name:"Reading",category:"present",description:"I cannot stress enough how vital it is to your livelihood to be well-read. Push beyond magazine articles and blog posts, rediscovering the novel and the serious non-fiction literature. This is a hobby that requires nothing but time. Libraries still exist and will let you borrow books for free, so get there and get on it. It will make you more knowledgeable, more compassionate, more refined, and more awesome on every level.",src:"reading"},{id:23,name:"Coding",category:"present",description:"Many people have made this skill their living, but there are millions more who have day jobs and pound out code in their spare time just for kicks and giggles. These are the people who make silly online games, useful open source apps, and cool web projects.",src:"coding"},{id:24,name:"Surfing",category:"present",description:"Few pursuits will connect you with the natural world like a day riding the waves. Surfing offers an experience of natural adrenaline like no other.",src:"surfing"},{id:25,name:"Investing",category:"future",description:"This is a hobby much like chess, in that it requires you to gain skill in planning, prediction, and observation of how human desires motivate human actions. You need not actively invest capital at first; simply watch the stock ticker, read the reports, and immerse yourself in the business of business.",src:"investing"},{id:26,name:"Marksmanship",category:"future",description:"Learn to enjoy the pleasure of shooting a gun by taking up a shooting sport and becoming an expert marksman. Marksmanship requires pure concentration and a steady hand. Shooting clubs exist all over the country that emphasize different gun sports. Take your pick among clay pigeon shooting, hand gun and rifle shooting, and even Frontier and Cowboy shooting.",src:"marksmanship"},{id:27,name:"Bird Watching",category:"future",description:"Bird watching offers many of the benefits of collecting \u2014 organizing, learning about a specific topic, even the thrill of the hunt \u2014 without any of the costs. Keeping a journal of your findings or perhaps checking off species on a list can help motivate you to discover more species.",src:"birdwatching"},{id:28,name:"Grilling",category:"future",description:"Whether with a smoker or charcoal grill, firing up a hearty piece of meat and serving a finished creation is satisfying both to the mind and to the stomach.",src:"grilling"},{id:29,name:"Survival",category:"future",description:"There\u2019s nothing more stimulating than pitting your wits against adversity, especially in the absence of modern conveniences. Learning survival skills will enable you to assess problems in every aspect of modern life and plot workable solutions. As well, with survival training, there is no buck-passing. You are ultimately responsible for your actions and their consequences, even if they are spurred by uncontrollable circumstances. Now, that\u2019s Manly. Skill level: Marcus Aurelius.",src:"survival"},{id:30,name:"Camping",category:"future",description:"Modern man is restless and unhappy because he\u2019s lost touch with the great outdoors. Every person should seek to regularly connect with nature for the sake of both their physical and mental well-being. You need to break away now and again and sleep out under the stars.",src:"camping"},{id:31,name:"Golfing",category:"future",description:"No other sport feels as regal and storied as golf. The clothing is dapper, the movements are graceful, the lawns are manicured. While it\u2019s a hard sport to master, that actually makes it part of the fun. You\u2019re almost always competing against others and yourself.",src:"golfing"},{id:32,name:"Traveling",category:"future",description:"tbd",src:"traveling"},{id:33,name:"Snorkeling",category:"future",description:"tbd",src:"snorkeling"},{id:34,name:"Movie Watching",category:"future",description:"This is a hobby version of the professional movie critic. It also pushes you to explore genres and titles you would never otherwise have chosen. Watch to learn, about places, people, dramatic effects, and storytelling. Watch for pleasure and understanding.",src:"movie-watching"},{id:35,name:"Archery",category:"future",description:"With access to a range where you can rent gear and practice, this is a relatively inexpensive hobby. Buying your own armguard, bow and arrows works as well, and can be done relatively inexpensively for beginners. Archery teaches you focus and precision, all of which will stand you in good stead in a variety of pursuits.",src:"archery"},{id:36,name:"Rocketry",category:"ideas",description:"Similar to model construction, but with definitely real applications of physics and chemistry, this hobby will hone your critical thinking and problem solving skills to a killing point. What you learn through experimentation and research of fuel systems will stand you in good stead when solving problems in completely unrelated areas. Plus, nothing is more gratifying than creating something that works.",src:"rocketry"},{id:37,name:"Astronomy",category:"ideas",description:"Get caught up in the awe and majesty of outer space right from your backyard. You\u2019d be surprised what sorts of things you can see in space with a small telescope or even a pair of high powered binoculars. If you really want to see deep into space, you\u2019ll need to get a high powered telescope. But the payoff may come when you spot something in your backyard observatory that even the big dogs at NASA haven\u2019t caught. And remember that astronomy is more than just looking in a telescope; it\u2019s also learning as much as you can about our wondrous universe from books, shows, and lectures.",src:"astronomy"},{id:38,name:"Foreign Language",category:"ideas",description:"There are few hobbies as unarguably useful as learning a foreign language. Learning a foreign language can be pretty difficult, but when you really think about it, the ability to speak two entirely different languages is pretty amazing. The key is to continually practice or you\u2019ll never get better and retain what you\u2019ve learned.",src:"foreign-language"},{id:39,name:"Geocaching",category:"ideas",description:'This is a great group hobby. You\'ve got to work together to meet the deadline of this modern spin on "X Marks the Spot". Geocaching will enable you to read a GPS and enhance your map reading skills in relation to the physical environment. This works your brain and your body at the same time, thus improving the functionality of both.',src:"geocaching"},{id:40,name:"Rock Climbing",category:"ideas",description:"",src:"rock-climbing"},{id:41,name:"Classic Car Restoration",category:"ideas",description:"If you have an itch to become a grease monkey, you can always take up classic car restoration as a hobby. You\u2019ll learn a bit of engineering, improve your problem solving skills, and experience the sweet feeling of success when the engine you rebuilt purrs like a kitten.",src:"classic-car-restoration"},{id:42,name:"Paintball",category:"past",description:"Choosing paintball as a hobby is a great way to get exercise, improve your mind, and have fun all at the same time.",src:"paintball"},{id:43,name:"Electric Models",category:"ideas",description:"tbd",src:"electric-models"},{id:44,name:"Writing",category:"ideas",description:"This is one of the most humbling activities you can undertake, and also one of the most worthwhile. It will teach you how to communicate, how to craft a narrative effectively, and also how to be interesting. The best thing about writing is that everyone can do it, whether they think they can or not. All it takes is time and lots of practice.",src:"writing"},{id:45,name:"Scotch Tasting",category:"ideas",description:"Pick your poison: craft beer, wine, Scotch, tequila\u2026the options for enjoying a fine glass of alcohol are only limited by your imagination. Choose which boozy niche you\u2019ll focus on, and get to learning. You can become on expert on how that particular alcohol is made, which brands are known as high quality, and when new products are coming to market.",src:"scotch-tasting"},{id:46,name:"Poker and Cards",category:"ideas",description:"tbd",src:"poker-and-cards"},{id:47,name:"Billiards",category:"ideas",description:"Pool and billiards combines strategy, geometry, and oftentimes psychology in order to win. It\u2019s also a great way to spend time and shoot the bull with your friends.",src:"billiards"},{id:48,name:"Sewing",category:"ideas",description:"Sewing?! The thing that your grandma adores and your great aunt uses to make you a scarf for Christmas? Yes, sewing. Sailors were the other original sewers. They would make fishing nets and sweaters to keep them warm. These days, sewing as a hobby is making a comeback; it\u2019s both useful and relaxing.",src:"sewing"},{id:49,name:"Backpacking",category:"future",description:"tbd",src:"backpacking"},{id:50,name:"Painting and Drawing",category:"future",description:"Creative hobbies like painting and drawing can have a healthy effect on a person.",src:"painting-and-drawing"}],f=function(e){var a=Object(s.g)(),t=window.location.pathname.split("/").pop();return i.a.createElement("div",{className:"hobby-page"},i.a.createElement(c,null),b.filter(function(e){return e.src===t}).map(function(e){return i.a.createElement(p,{key:e.id,src:e.src,name:e.name,category:e.category,description:e.description})}),i.a.createElement(y,{text:"Back",onClick:function(){return a(-1)}}),i.a.createElement(y,{text:"Next Hobby"}))},w=function(e){return i.a.createElement("h1",null,"Oops! Page not found!")},v=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(s.d,null,i.a.createElement(s.b,{path:"/hobby",element:i.a.createElement(h,null)}),i.a.createElement(s.b,{path:"/",element:i.a.createElement(s.a,{to:"/hobby"})}),i.a.createElement(s.b,{path:"/category/:category",element:i.a.createElement(m,{allHobbies:b})}),i.a.createElement(s.b,{path:"/hobbies/:hobby",element:i.a.createElement(f,null)}),i.a.createElement(s.b,{element:i.a.createElement(w,null)})))},k=(t(17),t(18),document.getElementById("app"));Object(o.createRoot)(k).render(i.a.createElement(r.a,null,i.a.createElement(v,null)))},4:function(e,a,t){},8:function(e,a,t){e.exports=t(19)}},[[8,1,2]]]);
//# sourceMappingURL=main.cb631666.chunk.js.map