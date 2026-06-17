/* UNUSED
const Dimensions = Object.freeze(
    {
        "ANTHROPOCENTRISM": 0,
        "ASSIMILATIONISM": 1,
        "AUTHORITARIANISM": 2,
        "AUTOCRACY": 3,
        "ACCUMULATION": 4,
        "DISTRIBUTION": 5,
        "CONSERVATISM": 6,
        "DEMOCRACY": 7,
        "ECOCENTRISM": 8,
        "ELITISM": 9,
        "GLOBALISM": 10,
        "INTERNATIONALISM": 11,
        "ISOLATIONISM": 12,
        "LIBERTARIANISM": 13,
        "MERITOCRACY": 14,
        "MILITARISM": 15,
        "MODERNISM": 16,
        "NATIONALISM": 17,
        "PACIFISM": 18,
        "PARTISANSHIP": 19,
        "PLURALISM": 20,
        "POPULISM": 21,
        "SECULARISM": 22,
        "THEOCRACY": 23
    }
);
*/

const dimensions = {
    "0": {
        "opposite": 8,
        "color": "787878",
        "name": "Anthropocentrism",
        "quote": "“You are not in the universe, you are the universe, an intrinsic part of it. Ultimately you are not a person, but a focal point where the universe is becoming conscious of itself.” - Eckhart Tolle",
        "text": "Higher Anthropocentrism scores signal a belief that humankind holds the right to dominate nature. Those who agree with Anthropocentrism think humanity, being the dominant species in the world, is right to exploit natural resources and systems.",
        "imageSrc": "images/anthropocentrism.png"
    },
    "1": {
        "opposite": 20,
        "color": "612e2c",
        "name": "Assimilationism",
        "quote": "“Immigration without assimilation is an invasion.” - Bobby Jindal",
        "text": "Higher Assimilationism scores imply an agreement with the belief that monocultural societies are the most capable in self-governance. Those who agree with Assimilationism find cultural diversity to be a hindrance, and see common identity as a unifying force.",
        "imageSrc": "images/assimilationism.png"
    },
    "2": {
        "opposite": 13,
        "color": "384b6e",
        "name": "Authoritarianism",
        "quote": "“Freedom does not like crowds.” -  Pierre Claude Boiste",
        "text": "Higher Authoritarianism scores imply a distrust of popular ability to self-control and govern. Those who agree with Authoritarianism believe the most reliable way to benefit a society is to limit its self-damaging tendencies.",
        "imageSrc": "images/authoritarianism.png"
    },
    "3": {
        "opposite": 7,
        "color": "313a4b",
        "name": "Autocracy",
        "quote": "“Democracy leads to anarchy, which is mob rule.” - Plato",
        "text": "Higher Autocracy scores suggest an advocacy of system of government lead by a select few rather than the rule of a majority. Those who agree with Autocracy are tend to distrust the judgement of the people, and prefer the governance of minority designed for governance.",
        "imageSrc": "images/autocracy.png"
    },
    "4": {
        "opposite": 5,
        "color": "3b6812",
        "name": "Accumulation",
        "quote": "“A people... who are possessed of the spirit of commerce, who see and who will pursue their advantages may achieve almost anything.”  - George Washington",
        "text": "Higher Capitalism scores point to an understanding that free market mimicking natural competition is inherently beneficial to society. Those who agree with Capitalism are tend to support economic inequality as an incentive for classes to strive for luxury, furthering society.",
        "imageSrc": "images/accumulation.png"
    },
    "5": {
        "opposite": 4,
        "color": "91110b",
        "name": "Distribution",
        "quote": "“From each according to his ability, to each according to his needs” - Karl Marx",
        "text": "Higher Communism scores indicate an agreement with the notion that any economic model based on inequality is unsustainable, and should be reformed by the proletariat. Those who agree with Communism support the strict redistribution of wealth by a strong authority.",
        "imageSrc": "images/distribution.png"
    },
    "6": {
        "opposite": 16,
        "color": "505827",
        "name": "Conservatism",
        "quote": "“To be conservative, is to prefer the familiar to the unknown, to prefer the tried to the untried, fact to mystery, the actual to the possible...” - Michael Joseph Oakeshott",
        "text": "Higher Conservatism scores show a preference of tradition over new concepts and methodologies. Those who agree with Conservatism wish to protect the established cultural foundation of a society, and reject exterior influences to their way of life.",
        "imageSrc": "images/conservatism.png"
    },
    "7": {
        "opposite": 3,
        "color": "772b84",
        "name": "Democracy",
        "quote": "“Man’s capacity for justice makes democracy possible, but man’s inclination to justice makes democracy necessary.” - Reinhold Niebuhr",
        "text": "Higher Democracy scores show trust in the judgement of the entire people of a nation without discrimination. Those who agree with Democracy believe that given a large enough group, the extreme ideas will cancel one another as ideological minorities, leaving the best decision.",
        "imageSrc": "images/democracy.png"
    },
    "8": {
        "opposite": 0,
        "color": "34771a",
        "name": "Ecocentrism",
        "quote": "“The future will either be green or not at all.” - Bob Brown",
        "text": "Higher Ecocentrism scores imply a stance that nature is inherently entitled to respect and protection as a living construct humanity depends on. Those who agree with Ecocentrism advocate that humanity should cease actions detrimental to nature. ",
        "imageSrc": "images/ecocentrism.png"
    },
    "9": {
        "opposite": 21,
        "color": "324664",
        "name": "Elitism",
        "quote": "“The best argument against democracy is a five-minute conversation with the average voter.” - Winston S. Churchill",
        "text": "Higher Elitism scores suggest a trust in the elite’s capacity to make the correct decisions for a society. Those who agree with Elitism propose that only those above a certain intellectual threshold should be allowed to have input in governance.",
        "imageSrc": "images/elitism.png"
    },
    "10": {
        "opposite": 12,
        "color": "515151",
        "name": "Globalism",
        "quote": "“The world is now too small for anything but brotherhood.” - Arthur Powell Davies",
        "text": "Higher Globalism scores signal an agreement with the idea of a singularly defined world rather than isolated communities interacting with one another. Those who agree with Globalism advocate for global economic and foreign policies rather than relationship-based policies.",
        "imageSrc": "images/globalism.png"
    },
    "11": {
        "opposite": 17,
        "color": "213153",
        "name": "Internationalism",
        "quote": "“The love of one’s country is a splendid thing, but why should love stop at the border?” - Pablo Casals",
        "text": "Higher Internationalism scores indicate a preference for an international community where nationalities and borders are limited to classifications. Those who agree with Internationalism prefer connectivity and cooperation between nations.",
        "imageSrc": "images/internationalism.png"
    },
    "12": {
        "opposite": 10,
        "color": "5c3365",
        "name": "Isolationism",
        "quote": "“Peace, commerce and honest friendship with all nations; entangling alliances with none.” - Thomas Jefferson",
        "text": "Higher Isolationism scores suggest a preference for self-sustainable and closed economy. Those who agree with Isolationism support a nationally contained economy with self-oriented foreign policies, where intervention in other countries is abandoned.",
        "imageSrc": "images/isolationism.png"
    },
    "13": {
        "opposite": 2,
        "color": "7f3173",
        "name": "Libertarianism",
        "quote": "“Integrity has no need of rules.” - Albert Camus",
        "text": "Higher Libertarianism scores signal a firm belief that liberties are the essence of human nature. Those who agree with Libertarianism oppose the limitation of freedoms, and believe the happiest society is an unrestricted society.",
        "imageSrc": "images/libertarianism.png"
    },
    "14": {
        "opposite": 19,
        "color": "923e3b",
        "name": "Meritocracy",
        "quote": "“Whenever possible, people should be judged based on their work and results, not superficial qualities.” - Eric Ries",
        "text": "Higher Meritocracy scores indicate a firm subscription to the idea that progress is secured once authority is given to those who are worthy. Those who agree with Meritocracy believe that people who are capable will lead their societies into prosperity regardless of ideology.",
        "imageSrc": "images/meritocracy.png"
    },
    "15": {
        "opposite": 18,
        "color": "25371f",
        "name": "Militarism",
        "quote": "“War grows out of ordinary human nature.” - Bertrand Russell",
        "text": "Higher Militarism scores indicate an intention to maintain and further one’s military might to ensure protection. Those who agree with Militarism are tend to believe that military strength and intervention are the most reliable methods of securing a nation’s interests.",
        "imageSrc": "images/militarism.png"
    },
    "16": {
        "opposite": 6,
        "color": "212121",
        "name": "Modernism",
        "quote": "“Don't bother about being modern. Unfortunately it is the one thing that, whatever you do, you cannot avoid.” - Salvador Dali",
        "text": "Higher Modernism scores suggest an agreement with the idea that humanity’s advancement is inherently beneficial. Those who agree with Modernism support the ever-present transformation of the society and the state to what is considered contemporary at the time.",
        "imageSrc": "images/modernism.png"
    },
    "17": {
        "opposite": 11,
        "color": "6e2421",
        "name": "Nationalism",
        "quote": "“Our country ought to be dearer to us than ourselves.” - Cicero",
        "text": "Higher Nationalism scores imply an intimacy with one’s nation, its people, values, history, and culture. Those who agree with Nationalism are tend to prefer the wellbeing of their nation and people over others’.",
        "imageSrc": "images/nationalism.png"
    },
    "18": {
        "opposite": 15,
        "color": "577baa",
        "name": "Pacifism",
        "quote": "“Nothing will end war unless the peoples themselves refuse to go to war.” - Albert Einstein",
        "text": "Higher Pacifism scores show a desire to establish peaceful interactions as the basis for international affairs. Those who agree with Pacifism reject military action in international policies, and prefer diplomatic options.",
        "imageSrc": "images/pacifism.png"
    },
    "19": {
        "opposite": 14,
        "color": "66253c",
        "name": "Partisanship",
        "quote": "“It is impossible, maybe undesirable, to take partisanship out of the political process.” - David Souter",
        "text": "Higher Partisanism scores imply a confidence in the necessity of loyalty and devotion to a central authority. Those who agree with Partisanism support a coherent government with devotion to the same position of power.",
        "imageSrc": "images/partisanship.png"
    },
    "20": {
        "opposite": 1,
        "color": "250066",
        "name": "Pluralism",
        "quote": "“Pluralism isn't just diversity; it's something we create out of this diversity.” - Diana L. Eck",
        "text": "Higher Pluralism scores signal a preference of diverse and polyvocal societies with complete inclusion. Those who agree with Pluralism interpret societal diversity as a strength in governance and decision-making.",
        "imageSrc": "images/pluralism.png"
    },
    "21": {
        "opposite": 9,
        "color": "5c3365",
        "name": "Populism",
        "quote": "“Populism is not a style, it's a people's rebellion against the iron grip that big corporations have on our country - including our economy, government, media, and environment.” - Jim Hightower",
        "text": "Higher Populism scores indicate confidence in the intellectual capabilities and self-awareness of the common folk when it comes to governance. Those who agree with Populism believe that appealing to the demands of the general populace should be the optimal goal of the state.",
        "imageSrc": "images/populism.png"
    },
    "22": {
        "opposite": 23,
        "color": "17223f",
        "name": "Secularism",
        "quote": "“Let them worship as they will, every man can follow his own conscience provided it doesn’t interfere with sane reason and bid him act against the liberty of his fellow men.” - Mustafa Kemal Atatürk",
        "text": "Higher Secularism scores indicate an advocacy of a state cleansed of religion and religious organizations. Those who agree with Secularism see religion as an intrusion of government affairs, and support the protection of all faiths in the society with no bias.",
        "imageSrc": "images/secularism.png"
    },
    "23": {
        "opposite": 22,
        "color": "30552d",
        "name": "Theocracy",
        "quote": "“Theocracy is … trying to live by God’s principles instead of just living selfishly.” - Matt Smith",
        "text": "Higher Theocracy scores point to the notion of religious dictations being the most applicable for governance. Those who agree with Theocracy believe that following religious law is the only path to salvation in both the mortal world and the afterlife.",
        "imageSrc": "images/theocracy.png"
    }
};

// dimensions is a browser global — module.exports removed for static use.
