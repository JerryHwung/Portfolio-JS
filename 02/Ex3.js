//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let love='Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern=/love/gi
console.log(love.match(pattern).length)
//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let bec='You cannot end a sentence with because because because is a conjunction'
let pattern2=/because/gi
console.log(bec.match(pattern2).length)
//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(sentence.replace(/[^a-zA-Z0-9 ]/g, ""))
//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let income='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let num=income.match(/\d+/g)
let a=+num[0]*12
let b=+num[1]
let c=+num[2]*12
console.log(`His annual income is ${ a+ b + c}`)