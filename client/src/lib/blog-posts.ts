export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string;
  category: string;
  published: string;
  updated: string;
  readMinutes: number;
  intro: string;
  content: BlogBlock[];
  faqs: { q: string; a: string }[];
  related: string[];
}

// Inline links use [text](/path) syntax and are rendered as internal links.
const allBlogPosts: BlogPost[] = [
  {
    slug: "skip-sizes-guide-portsmouth",
    title: "Skip Sizes Guide: Which Skip Do You Need in Portsmouth?",
    metaTitle: "Skip Sizes Guide Portsmouth | Which Size Skip Do I Need?",
    description:
      "A plain-English guide to mini, midi, builder's, large and maxi skip sizes in Portsmouth, with capacity examples, typical jobs and tips for choosing the right one.",
    keywords:
      "skip sizes Portsmouth, what size skip do I need, mini skip, midi skip, builders skip, maxi skip, skip hire sizes guide",
    category: "Skip Hire Guides",
    published: "2026-09-01",
    updated: "2026-10-10",
    readMinutes: 9,
    intro:
      "Choosing the wrong skip size is the most common (and most expensive) mistake in skip hire. Too small and you pay for a second skip; too big and you pay for space you never use. This guide explains every size we offer in Portsmouth and how to match it to your project.",
    content: [
      { type: "h2", text: "How skip sizes are measured" },
      {
        type: "p",
        text: "In the UK, skips are measured in cubic yards, which is the volume of waste the skip can hold when filled level with the top. One cubic yard is roughly 10 to 12 black bin bags. Waste must never be piled above the sides of the skip, as overloaded skips cannot be legally transported.",
      },
      {
        type: "p",
        text: "Treat bin-bag estimates as a rough visual guide, not a promise of capacity. Bags vary in size, and a skip full of bulky furniture fills differently from one holding broken tiles. Dense waste can also reach the vehicle's weight limit while there is still empty space above it. The material you are disposing of matters just as much as the volume.",
      },
      { type: "h2", text: "Start with the job, not the skip" },
      {
        type: "p",
        text: "Before choosing a size, list what is coming out and how it will be prepared. A room of dismantled cabinets packs more tightly than the same cabinets left assembled. Include items from every part of the job: flooring, packaging, fittings, garden waste and the rubble from any demolition. If you are removing heavy materials, tell the skip company separately rather than estimating by volume alone.",
      },
      {
        type: "ul",
        items: [
          "Small DIY or garden tidy: estimate the number of bags, old pots, branches and other bulky items.",
          "Kitchen or bathroom refit: include units, worktops, tiles, sanitaryware and packaging.",
          "Renovation: count bulky fittings as well as dense rubble, timber and plasterboard.",
          "House or garage clear-out: sort reusable items first, then assess what is actually going in the skip.",
        ],
      },
      { type: "h2", text: "Mini skip (2-3 cubic yards)" },
      {
        type: "p",
        text: "The mini skip holds around 25 to 35 bin bags and is small enough to fit on most driveways in areas such as Southsea, Cosham and Fratton, where parking is tight. It suits garden tidy-ups, a small bathroom strip-out, or clearing a garage or shed.",
      },
      { type: "h2", text: "Midi skip (4-5 cubic yards)" },
      {
        type: "p",
        text: "A midi skip holds 40 to 50 bin bags. It is a good fit for a kitchen or bathroom refit, a modest loft clearance, or a patio removal. If you are unsure between a mini and a midi, choose the midi: waste always takes up more room than you expect.",
      },
      { type: "h2", text: "Builder's skip (6-8 cubic yards)" },
      {
        type: "p",
        text: "The builder's skip is our most popular size, holding around 60 to 80 bin bags. It is the standard choice for larger renovations, extensions, new flooring throughout a house, and general building waste. A builder's skip is roughly the size of a small car parking bay, so check you have the space, or read our guide to [skip permits](/blog/do-i-need-a-skip-permit-portsmouth) if it has to go on the road.",
      },
      { type: "h2", text: "Large skip (10-12 cubic yards)" },
      {
        type: "p",
        text: "Large skips hold 100 to 120 bin bags and are used for commercial clear-outs, full house clearances and big landscaping jobs. They are tall, so loading heavy items takes planning. Break bulky items down where possible and distribute waste evenly without loading above the sides.",
      },
      { type: "h2", text: "Maxi skip (14-16 cubic yards)" },
      {
        type: "p",
        text: "The maxi skip is for industrial and large commercial projects, such as shop fit-outs and demolition work. It holds 140 to 160 bin bags of light waste. Heavy materials like soil and rubble need smaller skips because of vehicle weight limits; tell us what you are disposing of before booking.",
      },
      { type: "h2", text: "Check space and access before you book" },
      {
        type: "p",
        text: "The skip needs more than a footprint: the delivery vehicle must be able to reach the drop-off point, manoeuvre, and lift the skip safely. Check for narrow entrances, parked cars, low branches, overhead cables, gates, slopes and soft ground. Measure the space and describe the access when requesting a quote. A larger skip may not be suitable even if its footprint seems to fit.",
      },
      {
        type: "p",
        text: "In Portsmouth, on-street parking and compact residential roads can make placement difficult. If the skip cannot fit fully on private land, check the permission requirements before arranging delivery. Our [guide to skip permits in Portsmouth](/blog/do-i-need-a-skip-permit-portsmouth) explains the questions to resolve first.",
      },
      { type: "h2", text: "When should you choose the next size up?" },
      {
        type: "p",
        text: "Choose the larger option if the estimate is close to the smaller skip's capacity, if you cannot break down bulky items, or if the job may grow once work starts. Choose the smaller option if most materials are dense rubble or soil, because a large skip may be impossible to fill to the top without exceeding a safe weight. Ask the supplier to recommend a size based on your waste description and any weight limits.",
      },
      { type: "h2", text: "How to make the most of the space" },
      {
        type: "ol",
        items: [
          "Separate reusable or recyclable items before loading so they do not take up skip space.",
          "Dismantle furniture and flatten cardboard where safe to do so.",
          "Load larger, flatter pieces first, then fill gaps with smaller items.",
          "Distribute weight evenly; do not concentrate heavy material at one end.",
          "Keep the load level with the skip sides and leave prohibited materials out.",
        ],
      },
      {
        type: "p",
        text: "If the job creates soil, bricks or concrete, do not use a general skip-size estimate without checking the weight allowance. Read our [skip hire cost guide](/blog/how-much-does-skip-hire-cost-portsmouth) for more on how waste type can affect a quote.",
      },
      { type: "h2", text: "Quick size chooser" },
      {
        type: "ul",
        items: [
          "Garden tidy-up or small DIY job: mini skip",
          "Kitchen or bathroom refit: midi skip",
          "Extension, re-roof or full renovation: builder's skip",
          "House clearance or commercial clear-out: large skip",
          "Shop fit-out or demolition: maxi skip",
        ],
      },
      {
        type: "callout",
        text: "Rule of thumb: if you are between two sizes, go up one. The price difference is usually much smaller than the cost of a second skip. Not sure? Message us on WhatsApp with a description or photo of the job and we will recommend a size.",
      },
    ],
    faqs: [
      {
        q: "What size skip do I need for a bathroom refit?",
        a: "A midi skip (4-5 cubic yards) usually covers a full bathroom strip-out including tiles, sanitaryware and plasterboard. If you are also removing flooring and a stud wall, step up to a builder's skip.",
      },
      {
        q: "How many bin bags does a builder's skip hold?",
        a: "A builder's skip (6-8 cubic yards) holds around 60 to 80 standard bin bags of waste.",
      },
      {
        q: "Can I fill a skip above the sides?",
        a: "No. Waste must be level with the top of the skip. Overloaded skips are unsafe and cannot be taken away until the excess is removed.",
      },
      {
        q: "Are skip bin-bag estimates exact?",
        a: "No. They are approximate because bags and waste vary in size. Bulky furniture uses space differently from compact rubble, and heavy waste can reach its weight limit before the skip is full.",
      },
      {
        q: "Should I hire a large skip for soil or rubble?",
        a: "Not automatically. Soil and rubble are heavy, so a smaller skip may be more appropriate. Tell the supplier the material and approximate amount before choosing.",
      },
    ],
    related: [
      "how-much-does-skip-hire-cost-portsmouth",
      "do-i-need-a-skip-permit-portsmouth",
    ],
  },
  {
    slug: "how-much-does-skip-hire-cost-portsmouth",
    title: "How Much Does Skip Hire Cost in Portsmouth?",
    metaTitle: "Skip Hire Prices Portsmouth | What Affects the Cost?",
    description:
      "What affects skip hire prices in Portsmouth: size, waste type, hire period, permits and access. Learn how to get an accurate quote and avoid hidden extras.",
    keywords:
      "skip hire cost Portsmouth, skip hire prices Portsmouth, cheap skip hire Portsmouth, how much is a skip, skip hire quote",
    category: "Skip Hire Guides",
    published: "2026-09-04",
    updated: "2026-10-10",
    readMinutes: 9,
    intro:
      "Skip hire prices in Portsmouth are not one-size-fits-all. The final figure depends on a handful of factors, and knowing them lets you compare quotes fairly and avoid surprises. Here is what really drives the price.",
    content: [
      {
        type: "p",
        text: "There is no reliable single price that applies to every skip: a quote depends on the skip size, what goes into it, where it will be placed and how long you need it. Prices and council charges can change, so use a current written quote for your address and job rather than relying on an old online price or a broad estimate.",
      },
      { type: "h2", text: "1. Skip size" },
      {
        type: "p",
        text: "Bigger skips cost more, but not in direct proportion. A builder's skip often works out cheaper per cubic yard than a mini skip, which is why it pays to pick the right size from the start. See our [skip sizes guide](/blog/skip-sizes-guide-portsmouth) for help.",
      },
      { type: "h2", text: "2. The type of waste" },
      {
        type: "p",
        text: "General household and builders' waste is the baseline. Heavy inert waste such as soil, rubble and concrete is dense and skips for it must be filled only part-way, so smaller skips are often used. Mixed loads containing heavy materials can cost more. Tell the supplier exactly what the skip will contain so the quote reflects the correct waste stream.",
      },
      {
        type: "p",
        text: "Be specific when describing the load. “Renovation waste” could mean mostly timber and packaging, or a mixture of tiles, plasterboard, soil and rubble; those loads are not necessarily priced or accepted in the same way. Mention items such as mattresses, tyres, electrical goods or paint before booking, and ask how any restricted items should be handled. For help deciding what fits, see our [skip sizes guide](/blog/skip-sizes-guide-portsmouth).",
      },
      { type: "h2", text: "3. Hire period" },
      {
        type: "p",
        text: "Most hire periods cover one to two weeks. Longer jobs such as extensions may need an extended hire, which can add a daily or weekly charge. Tell us how long your project will run when you ask for a quote.",
      },
      { type: "h2", text: "4. Where the skip will sit" },
      {
        type: "p",
        text: "A skip on your own driveway needs no permission. A skip on the public highway needs a permit from the council, and the cost is usually passed on. Find out more in [Do I need a skip permit in Portsmouth?](/blog/do-i-need-a-skip-permit-portsmouth)",
      },
      {
        type: "p",
        text: "Do not assume a permit is included just because delivery is included. Ask whether the company arranges the application, whether the council fee is included or charged separately, and whether any separate parking suspension or access arrangement is needed. Confirm who is responsible for obtaining approval and do not place a skip on the highway until permission has been granted.",
      },
      { type: "h2", text: "5. Prohibited items" },
      {
        type: "p",
        text: "Some items, including electrical goods, mattresses, tyres and hazardous materials, need separate handling or may be prohibited. List unusual items when requesting a quote and confirm any extra charges or alternative disposal requirements before booking.",
      },
      { type: "h2", text: "How to get an accurate quote" },
      {
        type: "ol",
        items: [
          "Describe the job and the type of waste (photos help).",
          "Give the full postcode and say whether the skip goes on a drive or the road.",
          "Say how long you need the skip.",
          "Tell the supplier about access limits, such as a narrow road, gate or restricted parking.",
          "Ask what is included: delivery, collection, disposal, any permit arrangement and VAT.",
          "Confirm any extra charges for overloading or restricted items in writing.",
        ],
      },
      { type: "h2", text: "Compare quotes on the same basis" },
      {
        type: "p",
        text: "A low headline figure is not always the cheapest option if another quote includes a longer hire period or permit support. Before choosing, check that each quote is for the same skip size, waste type, delivery location and hire duration. Ask whether collection is included, what happens if the skip is overweight or overloaded, how an extension is charged, and whether VAT is included. Get the answers in writing so you can compare the full cost rather than one number.",
      },
      {
        type: "ul",
        items: [
          "What is the total price for my postcode and the waste I described?",
          "How many days are included, and what does extra time cost?",
          "Are delivery, collection, disposal and VAT included?",
          "Is a highway permit required, and who arranges and pays for it?",
          "Are there restrictions or additional charges for any of my items?",
          "What are the fill line and weight limits for this skip?",
        ],
      },
      { type: "h2", text: "Example: why two similar jobs can cost differently" },
      {
        type: "p",
        text: "Imagine two Portsmouth households both need a builder's skip. One has a clear driveway, mostly light timber and packaging, and expects to finish within the standard hire period. The other needs road placement, has a mix of dense rubble and general waste, and may need an extra week. Even though the skip size sounds the same, the second quote may need to account for a permit, a different waste stream, weight limits or longer hire. Share those details at the start to avoid a revised quote later.",
      },
      { type: "h2", text: "Avoiding unexpected charges" },
      {
        type: "p",
        text: "The most preventable surprises come from giving an incomplete description, placing the skip somewhere different from the agreed location, keeping it longer than planned, or loading it above the sides. Check the accepted-waste rules before you start, keep the load level with the rim, and contact the supplier early if the project timeline changes. Never try to solve a space or weight problem by overfilling the skip.",
      },
      {
        type: "callout",
        text: "Compare like-for-like quotes and confirm the waste type, hire period, delivery, collection, disposal and VAT are included. If the skip will be placed on a road, read our [Portsmouth skip permit guide](/blog/do-i-need-a-skip-permit-portsmouth) before booking.",
      },
    ],
    faqs: [
      {
        q: "Is there a delivery charge on top of the skip price?",
        a: "Reputable companies include delivery and collection in the quoted price. Always ask for an all-inclusive figure before you book.",
      },
      {
        q: "Does skip hire price include VAT?",
        a: "It should be stated clearly in your quote. Ask whether the price quoted is inclusive of VAT.",
      },
      {
        q: "Can I get a same-day skip?",
        a: "Same-day delivery is often possible in Portsmouth depending on availability. Message us on WhatsApp early in the day.",
      },
      {
        q: "Why do skip hire prices vary between addresses?",
        a: "The quote can depend on the delivery postcode, access, waste type, skip size, hire period and whether a highway permit is needed. Give each supplier the same details to compare quotes fairly.",
      },
      {
        q: "Can I get a price before I know the exact skip size?",
        a: "You can ask for advice using a description or photos of the job, but the final quote should confirm the size, waste type, placement and hire period. Our [skip size guide](/blog/skip-sizes-guide-portsmouth) can help you prepare.",
      },
    ],
    related: [
      "skip-sizes-guide-portsmouth",
      "do-i-need-a-skip-permit-portsmouth",
    ],
  },
  {
    slug: "do-i-need-a-skip-permit-portsmouth",
    title: "Do I Need a Skip Permit in Portsmouth?",
    metaTitle: "Skip Permit Portsmouth | When You Need One & How to Apply",
    description:
      "Find out when a skip permit is needed in Portsmouth, how to apply through the council, and the rules on lighting, cones and placement for skips on the road.",
    keywords:
      "skip permit Portsmouth, Portsmouth City Council skip licence, skip on road permit, skip on street Southsea, skip placement rules",
    category: "Rules & Regulations",
    published: "2026-09-08",
    updated: "2026-10-10",
    readMinutes: 9,
    intro:
      "Many Portsmouth homes, especially terraces in Southsea, Fratton and Old Portsmouth, have no driveway. That means the skip has to go on the road, and that is when a permit comes in. Here is how it works.",
    content: [
      {
        type: "p",
        text: "A skip permit (sometimes called a skip licence) is permission to place a skip on the public highway. The exact application requirements, fees, conditions and lead times are set by the relevant highway authority and can change. This guide explains the practical checks to make; confirm the current Portsmouth City Council requirements before you book or arrange delivery.",
      },
      { type: "h2", text: "When you do not need a permit" },
      {
        type: "p",
        text: "If the skip is placed entirely on private land, such as your driveway or front garden, you do not need a permit. Make sure the ground can take the weight and that nothing overhangs the pavement or road.",
      },
      {
        type: "p",
        text: "If you are unsure whether the proposed spot is private land or highway, do not guess from the property boundary or pavement edge. Check with the property owner or council and share the exact location with the skip company. A skip that partly obstructs the pavement or projects into the road may still need permission even when most of it sits on your drive.",
      },
      { type: "h2", text: "When you do need a permit" },
      {
        type: "p",
        text: "If any part of the skip will stand on a public road, pavement or verge, you need permission from the local highway authority. In Portsmouth this is Portsmouth City Council. Placing a skip on the highway without permission can lead to fines and removal of the skip.",
      },
      {
        type: "p",
        text: "Do not treat a booking confirmation or delivery date as permit approval. Wait until the authority has confirmed permission and check that the approved dates, location and conditions match your plans. If the dates change, ask whether the approval needs to be amended or extended before leaving the skip in place.",
      },
      { type: "h2", text: "Rules for skips on the road" },
      {
        type: "p",
        text: "The permit conditions are important for the safety of drivers, pedestrians and neighbours. The authority may specify where the skip can be positioned, how it must be marked and when it must be removed. Follow the conditions on the actual approval rather than assuming a rule from another area applies in Portsmouth.",
      },
      {
        type: "ul",
        items: [
          "The skip must be clearly marked with the owner's name and contact details.",
          "It must be lit at night and have reflective markings or cones so drivers can see it.",
          "It should not block junctions, dropped kerbs, drains or emergency access.",
          "It must be removed promptly when full or when the permit ends.",
          "Do not place it on double yellow lines or in restricted bays without specific approval.",
        ],
      },
      { type: "h2", text: "How to get a permit" },
      {
        type: "ol",
        items: [
          "Decide whether the skip can fit fully on private land. If not, identify the proposed highway location.",
          "Ask the skip supplier whether they apply for permits on customers' behalf or expect you to apply.",
          "Check Portsmouth City Council's current application requirements, lead times, fees and conditions before choosing delivery dates.",
          "Prepare the precise address, proposed placement, skip size and dates requested by the council.",
          "Wait for written approval. Check its details and share the conditions with whoever will deliver the skip.",
          "If your dates, position or skip size change, check with the council and supplier before proceeding.",
        ],
      },
      { type: "h2", text: "Check parking and access separately" },
      {
        type: "p",
        text: "A skip permit and a parking-bay suspension are not necessarily the same permission. If the skip would occupy a residents' bay, pay-and-display space or another controlled parking area, ask the council whether a separate application is required. Allow time for both processes. Also check that the delivery lorry can reach and safely place the skip without blocking access or causing an obstruction.",
      },
      { type: "h2", text: "Prepare the location for delivery" },
      {
        type: "ul",
        items: [
          "Make sure the approved position is clear at the agreed delivery time.",
          "Tell the supplier about parked cars, narrow roads, one-way access or other restrictions.",
          "Check the planned location will not obstruct a dropped kerb, junction, drain or essential access.",
          "Follow any instructions about lights, reflective markings, cones or protective boards.",
          "Keep the permit details and contact information available in case the authority or supplier needs them.",
        ],
      },
      { type: "h2", text: "Plan the collection before the permit expires" },
      {
        type: "p",
        text: "Arrange collection as soon as the skip is full and no later than the permitted end date. If work is delayed, contact the council and the supplier before the approval expires; an extension is not automatic. A skip left on the highway after its permitted period may create enforcement or additional cost issues.",
      },
      {
        type: "p",
        text: "The permit fee, if applicable, is one of several items that may affect your total. See our [skip hire cost guide](/blog/how-much-does-skip-hire-cost-portsmouth) and [skip sizes guide](/blog/skip-sizes-guide-portsmouth) when planning the order.",
      },
      {
        type: "callout",
        text: "We can advise on placement when you message us on WhatsApp. If a permit is needed, allow extra time before delivery. See the other factors in our [skip hire cost guide](/blog/how-much-does-skip-hire-cost-portsmouth).",
      },
      { type: "h2", text: "Choosing a size to fit" },
      {
        type: "p",
        text: "Space is often the limit in Portsmouth's narrow streets. A [mini or midi skip](/blog/skip-sizes-guide-portsmouth) takes up less road, which can make permit approval simpler and cause less disruption for neighbours.",
      },
    ],
    faqs: [
      {
        q: "Who applies for the skip permit, me or the skip company?",
        a: "Either can, but the person arranging the hire is usually responsible for confirming a permit is in place. Ask your skip company up front.",
      },
      {
        q: "Can I park a skip on a residents' parking bay?",
        a: "Not without specific permission from the council. Bay suspensions may be needed, so check early.",
      },
      {
        q: "How long does a permit last?",
        a: "Permits are issued for a set period that you choose when applying. Check current options with the council.",
      },
      {
        q: "Can the skip arrive before the permit is approved?",
        a: "Do not arrange highway placement until the relevant authority has confirmed permission. A booking or delivery confirmation is not a substitute for a permit.",
      },
      {
        q: "What if my project takes longer than the permit?",
        a: "Contact the council and skip company before the approved period ends. An extension is not automatic, so confirm any updated permission before keeping the skip on the highway.",
      },
    ],
    related: [
      "skip-sizes-guide-portsmouth",
      "how-much-does-skip-hire-cost-portsmouth",
    ],
  },
  {
    slug: "what-cant-you-put-in-a-skip",
    title: "What Can't You Put in a Skip? A UK Guide",
    metaTitle: "What Can't You Put in a Skip? Banned & Restricted Items UK",
    description:
      "A clear list of items you cannot put in a skip in the UK, from asbestos and gas bottles to fridges and tyres, plus what to do with them instead.",
    keywords:
      "what can't you put in a skip, skip prohibited items, skip banned items UK, can I put plasterboard in a skip, asbestos skip",
    category: "Rules & Regulations",
    published: "2026-09-12",
    updated: "2026-10-10",
    readMinutes: 5,
    intro:
      "A skip is the easiest way to get rid of bulky waste, but not everything can go in. Some items are hazardous, others need specialist recycling. Putting them in a skip can lead to extra charges or a refused collection.",
    content: [
      { type: "h2", text: "Items that can never go in a skip" },
      {
        type: "ul",
        items: [
          "Asbestos and asbestos-containing materials (these need licensed removal)",
          "Gas bottles, fire extinguishers and aerosols under pressure",
          "Paint, solvents, oils and chemicals",
          "Batteries, including car batteries",
          "Medical and clinical waste",
          "Explosives and fireworks",
        ],
      },
      { type: "h2", text: "Items that need special handling" },
      {
        type: "p",
        text: "Fridges, freezers, TVs, monitors and other electrical goods contain materials that must be recycled separately under waste electrical regulations. Tyres, mattresses and some types of plasterboard are also usually restricted or may carry an extra charge. Tell us beforehand and we can advise.",
      },
      { type: "h2", text: "What about plasterboard?" },
      {
        type: "p",
        text: "Plasterboard (gypsum) cannot be mixed freely with general waste because it creates harmful gas in landfill. It is usually kept separate. If your project, such as a bathroom or kitchen refit, creates plasterboard, mention it when you book. See which skip fits in our [skip sizes guide](/blog/skip-sizes-guide-portsmouth).",
      },
      { type: "h2", text: "What can go in a skip?" },
      {
        type: "ul",
        items: [
          "Household furniture and general junk",
          "Garden waste, branches and turf",
          "Builders' waste such as bricks, timber and tiles",
          "Flooring, doors, windows and fittings",
          "Cardboard, metal and general bulky waste",
        ],
      },
      {
        type: "callout",
        text: "Heavy waste like soil and concrete has its own rules and skip fill levels. See [skip hire for rubble, soil and heavy waste](/blog/skip-hire-for-rubble-soil-and-heavy-waste).",
      },
      { type: "h2", text: "If you are not sure" },
      {
        type: "p",
        text: "Ask first. A quick WhatsApp message with a photo costs nothing and avoids problems at collection. Hidden charges for prohibited items are one reason to read our advice on [how much skip hire costs](/blog/how-much-does-skip-hire-cost-portsmouth).",
      },
    ],
    faqs: [
      {
        q: "Can I put a mattress in a skip?",
        a: "Mattresses are commonly restricted or charged extra due to recycling requirements. Check with us before booking.",
      },
      {
        q: "What should I do if I suspect asbestos?",
        a: "Do not disturb it and do not put it in a skip. Contact a licensed asbestos removal contractor.",
      },
      {
        q: "Can I put a fridge in a skip?",
        a: "Not as general waste. Fridges and freezers need specialist recycling, so mention them when you book.",
      },
    ],
    related: [
      "skip-sizes-guide-portsmouth",
      "skip-hire-for-rubble-soil-and-heavy-waste",
      "house-clearance-skip-hire-portsmouth",
    ],
  },
  {
    slug: "skip-hire-for-rubble-soil-and-heavy-waste",
    title: "Skip Hire for Rubble, Soil and Heavy Waste",
    metaTitle: "Rubble, Soil & Heavy Waste Skips Portsmouth | Fill Rules",
    description:
      "How to hire a skip for rubble, soil, concrete and other heavy waste in Portsmouth, including weight limits, fill lines and which size to choose.",
    keywords:
      "rubble skip Portsmouth, soil skip hire, heavy waste skip, concrete skip hire, hardcore skip, inert waste skip Portsmouth",
    category: "Skip Hire Guides",
    published: "2026-09-16",
    updated: "2026-10-10",
    readMinutes: 5,
    intro:
      "Soil, bricks, concrete and hardcore are very heavy. A skip that looks half-empty can already be at its safe weight limit. Understanding heavy waste rules keeps you safe, legal and within budget.",
    content: [
      { type: "h2", text: "Why heavy waste is different" },
      {
        type: "p",
        text: "A cubic yard of soil can weigh well over a tonne. Skip lorries have a maximum load, so heavy waste skips must only be part-filled. Overloaded skips will not be collected until some waste is removed.",
      },
      { type: "h2", text: "Which skip size for heavy waste?" },
      {
        type: "p",
        text: "Smaller skips are best. A [mini or midi skip](/blog/skip-sizes-guide-portsmouth) is often the right choice for rubble and soil. For large projects, order several smaller skips rather than one big one.",
      },
      { type: "h2", text: "Keep it clean for lower costs" },
      {
        type: "p",
        text: "Inert waste such as clean brick, concrete and soil is easier to recycle. Mixing it with wood, plastics or plasterboard turns it into a mixed load, which is more expensive to process. Keep clean loads separate whenever you can.",
      },
      { type: "h2", text: "Typical projects that create heavy waste" },
      {
        type: "ul",
        items: [
          "Removing a patio, path or driveway",
          "Digging foundations or a pond",
          "Knocking down a garden wall or outbuilding",
          "Lifting a concrete shed base",
          "Landscaping a Southsea or Cosham garden",
        ],
      },
      { type: "h2", text: "Loading tips" },
      {
        type: "ol",
        items: [
          "Fill only to the line your skip company gives you, not to the top.",
          "Spread heavy items evenly rather than piling in one corner.",
          "Keep hazardous items out; check the [prohibited items list](/blog/what-cant-you-put-in-a-skip).",
          "Tell us the material type when booking so we send the right skip.",
        ],
      },
      {
        type: "callout",
        text: "Heavy waste can affect price. See what else influences cost in [How much does skip hire cost in Portsmouth?](/blog/how-much-does-skip-hire-cost-portsmouth)",
      },
    ],
    faqs: [
      {
        q: "Can I mix soil and general waste?",
        a: "It is best not to. Mixed loads are more expensive to dispose of and can make the skip too heavy.",
      },
      {
        q: "How full can I fill a rubble skip?",
        a: "Only to the fill line given by the skip company, which is usually well below the rim.",
      },
      {
        q: "Is concrete accepted in skips?",
        a: "Yes, but it is heavy. Use a smaller skip and tell us the material when booking.",
      },
    ],
    related: [
      "skip-sizes-guide-portsmouth",
      "what-cant-you-put-in-a-skip",
      "how-much-does-skip-hire-cost-portsmouth",
    ],
  },
  {
    slug: "house-clearance-skip-hire-portsmouth",
    title: "House Clearance in Portsmouth: How a Skip Makes It Easier",
    metaTitle: "House Clearance Skip Hire Portsmouth | Step-by-Step Guide",
    description:
      "Planning a house clearance in Portsmouth? Learn how to choose a skip, sort and load items, recycle what you can and keep costs down.",
    keywords:
      "house clearance Portsmouth, house clearance skip, skip hire house clearance, garage clearance Portsmouth, loft clearance skip",
    category: "Project Guides",
    published: "2026-09-20",
    updated: "2026-10-10",
    readMinutes: 6,
    intro:
      "Clearing a whole property, whether it is a family home, a rental after a tenancy or a probate sale, is a big job. A skip on site means you can work at your own pace and clear everything in one go.",
    content: [
      { type: "h2", text: "Step 1: Sort before you skip" },
      {
        type: "p",
        text: "Split everything into four piles: keep, sell or donate, recycle, and dispose. Charity shops and online marketplaces will take furniture and household goods in good condition, which reduces skip space and cost.",
      },
      { type: "h2", text: "Step 2: Pick the right skip" },
      {
        type: "p",
        text: "A typical three-bedroom house usually needs a builder's or large skip. A flat or small clear-out may only need a midi. Use our [skip sizes guide](/blog/skip-sizes-guide-portsmouth) to match the size to the job.",
      },
      { type: "h2", text: "Step 3: Plan the placement" },
      {
        type: "p",
        text: "Put the skip as close to the door as possible. If it has to go on the road, arrange a permit first: [here is how](/blog/do-i-need-a-skip-permit-portsmouth).",
      },
      { type: "h2", text: "Step 4: Load it smartly" },
      {
        type: "ul",
        items: [
          "Put flat, heavy items such as wardrobe doors in first to form a base.",
          "Break furniture down to use space efficiently.",
          "Fill gaps with smaller items and bags.",
          "Do not load above the sides.",
          "Keep prohibited items aside: see [what you can't put in a skip](/blog/what-cant-you-put-in-a-skip).",
        ],
      },
      { type: "h2", text: "Step 5: Book a collection" },
      {
        type: "p",
        text: "Once full, message us and we will arrange collection, usually quickly. If you need the skip for longer, ask about extending your hire.",
      },
      {
        type: "callout",
        text: "Clearing a property with a lot of electrical items, paint or chemicals? Those need separate disposal. Ask us for advice when you get a quote.",
      },
    ],
    faqs: [
      {
        q: "What size skip for a 3-bed house clearance?",
        a: "A builder's skip (6-8 yards) is a common starting point, although a large skip may be needed for a full contents clear-out.",
      },
      {
        q: "Can I put old furniture in a skip?",
        a: "Yes, most furniture can go in a skip. Mattresses and upholstered items with specific fire-retardant chemicals may need special handling.",
      },
      {
        q: "How long can I keep the skip?",
        a: "Standard hire is usually one to two weeks. Ask us if you need longer.",
      },
    ],
    related: [
      "skip-sizes-guide-portsmouth",
      "what-cant-you-put-in-a-skip",
      "choosing-a-skip-hire-company-portsmouth",
    ],
  },
  {
    slug: "choosing-a-skip-hire-company-portsmouth",
    title: "How to Choose a Reliable Skip Hire Company in Portsmouth",
    metaTitle: "Choosing a Skip Hire Company Portsmouth | Checklist",
    description:
      "A checklist for choosing a trustworthy skip hire company in Portsmouth: waste carrier licence, insurance, pricing clarity, recycling and customer service.",
    keywords:
      "best skip hire Portsmouth, skip hire company Portsmouth, licensed waste carrier, reliable skip hire, skip hire near me",
    category: "Skip Hire Guides",
    published: "2026-09-24",
    updated: "2026-10-10",
    readMinutes: 5,
    intro:
      "Under UK law you are responsible for making sure your waste is disposed of properly, even after the skip leaves your property. Picking a reputable company protects you from fines and from fly-tipping being traced back to you.",
    content: [
      { type: "h2", text: "1. Check they are a registered waste carrier" },
      {
        type: "p",
        text: "Anyone transporting waste in the UK must hold a waste carrier licence. You can check a company on the Environment Agency's public register. Ask for their registration number and confirm it matches.",
      },
      { type: "h2", text: "2. Ask about insurance" },
      {
        type: "p",
        text: "Public liability insurance protects you if a skip damages your drive, a car or the road surface. A good company will happily confirm cover.",
      },
      { type: "h2", text: "3. Demand a clear, written quote" },
      {
        type: "p",
        text: "The quote should say what is included: delivery, collection, disposal, hire period and VAT. See the factors that drive price in our [skip hire cost guide](/blog/how-much-does-skip-hire-cost-portsmouth).",
      },
      { type: "h2", text: "4. Look at where the waste goes" },
      {
        type: "p",
        text: "Responsible firms sort and recycle as much as possible. Ask what percentage of waste is diverted from landfill.",
      },
      { type: "h2", text: "5. Local knowledge matters" },
      {
        type: "p",
        text: "A local company knows Portsmouth's tight streets, access issues and permit requirements. See our advice on [skip permits](/blog/do-i-need-a-skip-permit-portsmouth) for why that matters.",
      },
      { type: "h2", text: "Red flags" },
      {
        type: "ul",
        items: [
          "No licence number or reluctance to provide it",
          "Prices far below every other quote",
          "No company address or landline, only a vague online listing",
          "Cash only with no paperwork",
          "Vague answers about where waste goes",
        ],
      },
      {
        type: "callout",
        text: "Portsmouth Skips is a local, Hampshire-based skip hire service. Browse our [skip sizes](/#skip-sizes) or message us on WhatsApp for a free quote.",
      },
    ],
    faqs: [
      {
        q: "How do I check a waste carrier licence?",
        a: "Use the Environment Agency's public register of waste carriers, brokers and dealers and search by company name or registration number.",
      },
      {
        q: "Am I responsible if a skip company fly-tips?",
        a: "You have a duty of care to check your waste is taken by a licensed carrier. Keep a receipt or waste transfer note.",
      },
      {
        q: "Should I get multiple quotes?",
        a: "Yes, but compare like for like: same size, hire period, waste type and inclusions.",
      },
    ],
    related: [
      "how-much-does-skip-hire-cost-portsmouth",
      "do-i-need-a-skip-permit-portsmouth",
      "skip-sizes-guide-portsmouth",
    ],
  },
];

export const blogPosts = allBlogPosts.slice(0, 3);

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
