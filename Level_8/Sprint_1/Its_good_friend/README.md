# Methods of String

This time we learn two methods to split or merge string:split() and concat(). also learn a good friend of the split() method: join(). It is an Array method. Their usage:

**stringObject.split(separator,howmany)** split() can divided a string into several parts by a specified separator. The result is an array of strings.

**_Exemple_**
var str="My name is John";
var words=str.split(" ");
console.log(words);
//output:
[ 'My', 'name', 'is', 'John' ]

var str="My name is John";
var words1=str.split(" ",3);
console.log("words1:",words1);
var words2=str.split(" ",5);
console.log("words2:",words2);

//output:
words1:[ 'My', 'name', 'is' ]
words2:[ 'My', 'name', 'is', 'John' ]

**stringObject.concat(string1,string2,...,stringx)** concat() can merge many strings into a string like this:

**_Exemple_**
var str="My".concat("name","is","John");
console.log(str);

//output:
MynameisJohn
In fact, we rarely see the actual use of concat(), because we have a more simple way. that is using the + operator:

var str="My"+"name"+"is"+"John";
console.log(str);

//output:
MynameisJohn
But even using the + operator, the four words are not the perfect combination of a sentence, because there is no space separator. What should we do? Using join() is the best choice.

**arrayObject.join(separator)**
join() is the reverse operation of the split() method. We can see a lot of code in the actual use:

**_EXEMPLE_**
var str="My name is John";
var words=str.split(" ");
console.log("use split():",words);
var s=words.join(" ");
console.log("use join():",s);
console.log("use split() and join():",str.split(" ").join(" "))
//output:
use split():[ 'My', 'name', 'is', 'John' ]
use join():My name is John
use split() and join():My name is John
Ok, lesson is over. let's us do some task.

# TASK

Implement a function which accepts 2 arguments: string and separator.

The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

For example:

splitAndMerge("My name is John", " ") == "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-") == "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".") == "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",") == "H,e,l,l,o W,o,r,l,d,!"
