const treatWords = ['chicken', 'chimken', 'kinder eggs', 'souls', 'treats']
const greetingWords = ['hello oni', 'hey oni', 'hai oni', 'hi oni', 'heyo oni', 'haiyo oni', 'hola oni', 'ohayo oni', 'hewwo oni', 'greetings oni']
const starterEncouragements = [
  "What do you call a cold dog? *A Chili Dog!*",
  "What did the skeleton say to the puppy? *Bone-appetite!*",
  "What do you call a frozen dog? *A pupsicle.*",
  "What is a dog's favorite coffee drink? *A Puppuccino.*",
  "What do my dog and my phone have in common? *They both have collar I.D.*",
  "What kind of dog does Dracula have? *A bloodhound!*",
  "Why did the dog cross the road? *To get to the barking lot!*",
  "How did the little Scottish dog feel when he saw a monster? *Terrier-fied!*",
  "What do you call a dog magician? *A labracadabrador.*",
  "What do dogs do after they finish obedience school? *They get their masters.*"
]
var inMSG = prompt("word give")
var check = inMSG.includes(treatWords)
if (check = true){
    console.log(("I heard mention of " + inMSG + "?? I want " + inMSG + "! GIVE!"))
}
