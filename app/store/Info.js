Ext.define('SeaGrant_Proto.store.Info', {
	extend: 'Ext.data.Store',
	// requires: 'Ext.data.proxy.LocalStorage',
	config: {
		data: [
			{
				title: 'Newport',
				Latlng: '44.634115, -124.062796',
				id: '1', 
				address: '',
				products: 'crab, shrimp, cod',
				desc: ["Newport, Oregon - the Dungeness Crab Capital of the world! And much, much more! Bring your surfboard, bicycle, hiking boots, and binoculars.",
				"Newport is a historic city that caters to residents and visitors of all ages and interests. It is a city comprised of distinct neighborhoods including Agate Beach where you can visit the Yaquina Head Lighthouse, surf, or go clamming; Nye Beach where you can walk the beach and visit an incredibly eclectic array of shops, restaurants, and lodging establishments; the Deco District which is Newports downtown and contains art deco buildings; the historic Bayfront which is a working fishing port and home to a variety of shops, restaurants, and lodging establishments, and located downhill from Newports other lighthouse, the Yaquina Bay Lighthouse; and South Beach which is home to the Oregon Coast Aquarium, the Hatfield Marine Science Center, and boat launch and fishing opportunities. Because of these attributes, Newport is often described as the most authentic city on the entire Oregon Coast.",
				"Whatever your interest, a warm coastal welcome awaits you in historic Newport."].join("")
			},
			{
				title: 'Waldport',
				Latlng: '44.30737, -124.066572',
				id: '2',
				products: 'crab, starfish, cod',
				desc: ["Waldport is one of those special places. Located about three hours by car south of Portland, this town of 2050 offers everything you need to escape the rush and congestion of city living. Moderate year around temperatures rarely dip below freezing. Summer days are in the 70s and the yearly average is 51 degrees, Annual rainfall is about 61 inches. When the tide goes out you can dig clams, rake crabs or comb the beach. Down the road a few miles there is a place out of Lost Horizons - rocks covered with mussels to be gathered, starfish of every hue and color, driftwood that takes on every shape your imagination allows, and a sunset better than any Fourth of July fireworks display. The relative obscurity of Waldport is part of its charm. Here is a quiet city on the beautiful Oregon Coast, offering miles of unspoiled beaches; here is salmon, trout and surf fishing at its best. There is also a nine-hole golf course located in the hills near town. Here is relaxation with a capital R. The beach in the summer, fall, winter and spring is host to beachcombers, joggers, kite flyers, picnickers, horseback riders and many other recreational users. Once known as the beachcombers paradise, the beaches along the coast here are simply some of the cleanest, nicest and most beautiful in America. While enjoying, feel free to comb for driftwood, glass floats, rocks and shells. Also help us preserve our beaches by removing trash and never harming or disturbing wildlife. Although some creatures, like starfish, seem abundant, their numbers are fading and we must preserve the ones left. "]
			},
			{
				title: 'Florence',
				Latlng: '43.976162, -124.106741',
				id: '3',
				products: 'clams, shrimp, cod',
				desc: ["Located on the central Oregon coast along Highway 101, Florence is a scenic and recreational paradise. A charming old town which was originally a mill town, Florence has a population of over 6200. Old Town boasts a number of interesting shops and restaurants, and there is a marina and RV campground on the waterfront. Along Highway 101, there are many new stores in this growing area of the Oregon coast.",
				"Camping, fishing, dune buggy rides, sand boarding, shopping, crabbing, clamming, birding, hiking and golfing are but a few of the activities available in Florence."].join("")
			},
			{
				title: 'Reedsport',
				Latlng: '43.706747, -124.113607',
				id: '4',
				products: 'crab, salmon, cod',
				desc: ["Incorporated in 1919 near the confluence of three rivers – the Umpqua, the Smith, and the Scholfield, the City of Reedsport is located on the beautiful Oregon Coast on Highways 101 and 38 on the banks of the Umpqua River – the largest river between the Sacramento and the Columbia. Located in the heart of the Oregon Dunes National Recreational Area, Reedsport is in close proximity to over 17 freshwater lakes and is just four miles from Winchester Bay and the Pacific Ocean.",
				"Reedsport is an outdoor lover’s paradise. The Umpqua River is home to one of the largest recreational fishing ports on the Oregon Coast. In addition to fishing, citizens, guests, and visitors enjoy hunting, hiking, riding ATVs on the Dunes, beachcombing, boating, bike riding, and much more. Just three miles east on Highway 38 is the famous Dean Creek Elk Viewing area currently sustaining hundreds of Oregon's Roosevelt Elk in their natural habitat with viewing stations and photo opportunities.",
				"Reedsport is located in Douglas County on the central Oregon coast at the intersection of Oregon Highway 38 and U.S. Highway 101. The City is approximately 195 miles south of Portland, 87 miles southwest of Eugene, 70 miles west of Roseburg, 25 miles north of Coos Bay, and 21 miles south of Florence. Reedsport is within easy driving distance the University of Oregon and Oregon State University, shopping and cultural centers, and a variety of excellent outdoor recreation areas. Southwestern Oregon Community College, (SWOCC), is located in nearby Coos Bay. "].join("")
			},
			{
				title: 'Coos bay',
				Latlng: '43.37261, -124.218664',
				id: '5',
				products: 'crab, shrimp, clams',
				desc: ["Historically known as Marshfield, Coos Bay proudly stands today as the largest city on the Oregon Coast with Portland State University having certified the 2012 Population Estimate at 16,060; Coos Bay is a great place to live, work and play.  Surrounded by a beautiful bay, lush emerald forests and the mighty Pacific Ocean, Coos Bay continues to celebrate its history in shipbuilding, lumber products and tradition as the regional hub for Oregon's south coast.  Coos Bay is a proud community with a rich heritage and “can-do” attitude."]
			},
			{
				title: 'Bandon',
				Latlng: '43.115167, -124.409552',
				id: '6',
				products: 'crab, scalops, cod',
				desc: ["Call it Bandon or call it Bandon-by-the-Sea. However you refer to us; our seacoast town is sure to delight you with its charm, its scenic beauty, its rich opportunities for recreation, relaxation, and its warmth shown you by its people.",
				"Located on the Southern Oregon Coast where the Coquille River meets the Pacific Ocean, Bandon, Oregon is 90 miles north of the California border, about a 90 minute drive to Interstate 5 at Roseburg, five hours by car from Portland and about nine hours from San Francisco.",
				"It is home to five world premier golf courses, Bandon Dunes, Pacific Dunes, Bandon Trails, Old Macdonald and Bandon Preserve, all of which are part of the Bandon Dunes Golf Resort. In addition to the Bandon Dunes Golf Resort, there are 2 more courses in Bandon, Bandon Crossings, an 18 hole course and Old Bandon Golf Links, a 9 hole course. We are quickly becoming known as Oregon's Golf Coast!",
				"The scenic beauty which Bandon offers is unparalleled. Enjoy birding, surfing, crabbing, fishing, mushroom picking...and so much more! We are sure you'll find Bandon very enjoyable!", 
				"For all that it has to offer, it remains charmingly undiscovered and unspoiled. The people who live here (population 3100 or so) love it, and each year, first-time visitors discover why. "].join("")
			},
			{
				title: 'Gold Beach',
				Latlng: '42.406302, -124.419420',
				id: '7',
				products: 'crab, shrimp, cod',
				desc: ["We are the Oregon Coast as it’s meant to be: Wild and Natural. Whether your “ Wild Side” is the excitement of salmon fishing, rafting or taking a jet boat tour on the mighty Rogue River, or the adrenaline rush of windsurfing one of the most beautiful coastlines in the world.  Maybe your “Wild Side” is just to get away from the world and walk our miles of uninterrupted, secluded beaches or hiking our windswept headlands.  Your “Wild Side” could be watching our amazing animals—on land and sea--or even capturing nature’s perfection in a photograph or painting inspired by our gorgeous scenery.  It’s all here.  Whatever your “WILD SIDE”, Gold Beach is your Destination."]
			},
			{
				title: 'Brookings',
				Latlng: '42.051287, -124.283807',
				id: '8',
				products: 'crab, shrimp, cod',
				desc: ["temp stuff"]
			},
			{
				title: 'Depoe Bay',
				Latlng: '44.809437, -124.059516',
				id: '9',
				products: 'crab, shrimp, cod',
				desc: ["temp stuff"]
			},
			{
				title: 'Lincoln City',
				Latlng: '44.957217, -124.014541',
				id: '10',
				products: 'crab, shrimp, cod',
				desc: ["temp stuff"]
			},
			{
				title: 'Tillamook',
				Latlng: '45.455024, -123.846656',
				id: '11',
				products: 'crab, shrimp, cod',
				desc: ["temp stuff"]
			},
			{
				title: 'Seaside',
				Latlng: '45.991815, -123.922769',
				id: '12',
				products: 'crab, shrimp, cod',
				desc: ["temp stuff"]
			},
			{
				title: 'Astoria',
				Latlng: '46.187831, -123.833543',
				id: '13',
				products: 'crab, shrimp, cod',
				desc: ["temp stuff"]
			}
		]
		// model: 'SeaGrant_Proto.model.ListForm',
		// proxy: {
		// 	type: 'localstorage',
		// 	id: 'info-app-store'
		// },
		// sorters: [
		// 	{
		// 		property: '',
		// 		direction: 'DESC'
		// 	}
		// ]
	}
});