# Roman to Integer

### `roman_to_int` is a JavaScript function that returns an integer for a given Roman numeral.

### it will take as an argument a Roman numeral between 1 and 3999.

### Symbols and Value correspondence
```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```
### Examples
```
Example 1:
    Input: s = "III"
    Output: 3

Example 2:
    Input: s = "IV"
    Output: 4

Example 3:
    Input: s = "IX"
    Output: 9

Example 4:
    Input: s = "LVIII"
    Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 5:
    Input: s = "MCMXCIV"
    Output: 1994
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4
```
### Contraints:
```
- 1 <= s.length <= 15
- s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
- It is guaranteed that s is a valid roman numeral in the range [1, 3999].
```
