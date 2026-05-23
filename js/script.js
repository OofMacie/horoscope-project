const wheelEl = document.querySelector(".cosmic-wheel");
const zodiacBox = document.querySelector(".zodiac-outer");
let boxVisible = false;

wheelEl.addEventListener("click", horoscope);

function horoscope() {
    const userBirthday = document.querySelector(".birthday-selector").value;
    const dateValue = new Date(userBirthday);
    const monthNumber = dateValue.getMonth() + 1;
    const day = dateValue.getDate();
    zodiacSign(monthNumber, day);
}

function zodiacSign(monthNumber, day) {
    if (boxVisible) {
        zodiacBox.style.display = "none";
        boxVisible = false;
    } else {
        zodiacBox.style.display = "flex";
        boxVisible = true;
    }

    const january   = 1;
    const february  = 2;
    const march     = 3;
    const april     = 4;
    const may       = 5;
    const june      = 6;
    const july      = 7;
    const august    = 8;
    const september = 9;
    const october   = 10;
    const november  = 11;
    const december  = 12;

    let sign = "";

    if (monthNumber === december) {
        sign = day < 21 ? "Sagittarius" : "Capricorn";
    } else if (monthNumber === january) {
        sign = day < 19 ? "Capricorn" : "Aquarius";
    } else if (monthNumber === february) {
        sign = day < 18 ? "Aquarius" : "Pisces";
    } else if (monthNumber === march) {
        sign = day < 20 ? "Pisces" : "Aries";
    } else if (monthNumber === april) {
        sign = day < 19 ? "Aries" : "Taurus";
    } else if (monthNumber === may) {
        sign = day < 20 ? "Taurus" : "Gemini";
    } else if (monthNumber === june) {
        sign = day < 21 ? "Gemini" : "Cancer";
    } else if (monthNumber === july) {
        sign = day < 22 ? "Cancer" : "Leo";
    } else if (monthNumber === august) {
        sign = day < 22 ? "Leo" : "Virgo";
    } else if (monthNumber === september) {
        sign = day < 22 ? "Virgo" : "Libra";
    } else if (monthNumber === october) {
        sign = day < 23 ? "Libra" : "Scorpio";
    } else if (monthNumber === november) {
        sign = day < 21 ? "Scorpio" : "Sagittarius";
    }

    document.querySelector(".zodiac").textContent = sign;
    document.querySelector(".zodiac2").textContent = sign;

    const zodiacImages = {
        "Aries":        "/Images/zodiac/Aries.jpg",
        "Taurus":       "/Images/zodiac/Taurus.jpg",
        "Gemini":       "/Images/zodiac/Gemini.jpg",
        "Cancer":       "/Images/zodiac/Cancer.jpg",
        "Leo":          "/Images/zodiac/Leo.jpg",
        "Virgo":        "/Images/zodiac/Virgo.jpg",
        "Libra":        "/Images/zodiac/Libra.jpg",
        "Scorpio":      "/Images/zodiac/Scorpio.jpg",
        "Sagittarius":  "/Images/zodiac/Sagittarius.png",
        "Capricorn":    "/Images/zodiac/Capricornus.jpg",
        "Aquarius":     "/Images/zodiac/Aquarius.jpg",
        "Pisces":       "/Images/zodiac/Pisces.jpg"
    };

    const constellationImages = {
        "Aries":        "/Images/constellation/AriesConst.svg",
        "Taurus":       "/Images/constellation/TaurusConst.svg",
        "Gemini":       "/Images/constellation/GeminiConst.svg",
        "Cancer":       "/Images/constellation/CancerConst.svg",
        "Leo":          "/Images/constellation/LeoConst.svg",
        "Virgo":        "/Images/constellation/VirgoConst.svg",
        "Libra":        "/Images/constellation/LibraConst.svg",
        "Scorpio":      "/Images/constellation/ScorpioConst.svg",
        "Sagittarius":  "/Images/constellation/SagittariusConst.svg",
        "Capricorn":    "/Images/constellation/CapricornConst.svg",
        "Aquarius":     "/Images/constellation/AquariusConst.svg",
        "Pisces":       "/Images/constellation/PiscesConst.svg"
    };

    const zodiacData = {
        "Aries": {
            element:     "✦ Fire — Cardinal — Ruled by Mars",
            personality: "✦Traits✦ Bold, independent, pioneering, and fiercely competitive. Aries charges ahead where others pause. Raw energy is their engine — impatience and impulsiveness are the price they pay for it.",
            love:        "✦Love✦ Aries leads in love, passionate and direct. They crave the chase. A partner with matching ambition who lets them take the wheel without dimming their fire is the match they need.",
            career:      "✦Career✦ Driven by a need to be first. Aries thrives wherever they set the pace and call the shots — entrepreneurship, leadership, high-stakes environments. They compete on their own terms.",
            future:      "✧ 2026 ✧ Saturn and Neptune both enter Aries this year, a rare double ingress marking serious personal reinvention. Career breakthroughs are coming. Patience is the secret weapon."
        },
        "Taurus": {
            element:     "✦ Earth — Fixed — Ruled by Venus",
            personality: "✦Traits✦ Patient, sensual, grounded, and quietly unstoppable. Taurus builds slowly and builds to last. Stubbornness is the shadow side. Loyalty and reliability are the real superpowers.",
            love:        "✦Love✦ Taurus loves with steadiness and full devotion, craving comfort and security over fireworks. They take time to open up. Once committed, though, they stay. Love is shown through presence, not performance.",
            career:      "✦Career✦ Finance, design, culinary arts, agriculture, wellness — any field that rewards patience and quality. Taurus builds wealth steadily and resists unnecessary risk. They are almost always right to.",
            future:      "✧ 2026 ✧ Uranus finally leaves Taurus in April, ending years of upheaval. Financial growth and romantic transformation follow. Steady progress replaces the instability. Long-overdue rewards are arriving."
        },
        "Gemini": {
            element:     "✦ Air — Mutable — Ruled by Mercury",
            personality: "✦Traits✦ Curious, witty, and adaptable to the point of seeming like two different people depending on the day. Gemini lives in ideas and conversation. The so-called inconsistency is just an insatiable hunger to experience everything.",
            love:        "✦Love✦ Mental stimulation comes before anything else. Gemini needs a partner who stays genuinely interesting and can match their wit. Space to breathe is non-negotiable. They love freely or not at all.",
            career:      "✦Career✦ Writing, media, teaching, technology, sales — anywhere ideas move fast and variety is built in. Routine drains them. A dynamic environment brings out the best they have to offer.",
            future:      "✧ 2026 ✧ Uranus enters Gemini in late April, opening one of the most significant eras of your lifetime. Personal reinvention, unexpected opportunities, and your communication gifts open doors that were previously sealed shut."
        },
        "Cancer": {
            element:     "✦ Water — Cardinal — Ruled by the Moon",
            personality: "✦Traits✦ Self-protective, sensitive, and deeply nurturing. Cancer retreats into their shell when hurt, just like the crab that symbolizes them. Their inner world is complex. Their loyalty to those they love is something else entirely.",
            love:        "✦Love✦ Cancer loves with security at the center of everything. They take things slowly and need time to fully trust. When they do open up, they are among the most devoted partners in the zodiac.",
            career:      "✦Career✦ Counseling, healthcare, education, hospitality, real estate — anywhere they can care for others or build something that feels like home. They pour themselves completely into meaningful work.",
            future:      "✧ 2026 ✧ Jupiter sits in Cancer for the first half of the year, expanding your emotional world and deepening your closest connections. Love and family flourish. A meaningful new chapter opens mid-year."
        },
        "Leo": {
            element:     "✦ Fire — Fixed — Ruled by the Sun",
            personality: "✦Traits✦ Radiant, generous, theatrical, and born to lead. Leo commands any room with genuine warmth and charisma. The ego can run hot. The heart runs hotter. Few signs give back as freely.",
            love:        "✦Love✦ Leo loves big and wants the same energy returned. They want to be celebrated publicly and truly seen privately. A partner who does both keeps a Leo completely and permanently.",
            career:      "✦Career✦ Performance, leadership, entertainment, design, creative direction — anywhere their presence and creativity are the actual product. Recognition is fuel. Without it, they slow down considerably.",
            future:      "✧ 2026 ✧ Jupiter enters Leo in late June, igniting a period of creative breakthroughs and radiant confidence. A Total Solar Eclipse in Leo on August 12 marks a turning point that many Leos will call life-defining."
        },
        "Virgo": {
            element:     "✦ Earth — Mutable — Ruled by Mercury",
            personality: "✦Traits✦ Analytical, precise, hardworking, and quietly brilliant. Virgo notices what everyone else misses. They fix what others ignore. Their critical mind is a genuine gift and their biggest source of self-inflicted pressure.",
            love:        "✦Love✦ Virgo shows love through acts of service rather than grand gestures. They give practically and consistently. A partner who notices the small things and appreciates depth over drama will keep Virgo close.",
            career:      "✦Career✦ Medicine, research, editing, data analysis, nutrition — any field where precision and expertise actually matter. Every team has a Virgo they cannot function without.",
            future:      "✧ 2026 ✧ A Total Lunar Eclipse in Virgo on March 3 brings powerful clarity and long-overdue release. Health, work-life balance, and personal refinement define the year. One significant chapter closes cleanly."
        },
        "Libra": {
            element:     "✦ Air — Cardinal — Ruled by Venus",
            personality: "✦Traits✦ Charming, deeply fair-minded, and gifted with an aesthetic sense that borders on uncanny. Libra seeks harmony everywhere. Seeing every side that clearly is a gift. It is also the reason decisions take so long.",
            love:        "✦Love✦ Libra is the zodiac's natural romantic. Partnership-oriented and genuinely attentive, they give as much as they want in return. Love works best when it feels equal, beautiful, and intellectually alive.",
            career:      "✦Career✦ Law, diplomacy, the arts, fashion, mediation, counseling — anywhere beauty, fairness, and human connection intersect. Libra belongs in spaces where balance actually matters.",
            future:      "✧ 2026 ✧ Partnerships come into sharp focus this year. Your gift for negotiation and harmony is in high demand as major planetary shifts reshape the relational world around you. Meaningful alliances form."
        },
        "Scorpio": {
            element:     "✦ Water — Fixed — Ruled by Pluto and Mars",
            personality: "✦Traits✦ Intense, perceptive, magnetic, and not one to be underestimated. Scorpio sees through surfaces with unsettling accuracy. They guard their inner world fiercely. Those allowed inside find a loyalty that almost never wavers.",
            love:        "✦Love✦ Scorpio loves with rare intensity and expects complete honesty in return. Trust is everything to them. Betrayal is long remembered. A partner willing to go deep and stay vulnerable earns a devotion most people never experience.",
            career:      "✦Career✦ Psychology, research, investigation, finance, medicine — any field requiring depth, focus, and the willingness to go where others hesitate. Scorpio does not do surface-level work.",
            future:      "✧ 2026 ✧ Deep transformation is the theme for the year. Pluto in Aquarius continues reshaping your social world while eclipses trigger powerful manifestations. What you release now makes room for something significantly better."
        },
        "Sagittarius": {
            element:     "✦ Fire — Mutable — Ruled by Jupiter",
            personality: "✦Traits✦ Adventurous, philosophical, blunt, and genuinely allergic to feeling trapped. Sagittarius chases meaning the way other signs chase security. Their honesty can cut. They mean it as a gift.",
            love:        "✦Love✦ Freedom is the condition for everything. Sagittarius needs a partner who is genuinely exciting and secure enough not to take their need for independence personally. Clinginess ends things fast.",
            career:      "✦Career✦ Teaching, travel, writing, law, philosophy, publishing, the outdoors — any field that expands their world and keeps them moving forward. Small thinking is not something they can work inside of.",
            future:      "✧ 2026 ✧ Adventure and expansion define the year. Jupiter's movements favor your natural optimism and philosophical curiosity. An opportunity to travel, study, or completely shift your worldview arrives. Take it seriously."
        },
        "Capricorn": {
            element:     "✦ Earth — Cardinal — Ruled by Saturn",
            personality: "✦Traits✦ Disciplined, ambitious, patient, and capable of playing a longer game than almost anyone else in the room. Capricorn builds while others are still making plans. Their reserve reads as cold. It is just focus.",
            love:        "✦Love✦ Capricorn takes love as seriously as everything else. They move slowly, commit fully, and stay. When they choose a partner it is a real choice, not a habit or convenience.",
            career:      "✦Career✦ Finance, business, government, architecture, law — any field where long-term strategy and demonstrated competence are rewarded. Capricorn does not burn out. They just keep climbing.",
            future:      "✧ 2026 ✧ Career milestones and recognition mark this year. Saturn in Pisces early in the year brings lessons about emotional boundaries. By mid-year, authority and visible success start reflecting the work you quietly put in for years."
        },
        "Aquarius": {
            element:     "✦ Air — Fixed — Ruled by Uranus",
            personality: "✦Traits✦ Innovative, humanitarian, fiercely independent, and ahead of their time in ways that occasionally alienate the people around them. Aquarius thinks in systems and futures. Their detachment is not coldness. It is perspective.",
            love:        "✦Love✦ Aquarius needs a partner who respects their individuality and actually engages them intellectually. Friendship is the foundation. They rarely fall for someone they cannot genuinely talk to for hours.",
            career:      "✦Career✦ Technology, science, social activism, humanitarian work, design, progressive fields of all kinds — anywhere they get to build something that did not exist before or fix something that should not exist anymore.",
            future:      "✧ 2026 ✧ Pluto in Aquarius all year continues triggering deep intellectual rebirth and reshaping your role in your community. Mars joins Aquarius at year's start with bold, unconventional energy. This is your era."
        },
        "Pisces": {
            element:     "✦ Water — Mutable — Ruled by Neptune",
            personality: "✦Traits✦ Dreamy, deeply empathetic, creative, and spiritually attuned in ways they sometimes cannot even put words to. Pisces absorbs the emotional atmosphere of every room they enter. Boundaries are something they have to actively learn.",
            love:        "✦Love✦ Pisces loves romantically and completely, often seeing the best possible version of their partner rather than the real one. They need someone grounded enough to protect their softness without suffocating it.",
            career:      "✦Career✦ Art, music, film, healing, spiritual work, photography, writing — any field where intuition and imagination are actual skills. Pisces should never take a job that requires them to stop feeling things.",
            future:      "✧ 2026 ✧ Saturn and Neptune both move through Pisces early in the year, combining structure with spiritual depth. A Pisces lunar eclipse in August asks you to release what no longer serves the person you are becoming."
        }
    };

    const zodiacImg = document.querySelector(".zodiac-urania");
    zodiacImg.src = zodiacImages[sign];

    const constellationImg = document.querySelector(".zodiac-const");
    constellationImg.src = constellationImages[sign];

    const data = zodiacData[sign];
    document.querySelector(".pbox-element").textContent = data.element;
    document.querySelector(".pbox-personality").textContent = data.personality;
    document.querySelector(".pbox-love").textContent  = data.love;
    document.querySelector(".pbox-career").textContent  = data.career;
    document.querySelector(".pbox-future").textContent  = data.future;


}
