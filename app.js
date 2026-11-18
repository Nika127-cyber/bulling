/* Kindness Club — complete local English → Georgian translation + interactions. */
(() => {
  "use strict";

  const normalize = (value) => String(value ?? "")
    .normalize("NFKC")
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/^[\s"'“”‘’.,!?;:()[\]{}]+|[\s"'“”‘’.,!?;:()[\]{}]+$/g, "");

  const words = {
  "bullying": "ბულინგი",
  "bully": "მჩაგვრელი",
  "bullies": "მჩაგვრელები",
  "bullied": "დაჩაგრული",
  "kindness": "სიკეთე",
  "kind": "კეთილი",
  "unkind": "არაკეთილი",
  "respectful": "პატივისცემით სავსე",
  "respect": "პატივისცემა",
  "empathy": "თანაგრძნობა",
  "courage": "გამბედაობა",
  "brave": "გაბედული",
  "safe": "უსაფრთხო",
  "safer": "უფრო უსაფრთხო",
  "safety": "უსაფრთხოება",
  "unsafe": "დაუცველი",
  "danger": "საფრთხე",
  "dangerous": "საშიში",
  "support": "მხარდაჭერა",
  "help": "დახმარება",
  "trusted": "სანდო",
  "adult": "ზრდასრული",
  "parent": "მშობელი",
  "parents": "მშობლები",
  "teacher": "მასწავლებელი",
  "counsellor": "კონსულტანტი",
  "counselor": "კონსულტანტი",
  "coach": "მწვრთნელი",
  "relative": "ნათესავი",
  "friend": "მეგობარი",
  "friends": "მეგობრები",
  "friendship": "მეგობრობა",
  "friendships": "მეგობრობა",
  "person": "ადამიანი",
  "person's": "ადამიანის",
  "people": "ადამიანები",
  "someone": "ვიღაც",
  "somebody": "ვიღაც",
  "everyone": "ყველა",
  "anyone": "ნებისმიერი ადამიანი",
  "another": "სხვა",
  "others": "სხვები",
  "group": "ჯგუფი",
  "school": "სკოლა",
  "classroom": "საკლასო ოთახი",
  "class": "კლასი",
  "online": "ონლაინ",
  "internet": "ინტერნეტი",
  "website": "ვებგვერდი",
  "websites": "ვებგვერდები",
  "game": "თამაში",
  "games": "თამაშები",
  "message": "შეტყობინება",
  "messages": "შეტყობინებები",
  "social": "სოციალური",
  "media": "მედია",
  "cyberbullying": "კიბერბულინგი",
  "verbal": "სიტყვიერი",
  "physical": "ფიზიკური",
  "emotional": "ემოციური",
  "digital": "ციფრული",
  "repeated": "განმეორებადი",
  "repeatedly": "განმეორებით",
  "intentional": "განზრახი",
  "intentionally": "განზრახ",
  "behaviour": "ქცევა",
  "behavior": "ქცევა",
  "aggressive": "აგრესიული",
  "aggression": "აგრესია",
  "harmful": "მავნე",
  "harm": "ზიანი",
  "hurts": "ტკენს",
  "hurt": "ტკენა",
  "hurting": "ტკენა",
  "scares": "აშინებს",
  "scare": "შეშინება",
  "intimidates": "აშინებს",
  "intimidate": "შეშინება",
  "excludes": "რიყავს",
  "exclude": "გარიყვა",
  "excluded": "გარიყული",
  "exclusion": "გარიყვა",
  "humiliates": "ამცირებს",
  "humiliate": "დამცირება",
  "frighten": "შეშინება",
  "frightens": "აშინებს",
  "embarrass": "შერცხვენა",
  "harass": "შევიწროება",
  "threat": "მუქარა",
  "threats": "მუქარები",
  "threaten": "დამუქრება",
  "insults": "შეურაცხყოფა",
  "insult": "შეურაცხყოფა",
  "cruel": "სასტიკი",
  "joke": "ხუმრობა",
  "jokes": "ხუმრობები",
  "teasing": "დაცინვა",
  "comment": "კომენტარი",
  "comments": "კომენტარები",
  "rumour": "ჭორი",
  "rumours": "ჭორები",
  "rumor": "ჭორი",
  "rumors": "ჭორები",
  "spread": "გავრცელება",
  "spreading": "გავრცელება",
  "leave": "დატოვება",
  "leaving": "დატოვება",
  "out": "-დან",
  "purpose": "მიზანი",
  "hitting": "დარტყმა",
  "hit": "დარტყმა",
  "pushing": "ბიძგება",
  "push": "ბიძგება",
  "tripping": "ფეხის დადება",
  "damaging": "დაზიანება",
  "belongings": "პირადი ნივთები",
  "unwanted": "არასასურველი",
  "contact": "კონტაქტი",
  "power": "ძალაუფლება",
  "imbalance": "უთანასწორობა",
  "pattern": "განმეორებადი ხასიათი",
  "intention": "განზრახვა",
  "targeted": "სამიზნედ ქცეული",
  "defend": "დაცვა",
  "themselves": "საკუთარი თავი",
  "disagreement": "უთანხმოება",
  "happens": "ხდება",
  "happen": "მოხდენა",
  "happened": "მოხდა",
  "happening": "მიმდინარე მოვლენა",
  "visible": "ხილული",
  "obvious": "აშკარა",
  "quiet": "ჩუმი",
  "difficult": "რთული",
  "notice": "შემჩნევა",
  "noticing": "შემჩნევა",
  "recognise": "ამოცნობა",
  "recognising": "ამოცნობა",
  "recognize": "ამოცნობა",
  "recognizing": "ამოცნობა",
  "understand": "გაგება",
  "understanding": "გაგება",
  "learn": "სწავლა",
  "learning": "სწავლა",
  "knowledge": "ცოდნა",
  "effect": "შედეგი",
  "effects": "შედეგები",
  "affect": "გავლენის მოხდენა",
  "affects": "გავლენას ახდენს",
  "confidence": "თავდაჯერებულობა",
  "self-confidence": "თვითშეფასება",
  "feelings": "გრძნობები",
  "feeling": "გრძნობა",
  "body": "სხეული",
  "relationships": "ურთიერთობები",
  "relationship": "ურთიერთობა",
  "ability": "უნარი",
  "differently": "განსხვავებულად",
  "reacts": "რეაგირებს",
  "react": "რეაგირება",
  "deserves": "იმსახურებს",
  "deserve": "იმსახურებ",
  "fear": "შიში",
  "sadness": "სევდა",
  "loneliness": "მარტოობა",
  "shame": "სირცხვილი",
  "anger": "ბრაზი",
  "lower": "დაბალი",
  "trouble": "პრობლემა",
  "concentrating": "კონცენტრირება",
  "concentrate": "კონცენტრირება",
  "missing": "გაცდენა",
  "falling": "ჩამორჩენა",
  "behind": "უკან",
  "avoiding": "თავის არიდება",
  "activities": "აქტივობები",
  "headache": "თავის ტკივილი",
  "headaches": "თავის ტკივილები",
  "stomach": "მუცელი",
  "aches": "ტკივილები",
  "sleep": "ძილი",
  "problems": "პრობლემები",
  "tense": "დაძაბული",
  "exhausted": "გამოფიტული",
  "losing": "დაკარგვა",
  "trust": "ნდობა",
  "withdrawing": "განმარტოება",
  "harder": "უფრო რთული",
  "privately": "პირადულად",
  "worried": "შეშფოთებული",
  "fine": "კარგად",
  "laugh": "სიცილი",
  "shared": "საერთო",
  "responsibility": "პასუხისმგებლობა",
  "solve": "მოგვარება",
  "alone": "მარტო",
  "should": "უნდა",
  "never": "არასდროს",
  "intervene": "ჩარევა",
  "intervention": "ჩარევა",
  "simple": "მარტივი",
  "report": "შეტყობინება",
  "save": "შენახვა",
  "evidence": "მტკიცებულება",
  "useful": "სასარგებლო",
  "involve": "ჩართვა",
  "involved": "ჩართული",
  "listen": "მოსმენა",
  "listens": "უსმენს",
  "blaming": "დადანაშაულება",
  "blame": "დადანაშაულება",
  "glad": "მიხარია",
  "told": "მითხარი",
  "tell": "მოყოლა",
  "telling": "თქმა",
  "clear": "ნათელი",
  "clearly": "ნათლად",
  "forward": "გადაგზავნა",
  "content": "შინაარსი",
  "check": "შემოწმება",
  "later": "მოგვიანებით",
  "first": "პირველი",
  "follow": "გაყოლა",
  "screenshot": "ეკრანის სურათი",
  "screenshots": "ეკრანის სურათები",
  "date": "თარიღი",
  "dates": "თარიღები",
  "username": "მომხმარებლის სახელი",
  "usernames": "მომხმარებლის სახელები",
  "account": "ანგარიში",
  "block": "დაბლოკვა",
  "platform": "პლატფორმა",
  "serious": "სერიოზული",
  "seriously": "სერიოზულად",
  "choice": "არჩევანი",
  "choices": "არჩევანი",
  "responsible": "პასუხისმგებელი",
  "conversation": "საუბარი",
  "explain": "ახსნა",
  "explanation": "განმარტება",
  "plan": "გეგმა",
  "next": "შემდეგი",
  "keep": "გაგრძელება",
  "staying": "დარჩენა",
  "silent": "ჩუმად",
  "silence": "სიჩუმე",
  "boundaries": "საზღვრები",
  "boundary": "საზღვარი",
  "set": "დაწესება",
  "choose": "არჩევა",
  "words": "სიტყვები",
  "word": "სიტყვა",
  "meaning": "მნიშვნელობა",
  "georgian": "ქართული",
  "translate": "თარგმნა",
  "translation": "თარგმანი",
  "mode": "რეჟიმი",
  "project": "პროექტი",
  "explore": "შესწავლა",
  "chapter": "თავი",
  "chapters": "თავები",
  "basics": "საფუძვლები",
  "forms": "ფორმები",
  "form": "ფორმა",
  "impact": "გავლენა",
  "action": "მოქმედება",
  "actions": "მოქმედებები",
  "practical": "პრაქტიკული",
  "quiz": "ტესტი",
  "question": "კითხვა",
  "questions": "კითხვები",
  "answer": "პასუხი",
  "answers": "პასუხები",
  "correct": "სწორი",
  "wrong": "არასწორი",
  "result": "შედეგი",
  "quick": "მოკლე",
  "pressure": "ზეწოლა",
  "chance": "შესაძლებლობა",
  "practise": "ვარჯიში",
  "practice": "ვარჯიში",
  "know": "ცოდნა",
  "statement": "განცხადება",
  "describes": "აღწერს",
  "describe": "აღწერა",
  "tools": "საშუალებები",
  "using": "გამოყენება",
  "send": "გაგზავნა",
  "sending": "გაგზავნა",
  "temporary": "დროებითი",
  "mood": "განწყობა",
  "stress": "სტრესი",
  "widely": "ფართოდ",
  "try": "ცდა",
  "again": "კვლავ",
  "start": "დაწყება",
  "home": "მთავარი",
  "get": "მიღება",
  "stop": "შეჩერება",
  "change": "შეცვლა",
  "everything": "ყველაფერი",
  "nutshell": "მოკლედ",
  "can": "შეუძლია",
  "could": "შეეძლო",
  "will": "მომავალი დროის მაჩვენებელი",
  "may": "შეიძლება",
  "might": "შეიძლება",
  "make": "გაკეთება",
  "makes": "აკეთებს",
  "made": "შექმნილი",
  "small": "პატარა",
  "big": "დიდი",
  "large": "დიდი",
  "more": "მეტი",
  "less": "ნაკლები",
  "than": "ვიდრე",
  "once": "ერთხელ",
  "before": "მანამდე",
  "after": "შემდეგ",
  "around": "გარშემო",
  "with": "თან",
  "without": "გარეშე",
  "against": "წინააღმდეგ",
  "for": "-თვის",
  "from": "-დან",
  "into": "-ში",
  "in": "-ში",
  "on": "-ზე",
  "at": "-თან",
  "by": "მიერ",
  "of": "-ის",
  "to": "-ს",
  "and": "და",
  "or": "ან",
  "but": "მაგრამ",
  "because": "იმიტომ რომ",
  "if": "თუ",
  "while": "ხოლო",
  "when": "როდესაც",
  "what": "რა",
  "which": "რომელი",
  "who": "ვინ",
  "why": "რატომ",
  "how": "როგორ",
  "this": "ეს",
  "that": "ის",
  "these": "ესენი",
  "those": "ისინი",
  "it": "ის",
  "its": "მისი",
  "they": "ისინი",
  "them": "მათ",
  "their": "მათი",
  "we": "ჩვენ",
  "us": "ჩვენ",
  "our": "ჩვენი",
  "you": "შენ",
  "your": "შენი",
  "yourself": "საკუთარი თავი",
  "i": "მე",
  "me": "მე",
  "my": "ჩემი",
  "is": "არის",
  "are": "არიან",
  "was": "იყო",
  "were": "იყვნენ",
  "be": "ყოფნა",
  "been": "ყოფილა",
  "being": "ყოფნა",
  "do": "კეთება",
  "does": "აკეთებს",
  "did": "გააკეთა",
  "have": "აქვს",
  "has": "აქვს",
  "had": "ჰქონდა",
  "not": "არ",
  "no": "არა",
  "yes": "დიახ",
  "a": "",
  "an": "",
  "the": "",
  "some": "ზოგი",
  "many": "ბევრი",
  "all": "ყველა",
  "any": "ნებისმიერი",
  "every": "ყოველი",
  "each": "თითოეული",
  "other": "სხვა",
  "own": "საკუთარი",
  "same": "იგივე",
  "different": "განსხვავებული",
  "real": "რეალური",
  "really": "ნამდვილად",
  "good": "კარგი",
  "better": "უკეთესი",
  "best": "საუკეთესო",
  "bad": "ცუდი",
  "right": "სწორი",
  "important": "მნიშვნელოვანი",
  "little": "პატარა",
  "sometimes": "ზოგჯერ",
  "always": "ყოველთვის",
  "usually": "ჩვეულებრივ",
  "today": "დღეს",
  "now": "ახლა",
  "here": "აქ",
  "there": "იქ",
  "then": "მაშინ",
  "last": "ბოლო",
  "something": "რაღაც",
  "nothing": "არაფერი",
  "day": "დღე",
  "brighter": "უფრო ნათელი",
  "waiting": "ელოდება",
  "look": "შეხედვა",
  "act": "მოქმედება",
  "acts": "მოქმედებები",
  "speak": "საუბარი",
  "speaking": "საუბარი",
  "say": "თქმა",
  "said": "თქვა",
  "says": "ამბობს",
  "give": "მიცემა",
  "take": "აღება",
  "tap": "დაჭერა",
  "click": "დაჭერა",
  "see": "ნახვა",
  "show": "ჩვენება",
  "find": "პოვნა",
  "through": "მეშვეობით",
  "pace": "ტემპი",
  "included": "ჩართული",
  "respected": "პატივცემული",
  "treat": "მოპყრობა",
  "feel": "გრძნობა",
  "belong": "კუთვნილება",
  "room": "ადგილი",
  "stand": "დგომა",
  "educational": "საგანმანათლებლო",
  "judgement": "განსჯა",
  "judgment": "განსჯა",
  "bright": "ნათელი",
  "ripple": "ტალღოვანი გავლენა",
  "genuine": "გულწრფელი",
  "compliment": "კომპლიმენტი",
  "thank": "მადლობის გადახდა",
  "helped": "დაგეხმარა",
  "carefully": "ყურადღებით",
  "talk": "საუბარი",
  "appreciate": "დაფასება",
  "invite": "მოწვევა",
  "join": "შეერთება",
  "beside": "გვერდით",
  "left": "მიტოვებული",
  "want": "სურვილი",
  "idea": "იდეა",
  "remember": "დამახსოვრება",
  "reminder": "შეხსენება",
  "friendly": "მეგობრული",
  "enjoys": "სიამოვნებს",
  "fault": "ბრალი",
  "ignore": "უგულებელყოფა",
  "only": "მხოლოდ",
  "share": "გაზიარება",
  "post": "პოსტი",
  "reporting": "შეტყობინება",
  "concentration": "კონცენტრაცია",
  "positive": "დადებითი",
  "step": "ნაბიჯი",
  "steps": "ნაბიჯები",
  "key": "მთავარი",
  "ideas": "იდეები",
  "champion": "ჩემპიონი",
  "effort": "ძალისხმევა",
  "review": "გადახედვა",
  "score": "ქულა",
  "five": "ხუთი",
  "four": "ოთხი",
  "three": "სამი",
  "two": "ორი",
  "one": "ერთი",
  "zero": "ნული",
  "about": "შესახებ",
  "already": "უკვე",
  "as": "როგორც",
  "ask": "თხოვნა / კითხვა",
  "back": "უკან",
  "between": "შორის",
  "club": "კლუბი",
  "common": "გავრცელებული",
  "confront": "დაპირისპირება",
  "create": "შექმნა",
  "definition": "განმარტება",
  "difference": "განსხვავება",
  "difficulty": "სირთულე",
  "don't": "არ / ნუ",
  "don’t": "არ / ნუ",
  "else's": "სხვისი",
  "emergency": "გადაუდებელი",
  "emotions": "ემოციები",
  "experience": "გამოცდილება",
  "facts": "ფაქტები",
  "finding": "პოვნა",
  "great": "შესანიშნავი",
  "grows": "იზრდება",
  "health": "ჯანმრთელობა",
  "helpful": "სასარგებლო",
  "helps": "გვეხმარება",
  "hurtful": "მტკივნეული",
  "immediate": "დაუყოვნებელი",
  "involves": "მოიცავს",
  "involving": "ჩართვა",
  "i'm": "მე ვარ",
  "just": "უბრალოდ",
  "learned": "ისწავლე",
  "life": "ცხოვრება",
  "link": "ბმული",
  "listening": "მოსმენა",
  "local": "ადგილობრივი",
  "mean": "ნიშნავს",
  "means": "ნიშნავს",
  "meant": "განკუთვნილი",
  "mental": "ფსიქიკური",
  "move": "გადაადგილება",
  "name-calling": "შეურაცხმყოფელი სახელებით მიმართვა",
  "need": "საჭიროება",
  "one-time": "ერთჯერადი",
  "place": "ადგილი",
  "playing": "თამაში",
  "put": "ჩადება",
  "reach": "დაკავშირება",
  "respond": "რეაგირება",
  "response": "რეაგირება",
  "risk": "რისკი",
  "safely": "უსაფრთხოდ",
  "scored": "მიიღე ქულა",
  "sentence": "წინადადება",
  "services": "სამსახურები",
  "signs": "ნიშნები",
  "solutions": "გამოსავლები",
  "someone's": "ვიღაცის",
  "spaces": "სივრცეები",
  "still": "მაინც",
  "stopping": "შეჩერება",
  "strong": "ძლიერი",
  "such": "ისეთი",
  "takes": "იღებს",
  "tells": "ეუბნება",
  "test": "ტესტი",
  "tip": "რჩევა",
  "treated": "მოპყრობილი",
  "turning": "განწყობა / გადაქცევა",
  "type": "ტიპი",
  "up": "ზევით",
  "use": "გამოყენება",
  "wants": "სურს",
  "way": "გზა",
  "ways": "გზები",
  "wellbeing": "კეთილდღეობა",
  "work": "მუშაობა / შემუშავება",
  "alt-click": "Alt ღილაკით დაწკაპუნება",
  "types": "ტიპები"
};

  const phrases = {
    "choose kindness":"აირჩიე სიკეთე", "change everything":"შეცვალე ყველაფერი", "kindness looks good on everyone":"სიკეთე ყველას უხდება", "what is bullying":"რა არის ბულინგი", "types of bullying":"ბულინგის სახეები", "effects of bullying":"ბულინგის შედეგები", "how can we stop bullying":"როგორ შევაჩეროთ ბულინგი", "how to stop it":"როგორ შევაჩეროთ ის", "get help":"მიიღე დახმარება", "get help support":"დახმარების მიღება და მხარდაჭერა", "words matter":"სიტყვებს მნიშვნელობა აქვს", "you are not alone":"შენ მარტო არ ხარ", "be kind be brave":"იყავი კეთილი და გაბედული", "trusted adult":"სანდო ზრდასრული", "social media":"სოციალური მედია", "power imbalance":"ძალაუფლების უთანასწორობა", "mental wellbeing":"ფსიქიკური კეთილდღეობა", "stand up speak out":"დაიცავი სხვები და ხმა ამოიღე", "make room for everyone":"ყველასთვის იპოვე ადგილი", "you belong here":"შენ აქ შენი ადგილი გაქვს", "kindness club":"სიკეთის კლუბი", "take action":"იმოქმედე", "a practical action plan":"მოქმედების პრაქტიკული გეგმა", "the three key signs":"სამი მთავარი ნიშანი", "four common forms":"ოთხი გავრცელებული ფორმა", "what someone might experience":"რას შეიძლება განიცდიდეს ადამიანი", "words you can use":"სიტყვები, რომელთა გამოყენებაც შეგიძლია", "start the conversation":"დაიწყე საუბარი", "explain what happened":"ახსენი, რა მოხდა", "ask for a plan":"სთხოვე, ერთად შეადგინოთ გეგმა", "save evidence":"შეინახე მტკიცებულება", "follow up":"შემდგომი მოკითხვა", "remember this":"დაიმახსოვრე", "words have power":"სიტყვებს ძალა აქვს", "back home":"მთავარ გვერდზე დაბრუნება", "test your knowledge":"შეამოწმე შენი ცოდნა", "explore the project":"გაეცანი პროექტს", "start with the facts":"დაიწყე ფაქტებით", "learn the basics":"ისწავლე საფუძვლები", "explore the effects":"გაეცანი შედეგებს", "find solutions":"იპოვე გადაჭრის გზები", "educational project":"საგანმანათლებლო პროექტი", "translation on":"თარგმანი ჩართულია", "translation off":"თარგმანი გამორთულია", "give me a kindness idea":"მომეცი სიკეთის იდეა", "your next kind action is waiting":"შენი შემდეგი კეთილი საქციელი გელოდება"
  };

  const sentences = {
    "Choose kindness.":"აირჩიე სიკეთე.",
    "Change everything.":"შეცვალე ყველაფერი.",
    "Bullying is never “just a joke”.":"ბულინგი არასდროს არის „უბრალოდ ხუმრობა“.",
    "Learn what it means, how it affects people, and how small acts of courage can make school and the internet safer for everyone.":"გაიგე, რას ნიშნავს ბულინგი, როგორ მოქმედებს ის ადამიანებზე და როგორ შეუძლია გამბედაობის პატარა გამოვლინებებს სკოლა და ინტერნეტი ყველასთვის უფრო უსაფრთხო გახადოს.",
    "Knowledge helps us notice harmful behaviour and take action before it grows.":"ცოდნა გვეხმარება შევამჩნიოთ მავნე ქცევა და ვიმოქმედოთ მანამ, სანამ პრობლემა გაიზრდება.",
    "Repeated aggressive behaviour that intentionally hurts, scares or excludes someone.":"განმეორებადი აგრესიული ქცევა, რომელიც განზრახ აყენებს ადამიანს ტკივილს, აშინებს ან რიყავს.",
    "Bullying can affect confidence, friendships, learning, sleep and mental wellbeing.":"ბულინგმა შეიძლება გავლენა მოახდინოს თავდაჯერებულობაზე, მეგობრობაზე, სწავლაზე, ძილსა და ფსიქიკურ კეთილდღეობაზე.",
    "Support the person, report the behaviour, save evidence and ask a trusted adult for help.":"მხარი დაუჭირე ადამიანს, შეატყობინე მავნე ქცევის შესახებ, შეინახე მტკიცებულებები და დახმარებისთვის მიმართე სანდო ზრდასრულს.",
    "You don't have to be friends with everyone.":"ყველასთან მეგობრობა არ გევალება.",
    "You do have to treat everyone with respect.":"თუმცა ყველას პატივისცემით უნდა მოექცე.",
    "Move through the project at your own pace.":"პროექტს შენი ტემპით გაეცანი.",
    "Tap any word to see its Georgian meaning.":"სიტყვის ქართული მნიშვნელობის სანახავად მას დააჭირე.",
    "Try one small action today.":"დღეს ერთი პატარა კეთილი საქმე გააკეთე.",
    "Small kindness can create a big ripple.":"პატარა სიკეთეს დიდი დადებითი გავლენის მოხდენა შეუძლია.",
    "Your next kind action is waiting…":"შენი შემდეგი კეთილი საქციელი გელოდება…",
    "Learn with empathy.":"ისწავლე თანაგრძნობით.",
    "Speak with courage.":"ისაუბრე გაბედულად.",
    "Act with kindness.":"იმოქმედე სიკეთით.",
    "Educational project • Made to spread understanding, not judgement.":"საგანმანათლებლო პროექტი • შექმნილია ცნობიერებისა და ურთიერთგაგების გასავრცელებლად და არა განსასჯელად.",
    "Be kind.":"იყავი კეთილი.",
    "Be brave.":"იყავი გაბედული.",
    "Everyone deserves to feel safe.":"ყველა იმსახურებს, თავს უსაფრთხოდ გრძნობდეს.",
    "What is it?":"რა არის ეს?",
    "What can happen?":"რა შეიძლება მოხდეს?",
    "What can we do?":"რა შეგვიძლია გავაკეთოთ?",
    "Bullying, in a nutshell.":"ბულინგი მოკლედ.",
    "Explore every chapter.":"გაეცანი ყველა თავს.",
    "Make someone's day brighter.":"ვიღაცის დღე უფრო გაალამაზე.",
    "What is bullying?":"რა არის ბულინგი?",
    "Different types of bullying.":"ბულინგის სხვადასხვა სახე.",
    "The effects of bullying.":"ბულინგის შედეგები.",
    "You deserve support.":"შენ მხარდაჭერას იმსახურებ.",
    "The kindness quiz.":"სიკეთის შესახებ ტესტი.",
    "How can we stop bullying?":"როგორ შევაჩეროთ ბულინგი?",
    "Bullying is repeated, intentional behaviour that hurts, intimidates or excludes another person.":"ბულინგი არის განმეორებადი და განზრახი ქცევა, რომელიც სხვა ადამიანს ტკივილს აყენებს, აშინებს ან რიყავს.",
    "It can happen in person or online.":"ეს შეიძლება პირისპირ ან ონლაინ მოხდეს.",
    "A disagreement is not always bullying.":"უთანხმოება ყოველთვის ბულინგს არ ნიშნავს.",
    "Look for a pattern of harmful behaviour, an intention to hurt, and a power imbalance that makes it difficult for the targeted person to defend themselves.":"დააკვირდი მავნე ქცევის განმეორებას, ზიანის მიყენების განზრახვასა და ძალაუფლების უთანასწორობას, რის გამოც სამიზნედ ქცეულ ადამიანს თავის დაცვა უჭირს.",
    "It happens more than once, or there is a real risk it will happen again.":"ეს ერთზე მეტჯერ ხდება, ან არსებობს რეალური რისკი, რომ კვლავ განმეორდება.",
    "The behaviour is meant to hurt, frighten, humiliate or exclude.":"ქცევის მიზანია ტკივილის მიყენება, შეშინება, დამცირება ან გარიყვა.",
    "One person or group has more social, physical or digital power.":"ერთ ადამიანს ან ჯგუფს მეტი სოციალური, ფიზიკური ან ციფრული ძალაუფლება აქვს.",
    "Bullying can take many forms.":"ბულინგს მრავალი ფორმა აქვს.",
    "Sometimes it is obvious, and sometimes it is quiet and difficult to notice.":"ზოგჯერ ის აშკარაა, ზოგჯერ კი შეუმჩნეველი და ძნელად ამოსაცნობი.",
    "Recognising the type helps us understand what is happening and choose a safer way to respond.":"ბულინგის ტიპის ამოცნობა გვეხმარება გავიგოთ, რა ხდება და რეაგირების უფრო უსაფრთხო გზა ავირჩიოთ.",
    "Insults, cruel jokes, threats, name-calling or comments meant to humiliate.":"შეურაცხყოფა, სასტიკი ხუმრობები, მუქარა, შეურაცხმყოფელი სახელებით მიმართვა ან დამამცირებელი კომენტარები.",
    "Leaving someone out on purpose, spreading rumours or turning friends against them.":"ვიღაცის განზრახ გარიყვა, ჭორების გავრცელება ან მეგობრების მის წინააღმდეგ განწყობა.",
    "Hitting, pushing, tripping, damaging belongings or unwanted physical contact.":"დარტყმა, ბიძგება, ფეხის დადება, პირადი ნივთების დაზიანება ან არასასურველი ფიზიკური შეხება.",
    "Using messages, social media, games or websites to threaten, embarrass or harass someone.":"შეტყობინებების, სოციალური მედიის, თამაშებისა თუ ვებგვერდების გამოყენება ვინმეს დასამუქრებლად, შესარცხვენად ან შესავიწროებლად.",
    "Bullying can affect a person's feelings, body, relationships and ability to learn.":"ბულინგმა შეიძლება გავლენა მოახდინოს ადამიანის ემოციებზე, სხეულზე, ურთიერთობებსა და სწავლის უნარზე.",
    "Everyone reacts differently, and no one deserves to be treated this way.":"ყველა ადამიანი განსხვავებულად რეაგირებს და არავინ იმსახურებს ასეთ მოპყრობას.",
    "The effects are not always visible.":"ბულინგის შედეგები ყოველთვის თვალსაჩინო არ არის.",
    "A person may laugh or say they are fine while privately feeling worried or unsafe.":"ადამიანი შეიძლება იცინოდეს ან ამბობდეს, რომ კარგად არის, სინამდვილეში კი შეშფოთებას ან დაუცველობას გრძნობდეს.",
    "Fear, sadness, loneliness, shame, anger or lower self-confidence.":"შიში, სევდა, მარტოობა, სირცხვილი, ბრაზი ან დაბალი თვითშეფასება.",
    "Trouble concentrating, missing school, falling behind or avoiding activities.":"კონცენტრაციის გაძნელება, სკოლის გაცდენა, სწავლაში ჩამორჩენა ან აქტივობებისთვის თავის არიდება.",
    "Headaches, stomach aches, sleep problems or feeling tense and exhausted.":"თავის ან მუცლის ტკივილი, ძილის პრობლემები, დაძაბულობისა და გამოფიტულობის შეგრძნება.",
    "Losing trust, withdrawing from friends or finding it harder to feel safe around others.":"ნდობის დაკარგვა, მეგობრებისგან განმარტოება ან სხვების გვერდით უსაფრთხოდ ყოფნის გაძნელება.",
    "Stopping bullying is a shared responsibility.":"ბულინგის შეჩერება ყველას საერთო პასუხისმგებლობაა.",
    "You do not need to solve it alone, and you should never put yourself in danger to intervene.":"პრობლემის მარტო მოგვარება არ გჭირდება და ჩარევისას არასდროს უნდა ჩაიგდო თავი საფრთხეში.",
    "A safe response can be simple: support the person, report what happened, keep useful evidence and involve a trusted adult.":"უსაფრთხო რეაგირება შეიძლება მარტივი იყოს: მხარი დაუჭირე ადამიანს, შეატყობინე მომხდარის შესახებ, შეინახე მნიშვნელოვანი მტკიცებულებები და ჩართე სანდო ზრდასრული.",
    "Listen without blaming.":"მოუსმინე დადანაშაულების გარეშე.",
    "Say: “I’m glad you told me.":"უთხარი: „მიხარია, რომ მითხარი.",
    "I’m glad you told me.":"მიხარია, რომ მითხარი.",
    "You don’t deserve this.”":"შენ ამას არ იმსახურებ.“",
    "You don't deserve this.":"შენ ამას არ იმსახურებ.",
    "Tell a teacher, school counsellor, parent or another trusted adult.":"მომხდარის შესახებ მოუყევი მასწავლებელს, სკოლის კონსულტანტს, მშობელს ან სხვა სანდო ზრდასრულს.",
    "Be clear about what happened.":"ნათლად აუხსენი, რა მოხდა.",
    "For online bullying, keep screenshots, dates and usernames.":"ონლაინ ბულინგის შემთხვევაში შეინახე ეკრანის სურათები, თარიღები და მომხმარებლის სახელები.",
    "Do not forward hurtful content.":"მტკივნეული შინაარსი სხვებს არ გადაუგზავნო.",
    "Check in later.":"მოგვიანებით კვლავ მოიკითხე.",
    "If the first adult does not help, tell another trusted adult.":"თუ პირველი ზრდასრული არ დაგეხმარა, სხვა სანდო ზრდასრულს მიმართე.",
    "If bullying is happening to you or someone you know, telling a trusted person is a strong first step.":"თუ შენ ან შენთვის ნაცნობ ადამიანს ჩაგრავენ, სანდო ადამიანისთვის თქმა მნიშვნელოვანი პირველი ნაბიჯია.",
    "You are not responsible for someone else's choice to hurt you.":"შენ არ ხარ პასუხისმგებელი სხვის არჩევანზე, რომ ტკივილი მოგაყენოს.",
    "Choose an adult who listens and takes you seriously.":"აირჩიე ზრდასრული, რომელიც მოგისმენს და სერიოზულად მოგეკიდება.",
    "This could be a parent, relative, teacher, school counsellor, coach or another safe adult.":"ეს შეიძლება იყოს მშობელი, ნათესავი, მასწავლებელი, სკოლის კონსულტანტი, მწვრთნელი ან სხვა სანდო ზრდასრული.",
    "I need to tell you something that has been happening.":"მინდა რაღაც გითხრა, რაც ბოლო დროს ხდება.",
    "I feel worried and I need your help.":"ვღელავ და შენი დახმარება მჭირდება.",
    "This has happened more than once.":"ეს ერთზე მეტჯერ მოხდა.",
    "It usually happens at school / online / after class.":"ეს ჩვეულებრივ სკოლაში / ონლაინ / გაკვეთილების შემდეგ ხდება.",
    "Can we work out what to do next and how to keep me safe?":"შეგვიძლია ერთად მოვიფიქროთ, რა გავაკეთოთ შემდეგ და როგორ დავიცვათ ჩემი უსაფრთხოება?",
    "Move to a safer place and contact a trusted adult or local emergency services.":"გადადით უფრო უსაფრთხო ადგილას და დაუკავშირდით სანდო ზრდასრულს ან ადგილობრივ გადაუდებელ სამსახურებს.",
    "Do not confront a dangerous person alone.":"საშიშ ადამიანს მარტო არ დაუპირისპირდე.",
    "Being kind does not mean staying silent when something is wrong.":"სიკეთე არ ნიშნავს გაჩუმებას, როცა რაღაც არასწორია.",
    "You can be respectful and still set clear boundaries.":"შეგიძლია პატივისცემით მოიქცე და ამავდროულად მკაფიო საზღვრები დააწესო.",
    "Choose words that help people feel safe, included and respected.":"აირჩიე ისეთი სიტყვები, რომლებიც ადამიანებს უსაფრთხოების, მიღებულობისა და პატივისცემის განცდას უქმნის.",
    "Five quick questions.":"ხუთი მოკლე კითხვა.",
    "No pressure — this is a chance to practise what you know.":"არ ინერვიულო — ეს არის შესაძლებლობა, ივარჯიშო და შეამოწმო, რა იცი.",
    "Which statement best describes bullying?":"რომელი წინადადება აღწერს ყველაზე კარგად ბულინგს?",
    "A one-time disagreement between friends":"მეგობრებს შორის ერთჯერადი უთანხმოება",
    "Repeated behaviour meant to hurt or intimidate":"განმეორებადი ქცევა, რომლის მიზანიც ტკივილის მიყენება ან დაშინებაა",
    "A friendly joke that everyone enjoys":"მეგობრული ხუმრობა, რომლითაც ყველა ერთობა",
    "What is cyberbullying?":"რა არის კიბერბულინგი?",
    "Using digital tools to threaten or humiliate someone":"ციფრული საშუალებების გამოყენება ვინმეს დასამუქრებლად ან დასამცირებლად",
    "Playing an online game with friends":"მეგობრებთან ერთად ონლაინ თამაში",
    "Sending a kind message":"კეთილი შეტყობინების გაგზავნა",
    "What should you do if someone tells you they are being bullied?":"რა უნდა გააკეთო, თუ ვინმე გეტყვის, რომ მას ჩაგრავენ?",
    "Tell them it is their fault":"უთხარი, რომ ეს მისი ბრალია",
    "Ignore them":"უგულებელყავი ის",
    "Listen, support them and help them reach a trusted adult":"მოუსმინე, მხარი დაუჭირე და დაეხმარე სანდო ზრდასრულთან დაკავშირებაში",
    "Which can be an effect of bullying?":"რომელი შეიძლება იყოს ბულინგის შედეგი?",
    "Only a temporary bad mood":"მხოლოდ დროებითი ცუდი განწყობა",
    "Stress, loneliness or difficulty concentrating":"სტრესი, მარტოობა ან კონცენტრაციის გაძნელება",
    "Nothing at all":"საერთოდ არაფერი",
    "What is a safe way to respond to online bullying?":"როგორია ონლაინ ბულინგზე უსაფრთხო რეაგირება?",
    "Share the hurtful post widely":"მტკივნეული პოსტის ფართოდ გავრცელება",
    "Save evidence, block or report the account and tell a trusted adult":"მტკიცებულებების შენახვა, ანგარიშის დაბლოკვა ან გასაჩივრება და სანდო ზრდასრულისთვის თქმა",
    "Send threats back":"საპასუხოდ მუქარის გაგზავნა",
    "Bullying usually involves repeated harmful behaviour and a power imbalance.":"ბულინგი, ჩვეულებრივ, მოიცავს განმეორებად მავნე ქცევასა და ძალაუფლების უთანასწორობას.",
    "Cyberbullying happens through digital spaces such as messages, social media or games.":"კიბერბულინგი ციფრულ სივრცეში ხდება, მაგალითად შეტყობინებებში, სოციალურ მედიასა თუ თამაშებში.",
    "Listening without blame and involving a trusted adult are helpful steps.":"დადანაშაულების გარეშე მოსმენა და სანდო ზრდასრულის ჩართვა სასარგებლო ნაბიჯებია.",
    "Bullying can affect emotions, health, friendships and learning.":"ბულინგმა შეიძლება გავლენა მოახდინოს ემოციებზე, ჯანმრთელობაზე, მეგობრობებსა და სწავლაზე.",
    "Keep evidence, use platform reporting tools and ask a trusted adult for help.":"შეინახე მტკიცებულებები, გამოიყენე პლატფორმის შეტყობინების ფუნქცია და დახმარებისთვის მიმართე სანდო ზრდასრულს.",
    "You scored 5 out of 5!":"შენ მიიღე 5 ქულა 5-დან!",
    "Kindness champion!":"სიკეთის ჩემპიონი!",
    "Great effort!":"შესანიშნავი მცდელობა!",
    "Keep learning!":"განაგრძე სწავლა!",
    "You understand the key ideas. Keep spreading kindness.":"შენ მთავარი იდეები გაიგე. განაგრძე სიკეთის გავრცელება.",
    "Review the chapters and try again. Learning how to help is already a positive step.":"გადახედე თავებს და კიდევ სცადე. დახმარების გზების სწავლა უკვე კარგი ნაბიჯია.",
    "Invite someone who is alone to join your group.":"მოიწვიე მარტოდ მყოფი ადამიანი, რომ შენს ჯგუფს შემოუერთდეს.",
    "Give a genuine compliment to someone.":"ვინმეს გულწრფელი კომპლიმენტი უთხარი.",
    "Thank a person who helped you today.":"დღეს მადლობა გადაუხადე ადამიანს, რომელიც დაგეხმარა.",
    "Listen carefully when a friend wants to talk.":"ყურადღებით მოუსმინე მეგობარს, როცა საუბარი სურს.",
    "Stand beside someone who is being left out.":"გვერდით დაუდექი ადამიანს, რომელსაც გარიყავენ.",
    "Send a kind message to someone you appreciate.":"კეთილი შეტყობინება გაუგზავნე ადამიანს, რომელსაც აფასებ.",
    "Tip: tap any word or sentence. Alt-click a link to translate it.":"რჩევა: ნებისმიერ სიტყვას ან წინადადებას დააჭირე. ბმულის სათარგმნად გამოიყენე Alt + დაწკაპუნება.",
    "Understand the definition and key signs.":"გაიგე ბულინგის განმარტება და მისი მთავარი ნიშნები.",
    "Types of bullying":"ბულინგის სახეები",
    "Recognise different ways bullying happens.":"ამოიცანი, რა განსხვავებული გზებით ვლინდება ბულინგი.",
    "Effects of bullying":"ბულინგის შედეგები",
    "See how it can affect a person's life.":"ნახე, როგორ შეიძლება ბულინგმა ადამიანის ცხოვრებაზე იმოქმედოს.",
    "How to stop it":"როგორ შევაჩეროთ ის",
    "Practical steps that make a difference.":"პრაქტიკული ნაბიჯები, რომლებსაც რეალური ცვლილების მოტანა შეუძლია.",
    "Get help & support":"მიიღე დახმარება და მხარდაჭერა",
    "Find words to ask for help safely.":"ისწავლე, როგორ ითხოვო დახმარება უსაფრთხოდ.",
    "Kindness quiz":"სიკეთის ტესტი",
    "Check what you have learned.":"შეამოწმე, რა ისწავლე.",
    "What someone might experience":"რას შეიძლება განიცდიდეს ადამიანი",
    "EMOTIONAL":"ემოციური",
    "SCHOOL & LEARNING":"სკოლა და სწავლა",
    "PHYSICAL":"ფიზიკური",
    "SOCIAL":"სოციალური",
    "Remember this":"დაიმახსოვრე ეს",
    "Words have power.":"სიტყვებს ძალა აქვს.",
    "Words you can use":"სიტყვები, რომელთა გამოყენებაც შეგიძლია",
    "START THE CONVERSATION":"დაიწყე საუბარი",
    "EXPLAIN WHAT HAPPENED":"ახსენი, რა მოხდა",
    "ASK FOR A PLAN":"სთხოვე, ერთად შეადგინოთ გეგმა",
    "IF SOMEONE IS IN IMMEDIATE DANGER":"თუ ვინმე დაუყოვნებელი საფრთხის წინაშეა",
    "A practical action plan":"პრაქტიკული სამოქმედო გეგმა",
    "SUPPORT":"მხარდაჭერა",
    "REPORT":"შეტყობინება",
    "SAVE EVIDENCE":"მტკიცებულებების შენახვა",
    "FOLLOW UP":"შემდგომი მოკითხვა",
    "Four common forms":"ოთხი გავრცელებული ფორმა",
    "VERBAL":"სიტყვიერი",
    "CYBERBULLYING":"კიბერბულინგი",
    "The three key signs":"სამი მთავარი ნიშანი",
    "REPEATED":"განმეორებადი",
    "INTENTIONAL HARM":"განზრახი ზიანის მიყენება",
    "POWER IMBALANCE":"ძალაუფლების უთანასწორობა"
  };

  const exact = new Map();
  for (const [en, ka] of Object.entries(sentences)) exact.set(normalize(en), ka);
  for (const [en, ka] of Object.entries(phrases)) exact.set(normalize(en), ka);

  function translateWord(word) {
    const key = normalize(word).replace(/^[^a-z]+|[^a-z'-]+$/gi, "");
    if (!key) return "—";
    if (exact.has(normalize(key))) return exact.get(normalize(key));
    if (Object.prototype.hasOwnProperty.call(words, key)) return words[key] || "";
    return "ამ სიტყვის თარგმანი ლექსიკონში ჯერ დამატებული არ არის.";
  }

  function translateText(value) {
    const lookupText = String(value).replace(/^[A-D]\.\s*/i, "").trim();
    const scoreMatch = lookupText.match(/^You scored (\d+) out of (\d+)!?$/i);
    if (scoreMatch) return `შენ მიიღე ${scoreMatch[1]} ქულა ${scoreMatch[2]}-დან!`;
    const key = normalize(lookupText);
    if (!key) return "—";
    if (exact.has(key)) return exact.get(key);
    const single = key.replace(/[.!?]+$/g, "");
    if (Object.prototype.hasOwnProperty.call(words, single)) return words[single] || "";
    const tokens = lookupText.match(/[A-Za-z]+(?:[’'-][A-Za-z]+)*/g) || [];
    if (!tokens.length) return "ქართული თარგმანი ვერ მოიძებნა.";
    const translated = tokens.map((token) => {
      const k = normalize(token);
      return Object.prototype.hasOwnProperty.call(words, k) ? (words[k] || token) : `[${token}]`;
    });
    if (translated.every((part) => /^\[[^\]]+\]$/.test(part))) return "ამ ფრაზის სრული თარგმანი ლექსიკონში ჯერ დამატებული არ არის.";
    return translated.join(" ") + "  (სიტყვასიტყვითი, მიახლოებითი თარგმანი)";
  }

  function translateSentence(value) {
    const scoreMatch = String(value).trim().match(/^You scored (\d+) out of (\d+)!?$/i);
    if (scoreMatch) return `შენ მიიღე ${scoreMatch[1]} ქულა ${scoreMatch[2]}-დან!`;
    const key = normalize(value);
    if (!key) return "—";
    if (exact.has(key)) return exact.get(key);
    return translateText(value);
  }

  function getCaret(x, y) {
    if (document.caretPositionFromPoint) {
      const point = document.caretPositionFromPoint(x, y);
      if (point) return { node: point.offsetNode, offset: point.offset };
    }
    if (document.caretRangeFromPoint) {
      const range = document.caretRangeFromPoint(x, y);
      if (range) return { node: range.startContainer, offset: range.startOffset };
    }
    return null;
  }

  function findWordAtPoint(x, y) {
    const caret = getCaret(x, y);
    if (!caret || caret.node.nodeType !== Node.TEXT_NODE) return null;
    const text = caret.node.textContent || "";
    const regex = /[A-Za-z]+(?:[’'-][A-Za-z]+)*/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
      const start = match.index;
      const end = start + match[0].length;
      if (caret.offset >= start && caret.offset <= end) {
        return { word: match[0], node: caret.node, offset: caret.offset };
      }
    }
    return null;
  }

  function sentenceAtPoint(block, node, offset) {
    if (!block || !node || !block.contains(node)) return block?.textContent?.trim() || "";
    const full = (block.textContent || "").replace(/\s+/g, " ").trim();
    if (!full) return "";
    try {
      const range = document.createRange();
      range.selectNodeContents(block);
      range.setEnd(node, offset);
      const before = range.toString().replace(/\s+/g, " ");
      const index = Math.min(before.length, full.length);
      const boundary = /[.!?](?:["'”’)]*)(?:\s+|$)/g;
      let start = 0;
      let match;
      while ((match = boundary.exec(full)) !== null) {
        const edge = match.index + match[0].length;
        if (edge <= index) start = edge;
        else break;
      }
      boundary.lastIndex = index;
      const next = boundary.exec(full);
      const end = next ? next.index + 1 : full.length;
      return full.slice(start, end).trim() || full;
    } catch (_) {
      return full;
    }
  }

  function initTranslator() {
    const panel = document.getElementById("translationPanel");
    const selectedText = document.getElementById("selectedText");
    const translatedText = document.getElementById("translatedText");
    const sentenceText = document.getElementById("sentenceText");
    const sentenceTranslation = document.getElementById("sentenceTranslation");
    const toggle = document.getElementById("howToTranslate");
    if (!panel || !selectedText || !translatedText || !sentenceText || !sentenceTranslation) return;

    let enabled = true;

    const setMode = (value) => {
      enabled = Boolean(value);
      document.body.classList.toggle("translation-active", enabled);
      toggle?.classList.toggle("is-on", enabled);
      if (toggle) {
        toggle.textContent = enabled ? "🌐 Translation ON" : "🌐 Translation OFF";
        toggle.setAttribute("aria-pressed", String(enabled));
        toggle.setAttribute("aria-label", enabled ? "Turn translation mode off" : "Turn translation mode on");
      }
      if (!enabled) panel.classList.remove("open");
    };

    const show = (wordOrPhrase, sentence) => {
      const selection = String(wordOrPhrase || "").trim();
      const fullSentence = String(sentence || "").trim();
      panel.classList.add("open");
      selectedText.textContent = selection || "—";
      translatedText.textContent = selection ? translateText(selection) : "სიტყვა ან ფრაზა ვერ ამოვიცანი.";
      sentenceText.textContent = fullSentence || "—";
      sentenceTranslation.textContent = fullSentence ? translateSentence(fullSentence) : "";
    };

    toggle?.addEventListener("click", () => setMode(!enabled));
    document.getElementById("closePanel")?.addEventListener("click", () => panel.classList.remove("open"));
    document.querySelector(".menu-toggle")?.addEventListener("click", () => document.querySelector(".nav")?.classList.toggle("open"));

    // Capture clicks on readable text. Links keep their normal navigation and buttons keep their actions.
    document.addEventListener("click", (event) => {
      if (!enabled) return;
      if (event.target.closest(".translation-panel, #howToTranslate, .menu-toggle")) return;
      const anchor = event.target.closest("a");
      if (anchor && !event.altKey) return;
      if (anchor && event.altKey) event.preventDefault();
      const picked = findWordAtPoint(event.clientX, event.clientY);
      const selection = window.getSelection?.()?.toString().trim();
      if (selection) {
        show(selection, selection);
        return;
      }
      if (picked) {
        const parent = picked.node.parentElement;
        const block = parent?.closest("p,h1,h2,h3,h4,h5,li,blockquote,small,strong,b,label,button,a,.chapter,.fact-card,.info-card,.quiz-option,.side-note,.callout,.reflection") || parent;
        show(picked.word, sentenceAtPoint(block, picked.node, picked.offset));
        return;
      }
      // Touch fallback for browsers without caret-position support.
      const block = event.target.closest("p,h1,h2,h3,h4,h5,li,blockquote,small,strong,b,label,button,a,.chapter,.fact-card,.info-card,.quiz-option,.side-note,.callout,.reflection");
      if (block) {
        const text = block.textContent.trim();
        const first = text.match(/[A-Za-z]+(?:[’'-][A-Za-z]+)*/);
        if (first) show(first[0], text);
      }
    }, true);

    setMode(true);
  }

  function initKindnessIdea() {
    const button = document.getElementById("kindnessBtn");
    const output = document.getElementById("kindnessIdea");
    if (!button || !output) return;
    const ideas = [
      "Invite someone who is alone to join your group.",
      "Give a genuine compliment to someone.",
      "Thank a person who helped you today.",
      "Listen carefully when a friend wants to talk.",
      "Stand beside someone who is being left out.",
      "Send a kind message to someone you appreciate."
    ];
    button.addEventListener("click", () => {
      output.textContent = "✨ " + ideas[Math.floor(Math.random() * ideas.length)];
    });
  }

  function initQuiz() {
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const nextButton = document.getElementById("nextQuestion");
    if (!questionEl || !optionsEl || !nextButton) return;

    const quiz = [
      { q:"Which statement best describes bullying?", a:["A one-time disagreement between friends","Repeated behaviour meant to hurt or intimidate","A friendly joke that everyone enjoys"], correct:1, feedback:"Bullying usually involves repeated harmful behaviour and a power imbalance." },
      { q:"What is cyberbullying?", a:["Using digital tools to threaten or humiliate someone","Playing an online game with friends","Sending a kind message"], correct:0, feedback:"Cyberbullying happens through digital spaces such as messages, social media or games." },
      { q:"What should you do if someone tells you they are being bullied?", a:["Tell them it is their fault","Ignore them","Listen, support them and help them reach a trusted adult"], correct:2, feedback:"Listening without blame and involving a trusted adult are helpful steps." },
      { q:"Which can be an effect of bullying?", a:["Only a temporary bad mood","Stress, loneliness or difficulty concentrating","Nothing at all"], correct:1, feedback:"Bullying can affect emotions, health, friendships and learning." },
      { q:"What is a safe way to respond to online bullying?", a:["Share the hurtful post widely","Save evidence, block or report the account and tell a trusted adult","Send threats back"], correct:1, feedback:"Keep evidence, use platform reporting tools and ask a trusted adult for help." }
    ];

    let index = 0;
    let score = 0;
    let answered = false;
    let completed = false;
    const progressLabel = document.getElementById("quizProgress");
    const progressBar = document.getElementById("progressBar");
    const feedbackEl = document.getElementById("feedback");

    function render() {
      answered = false;
      completed = false;
      const item = quiz[index];
      if (progressLabel) progressLabel.textContent = `QUESTION ${index + 1} OF ${quiz.length}`;
      if (progressBar) progressBar.style.width = `${((index + 1) / quiz.length) * 100}%`;
      questionEl.textContent = item.q;
      optionsEl.replaceChildren();
      if (feedbackEl) feedbackEl.textContent = "";
      item.a.forEach((answer, i) => {
        const option = document.createElement("button");
        option.type = "button";
        option.className = "quiz-option";
        option.textContent = `${String.fromCharCode(65 + i)}. ${answer}`;
        option.addEventListener("click", () => choose(i, option));
        optionsEl.appendChild(option);
      });
      nextButton.disabled = true;
      nextButton.textContent = index === quiz.length - 1 ? "See my result →" : "Next question →";
    }

    function choose(choice, chosenButton) {
      if (answered) return;
      answered = true;
      const item = quiz[index];
      [...optionsEl.children].forEach((button, i) => {
        button.disabled = true;
        if (i === item.correct) button.classList.add("correct");
      });
      if (choice === item.correct) {
        score += 1;
        if (feedbackEl) feedbackEl.textContent = "✓ Correct! " + item.feedback;
      } else {
        chosenButton.classList.add("wrong");
        if (feedbackEl) feedbackEl.textContent = "Not quite. " + item.feedback;
      }
      nextButton.disabled = false;
    }

    function showResult() {
      questionEl.textContent = `You scored ${score} out of ${quiz.length}!`;
      optionsEl.innerHTML = "";
      const card = document.createElement("div");
      card.className = "reflection";
      const icon = document.createElement("span");
      icon.className = "reflection-icon";
      icon.textContent = "🏆";
      const content = document.createElement("div");
      const title = document.createElement("b");
      title.textContent = score >= 4 ? "Kindness champion!" : score >= 3 ? "Great effort!" : "Keep learning!";
      const text = document.createElement("p");
      text.textContent = score >= 4
        ? "You understand the key ideas. Keep spreading kindness."
        : "Review the chapters and try again. Learning how to help is already a positive step.";
      content.append(title, text);
      card.append(icon, content);
      optionsEl.appendChild(card);
      if (progressLabel) progressLabel.textContent = "QUIZ COMPLETE";
      if (feedbackEl) feedbackEl.textContent = "";
      nextButton.textContent = "Try again ↻";
      nextButton.disabled = false;
      completed = true;
    }

    nextButton.addEventListener("click", () => {
      if (completed) {
        index = 0;
        score = 0;
        render();
        return;
      }
      if (!answered) return;
      if (index < quiz.length - 1) {
        index += 1;
        render();
      } else {
        showResult();
      }
    });

    render();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTranslator();
    initKindnessIdea();
    initQuiz();
  });
})();
