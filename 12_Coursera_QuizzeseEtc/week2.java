// 1- Not equal
// 2 - 
Which of the following lines of code correctly assign a String containing the text "My String" to the variable 'text'?

(Select all correct options.)    1-  String text = "My ";
text.concat("String");           2- String s1 = "My String";
String text = s1;     3-              String text = "My ";
String s2 = "String";
text = text + s2;      4 - String text = new String("My ");
text + new String("String");        

Therefore, the correct options are:

2: String s1 = "My String"; String text = s1;
3: String text = "My "; String s2 = "String"; text = text + s2;


Question 3
What best describes the functionality of the following method?    public int mystery(String s)
{
    char[] letters = s.toCharArray();
    int x = 0;
    for (int i = 0; i < letters.length; i++) {
        if (letters[i] == ' ') {
           letters[i] = '_';
           x++;
        }
    }
    return x;
}         It counts the number of spaces in a given string, and returns the count.  It does not change the original String.


It counts the number of spaces in a given String and returns the count.  It also replaces all spaces in the given String with underscore characters ('_').


It counts the number of total characters in the String and returns the count. It also replaces all spaces in the given String with underscore characters ('_'). 

Given the options, the best description is:

It counts the number of spaces in a given String and returns the count. It also replaces all spaces in the given String with underscore characters ('_').

4 - Assume you have a String variable s that stores the text      "%one%%two%%%three%%%%"    Which of the following calls to s.split will return the String array:      ["%", "%%", "%%%", "%%%%"]       (Select all correct options.)   1-      s.split("%+");              2-  s.split("[a-z]+");     3- s.split("one|two|three");       4 - s.split("[one,two,three]");     



Therefore, the correct options are:

Option 2: s.split("[a-z]+")
Option 3: s.split("one|two|three")

5  -Assume that you have a Document object stored in the variable d, whose whole text string is    "one (1), two (2), three (3)"      Which of the following calls to getTokens will return the list of Strings given here:        ["one", "(1)", "two", "(2)", "three", "(3)"]    Pay attention to the spaces in the original string, and also notice the commas are not preserved in the strings in the list.

(Select all correct options.)              1 - d.getTokens("[^, ]+");     2 - d.getTokens("[^,]+");    3- d.getTokens("[a-z()0-9]+");     4 -d.getTokens("[a-z]+|[()0-9]+");

Therefore, the correct options are:

Option 1: d.getTokens("[^, ]+")
Option 4: d.getTokens("[a-z]+|[()0-9]+")

6 - Does a higher or lower Flesch Index Score indicate simpler text? 


The higher the Flesch Index Score, the simpler the text and the easier it is to read.


The lower the Flesch Index Score, the simpler the text and the easier it is to read.

Therefore, the correct statement is:

The higher the Flesch Index Score, the simpler the text and the easier it is to read.