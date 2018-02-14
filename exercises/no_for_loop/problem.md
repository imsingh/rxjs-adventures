# Working with Arrays

The Array is Javascript's only collection type. Arrays are everywhere. We're going to add the five functions to the Array type, and in the process make it much more powerful and useful. As a matter of fact, Array already has the map, filter, and reduce functions! However we're going to reimplement these functions as a learning exercise.

This section will follow a pattern. First we'll solve problems the way you probably learned in school, or on your own by reading other people's code. In other words, we'll transform collections into new collections using loops and statements. Then we'll implement one of the five functions, and then use it to solve the same problem again without the loop. Once we've learned the five functions, you'll learn how to combine them to solve complex problems with very little code. 


# For Loop Example
```javascript
var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"],
    counter;

for(counter = 0; counter < names.length; counter++) {
    console.log(names[counter]);
}
```

# Exercise
Create a following array and ```forEach``` over array and ```console.log``` all the names in the array. Hint: You can copy the array directly from console.
```javascript
var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
```

		
